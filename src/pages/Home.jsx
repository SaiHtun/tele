import React from 'react';
import styled, { css } from 'styled-components';
import TeleImg from '../assets/telesky.JPG';
import sps from '../assets/sps.JPG';
import ads from '../assets/ads.JPG';
import { AiFillAlipayCircle, AiFillAndroid, AiFillCloud, AiFillGooglePlusSquare } from 'react-icons/ai';
import { BiUpArrow } from 'react-icons/bi';
import { color, fontSize } from '../constants/variables';
import { GET_ITEMS } from '../queries/query';
import BackToTop from 'react-back-to-top-button';

//  Graphql
import { useQuery } from '@apollo/client';


// Variables
const {lightBlue, darkBlue} = color;
const { cardTitleText, bodyText, linkText, desText } = fontSize;
// eslint-disable-next-line

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
    margin-bottom: -150px;
  }
  @media only screen and (max-width: 400px) {
    object-fit: cover;
    height: 70vh;
    margin-bottom: -200px;
  }
 
`;

Img.defaultProps = {
  src: TeleImg
}


// ###################################### Showcase ######################################
const Showcase = styled.div`
  margin: 0 30px;
  height: 410px;
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
  margin: 10px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.10), 0 0 0 1px rgba(10,10,10,.02);
  height: max-content;

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
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
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
    margin-bottom: 10px;

  }
  @media only screen and (max-width: 600px) {
      margin-bottom: 5px;
  }
 
`;

// ###################################### Ads ######################################
const Ads = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;

  @media only screen and (max-width: 800px) {
    margin: 10px 0px;
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
  padding: 30px 10px 10px 30px;
  background-color: #fff;
  margin-bottom: 15px;
 
  @media only screen and (max-width: 800px) {
     margin: 0px;
     margin-bottom: 5px;
  }

  

  .rowContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: all .3s;
    margin-top: 15px;

    ::-webkit-scrollbar {
      height: 5px;
    }


    &::-webkit-scrollbar-track {
      background-color: #d4d3d3;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #1698BA;

    }

   

    @media only screen and (max-width: 1500px) {
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
    min-width: 230px;
    height: 80%;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
      .itemTitle {
        font-weight: 500;

       
      }

      .itemDes {
        font-size: ${desText};
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

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

// ###################################### back to top ######################################
const GoTop = styled.div`
  width: 80vw;
  margin: 0 auto;
  height: 80px;
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

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }

  h3 {
    width: 100%;
    padding: 15px 0;
    text-align: center;
    font-size: 15px;
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
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .footerTitleOne {
    border-bottom: 1px solid #515151;
  }

  .footerTitleTwo {
    position: absolute;
    font-style: italic;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${lightBlue};

    span {
      font-weight: bold;
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


  
const stringCutter = (str) => {
  if(str.length > 60) {
    return str.substr(0, 54) + "..."
  }
  return str;
}


function Home() {
  
  const { loading, error, data } = useQuery(GET_ITEMS);

  if(loading) return <p>it's loading</p>;
  if(error) return <p>Error !!!</p>
  console.log(data)
  return (
    <Hero>
      {/* hero img */}
      <Img ></Img>
      {/* showcase */}
      <Showcase>
        { new Array(3).fill(info).map((info, i) => {
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

            { data && data.smartphoneandwatch.items.map((item, i) => {
              return (
                <div className="rowItem" key={i}>
                  <div className="imgContainer">
                    <img src={item.image.url} alt={item.name}/>
                  </div>
                  <div className="itemInfo">
                    <p className="itemTitle">{ item.name }</p>
                    <p className="itemDes">{ stringCutter(item.descriptions) }</p>
                    { item.discount? (
                      <p><small style={{ textDecoration: "line-through"}}>{ item.price }Kyats</small> <small>{ Math.floor(item.price - (item.price * (item.discount / 100)))}Kyats</small></p>
                    ): (
                      <small>{ item.price }Kyats</small>
                    )}
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
          <h3>Accessories</h3> <a href="#">See all</a>
        </div>
        <div className="rowContainer">
          { data && data.accessories.items.map((item, i) => {
            return (
              <div className="rowItem" key={i}>
                <div className="imgContainer">
                  <img src={item.image.url} alt={item.name}/>
                </div>
                <div className="itemInfo">
                  <p className="itemTitle">{ item.name }</p>
                  <p className="itemDes">{ stringCutter(item.descriptions) }</p>
                  { item.discount? (
                      <p><small style={{ textDecoration: "line-through"}}>{ item.price }Kyats</small> <small>{ Math.floor(item.price - (item.price * (item.discount / 100)))}Kyats</small></p>
                    ): (
                      <small>{ item.price }Kyats</small>
                    )}
                </div>
              </div>
            )
          })}
        </div>
       
      </Row>
       {/* row Smart TV */}
       <Row>
        <div className="rowTitle">
          <h3>Smart TV</h3> <a href="#">See all</a>
        </div>
        <div className="rowContainer">
          { data && data.tv.items.map((item, i) => {
            return (
              <div className="rowItem" key={i}>
                <div className="imgContainer">
                  <img src={item.image.url} alt={item.name}/>
                </div>
                <div className="itemInfo">
                  <p className="itemTitle">{ item.name }</p>
                  <p className="itemDes">{ stringCutter(item.descriptions) }</p>
                  { item.discount? (
                      <p><small style={{ textDecoration: "line-through"}}>{ item.price }Kyats</small> <small>{ Math.floor(item.price - (item.price * (item.discount / 100)))}Kyats</small></p>
                    ): (
                      <small>{ item.price }Kyats</small>
                    )}
                </div>
              </div>
            )
          })}
        </div>
       
      </Row>
       {/* row  Electronics */}
       <Row>
        <div className="rowTitle">
          <h3>Electronics</h3> <a href="#">See all</a>
        </div>
        <div className="rowContainer">
          { data && data.electronics.items.map((item, i) => {
            return (
              <div className="rowItem" key={i}>
                <div className="imgContainer">
                  <img src={item.image.url} alt={item.name}/>
                </div>
                <div className="itemInfo">
                  <p className="itemTitle">{ item.name }</p>
                  <p className="itemDes">{ stringCutter(item.descriptions) }</p>
                  { item.discount? (
                      <p><small style={{ textDecoration: "line-through"}}>{ item.price }Kyats</small> <small>{ Math.floor(item.price - (item.price * (item.discount / 100)))}Kyats</small></p>
                    ): (
                      <small>{ item.price }Kyats</small>
                    )}
                </div>
              </div>
            )
          })}
        </div>
       
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
