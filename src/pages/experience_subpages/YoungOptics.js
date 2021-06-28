import React, { Component } from 'react';
import {MainLayout, BlogContentStyle} from '../../styles/Layouts';
import BlogTitle from '../../components/BlogTitle'
class YoungOptics extends Component {
    render() {
        return (
            <MainLayout>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <BlogTitle Title="Young Optics"/>
                </div>
                <BlogContentStyle>
                    <div className="brief-intro-container">
                        <ul className="none-style-list">
                            <li>Position: R&D Software Enginner</li>
                            <li>
                                Description:
                                <ul>
                                    <li> Built C# WinForms | WPF desktop apps for clients and our product line.</li>
                                    <li> Controlled multiple devices and performed image processing for 
                                        projected image calibration, quality assessment, power measurement, and read-time 
                                        data acquisition with analysis.</li>
                                    <li> Worked close with hardware and firmware groups to give solutions to projects.</li>
                                </ul>
                               
                            </li>
                            
                        </ul>
                    </div>
                </BlogContentStyle>                
            </MainLayout>
        );
    }
}

export default YoungOptics;