import React from 'react'
import styled from 'styled-components';
import Keyword from './Keyword';

function ResumeItem({year, title, subTitle, keywords, text, bulletPoints}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <div className="keywords">
                    {
                        keywords?keywords.map(k=><Keyword keyword={k}/>):null
                    }
                </div>
                <p>{text}</p>
                <ul>                    
                    {                    
                        bulletPoints?bulletPoints.map(x => <li>{x}</li>):null
                    }
                </ul>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    padding: 1.5rem;
    ul{
        margin-left: 1rem;
        margin-top: .5rem;
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    width: 90%;
    .left-content{
        width: 20%;
        padding-left: 20px;
        position: relative;
        top: .5rem;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 3px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        width: 80%;
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 20px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        .keywords{
            font-size: .5rem;
            display: flex;
            flex-wrap: wrap;
            margin-top: .5rem;
            margin-bottom: 1rem;
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 1200px){
        p, h5, h6{
            font-size: 80%;
        }        
        flex-direction: column;
        align-items: center;
        width: 100%;
        .left-content, .right-content{
            width: 100%; 
            margin: .5rem;
        }
        .right-content::before{
            visibility: hidden;
        }
        .right-content{ 
            padding-left: 0;
        }
    }
`;
export default ResumeItem;
