import React from 'react';
import styled, { css } from 'styled-components';
import TeleImg from '../assets/telesky.JPG';

const Hero = styled.div`
  width: 100vw;
  height: 60vh;

  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
  

`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;

 
`;

const Showcase = styled.div`
  margin: 0 30px;
  height: 350px;
  transform: translateY(-150px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  overflow-x: hidden;
  overflow-y: hidden;

  

  
  

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
   
    :hover {
    overflow-x: scroll;
  }
  @media only screen and (max-width: 1000px) {
    transform: translateY(-120px);
    height: 330px;
    :hover {
    overflow-x: scroll;
  }
  }
  @media only screen and (max-width: 800px) {
    height: 310px;
    transform: translateY(-80px);
  }
  @media only screen and (max-width: 600px) {
    height: 300px;
    transform: translateY(-50px);
  }
`;

const ShowcaseItem = styled.div`
  min-width: 270px;
  width: 300px;
  height: 330px;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.10), 0 0 0 1px rgba(10,10,10,.02);

  @media only screen and (max-width: 1000px) {
    width: 280px;
    height: 310px;
  }
  @media only screen and (max-width: 800px) {
    width: 260px;
    height: 290px;
  }
  @media only screen and (max-width: 600px) {
    width: 240px;
    height: 270px;
  }
`;

function Home() {
  return (
    <Hero>
      <Img src={TeleImg}></Img>
      <Showcase>
        <ShowcaseItem >
          
        </ShowcaseItem>
        <ShowcaseItem>

        </ShowcaseItem>
        <ShowcaseItem>

        </ShowcaseItem>
        <ShowcaseItem last="true">

        </ShowcaseItem>
      </Showcase>
      <div style={{ height: '1000px'}}>

      </div>
    </Hero>
  )
}

export default Home
