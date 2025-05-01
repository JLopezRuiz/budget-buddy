import './AddButton.css';
import PropTypes from 'prop-types';

const AddButton = ({tooltiptext, onClick, symbol}) => (
    <button className='tooltip' onClick={onClick}>{symbol}<span className='tooltiptext'>{tooltiptext}</span></button>
);

AddButton.propTypes = {
    tooltiptext: PropTypes.string,
    onClick: PropTypes.func,
    symbol: PropTypes.string,
};

AddButton.defaultProps = {
    onClick: () => {},
    symbol: '+',
};

export default AddButton;