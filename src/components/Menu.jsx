import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { color } from '../constants/variables';
import { NavContext } from '../context/NavContext';

const MenuContainer = styled.div`
    width: 350px;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 10;
    transform: translateX(-400px);
    transition: transform 0.5s ease-in;    
    
    ul {
        margin-top: 100px;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        list-style: none;
        font-weight: bold;
        letter-spacing: 1.2px;

        li:hover {
            color: #807f7f;
        }
    }


    ${ props => props.open && css `
        transform: translateX(0px);
    `} 

    @media only screen and (max-width: 500px) {
        width: 230px;

        ul {
            font-size: 13px;
        }
    }
`;



function Menu() {
    const { openNav } = useContext(NavContext);

    return (
        <MenuContainer open={openNav} >
            <ul>
                <li>Deals</li>
                <li>Best Seller</li>
                <li>Phone and Watch</li>
                <li>Gadget and Accessories</li>
                <li>Smart Tv</li>
                <li>Electronics</li>
            </ul>
        </MenuContainer>
    )
}

export default Menu
