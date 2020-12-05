import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
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
    top: 0;
    left: 0;
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

        li:not(:first-child):hover {
            color: #807f7f;
        }

        li:first-child {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

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
    const history = useHistory();

    const home = () => {
        setOpenNav(false);
        history.push('/');
    }

    return (
        <MenuContainer open={openNav} >
            <ul>
                <li><span className="telemart" onClick={() => home()} ><p>T</p>elemart</span>  <span className="close" onClick={() => setOpenNav(false)}>X Close</span> </li>
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
