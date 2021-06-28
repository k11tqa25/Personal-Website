
import React, { Component } from 'react';
import {MainLayout} from '../styles/Layouts';
import Title from '../components/Title';
import ResumeItem from '../components/ResumeItem';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle'
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DownloadIcon from '@material-ui/icons/GetApp';

class ResumePage extends Component {
    render() {
        const briefcase = <BusinessCenterIcon />
        const school = <SchoolIcon />
        const download = <DownloadIcon/>
        return (            
            <MainLayout>
               
                <Title title={'Resume'} span={'Resume'}/>
                <ResumeContainerStyled>             
                    <div className="download-button">  
                        <DownloadButtonStyled href='./Resume.pdf' download target='_blank'>
                            <p className="button-hover-icon">{download}</p>
                            <p className="button-text">DOWNLOAD</p>
                        </DownloadButtonStyled>
                    </div>     
                    <SectionTitle
                        icon={briefcase}
                        title={"Work Experence"}
                    />
                    <ResumeItem
                        year={'2021 Feb-May'}
                        title={'Frontend Developer'}
                        subTitle={'Branche, INC. '}
                        keywords={
                            ['ReactJS','Redux','MySQL','Python Flask', 'Restful API', 'Github Team Collaboration']
                        }
                        text={"Experienced with ReactJS + Redux frontend development and Github version control with the team."}
                        bulletPoints={
                            [
                            <p>Queried and analyzed data from MySQL database with Python sqlalchemy library.</p>,
                            <p>Administered semantic NLP with sentence-BERT library for text embedding and item recommendations.</p>,
                            <p>Built a RESTful API with Python Flask to return the result.</p>,
                            <p>Developed frontend functionalities with ReactJS + Redux.</p>,
                            <p>Experienced with github version control with the team.</p>
                            ]
                        }
                    />
                    <ResumeItem 
                        year={'2017-2019'} 
                        title={'Software Developer'}
                        subTitle={'YoungOptics Inc.'}
                        keywords={
                            ["C# WPF | WinForms","Python PyQt","Design Patterns","SOLID","OOP","ASP.NET Standard Library Development","EmguCV","Image Processing"]
                        }
                        text={`Accomplished developing multiple desktop apps with C# WinForms/ WPF and Python PyQt for clients and product line 
                        while finishing a self-proposed long-term project. Controlled multiple devices to retrieve, visualize, anylize and calibrate the data.`}
                        bulletPoints={
                            [
                            <p>Proposed and completed a long-term project that integrated all image calibration applications into one application, 
                            syncing controls for multiple devices (e.g., CMOS, Linear Motor, Power meter…) with different communication protocols (RS232/ RS485/ RJ45...). 
                            The application was massively used in our product line for its proven quality. The code was refactored during 
                            the development to be more maintainable for my successors.</p>,
                            <p>Devised a new algorithm for image contrast measurement (CTF) with a mathematical approach; a new way of 
                            calibrating the image distortion by conquering the vision-motion tasks; and a new automated way of image 
                            power measurement.</p>,
                            <p>Designed a .Net Standard Logger Manager library and a Task-Based State Machine library for the team. The 
                            libraries were built with builder pattern, strategy pattern, singleton pattern, and multithread programming.</p>,                          
                            <p>Experienced with C# image processing with EmguCV and Python Pillow (for image quality assessment and 
                                image calibration)</p>,
                            <p>Be promoted within less than a year for great problem-solving skills; trained new team members.</p>
                            ]
                        } 
                    />
                    <SectionTitle
                        icon={school}
                        title={"Education"}
                    />
                    <ResumeItem
                        year={'2019-2021'}
                        title={'M.S. in Data Analytics'}
                        subTitle={'University of Southern California'}
                        text={""}
                        bulletPoints={
                        [
                        <p>Compared ML models (Linear Regression, Logistic Regression, SVM, Decision Tree, Random Forest, 
                        XGBoost, NN), performed hyperparameter tuning on all models and practiced cross-validation for model 
                        selection.</p>,
                        <p>Built an NLP-based Recommender System to recommend a stand-up comedian from their scripts and 
                        user comments on videos. Implemented sentence embedding for content-based filtering, SVD and matrix 
                        completion for collaborative and compared the results of different types of unsupervised learning (Latent 
                        Dirichlet Allocation, Gaussian Mixture Model, and KNN.)</p>,
                        <p>Designed an AI agent to play checkers (implemented with ab-pruning algorithm + arc constraints.)</p>,
                        <p>Designed a snowflakes schema for a relational database; exercised complex SQL queries that joined 
                        multiple tables from a PostgreSQL database. </p>
                        ]
                    }
                    />
                    <ResumeItem
                        year={'2013-2017'}
                        title={'B.S. in Mechanical Engineering'}
                        subTitle={'National Taiwan University of Science and Technology'}
                        text={"GPA 3.91/4.0 (Summa Cum Laude)"}   
                    />
                </ResumeContainerStyled>
            </MainLayout>
        );
    }
}

const ResumeContainerStyled = styled.div`
    margin: 2rem 3.5rem 0 3rem;
    /* border: 1px solid red; */
    padding: 5px;
    position: relative;
    .download-button{
        position: absolute;
        top: 0;
        right: 0;
    }
    
    @media screen and (max-width:1200px){       
        padding: 0; 
        .download-button{
            position: relative;
            top: 0;
            right: 0;
        }
    }
`

const DownloadButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    border-radius: 2rem;
    overflow: hidden;    
    color: white;
    .button-hover-icon{
        height: 0;
        text-align: center;
        opacity: 0;       
        transform: translateY(-10px);
    } 
    &:hover{
        .button-text{
            transition: all .4s ease-in-out;
            opacity: 0;
        }
        .button-hover-icon{      
            transition: all .4s ease-in-out;
            opacity: 1;  
            transform: translateY(0px);
        }
    }
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 0;
        transition: all .4s ease-in-out;
        left: 0;
        top: 0;
        opacity: .7;
    }
    &:hover::after{
        height: 100%;
        background-color: var(--white-color);
    }
`;

export default ResumePage;