import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function ExperienceBlock({Title, Date, Image}) {
    return (
        <NavLink to={`/Personal-Website/${Title.toLowerCase()
                                        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")
                                        .replaceAll(' ','-')}`}>
            <CardStyle>
                <img src={Image} alt=""/>
                <div className="overlap-content">
                    <div className="content">
                        <h2>{Title}</h2>
                        <h5>{Date}</h5>
                    </div>
                </div>

            </CardStyle>
        </NavLink>
    );
}

const CardStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0;
    img{
        transition: all .4s ease-in-out;
        border-radius: .2rem;
        opacity: 0.8;
        width: 45vw;
        height: 50vh;
        object-fit: fill;
        box-shadow: 0 10px 20px var(--background-light-color);
    }
    .overlap-content{
        transition: all .3s ease-in-out;
        position: absolute;
        width: 45vw;
        height: 6.5rem;
        text-align: center;
        bottom: 1.5rem;
        z-index: 10;
        background-color: var(--background-overlap-color); 
        padding: .5rem;
        .content{
            opacity: 1;
        }
    }
    h2, h5{
        color: var(--font-dark-color-2);
    }
    &:hover{
        img{
            transition: all .4s ease-in-out;
            transform: translateY(-1rem);
            border-radius: .2rem .2rem 0 0;
        }
        .overlap-content{
            transition: all .3s ease-in-out;
            bottom: 0;
            transform: translateY(5.5rem);
            background-color: var(--primary-color); 
            opacity: .8;
            box-shadow: 0 10px 20px var(--background-light-color);
            border-radius: 0 0 .5rem .5rem;
        }
    }

`


export default ExperienceBlock;