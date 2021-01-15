import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { color } from "../constants/variables";
import { useHistory } from "react-router-dom";
//  context api
import { ItemsContext } from "../context/ItemsContext";
import { NavContext } from "../context/NavContext";
//  utility functions
import { stringCutter } from "../utility/functions";
// icons
import { FaSearch } from "react-icons/fa";

function SearchBox({ show }) {
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const { data, showSearch, setShowSearch } = useContext(ItemsContext);
  const { setOpenNav } = useContext(NavContext);
  const history = useHistory();

  const handleClick = (item) => {
    history.push(`/${item.category}/${item.id}`);
    setOpenNav(false);
    setShowSearch(false);
  };

  const handleChange = (value) => {
    setShowSearch(true);
    let array = data.allItems.items.filter((item) =>
      item.descriptions.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(array);
  };

  let searchItems =
    filtered.length &&
    filtered.map((item, i) => {
      return (
        <div className="item" key={i} onClick={() => handleClick(item)}>
          {show
            ? stringCutter(item.descriptions, 25)
            : stringCutter(item.descriptions, 40)}
        </div>
      );
    });

  return (
    <Search show={show}>
      <form className="form">
        <input
          className="input"
          value={search}
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange(e.target.value);
          }}
          onFocus={(e) => handleChange(e.target.value)}
        />
        <FaSearch className="searchIcon" />
      </form>
      {/* search box */}
      {showSearch && search ? (
        <div className="searchList">{searchItems ? searchItems : null}</div>
      ) : null}
    </Search>
  );
}

const Search = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .form {
    width: 100%;
    height: 60px;
    font-size: 13px;

    .input {
      width: 100%;
      padding: 8px 25px;
      border-radius: 5px;
      border: none;
      font-size: 100%;
    }

    :focus {
      outline: none !important;
      border: 2px solid ${color.lightBlue};
    }
  }

  .searchIcon {
    position: absolute;
    top: 23px;
    right: 15px;
    color: ${color.darkBlue};
    cursor: pointer;
  }

  .searchList {
    position: absolute;
    top: 50px;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    height: max-content;
    font-size: 13px;
    color: grey;
    z-index: 100;
    overflow: hidden;

    .item {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      border-bottom: 1px solid #d6d6d6;
      cursor: pointer;
      z-index: 100;
      font-weight: 400;

      &:hover {
        background-color: ${color.lightBlue};
        color: white;
      }
    }

    @media only screen and (max-width: 900px) {
      top: 35px;
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }

  ${(props) =>
    props.show &&
    css`
      .form {
        border: 1px solid #cccccc;
        border-radius: 5px;
        height: 35px;

        .searchIcon {
          top: 10px;
        }
      }

      @media only screen and (max-width: 900px) {
        display: block;
      }
      @media only screen and (max-width: 500px) {
        width: 230px;
      }
    `}
`;

export default SearchBox;
