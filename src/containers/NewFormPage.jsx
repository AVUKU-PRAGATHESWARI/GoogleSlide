import React, { useState } from 'react';
import { useNavigate, useParams, Routes, Route } from 'react-router-dom';
import GoogleSlideUI from '../pages/Google-Slide/GoogleSlideUI';

// Add an additional component for the new form page
const NewFormPage = ({ formId }) => {
  // You can use the formId to fetch data or perform other actions specific to the form
  return (
    <div>
      <h2>Form Page for ID: {formId}</h2>
      {/* Add your form rendering logic here */}
    </div>
  );
};

const GoogleSlideLogic = () => {
  const [fields, setFields] = useState([]);
  const [addingField, setAddingField] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('text');
  const navigate = useNavigate();
  const { id } = useParams();

  const addField = () => {
    setAddingField(true);
  };

  const stopAddingField = () => {
    setAddingField(false);
    const newId = generateUniqueId();
    navigate(`/form/${newId}`);
  };

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setInputType(event.target.value);
  };

  const addFieldToForm = () => {
    if (inputName !== '') {
      setFields([...fields, { name: inputName, type: inputType }]);
      setInputName('');
      setInputType('text');
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GoogleSlideUI
            fields={fields}
            addingField={addingField}
            inputName={inputName}
            inputType={inputType}
            handleNameChange={handleNameChange}
            handleTypeChange={handleTypeChange}
            addFieldToForm={addFieldToForm}
            addField={addField}
            stopAddingField={stopAddingField}
          />
        }
      />
      {/* Add a route for the new form page */}
      <Route path="/form/:formId" element={<NewFormPage />} />
    </Routes>
  );
};

export default GoogleSlideLogic;
