import React from "react";
import styled from "styled-components";
import { color } from "../constants/variables";

const Footer = () => {
  return (
    <FooterContainer>
      <h3 className="footerTitleOne">
        <span>Telemartmyanmar</span> is the subsidiaries of{" "}
        <span>SPS Business Group</span>{" "}
      </h3>
      <div className="footerInfo">
        {/* address 1 */}
        <div className="footerBox">
          <h4>Store Location</h4>
          <p className="storeName">Shwe Pyi San Mobile</p>
          <p className="sotreAddress">1 Belmont Dr, Daly City,</p>
          <p>CA, 94015</p>
        </div>
        {/* address 2 */}
        <div className="footerBox">
          <h4>Store Location</h4>
          <p className="storeName">Shwe Pyi San Mobile</p>
          <p className="sotreAddress">1 Belmont Dr, Daly City,</p>
          <p>CA, 94015</p>
        </div>
      </div>
      <h3 className="footerTitleTwo">
        <span> © 2020, Telemartmyanmar </span>
        <span>Powered by VoilaSoft</span>{" "}
      </h3>
    </FooterContainer>
  );
};

// ###################################### Footer ######################################
const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  background: ${color.darkBlue};
  color: white;
  position: relative;

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

  .footerInfo {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;

    .footerBox {
      width: 200px;
      height: 200px;
      line-height: 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .footerTitleOne {
    background-color: ${color.lightBlue};
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
    border-top: 1px solid ${color.lightBlue};
    span {
      font-size: 12px;
      font-weight: bold !important;
    }
  }
`;

export default Footer;
