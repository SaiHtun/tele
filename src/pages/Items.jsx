import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SPECIFIC_ITEMS } from "../queries/query";
import { NavContext } from "../context/NavContext";

//  variables
import { color, fontSize } from "../constants/variables";
// components
import Item from "../components/Item";

const ItemsContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  height: max-content;
  background-color: white;

  ${(props) =>
    props.open &&
    css`
      min-height: 90vh;
      overflow-y: hidden;
    `}

  .container {
    width: 80vw;
    margin: auto;

    @media only screen and (max-width: 500px) {
      width: 100vw;
    }
  }

  .ads {
    width: 100%;
    height: 300px;
    background-color: salmon;
    position: relative;
  }

  .title {
    display: inline-block;
    position: relative;
    margin: 30px 0px;

    ::after {
      content: "";
      position: absolute;
      bottom: -7px;
      left: 0;
      right: 0;
      height: 3px;
      width: 100px;
      background-color: ${color.lightBlue};
      transition: all 0.5s ease-in-out;
    }

    :hover::after {
      width: 100%;
    }

    @media only screen and (max-width: 500px) {
      margin: 15px;
      font-size: 16px;
    }
  }

  .itemList {
    margin: 0px 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 250px));
    justify-items: center;

    @media only screen and (max-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(170px, 172px));
      margin: 0 15px;
    }
  }
`;

const Filter = styled.div`
  width: 300px;
  font-size: 14px;
  margin-bottom: 20px;

  @media only screen and (max-width: 500px) {
    margin: 15px 0px 20px 15px;
  }

  .form {
    width: 100%;

    select {
      width: 100%;
      font-size: 100%;
    }
    input[type="range"] {
      margin: 5px;
    }
  }
`;

const StyledError = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getHeader = (i) => {
  if (i === "smartphoneandwatch") {
    return "Smart phone and watch";
  } else if (i === "accessories") {
    return "Accessories";
  } else if (i === "smarttv") {
    return "Smart TV";
  } else {
    return "Electronics";
  }
};

function Items() {
  const [array, setArray] = useState([]);
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { openNav } = useContext(NavContext);
  const { items } = useParams();

  // const abortController = new AbortController();

  const { loading, error, data } = useQuery(GET_SPECIFIC_ITEMS, {
    variables: { items: items },
  });

  useEffect(() => {
    setArray(data?.itemsCollection.items);
    let priceArray = data?.itemsCollection?.items.map((item) => item.price);
    let defaultPrice = data ? Math.max(...priceArray) : null;
    let minPrice = data ? Math.min(...priceArray) : null;
    defaultPrice && setPrice(defaultPrice);
    defaultPrice && setMaxPrice(defaultPrice);
    minPrice && setMinPrice(minPrice);
  }, [data]);

  if (error) return <div>{error.message}</div>;

  const allItems = () => {
    if (loading) {
      return <div className="loading">Loading...</div>;
    } else if (error) {
      console.error(error.message);
    } else {
      return (
        array.length > 0 &&
        array.map((item) => {
          return <Item key={item.id} item={item}></Item>;
        })
      );
    }
  };

  const getUnique = (property) => {
    return new Set(data?.itemsCollection.items.map((item) => item[property]));
  };

  // get min and max price;
  // let priceArray = data?.itemsCollection.items.map((item) => item.price);
  // let minPrice = data ? Math.min(...priceArray) : null;
  // let maxPrice = data ? Math.min(...priceArray) : null;

  let brands = getUnique("brand");

  let AllBrands = ["all", ...brands].map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // handle change for "select brand filter"
  const handleChange = (e) => {
    let temp = [...data?.itemsCollection.items];
    if (e.target.name === "brand") {
      setBrand(e.target.value);
      if (e.target.value !== "all") {
        temp = temp.filter((item) => item.brand === e.target.value);
        setArray(temp);
        return;
      }
      setArray(temp);
    } else if (e.target.name === "price") {
      setPrice(Number(e.target.value));
      // console.log(
      //   "input value",
      //   typeof Number(e.target.value) === typeof price
      // );
      // console.log(typeof price);
      if (Number(e.target.value) !== price) {
        if (brand !== "all") {
          temp = temp.filter(
            (item) => item.price <= e.target.value && item.brand === brand
          );
          setArray(temp);
        } else {
          temp = temp.filter((item) => item.price <= e.target.value);
        }
      }
      setArray(temp);
    }

    // let temp = [...data?.itemsCollection.items];
    // if (e.target.value !== "all") {
    //   temp = temp.filter((item) => item.brand === e.target.value);
    //   setArray(temp);
    // }
    // setArray(temp);
  };

  return (
    <ItemsContainer open={openNav}>
      <div className="ads"></div>
      <div className="container">
        <h3 className="title">{array && getHeader(items)}</h3>
        <Filter>
          <form className="form">
            <select
              name="brand"
              value={brand}
              onChange={(e) => handleChange(e)}
            >
              {AllBrands}
            </select>
            <input
              type="range"
              name="price"
              min={`${minPrice}`}
              max={`${maxPrice}`}
              value={`${price}`}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span>{price}</span>
          </form>
        </Filter>
        {array && array.length > 0 ? (
          <div className="itemList">{allItems()}</div>
        ) : (
          <div>No items</div>
        )}
      </div>
    </ItemsContainer>
  );
}

export default Items;
