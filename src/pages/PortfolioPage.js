import React, { Component } from 'react';
import Title from '../components/Title';
import {MainLayout} from '../styles/Layouts';

class PortfolioPage extends Component {
    render() {
        return (
             <MainLayout>
                <Title title={'Portfolio'} span={'portfolio'} />
            </MainLayout>
        );
    }
}

export default PortfolioPage;