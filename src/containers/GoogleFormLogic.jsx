// GoogleSlideLogic.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GoogleSlideUI from '../pages/Google-Slide/GoogleSlideUI';
import FormComponent from './FormComponent'; // Import the dynamically created form component
import { v4 as uuidv4 } from 'uuid';
import { useGoogleSlideContext } from './GoogleSlideContext';


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

  const FormComponentWithFields = () => <FormComponent fields={fields} />;


  const addField = () => {
    setAddingField(true);
  };

  const stopAddingField = () => {
    const newId = generateUniqueId();
    setFields((prevFields) => [...prevFields, { id: newId, name: inputName, type: inputType }]);
    setInputName('');
    setInputType('text');

    // Dynamically create the form component and update the state
    const FormComponentWithFields = () => <FormComponent fields={fields} />;
    FormComponent(<FormComponentWithFields />);
  
    // Navigate to the new form
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
      setAddingField(false); // Reset addingField state after adding a field
    }
  };

  useEffect(() => {
    // You can perform any additional logic here when fields are updated
    // For example, update the form in the UI
    console.log('Form fields updated:', fields);
  }, [fields]);

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
