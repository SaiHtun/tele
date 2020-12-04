import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { color } from '../constants/variables';
import { NavContext } from '../context/NavContext';
import { FaFacebookSquare, FaInstagram, FaGlobeAfrica } from 'react-icons/fa';

const MenuContainer = styled.div`
    width: 350px;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 100;
    transform: translateX(-400px);
    transition: transform 0.5s ease-in;    
    
    ul {
        margin-top: 50px;
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

        li:first-child {
            width: 100%;
            color: #d3697b;
            cursor: pointer;
            text-align: right;
        }

       
        
    }
    .info {
        height: 100px;
        text-align: center;
        .social {
            width: 100%;
            font-size: 1.3em;

            .fb {
                color: #3b5998
            }
            .in {
                color: #8a3ab9;
            }
            .web {
                color: grey;
            }
            
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

        height: 80vh;
    }
`;




function Menu() {
    const { openNav, setOpenNav } = useContext(NavContext);

    return (
        <MenuContainer open={openNav} >
            <ul>
                <li onClick={() => setOpenNav(false)} > X Close</li>
                <li>Deals</li>
                <li>Best Seller</li>
                <li>Phone and Watch</li>
                <li>Gadget and Accessories</li>
                <li>Smart Tv</li>
                <li>Electronics</li>
            </ul>
            <div className="info">
                <p className="social"><FaFacebookSquare className="fb" /> <FaInstagram className="in"/> <FaGlobeAfrica className="web"/></p>
                <p> +415 345 9879</p>
            </div>
        </MenuContainer>
    )
}

export default Menu
