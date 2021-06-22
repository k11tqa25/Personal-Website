import React from 'react';
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    );
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        /* &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 24rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
        } */
        span{
            font-weight: 700;
            color: var(--background-light-color-2);
            font-size: 3.8rem;
            position: absolute;
            left: 1rem;
            top: 1rem;
            z-index: -1;
        }
    }
`

export default Title;