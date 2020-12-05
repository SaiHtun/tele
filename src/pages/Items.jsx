import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SPECIFIC_ITEMS } from '../queries/query';
//  variables
import { color, fontSize } from '../constants/variables';
// components
import Item from '../components/Item';

const ItemsContainer = styled.div`
    width: 100%;
    height: max-content;
    background-color: white;

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
        margin: 0px 30px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 220px));
        justify-items: center;

        @media only screen and (max-width: 500px) {
            grid-template-columns: repeat(auto-fit, minmax(170px, 172px));
            margin: 0 15px;
        }
    }
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
    const { items } = useParams();
    const { loading, error, data } = useQuery(GET_SPECIFIC_ITEMS, { variables: { items: items}});
    
    // console.log(data);

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
        <ItemsContainer>
            <div className="ads"></div>
            <div className="container">
                <h3 className="title">{ data && getHeader(items)}</h3>
                <div className="itemList">
                    { allItems() }
                </div>
            </div>
        </ItemsContainer>
    )
}

export default Items
