import React from 'react'
import styled from 'styled-components'

function ResumeSectionTitle({icon, title}) {
    return (
        <ResumeSectionTitleStyled >
            <p>{icon}</p>
            <h3>{title}</h3>
        </ResumeSectionTitleStyled >
    )
}

const ResumeSectionTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`;

export default ResumeSectionTitle
