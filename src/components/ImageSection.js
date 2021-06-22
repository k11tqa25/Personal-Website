import React from 'react'
import styled from 'styled-components';
import profile from '../images/profile_photo.png';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={profile} alt=""/>
            </div>
            <div className="right-content">
                <p className="paragraph">
                    2+ years of industrial working experience as a C# desktop application developer.                 
                    Other experience includes:
                </p>
                <ul>
                    <li>C# Xamarin Mobile Development</li>
                    <li>React Native Mobile Development</li>
                    <li>ReactJS Web Development</li>
                </ul>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                        <p>Qualities</p>
                    </div>
                    <div className="info">
                        <p> Wen-Kai, Tsai</p>
                        <p> 26</p>
                        <p> Taiwan </p>
                        <p> Mandarin, English </p>
                        <p> Los Angeles, California.</p>
                        <p> C# desktop | web development</p>
                        <p> Self-taught coder;  </p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Resume'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        img{
            border-radius: 3rem;
            opacity: 0.9;
            width: 80%;            
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        margin-top: 1rem;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 0 0 0.3rem 0;
        }
        ul{               
            margin: 0 0 1rem 2rem;
            list-style-type: circle;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;