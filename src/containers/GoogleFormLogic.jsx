import React, { useState } from 'react';
import GoogleSlideUI from '../pages/Google-Slide/GoogleSlideUI';

const GoogleSlideLogic = () => {
  const [fields, setFields] = useState([]);
  const [addingField, setAddingField] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('text');

  const addField = () => {
    setAddingField(true);
  };

  const stopAddingField = () => {
    setAddingField(false);
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
