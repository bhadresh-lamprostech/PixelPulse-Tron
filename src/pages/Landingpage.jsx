import React from 'react';
import LandingPageHero from '../components/landingPage/LandingPageHero';
import LandingDescription from '../components/landingPage/LandingDescription';
import FooterLanding from '../components/landingPage/FooterLanding';
import LandingWorkflow from '../components/landingPage/LandingWorkflow';
import LandingSponsorSection from '../components/landingPage/LandingSponsorSection';
import '../components/landingPage/LandingPage.css';

const LandingPage = () => {

  return (
    <>
    <div className='bgimage'><LandingPageHero/>
    <LandingDescription/>
    <LandingWorkflow/>
    <LandingSponsorSection/>
    <FooterLanding/></div>
    
    
    </>
  );
};

export default LandingPage;
