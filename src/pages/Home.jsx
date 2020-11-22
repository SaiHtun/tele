import React from 'react';
import styled, { css } from 'styled-components';
import TeleImg from '../assets/telesky.JPG';
import sps from '../assets/sps.JPG';
import ads from '../assets/ads.JPG';


// ###################################### Hero ######################################
const Hero = styled.div`
  width: 100vw;
  max-width: 1450px;
  margin: 0 auto;
  height: 60vh;
  ::-webkit-scrollbar {
    background-color: red;
  }



  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
  

`;

// ###################################### Img ######################################
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: -150px;
  
  @media only screen and (max-width: 1000px) {
    object-fit: cover;
    height: 60vh;
    margin-bottom: -60px;
  }
  @media only screen and (max-width: 600px) {
    object-fit: cover;
    height: 70vh;
    margin-bottom: -70px;
  }
  @media only screen and (max-width: 400px) {
    object-fit: cover;
    height: 70vh;
    margin-bottom: -150px;
  }
 
`;

Img.defaultProps = {
  src: TeleImg
}


// ###################################### Showcase ######################################
const Showcase = styled.div`
  margin: 0 30px;
  height: 430px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 10;

  ::-webkit-scrollbar {
      height: 5px;
    }


  ::-webkit-scrollbar-track {
    background-color: #d4d3d3;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1698BA;

  }


  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
   
    :hover {
      overflow-x: scroll; 
    }
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: auto;
    margin-bottom: 10px;
    :hover {
     overflow-x: hidden;
    }
  }
 
  @media only screen and (max-width: 500px) {
    margin: 0 0;
    :hover {
     overflow-x: hidden;
    }
  }
`;

// ###################################### ShowcaseItem ######################################
const ShowcaseItem = styled.div`
  min-width: 270px;
  width: 350px;
  height: 420px;
  margin: 15px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.10), 0 0 0 1px rgba(10,10,10,.02);
  height: max-content;

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
  @media only screen and (max-width: 900px) {
    min-width: 280px;
    margin-bottom: 20px;

  }
 
`;

// ###################################### Ads ######################################
const Ads = styled.img`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 30px;
  @media only screen and (max-width: 800px) {
   
  }
`;

Ads.defaultProps = {
  src: ads
};

// ###################################### row ######################################
const Row = styled.div`
  margin: 0px 30px;
  height: 380px;
  padding: 20px;
  background-color: #fff;
  
  @media only screen and (max-width: 500px) {
     margin: 0px;
  }

  

  .rowContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;

    

    ::-webkit-scrollbar {
      height: 5px;
    }


    &::-webkit-scrollbar-track {
      background-color: #d4d3d3;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #1698BA;

    }


    @media only screen and (max-width: 1200px) {
      justify-content: flex-start;
    
      :hover {
        overflow-x: scroll; 
      }
    }
  }

  .rowTitle {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    h3 {
      position: relative; 

      ::after {
        position: absolute;
        content: '';
        height: 3px;
        bottom: -6px; 
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 50%;
        background: #1698BA;
		  -o-transition:.5s;
  		  -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
      }

      :hover::after {
        width: 100%;
        background: teal;
      }
    }
    

  }

  .rowItem {
    width: 250px;
    height: 80%;
    text-align: center;
    padding: 15px 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 160px;
      object-fit: contain;
    }

    .itemInfo {
      padding: 5px;

      .itemTitle {
        font-weight: bold;

       
      }

      .itemDes {
        font-size: 13px;
        color: grey;
      }
    }
  }
`;

const info = {
  title: "Smart phone and watch",
  img: [sps, sps, sps, sps],
};

const items = {
  title: "Samsung",
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m!Lorem ipsum dolor sit amet consectetur adipisicing elit.m!",
  price: "$350",
  img: sps
}
  
const des = (str) => {
  if(str.length > 36) {
    return str.substr(0, 35) + "..."
  }
}


function Home() {
  return (
    <Hero>
      {/* hero img */}
      <Img ></Img>
      {/* showcase */}
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
      {/* ads */}
      <Ads></Ads>
      {/* row */}
      <Row>
        <div className="rowTitle">
          <h3>Smart phone and watch</h3> <span>See all</span>
        </div>
        <div className="rowContainer">
          { new Array(5).fill(items).map((item, i) => {
            return (
              <div className="rowItem" key={i}>
                <img src={item.img} alt="#"/>
                <div className="itemInfo">
                  <p className="itemTitle">{ item.title }</p>
                  <p className="itemDes">{ des(item.des) }</p>
                  <small>{ item.price }</small>
                </div>
              </div>
            )
          })}
        </div>
       
      </Row>

      <div style={{ height: '1000px'}}>

      </div>
    </Hero>
  )
}

export default Home
