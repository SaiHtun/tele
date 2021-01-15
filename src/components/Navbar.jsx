import React, { useContext } from "react";
import styled from "styled-components";

import { color } from "../constants/variables";
import { NavContext } from "../context/NavContext";
import { Link, useHistory } from "react-router-dom";
// components
import SearchBox from "./SearchBox";
//  context api
// import { ItemsContext } from "../context/ItemsContext";
// helper functions
// import { stringCutter } from "../utility/functions";

const { lightBlue, darkBlue } = color;

const Nav = styled.div`
  width: 100vw;
  height: 70px;
  background-color: ${darkBlue};
  color: #ffff;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 820px) {
    width: 80vw;
    justify-content: space-between;
  }

  @media only screen and (max-width: 500px) {
    width: 90vw;
    justify-content: center;
  } ;
`;

const Brand = styled.h2`
  cursor: pointer;

  span {
    color: ${lightBlue};
    font-size: 1.2em;
    font-weight: bold;
  }
  @media only screen and (max-width: 780px) {
    text-align: center;
    flex: 4;
    max-width: 130px;
  } ;
`;

const Menu = styled.div`
  width: 400px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8em;
    letter-spacing: 1px;

    a {
      color: white;
    }
  }
  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const Humberger = styled.div`
  width: 25px;
  height: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: none;
  z-index: 1000;
  cursor: pointer;
  @media only screen and (max-width: 820px) {
    width: 30px;
    height: 10px;
    display: inline-block;
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    left: 20px;
    width: 30px;
    height: 10px;
    display: inline-block;
  }

  .line {
    height: 2px;
    line-height: 3px;
    margin-bottom: 3px;
    background-color: white;
  }
  .one {
    width: 100%;
  }
  .two {
    width: 80%;
  }
  .three {
    width: 60%;
  }
`;

const SemiNav = styled.div`
  width: 100%;
  height: 20px;
  background-color: slateblue;
  text-align: right;
  font-size: 12px;
  line-height: 20px;
  @media only screen and (max-width: 500px) {
    font-size: 10px;
    text-align: center;
  }

  div {
    width: 80vw;
    margin: 0 auto;

    @media only screen and (max-width: 500px) {
      width: 90vw;
    }
  }
`;

function Navbar() {
  const { openNav, setOpenNav } = useContext(NavContext);
  const history = useHistory();

  return (
    <Nav open={openNav}>
      <Container>
        <Humberger onClick={() => setOpenNav(!openNav)}>
          <div className="line one"></div>
          <div className="line two"></div>
          <div className="line three"></div>
        </Humberger>
        <Brand onClick={() => history.push("/")}>
          <span>T</span>elemart
        </Brand>
        <SearchBox></SearchBox>
        <Menu>
          <ul>
            <Link to="/deals">
              <li>Deals</li>
            </Link>
            <Link to="/bestsellers">
              <li>Best Sellers</li>
            </Link>
            <Link to="/customerservices">
              <li>Customer Service</li>
            </Link>
          </ul>
        </Menu>
      </Container>
      {/* <SemiNav>
        <div>
          <p>📍 Yangon, Myanmar | telemartmyanmar@gmail.com | +415 678 3465</p>
        </div>
      </SemiNav> */}
    </Nav>
  );
}

export default Navbar;
