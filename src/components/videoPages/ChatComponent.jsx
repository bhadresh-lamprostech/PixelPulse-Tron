import React from "react";

const ChatComponent = () => {
const groupChat = async () => {
  // pre-requisite API calls that should be made before
// need to get user and through that encryptedPvtKey of the user
const user = await PushAPI.user.get({
  account: 'eip155:0xF9da412Cc753e3E18E6428286b5677C0E301BE3d'
});

// need to decrypt the encryptedPvtKey to pass in the api using helper function
const pgpDecryptedPvtKey = await PushAPI.chat.decryptPGPKey({
      encryptedPGPPrivateKey: user.encryptedPrivateKey, 
      signer: _signer
});

// actual api
const response = await PushAPI.chat.updateGroup({
  groupName: 'Workspace demo',
  groupDescription: 'workspace group chat and collabration',
  members: ['0x348AE47edF21fa5e5A333347680B3971F9035','0xF9da412Cc753e3E18E6428286b5677C0E301BE3d'],
  // groupImage: &lt;group image link&gt; ,
  admins: ['0xF9da412Cc753e3E18E6428286b5677C0E301BE3d'],
  account: '0xD993eb61B8843439A23741C0A3b5138763aE11a4',
  pgpPrivateKey: pgpDecryptedPvtKey, //decrypted private key
});
}


  return (
    <div className="flex flex-col items-center justify-center w-[100] h-[520px] text-gray-800 p-2">
      {/* Component Start */}
      <div className="flex flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  <b>Sophia Anderson:</b> Nice video
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  <b>Noah Davis:</b> consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  <b>Ethan Johnson:</b> consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-[#ff83a5] text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  <b>Peter Parker:</b> consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className=" p-4">
          <input
            className="flex items-center bg-[#480c1f] text-white  h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Type your message…"
          />
        </div>
      </div>
      {/* Component End  */}
    </div>
  );
};

export default ChatComponent;
