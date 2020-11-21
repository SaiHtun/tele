import React from 'react';
import styled, { css } from 'styled-components';
import TeleImg from '../assets/telesky.JPG';
import sps from '../assets/sps.JPG';

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
  -webkit-mask-image: linear-gradient(to top, transparent 10%, black 50%);
  mask-image: linear-gradient(to top, transparent 10%, black 50%);
  z-index: -10;
  
  @media only screen and (max-width: 900px) {
    object-fit: cover;
    height: 60vh;
  }
 
`;

Img.defaultProps = {
  src: TeleImg
}

const Showcase = styled.div`
  margin: 0 30px;
  height: 450px;
  transform: translateY(-250px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 10;

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
   
    :hover {
    overflow-x: scroll; 
    }
  }
  @media only screen and (max-width: 1000px) {
    transform: translateY(-120px);

    :hover {
     overflow-x: scroll;
    }
  }
  @media only screen and (max-width: 800px) {
    gap: 30px;
  }
  @media only screen and (max-width: 600px) {
    gap: 50px;
  }
`;

const ShowcaseItem = styled.div`
  min-width: 270px;
  width: 350px;
  height: 420px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.10), 0 0 0 1px rgba(10,10,10,.02);

  .showcaseGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    margin: 30px 0;

    img {
      width: 100%;
      
    }

  }

  @media only screen and (max-width: 1000px) {
    min-width: 280px;
  }
 
`;

const info = {
  title: "Smart phone and watch",
  img: [sps, sps, sps, sps],
};

function Home() {
  return (
    <Hero>
      <Img ></Img>
      <Showcase>
        { new Array(4).fill(info).map((info, i) => {
          return (
            <ShowcaseItem key={i}>
              <h3>{ info.title }</h3>
              <div className="showcaseGrid">
                { info.img.map((e, i) => {
                  return (
                    <img src={e} alt="gg" key={i}/>
                  )
                })}
              </div>
              <h3>Discover More</h3>
            </ShowcaseItem>
          )
        })}
      </Showcase>
      <div style={{ height: '1000px'}}>

      </div>
    </Hero>
  )
}

export default Home
