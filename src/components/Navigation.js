import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import avatar from '../images/avatar.jpg'

function Navigation(props) {
    return (
        <NavigationStyled>
            <div className='avatar'>
                <div className='avatar-img-cropper'>
                    <img src={avatar} alt=""/>            
                </div>
            </div>
            <ul className='nav-items'>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/' activeClassName='active-class' exact>HOME</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/about' activeClassName='active-class' exact>ABOUT</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/resume' activeClassName='active-class' exact>RESUME</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/experience' activeClassName='active-class' exact>EXPERIENCE</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/portfolio' activeClassName='active-class' exact>PORTFOLIO</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to='/Personal-Website/contact' activeClassName='active-class' exact>CONTACT</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Kevin's Portfolio Website</p>
            </footer>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);    
    .active-class{
        background-color: var(--primary-color);
    }

    .avatar{
        width: 70%;
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;
        .avatar-img-cropper {
            width: 100%;
            padding-top: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
            border: 8px solid var(--border-color);    
            img{
                position: absolute;
                top: -40px;
                left: 0;
                bottom: 0;
                right: 0;
                height: auto;
                width: 100%;
            }
        }        
    }

    .nav-items{
        width: 100%;
        text-align: center;
        li{
            display: block;
            a{
                display: block;
                padding: .4rem 0;
                position: relative;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &:before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: var(--primary-color);
                    transition: All 0.3s cubic-bezier(.85,-0.03,.21,1.04);
                    opacity: .2;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }   
    
    footer{
        p{
            padding: 1rem 0;
            font-size: 0.5rem;
            text-align: center;
        }
    }
`

export default Navigation;