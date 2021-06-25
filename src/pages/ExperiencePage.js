import React, { Component } from 'react';
import Title from '../components/Title';
import {MainLayout} from '../styles/Layouts';
import ExperienceBlock from '../components/ExperienceBlock'
import { job_exp, extracurricular_data } from '../data/ExperienceData';
import styled from 'styled-components';
import CarouselSlide from "../components/CarouselSlide"
import ResumeSectionTitle from '../components/ResumeSectionTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TrophyIcon from '@material-ui/icons/EmojiEvents';

class ExperiencePage extends Component {

    render() {

        const briefcase = <BusinessCenterIcon />
        const trophy = <TrophyIcon/>
    
        return (
             <MainLayout>
                <Title title={'Experience'} span={'experience'} />
                <ExperiencePageStyle>
                     
                     <div className="section-title">
                        <ResumeSectionTitle
                            icon={briefcase}
                            title={"Work Experence"}
                        />
                     </div>
                    <CarouselSlide data={job_exp}>
                        {             
                            job_exp.map((job, id)=>(             
                                <div className='slider-items' key={id}>
                                    <ExperienceBlock Title={job.Title}
                                                     Date={job.Date}
                                                     Image={job.Image} />
                                </div>             
                                ))
                        }
                    </CarouselSlide>
                    <div className="section-title">
                        <ResumeSectionTitle
                            icon={trophy}
                            title={"Extracurricular Activities"}
                        />
                     </div>
                    <CarouselSlide data={extracurricular_data}>
                        {             
                            extracurricular_data.map((data, id)=>(             
                                <div className='slider-items' key={id}>
                                    <ExperienceBlock Title={data.Title}
                                                     Date={data.Date}
                                                     Image={data.Image} />
                                </div>             
                                ))
                        }
                    </CarouselSlide>
                </ExperiencePageStyle>
            </MainLayout>
        );
    }
}

const ExperiencePageStyle = styled.div`
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    transition: all .3s ease-in-out;
    .container{
        width: 100%;  
    }
    .section-title{
        align-self: flex-start;
        margin: 1rem 0 2rem 0; 
    }

    .slider-items{
        transition: all .3s ease-in-out;
        margin-top: 10vh;
        width: 100vw;
        height: 40vh;
        &:hover{            
            transition: height 0.3s ease-in-out;
            height: 65vh;
        }
    }    
`


export default ExperiencePage;