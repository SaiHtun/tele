import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

// 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

const StyledDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: #0B132B;
  color: #ffff;

`

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen  and (max-width: 780px) {
    width: 80vw;
    justify-content: space-between;
  };

`

const Brand = styled.h2`
  span {
    color:  #1698BA;
    font-size: 1.2em;
    font-weight: bold;
  }
  @media only screen  and (max-width: 780px) {
    text-align: center;
    flex: 3;
  };
  @media only screen  and (max-width: 600px) {
    text-align: center;
    flex: 5;
  };
`

const Search = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .form input{
    width: 100%;
    padding: 8px 25px;
    border-radius: 5px;
    border: none;

    :focus {
      outline: none !important;
      border: 2px solid #1698BA;
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
    color:  #0B132B;
    cursor: pointer;
  }

  @media only screen  and (max-width: 850px) {
    display: none;
  }
 
`

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
  @media only screen  and (max-width: 780px) {
    display: none;
  }

`

const Humberger = styled.div`
  width: 25px;
  height: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: none;
  @media only screen  and (max-width: 780px) {
    width: 30px;
    height: 10px;
    display: inline-block;

   
  }

  .stick {
    width: 100%;
    height: 3px;
    line-height: 3px;
    margin-bottom: 3px;
    background-color: #fff;
  }

 
`;

function Navbar() {

  const [ search, setSearch ] = useState("");


  return (
    <StyledDiv>
      <Container>
        <Humberger>
          <div className="stick one"></div>
          <div className="stick two"></div>
          <div className="stick three"></div>
        </Humberger>
        <Brand><span>T</span>elemart</Brand>
        <Search>
          <form className="form">
            <input type="text" placeholder="Search here" onChange={(e) => { setSearch(e.value)}} value={search} />
            <FaSearch className="searchIcon"/>
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
    </StyledDiv>
  )
}

export default Navbar
