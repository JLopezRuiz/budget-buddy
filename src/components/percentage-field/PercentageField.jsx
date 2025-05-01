import './PercentageField.css';
import PropTypes from 'prop-types';

const PercentageField = ({fieldContent}) => {
    return (
        <div className='field-container'>
            <h4 className='field-content'>{fieldContent}</h4>
        </div>
    );
};

PercentageField.propTypes = {
    fieldContent: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
};
export default PercentageField;