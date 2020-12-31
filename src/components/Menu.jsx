import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { color } from "../constants/variables";
import { NavContext } from "../context/NavContext";
import { FaFacebookSquare, FaInstagram, FaGlobeAfrica } from "react-icons/fa";

const MenuContainer = styled.div`
  width: 350px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-400px);
  transition: transform 0.3s ease-in;
  overflow-y: hidden;

  ul {
    margin-top: 50px;
    width: 100%;
    height: 70%;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    list-style: none;
    font-weight: bold;
    letter-spacing: 1.2px;

    a {
      color: #888888;
      font-weight: 400;
    }

    a:not(:first-child):hover {
      color: ${color.lightBlue};
    }

    .lastLi {
      margin-bottom: 20px;
    }

    .brand {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;

      /* :hover {
                color: black !important;
            } */

      .telemart {
        font-size: 1.3em;
        cursor: pointer;

        p {
          color: ${color.lightBlue};
          display: inline-block;
        }
      }

      .close {
        color: #eb425e;
        cursor: pointer;
      }
    }
  }
  .info {
    width: 100%;
    text-align: center;
    .social {
      margin-top: 30px;
      width: 100%;
      font-size: 1.3em;

      .fb {
        color: #3b5998;
      }
      .in {
        color: #8a3ab9;
      }
      .web {
        color: grey;
      }
    }
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0px);
    `}

  @media only screen and (max-width: 500px) {
    width: 280px;

    ul {
      font-size: 13px;
    }
  }
`;

function Menu() {
  const { openNav, setOpenNav } = useContext(NavContext);
  const history = useHistory();

  const home = () => {
    setOpenNav(false);
    history.push("/");
  };

  return (
    <MenuContainer open={openNav}>
      <ul>
        <li className="brand">
          <span className="telemart" onClick={() => home()}>
            <p>T</p>elemart
          </span>{" "}
          <span className="close" onClick={() => setOpenNav(false)}>
            X Close
          </span>{" "}
        </li>
        <Link to="/deals" onClick={() => setOpenNav(false)}>
          <li>Deals</li>
        </Link>
        <Link to="/bestseller" onClick={() => setOpenNav(false)}>
          <li>Best Seller</li>
        </Link>
        <Link to="/smartphoneandwatch" onClick={() => setOpenNav(false)}>
          <li>Phone and Watch</li>
        </Link>
        <Link to="/accessories" onClick={() => setOpenNav(false)}>
          <li>Gadget and Accessories</li>
        </Link>
        <Link to="/smarttv" onClick={() => setOpenNav(false)}>
          <li>Smart Tv</li>
        </Link>
        <Link
          className="lastLi"
          to="/electronics"
          onClick={() => setOpenNav(false)}
        >
          <li>Electronics</li>
        </Link>
        <li className="info">
          <p className="social">
            <FaFacebookSquare className="fb" /> <FaInstagram className="in" />{" "}
            <FaGlobeAfrica className="web" />
          </p>
          <p> +415 345 9879</p>
        </li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;
