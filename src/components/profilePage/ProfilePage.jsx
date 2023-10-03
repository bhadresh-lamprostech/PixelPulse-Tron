import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/profilePage/ProfilePage.css";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import userProfilePicture from "/src/assets/peterparkerprofile.png";

function ProfilePage() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const { address } = useAccount();

  const handleCreateWorkspace = (e) => {
    e.preventDefault();
    navigate("/create-workspace");
    console.log("Creating workspace...");
  };
  const walletAddress = address;
  console.log(walletAddress);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `https://deloom.vercel.app/readdata?address=${walletAddress}`
          // `https://videapi-bhadresh-lamprostech.vercel.app/readdata?address=${walletAddress}`
        );
        setUserProfile(response.data[0]); // Access the first object in the array
        console.log(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="ProfileHead">PERSONAL PROFILE</div>
      <div className="ProfilePageMainClass ">
        {userProfile ? (
          <div className="ProfileContent">
            <div className="ProfilePhotoClass">
              <img
                src={"https://" + `${userProfile.logocid}` + ".ipfs.w3s.link"}
                // src={userProfilePicture}
                alt="Profile"
                className="profile-photo"
              />
            </div>
            <div className="UserProfileDetails">
              <h2 className="UserProfileDetails-Name">
                {/* <b>Name: </b>  */}
                {userProfile.firstname} {userProfile.lastname}
              </h2>
              {/* <h2>
                  <b>Username: </b> 
                  {userProfile.username}
                </h2> */}
              <p className="UserProfileDetails-email">
                {/* <b>Contact Info: </b>  */}
                {userProfile.email}
              </p>
              <p className="UserProfileDetails-address">
                {/* <b>Wallet Address: </b>  */}
                {address}
              </p>
            </div>
            <div className="createWSClass">
              <button
                className="createWorkspaceBtn"
                onClick={handleCreateWorkspace}
              >
                Create Workspace +
              </button>
            </div>
          </div>
        ) : (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilePage;
