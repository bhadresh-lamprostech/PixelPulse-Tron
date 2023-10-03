import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/VidWeave.png'; // Import the website logo image
import './LandingPage.css'
import footerimg from '../../assets/footer.png'

function FooterLanding() {
  return (
    <section className="display-flex">
      <div className="py-20 text-white">
        <div className="flex justify-between items-start">
          <div className="ml-10 mr-10">
            <img src={logo} alt="Website Logo" className="h-16" /> {/* Add the website logo */}
            <p>
              Take control of your data and privacy<br /> while revolutionizing the way we connect and create
            </p>
            <br />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-xl text-[#FFBC41]">
              Links
            </h2>
            {/* Flex container for top-down links */}
            <a href="/signup" className="my-2 link">
              Sign Up
            </a>
            <a href="/services" className="my-2 link">
              Services
            </a>
            <a href="/workspace" className="my-2 link">
              Workspace
            </a>
            <a href="/help" className="my-2 link">
              Help
            </a>
            <a href="/contact" className="my-2 link">
              Contact Us
            </a>
          </div>
          
          <div>
            <img src={footerimg} alt="Footer Image" className="h-54 mr-4 footerimg" /> {/* Add the image */}
          </div>
        </div>

        <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} VidWeave. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default FooterLanding;
