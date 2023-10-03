import React, { useState, useEffect } from "react";
import { Web3Storage } from "web3.storage";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import userStreamABI from "../artifacts/userStream.json";
import "../styles/userRegistration/UserRegistration.css"; // Add this line for CSS import
import firstNameIcon from "../assets/images/firstNameIcon.png";
import usernameIcon from "/src/assets/images/usernameIcon.png";
import emailIcon from "/src/assets/images/emailIcon.png";
import photoIcon from "/src/assets/images/photoIcon.png";
import registrationPageImage from "/src/assets/images/Ragistration page image.png";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU", // Replace with your Web3.Storage token
});

function UserRegistration() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [imageCid, setImageCid] = useState();
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    logo: null,
  });
  const [isLogoUploading, setIsLogoUploading] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [btndisable, setbtndisable] = useState(false);
  const { address } = useAccount();
  const walletAddress = address;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    userStreamABI.address, // Replace with your contract address
    userStreamABI.abi, // Replace with your contract ABI
    signer
  );

  const navigate = useNavigate();

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
    logoUpload();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const logoUpload = async () => {
    setIsLogoUploading(true);

    const fileInput = document.querySelector('input[type="file"]');
    const rootCid = await client.put(fileInput.files, {
      name: "logo_image",
      maxRetries: 3,
    });

    const res = await client.get(rootCid);
    const files = await res.files(logoPreview);
    for (const file of files) {
      setImageCid(`${file.cid}`);
    }

    setIsLogoUploading(false);
  };

  const handleSubmit = async (e) => {
    console.log("Submit button clicked");
    e.preventDefault();
    setbtndisable(true);
    setIsFormSubmitting(true);

    try {
      // Use the contract to register the user
      const tx = await contract.registerUser(
        formData.username,
        formData.description,
        imageCid // Assuming imageCid is the profile image CID
      );
      await tx.wait();
      console.log("User registration successful");
      // You can add additional logic here after a successful registration.
    } catch (error) {
      console.error("User registration error:", error);
      // Handle error as needed.
    }
  };

  return (
    <>
      <div className="UserRegistrationMainPageClass">
        <div className="ImageAndFormMainDivClass">
          <div className="ImageDivMainClass">
            <img className="ImageTagMain" src={registrationPageImage} alt="" />
            <b className="registrationPageTitleOnImg absolute text-white ">
              Registration <p>Page</p>
            </b>
          </div>
          <div className="FormDivMainClass">
            <form className="formContentsReg">
              <div className="form-row"></div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={usernameIcon}
                    alt="Username"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={emailIcon}
                    alt="Email"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="description"
                  id="description"
                  name="description"
                  placeholder="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={photoIcon}
                    alt="Upload Photo"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  required
                />
                {isLogoUploading && (
                  <div className="text-white">Loading logo...</div>
                )}
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-20 h-20 ml-2 object-contain"
                  />
                )}
              </div>
              <button
                className="RegFormSubmitBtn"
                type="submit"
                onClick={handleSubmit}
                disabled={btndisable}
              >
                {isFormSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
