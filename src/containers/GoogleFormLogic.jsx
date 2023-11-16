// GoogleSlideLogic.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GoogleSlideUI from '../pages/Google-Slide/GoogleSlideUI';
import { v4 as uuidv4 } from 'uuid';


const GoogleSlideLogic = () => {
  const [fields, setFields] = useState([]);
  const [addingField, setAddingField] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('text');
  const navigate = useNavigate();
  const { id } = useParams();

  const generateUniqueId = () => {
    return uuidv4();
  };
  

  const addField = () => {
    setAddingField(true);
  };

  const stopAddingField = () => {
    setAddingField(false);
    const newId = generateUniqueId(); // Implement your unique ID generation logic
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
  );
};

export default GoogleSlideLogic;
