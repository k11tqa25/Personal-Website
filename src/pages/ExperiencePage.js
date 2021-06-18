import React, { Component } from 'react';
import Title from '../components/Title';
import {MainLayout} from '../styles/Layouts';

class ExperiencePage extends Component {
    render() {
        return (
             <MainLayout>
                <Title title={'Experience'} span={'experience'} />
            </MainLayout>
        );
    }
}

export default ExperiencePage;