import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroContentImage, HeroContentText } from "./HeroElements";

const HeroSection = () => {

  return (
    <HeroContainer id="Home">
      <HeroBg/>
      <HeroContent> 
        <HeroContentText>
          <HeroH1>CELULARES</HeroH1>
          <HeroP>
            Obten los mejores celulares a un gran precio, con planes de créditos
          </HeroP>
        </HeroContentText>
        <HeroContentImage>
          <img src={require("../../images/man.png")} alt="" />  
        </HeroContentImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
