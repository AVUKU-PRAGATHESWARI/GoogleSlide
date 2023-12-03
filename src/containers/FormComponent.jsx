// FormComponent.js
import React from 'react';

const FormComponent = ({ fields }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Form</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.name}</label>
          {field.type === 'text' && (
            <input type="text" id={field.name} name={field.name} />
          )}
          {field.type === 'textarea' && (
            <textarea id={field.name} name={field.name} />
          )}
          {/* Add more field type checks as needed */}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
