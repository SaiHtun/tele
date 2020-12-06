import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_ITEM } from '../queries/query';
import { useParams, Link } from 'react-router-dom';
import { NavContext } from '../context/NavContext';
//  variables
import { color, fontSize } from '../constants/variables';

const ItemsContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    height: max-content;
    background-color: white;

    ${(props) => props.open && css`
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
        margin: 50px 0px;

        .category {
            :hover {
                border-bottom: 1px solid grey;
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
        margin: 30px 0px;

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

            .itemMoreInfo {
                margin: 10px 0px;
                list-style: none;
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
    if(i === "smartphoneandwatch") {
        return "Smart phone and watch"
    }else if(i === "accessories") {
        return "Accessories"
    }else if(i === "smarttv") {
        return "Smart TV"
    }else {
        return "Electronics"
    }
}

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
    const { loading, error, data } = useQuery(GET_ITEM, { variables: { itemId: itemId }});

    if(loading) return <Loading>Loading..</Loading>
    if(error) return <div>{ error.message }</div>

    return (
        <>
            { data?.items? (
                <ItemsContainer open={ openNav }>
                    <div className="container">
                        <h3 className="header"><Link to={`/${category}`}><span className="category">{ getHeader(data?.items.category) } </span>  </Link> <small> {">"} </small> <span>{ data?.items.name }</span></h3>
                        <h3 className="itemName">{data?.items.name}</h3>
                        <div className="item">
                            <img className="itemImg" src={`${data?.items.image.url}`} alt={`${data?.items.name}`}/>
                            <div className="itemInfo"> 
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam tenetur totam quas? Omnis nesciunt sed repudiandae pariatur in assumenda! </p>
                                <ul className="itemMoreInfo">
                                    <li>Discount: {`${data?.items.discount? data.items.discount + "%": "No"}`}</li>
                                    <li>Best Seller: {`${data?.items.bestseller? "Yes": "No"}`}</li>
                                    <li>Price: {`${data?.items.price}`} Kyats</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ItemsContainer>
            ) : (
                <StyledError > <h3>you are lost, go back <Link to="/">Home</Link></h3> </StyledError>
            )}
        </>
    )
}

export default Item
