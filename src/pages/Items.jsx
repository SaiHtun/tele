import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SPECIFIC_ITEMS } from '../queries/query';
import { NavContext } from '../context/NavContext';
//  variables
import { color, fontSize } from '../constants/variables';
// components
import Item from '../components/Item';

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
            right:0;
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

function Items() {
    const { openNav } = useContext(NavContext);
    const { items } = useParams();
    const { loading, error, data } = useQuery(GET_SPECIFIC_ITEMS, { variables: { items: items}});
    
    if(error) return <div>{ error.message }</div>


    const allItems = () => {
        if(loading ) {
            return (
                <div className="loading">Loading...</div>
            )
        }else if(error) {
            console.error(error.message)
        }else {
            return data.itemsCollection.items.map((item) => {
                return (
                    <Item key={item.id} item={item}></Item>
                )
            })
        }
    }

    return (
        <>
            { data?.itemsCollection.items.length > 0 ? (
                <ItemsContainer open={ openNav }>
                    <div className="ads"></div>
                    <div className="container">
                        <h3 className="title">{ data && getHeader(items)}</h3>
                        <div className="itemList">
                            { allItems() }
                        </div>
                    </div>
                </ItemsContainer>

            ) : (
                <StyledError > <h3>you are lost, go back <Link to="/">Home</Link></h3> </StyledError>
            )}
        </>
    )
}

export default Items
