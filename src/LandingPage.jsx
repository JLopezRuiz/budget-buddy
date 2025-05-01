import { useState } from 'react';
import './LandingPage.css';
import Header from './components/header/Header';
import PercentageField from './components/percentage-field/PercentageField';
import AddButton from './components/add-button/AddButton';

const LandingPage = () => {
    const [fields, setFields] = useState([]);

    const handleAddField = () => {
        // Logic to add a new field
        const newField = {
            id: fields.length + 1,
            content: "New Field"
        };
        setFields([...fields, newField]);
    };

    const handleDeleteField = () => {
        // Logic to delete a field
        console.log("Delete field");
    };
    const handleEditField = () => {
        // Logic to edit a field
        console.log("Edit field");
    };
    const handleSaveField = () => {
        // Logic to save a field
        console.log("Save field");
    };
    const handleCancelField = () => {
        // Logic to cancel a field
        console.log("Cancel field");
    };//
    return (
        <div className="container">
            <Header headline="Monthly Net Income:" subtitle="Overflow amount: $0" />
            <div className="fields">
                {fields.map((field) => (
                    <PercentageField
                        key={field.id}
                        fieldContent={field.content}
                        onDelete={handleDeleteField}
                        onEdit={handleEditField}
                        onSave={handleSaveField}
                        onCancel={handleCancelField}
                    />
                ))}
            </div>
            <AddButton tooltiptext="Add another field" onClick={handleAddField}/>
        </div>
    );
};

export default LandingPage;