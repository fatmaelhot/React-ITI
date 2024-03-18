import React from "react";
import Hero from "../hero/hero";
import AboutMe from "../aboutme/aboutme";
import Skills from "../skills/skills"
import Portfolio from "../portfolio/portfolio"
import Footer from "../footer/footer";
function Home(){
  return(
      <>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>

      
      </>
  );
}

export default Home;