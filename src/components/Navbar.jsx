import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";

import { FaSearch } from "react-icons/fa";
import { color } from "../constants/variables";
import { NavContext } from "../context/NavContext";
import { useHistory } from "react-router-dom";

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
  } ;
`;

const Search = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .form input {
    width: 100%;
    padding: 8px 25px;
    border-radius: 5px;
    border: none;

    :focus {
      outline: none !important;
      border: 2px solid ${lightBlue};
    }
  }
  .form {
    width: 100%;
    height: 60px;
  }
  .searchIcon {
    position: absolute;
    top: 23px;
    right: 15px;
    color: ${darkBlue};
    cursor: pointer;
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
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
  z-index: 100;
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
  const [search, setSearch] = useState("");
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
        <Search>
          <form className="form">
            <input
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                setSearch(e.value);
              }}
              value={search}
            />
            <FaSearch className="searchIcon" />
          </form>
        </Search>
        <Menu>
          <ul>
            <li>Deals</li>
            <li>Best Sellers</li>
            <li>Customer Service</li>
          </ul>
        </Menu>
      </Container>
      <SemiNav>
        <div>
          <p>📍 Yangon, Myanmar | telemartmyanmar@gmail.com | +415 678 3465</p>
        </div>
      </SemiNav>
    </Nav>
  );
}

export default Navbar;
