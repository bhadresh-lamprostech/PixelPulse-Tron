import React from "react";
import { motion } from "framer-motion";
import "./LandingSponsorSection.css";
import pushImg from "../../assets/pushprotocol1.png";
import tblImg from "../../assets/tableland.svg"
import spImg from '../../assets/spheron.png'
import web3 from '../../assets/web3.png'

import lightImg from '../../assets/lighthouse1.png'


const LandingSponsorSection = () => {
  const sponsors = [
    {
      id: 1,
      name: "Push Protocol",
      description:
        " We have implemented the Push Protocol, a powerful solution for real-time notifications and group chat functionalities. By leveraging Push Protocol, we enable instant updates and interactive group communication. With its seamless integration, our project benefits from efficient real-time functionality, ensuring timely notifications and a dynamic group chat environment while watching the video.",
      icon: pushImg,
    },
    {
      id: 2,
      name: "TableLand",
      description:
        "Tableland: Our go-to for efficient and secure database management. With its robust features, we have seamlessly organized and stored project data. APIs are structured, optimized, and enable smooth data retrieval and updates. Tableland's user-friendly interface and scalability have been an invaluable contributor in our project.",
      icon: tblImg,
    },
    {
      id: 3,
      name: "Spheron",
      description:
        " We have utilized Spheron,for streamlined deployment and robust storage. With Spheron's seamless deployment capabilities, we effortlessly implemented our application and efficiently scaled it as needed. Their reliable infrastructure provided us with a secure and efficient storage system, optimizing data management and ensuring a smooth user experience.",
      icon: spImg,
    },
    {
      id: 4,
      name: "Web3.storage",
      description:
        " Web3.storage: Safely store user image data in our project. Web3.storage offers secure data storage capabilities. By leveraging this technology, we enhance our project's data management. Web3.storage provides a trusted and scalable platform for storing user image data, allowing us to deliver a high-quality product while maintaining data integrity and security.",

      icon: web3,
    },
    {
      id: 5,
      name: "LightHouse",
      description:
        "Our project leverages Lighthouse, a robust storage solution, to securely store videos. Lighthouse ensures efficient and scalable video storage capabilities.The integration of Lighthouse empowers us to offer secure and reliable video storage. Through this powerful storage solution, our project enhances data management and delivers a high-quality experience for users.",
      icon: lightImg,
    },
  ];

  return (
    <div className="sponsor-section">
      <h1 className="poweredbyHeading"> Powered By </h1>
      <div className="sponsor-cards">
        {sponsors.map((sponsor) => (
          <motion.div
            className="sponsor-card"
            key={sponsor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: sponsor.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">
              <img src={sponsor.icon} alt={sponsor.name} />
            </div>

            <h2 className="sponsorname">{sponsor.name}</h2>

            <p className="LandingSponsorDesc">{sponsor.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingSponsorSection;
