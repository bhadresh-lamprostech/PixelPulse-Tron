import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import UserDashboard from "../components/dashboard/UserDashboard";
import "../styles/home/Home.css";
import userStreamABI from "../artifacts/userStream.json";
import { ethers } from "ethers"; // Import ethers

function Home() {
  const { isDisconnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [userAddress, setUserAddress] = useState("");
  const navigate = useNavigate();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    userStreamABI.address, // Replace with your contract address
    userStreamABI.abi, // Replace with your contract ABI
    signer
  );

  const getUser = async () => {
    try {
      const user = await contract.userMapping(address);
      setUserAddress(user.userAddress);
      // Do something with the user data here
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading delay
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      {isDisconnected && (
        <div className="flex text-center align-center justify-center">
          <div className="connectWalletInstructionClass">
            <div className="connectWalletIns_2 flex items-center justify-center p-5">
              <p className="text-white mr-5">Please connect your wallet</p>
            </div>
          </div>
        </div>
      )}
      {!isDisconnected && (
        <>
          {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Loading...</h2>
                <p className="mb-4">
                  Please wait while the data is being fetched.
                </p>
              </div>
            </div>
          ) : (
            <>
              {userAddress ? (
                <UserDashboard />
              ) : (
                // Render your registration popup
                <div className="onBoardRegMainClass fixed flex items-center justify-center">
                  <div className="text-white w-96 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">
                      You're missing out! 😔 Register now
                    </h2>
                    <p className="mb-4">
                      Don't miss out on the action - click here to register
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="onBoardRegBtn px-4 py-2 rounded-md"
                        onClick={() => navigate("/user-reg")}
                      >
                        Click here to Register
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
