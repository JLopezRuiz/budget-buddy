import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div>
            <span>
                <h1 className="headline-container">Monthly Income:</h1>
                <input type="number" id="assets" name="assets" size="10" placeholder="100" />
            </span>
            <h4 className='subtitle'>Overflow amount: $0</h4>
        </div>
    );  
};

export default Header;