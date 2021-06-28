import React from 'react'
import styled from 'styled-components'

function SectionTitle({icon, title}) {
    return (
        <SectionTitleStyled >
            <p>{icon}</p>
            <h2>{title}</h2>
        </SectionTitleStyled >
    )
}

const SectionTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    /* h2{
        color: var(--white-color);
        font-size: 2rem;
    } */
`;

export default SectionTitle
