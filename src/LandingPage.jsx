import './LandingPage.css';
import React from 'react';
import Header from './components/header/Header';
import PercentageField from './components/percentage-field/PercentageField';
import AddButton from './components/add-button/AddButton';

const LandingPage = () => {
    return (
        <div className='container'>
            <Header headline="Monthly After-Tax Income" subtitle="Overflow amount: $0"/>
            <div>
                <PercentageField fieldContent="Essential Expenses: 50% = $50"/>
            </div>
            <AddButton tooltiptext="Add another field"/>
        </div>
    );
};

export default LandingPage;