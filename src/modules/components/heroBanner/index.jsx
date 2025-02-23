import React from "react";
import styled from "styled-components";
import heroImage from "../../../media/hero-banner.png"; // Adjusted path

const HeroBannerContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 200px; // Adjusted height for more visibility
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  margin-top: 10px; 
`;

const HeroText = styled.h1`
  font-size: 2rem; // Adjusted font size for better visibility
  font-family: 'Montserrat', sans-serif;
  margin: 0; // Remove default margin
`;

function HeroBanner() {
  return (
    <HeroBannerContainer>
      <HeroText>Welcome to Holidaze!</HeroText>
    </HeroBannerContainer>
  );
}

export default HeroBanner;