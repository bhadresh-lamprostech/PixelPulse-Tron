import React, { useState } from "react";
import { Web3Storage } from "web3.storage";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU",
});

const RegForm = () => {
  const [logoPreview, setLogoPreview] = useState(null);
  const [imageCid, setImageCid] = useState();
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 9000) + 1000,

    username: "",
    email: "",
    logo: null,
  });
  const [isLogoUploading, setIsLogoUploading] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    // Remove the code related to axios POST request

    setIsFormSubmitting(false);
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">
          One-Time Registration
        </h2>
        <p className="text-gray-300 mb-6">
          Please provide the following information to complete your one-time
          registration.
        </p>
        {/* <div className="flex flex-wrap -mx-3 mb-6">
      
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div> */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Username */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-username"
            >
              Username*
            </label>
            <input
              className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-username"
              type="text"
              placeholder="johndoe"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Email */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email*
            </label>
            <input
              className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="example@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Logo Upload */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-logo"
            >
              Upload Logo*
            </label>
            <input
              className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-logo"
              type="file"
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
                className="w-32 h-32 object-contain"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover.bg-blue-700 text-white font.bold py-2 px-4 rounded focus:outline.none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
            disabled={isFormSubmitting}
          >
            {isFormSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
