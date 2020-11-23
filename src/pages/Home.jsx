import React from 'react';
import styled, { css } from 'styled-components';
import TeleImg from '../assets/telesky.JPG';
import sps from '../assets/sps.JPG';
import ads from '../assets/ads.JPG';
import { AiFillAlipayCircle, AiFillAndroid, AiFillCloud, AiFillGooglePlusSquare} from 'react-icons/ai';
import Slider from "react-slick";
// import Settings from '../constants/carousel';

// Variables
const lightBlue = "#1698BA";
// eslint-disable-next-line
const darkBlue = "#0B132B"


// ###################################### Hero ######################################
const Hero = styled.div`
  width: 100vw;
  max-width: 1450px;
  margin: 0 auto;
  height: 60vh;
  font-family: 'Roboto', sans-serif;

  a {
    color: ${lightBlue}
  }

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
    background-color: ${lightBlue};

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

  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  a {
    font-size: 15px !important;
    color: ${lightBlue};
  }

  .showcaseGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    margin: 30px 0;

    img {
      width: 100%;
      transition: transform .3s ease-out;
    }

    img:hover {
      transform: scale(1.1)
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
  height: 390px;
  padding: 30px 10px 10px 30px;
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
    transition: all .3s;

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
      transition: overflow-x 1.2s ease-out;
    
      :hover {
        overflow-x: scroll; 
      }
    }
    @media only screen and (max-width: 500px) {
      overflow-x: scroll;
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
        background: ${lightBlue};
		  -o-transition:.5s;
  		  -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
      }

      :hover::after {
        width: 100%;
      }
    }
    

  }

  .rowItem {
    width: 260px;
    height: 80%;
    text-align: center;
    padding: 15px 5px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 170px;
      object-fit: contain;
    }

    .itemInfo {
      padding: 5px;
      line-height: 20px;

      .itemTitle {
        font-weight: 500;

       
      }

      .itemDes {
        font-size: 14px;
        color: #676767;
      }
    }
  }
`;

// ###################################### Features & News ######################################
const Features = styled.div`
  width: 70%;
  height: 250px;
  margin: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .feature {
    width: 200px;
    height: 200px;
    text-align: center;
    font-size: 2em;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 20px;

    a, p {
      font-size: 14px !important;
    }
  }
`;

const features = [{ icon: <AiFillAlipayCircle/>, blog: "lorem asdf awrshyg qwtr hswre awet"}, { icon: <AiFillAndroid/>, blog: "lorem asdf awrshyg qwtr hswre awet"},
{ icon: <AiFillCloud/>, blog: "lorem asdf awrshyg qwtr hswre awet"},{ icon: <AiFillGooglePlusSquare/>, blog: "lorem asdf awrshyg qwtr hswre awet"} ];

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
  
const stringCutter = (str) => {
  if(str.length > 36) {
    return str.substr(0, 35) + "..."
  }
  return str;
}


function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }







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
              <a href="#">Discover More</a>
            </ShowcaseItem>
          )
        })}
      </Showcase>
      {/* ads */}
      <Ads></Ads>
      {/* row Smart phone & watch*/}
      <Row>
        <div className="rowTitle">
          <h3>Smart phone and watch</h3> <a href="#">See all</a>
        </div>
        <div className="rowContainer">

            { new Array(5).fill(items).map((item, i) => {
              return (
                <div className="rowItem" key={i}>
                  <img src={item.img} alt="#"/>
                  <div className="itemInfo">
                    <p className="itemTitle">{ item.title }</p>
                    <p className="itemDes">{ stringCutter(item.des) }</p>
                    <small>{ item.price }</small>
                  </div>
                </div>
              )
            })}

        </div>
       
      </Row>
      {/* New Tech News & Features */}
      <Features>
        { features.map((feature, i) => {
          return (
            <div className="feature" key={i}>
              { feature.icon }
              <p>{ stringCutter(feature.blog) }</p>
              <a href="#">More</a>
            </div>
          )
        })}
      </Features>
       {/* row Accessories */}
       <Row>
        <div className="rowTitle">
          <h3>Accessories and Gadgets</h3> <a href="#">See all</a>
        </div>
        <div className="rowContainer">
          { new Array(5).fill(items).map((item, i) => {
            return (
              <div className="rowItem" key={i}>
                <img src={item.img} alt="#"/>
                <div className="itemInfo">
                  <p className="itemTitle">{ item.title }</p>
                  <p className="itemDes">{ stringCutter(item.des) }</p>
                  <small>{ item.price }</small>
                </div>
              </div>
            )
          })}
        </div>
       
      </Row>
    </Hero>
  )
}

export default Home
