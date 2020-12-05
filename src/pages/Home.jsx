import React, { useContext } from 'react';
import styled from 'styled-components';
// components
import Item from "../components/Item";
// assets
import TeleImg from '../assets/telesky.JPG';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.jpg';
import sps from '../assets/sps.JPG';
import ads from '../assets/ads.JPG';
import { AiFillAlipayCircle, AiFillAndroid, AiFillCloud, AiFillGooglePlusSquare } from 'react-icons/ai';
import { BiUpArrow } from 'react-icons/bi';
import { color, fontSize } from '../constants/variables';
import { GET_ITEMS } from '../queries/query';
import BackToTop from 'react-back-to-top-button';
import { NavContext } from '../context/NavContext';
// functions
import { stringCutter } from '../utility/functions';
// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// ads carousel
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// carousel setting
import responsiveSetting from '../constants/carousel';

import { useQuery } from '@apollo/client';

//  autoplay slider
const AutoplaySlider = withAutoplay(AwesomeSlider)

// Variables
const {lightBlue, darkBlue} = color;
const { cardTitleText, linkText, desText } = fontSize;
// eslint-disable-next-line

// ###################################### Hero ######################################
// const fade = keyframes`
//   from {
//     opacity: 0;
//   }

//   to {
//     opacity: 0.5;
//   }
// `;


const Hero = styled.div`
  width: 100vw;
  max-width: 1450px;
  margin: 0 auto;
  height: 60vh;
  font-family: 'Roboto', sans-serif;
  z-index: -10;

  .heroSlider {
    height: 80vh;
    margin-bottom: -150px;

    .awssld__bullets {
      position: absolute;
      top: 30%;
      z-index: 2;
    }

    .awssld__bullets button {
      width: 10px;
      height: 10px;
      background-color: white;
    }

  }

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


// ###################################### Showcase ######################################
const Showcase = styled.div`
  margin: 0 20px;
  height: 460px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;

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
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: auto;
    margin-bottom: 5px;
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
  margin: 10px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.10), 0 0 0 1px rgba(10,10,10,.02);
  height: max-content;
  z-index: 10;

  h3 {
    font-size: ${cardTitleText};
    font-weight: 500;
  }

  a {
    font-size: ${linkText} !important;
    color: ${lightBlue};
  }

  .showcaseGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 150px);
    gap: 10px;
    margin: 30px 0;

    img {
      width: 100%;
      height: 100%;
      transition: transform .3s ease-out;
      object-fit: cover;
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
    margin-bottom: 10px;

  }
  @media only screen and (max-width: 600px) {
      margin-bottom: 5px;
  }
 
`;

// ###################################### Ads ######################################
const Ads = styled.img`
  width: 100%;
  margin: 10px 0;

  @media only screen and (max-width: 800px) {
    margin: 10px 0px;
  }
  @media only screen and (max-width: 500px) {
    margin: 5px 0px;
  }
