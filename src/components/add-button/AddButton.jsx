import './AddButton.css';
import React from 'react';

const AddButton = ({tooltiptext}) => (
    <button className='tooltip'>+<span className='tooltiptext'>{tooltiptext}</span></button>
);

export default AddButton;