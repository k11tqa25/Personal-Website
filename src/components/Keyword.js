import React from 'react';
import styled from 'styled-components';

function Keyword({keyword}) {
    return (
        <KeywordStyled>
            {keyword}
        </KeywordStyled>
    );
}

const KeywordStyled = styled.div`
    background-color: var(--background-light-color);
    text-align: center;    
    border-radius: 2rem;
    width: auto;
    padding: .2rem 1rem .2rem 1rem;
    margin: 0 .5rem .5rem 0;
    font-size: 1rem;
    font-weight: bold;
    color: var(--font-dark-color-2);
    @media screen and (max-width: 1200px){
        font-size: .9rem;
    }
    &:hover{        
        transition: all .1s ease-in-out;
        background-color: var(--primary-color-light);
        transform: translateX(3%) translateY(-3%);
    }
`

export default Keyword;