`;

Ads.defaultProps = {
  src: ads
};

// ###################################### row ######################################
const Row = styled.div`
  margin: 0px 30px;
  min-height: 450px;
  height: max-content;
  padding: 30px 20px;
  background-color: #fff;
  margin-bottom: 15px;

  .slider {
    
    
    ul {
      margin-top: 30px;

     

      li {
        min-width: 250px !important;
        max-width: 280px; 
        height: max-content;
        margin: 0px 5px;

        @media only screen and (max-width: 800px) {
          margin: 0px 20px;
        }
        @media only screen and (max-width: 500px) {
          margin: 0px 10px;

        }
       

      }
     
    }
  }
 
  @media only screen and (max-width: 800px) {
     margin: 0px;
     margin-bottom: 5px;
  }
  @media only screen and (max-width: 500px) {
     padding: 30px 15px;
     margin-bottom: 5px;
  }

  

 

  .rowTitle {
    width: 100%;
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
        margin: 0;
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
    min-width: 100%;
    height: 100%;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .discountItem {
      position: absolute;
      z-index: 10;
      top: 15px;
      right: 20px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0556f;
      color: white;
      font-size: 13px;
    }

    @media only screen and (max-width: 500px) {
      margin: 5px;
      text-align: left;

    }

    .imgContainer {
      width: 100%;
      height: 240px;
      transition: all 0.5s ease-out;

      :hover {
        transform: scale(1.1)
      }

      @media only screen and (max-width: 500px) {
        :hover {
          transform: none;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .itemInfo {
      padding: 5px;
      line-height: 20px;
      z-index: 10;
      margin-top: 5px;
      .itemTitle {
        font-weight: 500;
      }

      .itemDes {
        font-size: ${desText};
        color: #676767;
      }

      .itemDiscount {
        text-decoration: line-through;
        color: grey;
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

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

// ###################################### back to top ######################################
const GoTop = styled.div`
  /* width: 80vw;
  margin: 0 auto;
  height: 80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

 .circle {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 2px 1px 2px 2px rgba(0,0,0,0.5);
   z-index: 10;
   /* box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,1.2), 0 0 0 1px rgba(10,10,10,.02); */
  }
  
`;

// ###################################### Footer ######################################
const Footer = styled.div`
  width: 100%;
  height: 500px;
  background: ${darkBlue};
  color: white;
  position: relative;
  z-index: -1;

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }

  h3 {
    width: 100%;
    padding: 15px 0;
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    font-weight: 300;

    span {
      font-weight: 500;
    }
  }

  .locations {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;


    .storeLocation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .footerTitleOne {
    background-color: ${lightBlue};
    border-bottom: 1px solid #515151;
  }

  .footerTitleTwo {
    position: absolute;
    font-style: italic;
    line-height: 15px;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${lightBlue};
    span {
      font-weight: bold !important;
    } 
  }

  
`;

const features = [{ icon: <AiFillAlipayCircle/>, blog: "lorem asdf awrshyg qwtr hswre awet"}, { icon: <AiFillAndroid/>, blog: "lorem asdf awrshyg qwtr hswre awet"},
{ icon: <AiFillCloud/>, blog: "lorem asdf awrshyg qwtr hswre awet"},{ icon: <AiFillGooglePlusSquare/>, blog: "lorem asdf awrshyg qwtr hswre awet"} ];

const info = {
  name: "Samsung",
  title: "Smart phone and watch",
  img: [sps, sps, sps, sps],
};


  





function Home() {

  // query with async cancellation.
  const abortController = new AbortController();
  const { loading, error, data } = useQuery(GET_ITEMS, 
     { context: {
        fetchOptions: {
          signal: abortController.singal
        }
      }
     }
  );
  abortController.abort();


  const { openNav, setOpenNav } = useContext(NavContext);

    // grid items
  const gridItems =  (name) => {

    let array = data && [...data.allItems.items];


    return array.sort(() => Math.random() - 0.5 ).filter((item) => {
      if(item[name]) {
        return item;
      }
    }).slice(0,4).map((e, i) => {
      return (
        <div key={i}>
          <img src={e.image.url} alt="gg" />
        </div>
      )
    })
   
  }

  if(loading) return <p>it's loading</p>;
  if(error) console.log(error);
  
  return (
    <Hero open={openNav}>
      {/* Overlay */}
      {/* <div className="overlay" onClick={() => setOpenNav(false)}></div> */}
      {/* hero img */}
      <AutoplaySlider
          className="heroSlider"
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          organicArrows={true}
          bullets={true}
          media={[
            {
              source: `${TeleImg}`,
            },
            {
              source: `${a1}`,
            },
            {
              source: `${a2}`,
            },
            {
              source: `${a3}`,
            },
            {
              source: `${a4}`,
            }
          ]}
      >
      
      </AutoplaySlider>
      {/* showcase */}
      <Showcase>

        {/* Deals */}
        <ShowcaseItem >
          <h3>Deals</h3>
          <div className="showcaseGrid">
            { data && gridItems("discount")}
          </div>
          <a href="#">Discover More</a>
        </ShowcaseItem>

        {/* best sellers */}
        <ShowcaseItem >
          <h3>Best Seller</h3>
          <div className="showcaseGrid">
            { data && gridItems("bestseller")}
          </div>
          <a href="#">Discover More</a>
        </ShowcaseItem>

        {/* gift items */}
        <ShowcaseItem >
          <h3>Gift items</h3>
          <div className="showcaseGrid">
            { info.img.map((e, i) => {
              return (
                <img src={e} alt="gg" key={i}/>
              )
            })}
          </div>
          <a href="#">Discover More</a>
        </ShowcaseItem>
      </Showcase>
      {/* ads */}
      <Ads></Ads>
      {/* row Smart phone & watch*/}
      <Row>
        <div className="rowTitle">
          <h3>Smart phone and watch</h3> <a href="/smartphoneandwatch">See all</a>
        </div>
        {/* <div className="rowContainer"> */}
            <Carousel 
            partialVisible
            responsive={responsiveSetting}
            className="slider"
            >
              { data && data.smartphoneandwatch.items.slice(0, 10).map((item, i) => {
                return (
                  <Item key={i} item={item}></Item>
                )
              })}
            </Carousel>

        {/* </div> */}
       
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
          <h3>Accessories</h3> <a href="accessories">See all</a>
        </div>
        <Carousel 
            swipeable
            partialVisible
            responsive={responsiveSetting}
            className="slider"
            >
          { data && data.accessories.items.map((item, i) => {
            return (
              <Item key={i} item={item}></Item>
            )
          })}
        </Carousel>
       
      </Row>
       {/* row Smart TV */}
       <Row>
        <div className="rowTitle">
          <h3>Smart TV</h3> <a href="smarttv">See all</a>
        </div>
        <Carousel 
            swipeable
            partialVisible
            responsive={responsiveSetting}
            className="slider"
            >
          { data && data.tv.items.map((item, i) => {
            return (
                <Item key={i} item={item}></Item>
            )
          })}
        </Carousel>
      </Row>
       {/* row  Electronics */}
       <Row>
        <div className="rowTitle">
          <h3>Electronics</h3> <a href="electronics">See all</a>
        </div>
        <Carousel 
            swipeable
            partialVisible
            responsive={responsiveSetting}
            className="slider"
            >
          { data && data.electronics.items.map((item, i) => {
            return (
              <Item key={i} item={item}></Item>
            )
          })}
        </Carousel>
       
      </Row>
      {/* Back to Top */}
      <GoTop>
        <BackToTop
           showOnScrollUp
           showAt={100}
           speed={1500}
           easing="easeInOutQuint"
           className="goTop"
        >
          <div className="circle">
            <BiUpArrow style={{ color: lightBlue, fontSize: "30px"}}></BiUpArrow>
          </div>
        </BackToTop>
      </GoTop>
      {/* Footer */}
      <Footer>
        <h3 className="footerTitleOne"><span>Telemartmyanmar</span> is the subsidiaries of <span>SPS Business Group</span> </h3>
        <div className="locations">
          {/* address 1 */}
          <div className="storeLocation">
            <h4>Store Location</h4>
            <p className="storeName">Shwe Pyi San Mobile</p>
            <p className="sotreAddress">
              1 Belmont Dr, Daly City,
            </p>
            <p>CA, 94015</p>
          </div>
          {/* address 2 */}
          <div className="storeLocation">
            <h4>Store Location</h4>
            <p className="storeName">Shwe Pyi San Mobile</p>
            <p className="sotreAddress">
              1 Belmont Dr, Daly City, 
            </p>
            <p>CA, 94015</p>
          </div>
         
        </div>
        <h3 className="footerTitleTwo"><span> © 2020, Telemartmyanmar </span><span>Powered by VoilaSoft</span> </h3>
      </Footer>
    </Hero>
  )
}

export default Home
