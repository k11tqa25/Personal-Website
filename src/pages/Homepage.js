import React, { Component } from 'react';
import styled from 'styled-components'
import Particle from '../components/Particles';
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

class Homepage extends Component {
    
    render() {
        return (
            <HomepageStyled>
                <div className="p-particles-js">
                    {this.props.theme === 'dark-theme'?                    
                    <Particle color={"#FFFFFF"}/>:                    
                    <Particle color={"#121212"}/>
                    }
                </div>
                <div className="typography">
                    <h1>HI! THIS IS <span>KEVIN.</span></h1>
                    <p>
                        C# WinsForm | WPF | Web Developer
                    </p>
                    <div className="icons">
                        <a href="https://github.com/k11tqa25" target=" " className="icon i-github">
                            <GithubIcon/>
                        </a>
                        <a href="https://www.linkedin.com/in/wenkai-tsai/" target=" " className="icon i-linkedin">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </HomepageStyled>
        );
    }
}

const HomepageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
    }

    .typography{
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;        
        .icons{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin: .2rem;
                transition: all .1s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                svg{
                    margin: .4rem;
                }
            }
        }
    }

    span{
        font-size: inherit;
    }
`

export default Homepage;