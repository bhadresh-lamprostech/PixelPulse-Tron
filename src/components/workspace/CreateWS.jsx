import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/workspace/CreateWS.css";
import { useAccount } from "wagmi";
import { Web3Storage } from "web3.storage";
import { useNavigate } from "react-router-dom";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU",
});

function CreateWS() {
  const navigate = useNavigate();
  const [logoPreview, setLogoPreview] = useState(null);
  const [imageCid, setImageCid] = useState();
  const [btnloading, setbtnloading] = useState(false);
  const [btndisable, setbtndisable] = useState(false);
  const [formData, setFormData] = useState({
    workspace: "",
    logo: null,
    additionalInputs: [""],
  });
  const [creatorData, setCreatorData] = useState({
    id: "",
    creatorName: "",
    creatorAddress: "",
  });

  const { address } = useAccount();
  const walletAddress = address;

  useEffect(() => {
    const fetchCreatorData = async () => {
      try {
        const response = await axios.get(
          ` https://deloom.vercel.app/readdata?address=${walletAddress}`
        );

        const data = response.data[0];
        console.log(data);
        setCreatorData({
          id: data.id,
          creatorName: data.username,
          creatorAddress: data.address,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreatorData();
  }, []);

  useEffect(() => {
    if (logoPreview) {
      logoUpload();
    }
  }, [logoPreview]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({
        ...formData,
        logo: file,
      });
    }
  };

  const handleInputChange = (e, index) => {
    if (index === undefined) {
      // Handling workspace input change
      setFormData({
        ...formData,
        workspace: e.target.value,
      });
    } else {
      // Handling additional inputs change
      const updatedInputs = [...formData.additionalInputs];
      updatedInputs[index] = e.target.value;
      setFormData({
        ...formData,
        additionalInputs: updatedInputs,
      });
    }
  };

  const logoUpload = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    const rootCid = await client.put(fileInput.files, {
      name: "logo_image",
      maxRetries: 3,
    });

    const res = await client.get(rootCid);
    const files = await res.files(logoPreview);
    for (const file of files) {
      setImageCid(`${file.cid}`);
      console.log(file.cid);
    }
  };

  const addInput = () => {
    if (formData.additionalInputs.length < 5) {
      setFormData({
        ...formData,
        additionalInputs: [...formData.additionalInputs, ""],
      });
    }
  };

  const removeInput = (index) => {
    const updatedInputs = [...formData.additionalInputs];
    updatedInputs.splice(index, 1);
    setFormData({
      ...formData,
      additionalInputs: updatedInputs,
    });
  };

  const handleSubmit = async (e) => {
    console.log("create button clicked");
    e.preventDefault();
    setbtndisable(true);
    setbtnloading(true);
    const formDataToSend = {
      id: creatorData.id,
      name: formData.workspace,
      workspacelogo: imageCid,
      creatorname: creatorData.creatorName,
      creatoraddress: creatorData.creatorAddress,
    };

    formData.additionalInputs.forEach((member, index) => {
      formDataToSend[`member${index + 1}`] = member;
    });

    // Add additional members if needed
    const remainingMembers = Math.max(0, 5 - formData.additionalInputs.length);
    for (let i = 0; i < remainingMembers; i++) {
      formDataToSend[`member${formData.additionalInputs.length + i + 1}`] = "0";
    }

    console.log("Form Data:", formDataToSend); // Log the form data

    try {
      const response = await axios.post(
        "https://deloom.vercel.app/insertworkspacedata",
        formDataToSend
      );
      console.log(response.data);
      navigate("/workspace-page");
      setbtndisable(false);
      setbtnloading(false);
    } catch (error) {
      console.log(error);
      setbtndisable(false);
      setbtnloading(false);
    }
  };

  return (
    <>
      <div className="createWorkspaceMainDivClass ">
        {/* <div className="createWorkspaceMainDivClass bg-white text-black"> */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-[#ff83a5]">
            CREATE YOUR WORKSPACE
          </h2>
          <p className="text-gray-300 mb-4">
            Please provide the following information to create your own
            workspace.
          </p>
        </div>

        <div className="">
          <form className="p-5 w-full max-w-lg rounded-lg shadow-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-username"
                >
                  Workspace Name:
                </label>
                <input
                  className=" appearance-none block w-full bg-[#480c1f] text-[#ffffff] rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none"
                  // className="regFormInputsMain appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-username"
                  type="text"
                  placeholder="John's Workspace"
                  name="workspace"
                  value={formData.workspace}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-logo"
                >
                  Upload Logo:
                </label>
                <input
                  className="appearance-none block w-full bg-[#480c1f] text-white  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                  // className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-logo"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleLogoChange}
                />
                {/* <p className="text-gray-300 text-xs italic">
                  Accepted formats: JPEG, PNG
                </p> */}
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-32 h-32 mt-4 rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="createWorkspaceFormMainClass flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Enter Wallet Addresses of Users you want to give access to
                  your workspace:
                </label>
                {formData.additionalInputs.map((input, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      className="appearance-none block w-full bg-[#480c1f] text-white rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                      // className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder={`Address ${index + 1}`}
                      value={input}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className="ml-2 text-red-500 focus:outline-none"
                        onClick={() => removeInput(index)}
                      >
                        &#8722;
                      </button>
                    )}
                  </div>
                ))}
                {formData.additionalInputs.length < 5 && (
                  <button
                    className="ml-2 text-[#e56290] focus:outline-none"
                    type="button"
                    onClick={addInput}
                  >
                    &#43; Add User
                  </button>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="createWorkspaceBtnClass inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 w-25 h-8 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
              disabled={btndisable}
            >
              {btnloading ? (
                <svg
                  width="48"
                  height="15"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="4">
                      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              ) : (
                // <>Creating...</>
                <>Create</>
              )}
            </button>

            {/* <button
              type="submit"
              className="createWorkspaceBtnClass inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 w-[150px] active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
              disabled={btndisable}
            >
              {btnloading ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              ) : (
                // <>Creating...</>
                <>Create</>
              )}
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateWS;
