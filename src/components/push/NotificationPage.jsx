import React, { useState } from 'react';
import * as PushAPI from "@pushprotocol/restapi";


const NotificationPage = () => {
  const [isOpen, setIsOpen] = useState(false);


  const optInChannel = async () => {
    try {
    await channels.subscribe({
      signer: mysigner,
      channelAddress: "eip155:5:0xF9da412Cc753e3E18E6428286b5677C0E301BE3d", // channel address in CAIP
      userAddress :  userAddresses,
       // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
        welcomeNotification();
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
    } catch (error) {
      console.error("Error:", error);
        }
        // console.log();
  };

  const welcomeNotification = async () => {
    try {
      const apiResponse = await sendNotification({
        signer: mysigner,
        type: 4, // target
        identityType: 2, // direct payload
        notification: {
          title: `[SDK-TEST] notification TITLE:`,
          body: `[sdk-test] notification BODY`,
        },
        payload: {
          title: ` Welcome`,
          body: `welcome to Vidweave: Decentralised Video and collabration`,
          cta: "",
          img: "",
        },

        recipients: userAddresses,
        channel: "eip155:5:0xF9da412Cc753e3E18E6428286b5677C0E301BE3d", // your channel address
        env: "staging",
        onSuccess: () => {
          console.log("welcome Notification Sent");
        },
        onError: () => {
          console.error("An error occurred while sending welcome notification");
        },
      });
    } 
    catch (error) {
      console.error("Error:", error);
        }
        console.log(welcomeNotification);
  };


  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 right-4 bg-red">
      <div className="relative inline-flex w-fit">
        <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 p-2.5 text-xs">
          <span className="block h-4 w-4 bg-white rounded-full"></span>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-indigo-400 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          Hello
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

