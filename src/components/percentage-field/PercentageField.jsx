import './PercentageField.css';
import React from 'react';

const PercentageField = ({fieldContent}) => {
    return (
        <div className='field-container'>
            <h4 className='field-content'>{fieldContent}</h4>
        </div>
    );
};

export default PercentageField;