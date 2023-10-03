import React from 'react';
import Illustration from '../../assets/Illustration.png'
import './LandingPage.css';

function LandingDescription() {
  return (
    <div className=''>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={Illustration}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full "
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-rose-300 sm:text-5xl sm:leading-none">
              Transforming Video Sharing: Embrace the 
                <br className="hidden md:block" />
                Decentralized  {' '}<br></br>
                <span className="inline-block font-bold text-[#ff206e]">
                Revolution
                </span>
              </h2>
              <p className="text-base text-pink-50 md:text-lg">
              "Discover VidWeave, the empowering decentralized video sharing platform designed to give you full control. With VidWeave, you have the freedom to create and share videos securely and directly, without any intermediaries or centralized control. Experience the power of privacy, ownership, and a seamless user interface that puts you in the driver's seat. Join the VidWeave community today and become part of the revolutionary movement towards decentralized video sharing."
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDescription;
