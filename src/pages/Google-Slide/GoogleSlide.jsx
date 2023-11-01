import React, { useState } from 'react';
import './GoogleSlide.css';

const GoogleSlide = () => {
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
    <div>
      <button className="addButton" onClick={addField}>Add</button>
      <button className="stopButton" onClick={stopAddingField}>Stop</button>

      {addingField && (
        <div className="card">
          <label htmlFor="fieldName">Field Name:</label>
          <input type="text" id="fieldName" value={inputName} onChange={handleNameChange} />
          <select value={inputType} onChange={handleTypeChange}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>
          <button className="addFieldButton" onClick={addFieldToForm}>Add Field</button>
        </div>
      )}
      {fields.map((field, index) => (
        <div>
          <label htmlFor={`field-${index}`}>{field.name}</label>
          <input type={field.type} id={`field-${index}`} name={`field-${index}`} />
        </div>
))}

    </div>
  );
};

export default GoogleSlide;
