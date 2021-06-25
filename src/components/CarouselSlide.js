import React from 'react';
import Slider from "react-slick";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import styled from 'styled-components';
import { Component } from 'react';


class CarouselSlide extends Component {
    render(){     
        const NextArrow = ({onClick}) =>{
            return (
                <div className="arrow next" onClick={onClick}>
                    <ArrowForwardIosRoundedIcon/>
                </div>
            )
        }

        const PrevArrow = ({onClick}) =>{
            return (
                <div className="arrow prev" onClick={onClick}>
                    <ArrowBackIosRoundedIcon/>
                </div>
            )
        }

        const DotsStyle = dots => 
            (
                <div>
                    <ul> 
                        {dots}
                    </ul>
                </div>
            )
        
        const PagingStyle = i => (
            <div className="slick-paging-style">
                {this.props.data[i].Title}
            </div>
        )

        const settings = {
            className: "center",
            dots: true,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            appendDots: DotsStyle,
            customPaging: PagingStyle,
        };

        return (
            <CarouselSlideStyle>
                <Slider {...settings} className='container'>
                    {this.props.children}
                </Slider>
            </CarouselSlideStyle>
        );
       
    }
}

const CarouselSlideStyle = styled.div`
    width: 100%;
    .arrow{
        position: absolute;
        cursor: pointer;
        height: 50vh;
        top: 10vh;
        width: 10vw;
        z-index: 10;
        opacity: 0;
        transition: all .3s ease-in-out;
        svg{
            height: 50vh;
            transform: scaleY(3) scaleX(2);
        }
    }
    &:hover{
        .arrow{
            transition: all .3s ease-in-out;
            opacity: .85;
        }
    }

    .next{
        right: 0;
        text-align: right;
    }

    .slick-dots{
        position: absolute;
        top: 0;
        height: 10vh;
        
        .slick-paging-style{
            transition: all .3s ease-in-out;
            width: 15vw;
            height: 5vh;
            font-size: 3vh;
            display:table-cell;
            text-align: center;
            vertical-align:middle;    
            color: white;
            background-color: var(--secondary-color);
            border-radius: 10px;
            opacity: .85;
        }
        ul{            
            display: flex;                      
            justify-content: flex-start;
            li{
                width: auto;
            }
            .slick-active{             
                .slick-paging-style{
                    transition: all .3s ease-in-out;
                    background-color: var(--primary-color);
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px var(--background-light-color);
                }   
            }

        }
    }
`

export default CarouselSlide;