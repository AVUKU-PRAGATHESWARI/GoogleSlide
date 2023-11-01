import React from 'react';
import './GoogleSlide.css';

const GoogleSlideUI = ({
  fields,
  addingField,
  inputName,
  inputType,
  handleNameChange,
  handleTypeChange,
  addFieldToForm,
  addField,
  stopAddingField
}) => {
  return (
    <div>
      <button className="addButton" onClick={addField}>
        Add
      </button>
      <button className="stopButton" onClick={stopAddingField}>
        Stop
      </button>

      {addingField && (
        <div className="card">
          <label htmlFor="fieldName">Field Name:</label>
          <input type="text" id="fieldName" value={inputName} onChange={handleNameChange} />
          <br/>
          <br/>
          <label htmlFor='fieldtype'>Field Type:</label>
            <select value={inputType} onChange={handleTypeChange}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="checkbox">CheckBox</option>
            <option value="radio">RadioButtons</option>
          </select>
          <button className="addFieldButton" onClick={addFieldToForm}>
            Add Field
          </button>
        </div>
      )}
      <div className='card'>
        <h1 className='Entered-Detailes'>Entered Details:</h1>
        {fields &&
          fields.length > 0 &&
          fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={`field-${index}`}>{field.name}</label>
              <input type={field.type} id={`field-${index}`} name={`field-${index}`} />
            </div>
          ))}
          <br/>
      </div>
    </div>
  );
};

export default GoogleSlideUI;
