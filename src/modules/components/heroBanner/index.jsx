import React from "react";
import styled from "styled-components";
import heroImage from "../../../media/hero-banner.png"; // Adjusted path

const HeroBannerContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 200px;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 1.5rem; // Adjust the font size as needed
  font-family: 'Montserrat', sans-serif; // Use your preferred font
`;

function HeroBanner() {
  return (
    <HeroBannerContainer>
      <HeroText>Welcome to Holidaze!</HeroText>
    </HeroBannerContainer>
  );
}

export default HeroBanner;