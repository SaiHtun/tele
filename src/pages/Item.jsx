import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ITEM } from "../queries/query";
import { useParams, Link, useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
//  variables
import { color, fontSize } from "../constants/variables";
// import functions
import { currencyFormatter } from "../utility/functions";
// icons
import { FaArrowAltCircleLeft } from "react-icons/fa";
// components
import Footer from "../components/Footer";

const ItemsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  background-color: white;

  ${(props) =>
    props.open &&
    css`
      max-height: 80vh;
      overflow-y: hidden;
    `}

  .container {
    width: 80vw;
    margin: auto;
  }

  .header {
    display: inline-block;
    position: relative;
    margin-top: 65px;
    margin-bottom: 40px;
    display: inline-block;

    .category {
      color: ${color.lightBlue};
      :hover {
        border-bottom: 1px solid #d6d6d6;
      }
    }

    small {
      margin: 0px 5px;
      color: grey;
    }

    @media only screen and (max-width: 500px) {
      font-size: 15px;
    }
  }

  .itemName {
    /* width: 150px; */
    border-bottom: 1px solid #c2c0c0;
  }
  /*  Item's Image */
  .item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;

    @media only screen and (max-width: 500px) {
      margin: 0px 0px 20px 0px;
    }

    .itemImg {
      /* flex: 1; */
      width: 400px;
      object-fit: contain;

      @media only screen and (max-width: 500px) {
        margin: 15px 0;
        width: 300px;
      }
    }

    .itemInfo {
      width: 500px;
      padding: 20px;
      line-height: 20px;

      .itemMoreInfo {
        margin: 20px 0px;
        list-style: none;

        span {
          font-weight: bold;
        }
      }
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

const Loading = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Item() {
  const { openNav } = useContext(NavContext);
  const { category, itemId } = useParams();
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { itemId: itemId },
  });
  const history = useHistory();

  if (loading) return <Loading>Loading..</Loading>;
  if (error) return <div>{error.message}</div>;

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {data?.items ? (
        <ItemsContainer open={openNav}>
          <div className="container">
            <h3 className="header">
              <Link
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  width: "80px",
                  marginBottom: "15px",
                }}
                onClick={handleGoBack}
              >
                <FaArrowAltCircleLeft></FaArrowAltCircleLeft>{" "}
                <span style={{ marginLeft: "5px" }}>Back</span>
              </Link>
              <Link to={`/${category}`}>
                <span className="category">
                  {getHeader(data?.items.category)}{" "}
                </span>{" "}
              </Link>{" "}
              <small> {">"} </small> <span>{data?.items.name}</span>
            </h3>
            <h3 className="itemName">{data?.items.name}</h3>
            <div className="item">
              <img
                className="itemImg"
                src={`${data?.items.image.url}`}
                alt={`${data?.items.name}`}
              />
              <div className="itemInfo">
                <p> {data.items.descriptions} </p>
                <ul className="itemMoreInfo">
                  <li>
                    <span>Discount</span>:{" "}
                    {`${
                      data?.items.discount ? data.items.discount + "%" : "No"
                    }`}
                  </li>
                  <li>
                    <span>Best Seller</span>:{" "}
                    {`${data?.items.bestseller ? "Yes" : "No"}`}
                  </li>
                  {data?.items.discount ? (
                    <>
                      <li>
                        <span>Original Price</span>:{" "}
                        {currencyFormatter(data?.items.price)} Kyats
                      </li>
                      <li>
                        <span>Final Price</span>:{" "}
                        {currencyFormatter(
                          Math.floor(
                            data?.items.price -
                              data?.items.price * (data.items.discount / 100)
                          )
                        )}{" "}
                        Kyats
                      </li>
                    </>
                  ) : (
                    <li>
                      <span>Price</span>: {currencyFormatter(data?.items.price)}{" "}
                      Kyats
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </ItemsContainer>
      ) : (
        <StyledError>
          {" "}
          <h3>
            you are lost, go back <Link to="/">Home</Link>
          </h3>{" "}
        </StyledError>
      )}
      <MarginDiv />
      <Footer></Footer>
    </div>
  );
}

const MarginDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;

  @media only screen and (max-width: 500px) {
    height: 50px;
  }
`;

export default Item;
