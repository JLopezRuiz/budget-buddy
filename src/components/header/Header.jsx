import PropTypes from 'prop-types';
import './Header.css';

const Header = ({headline, subtitle}) => {
    return (
        <div>
            <span className="headline-container">
                <h1>{headline}</h1>
                <input type="number" id="assets" name="assets" size="10" placeholder="100"/>
            </span>
            <h3 className='subtitle'>{subtitle}</h3>
        </div>
    );  
};

Header.propTypes = {
    headline: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Header;