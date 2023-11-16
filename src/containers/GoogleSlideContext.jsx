// GoogleSlideContext.js
import React, { createContext, useContext, useState } from 'react';

const GoogleSlideContext = createContext();

export const GoogleSlideProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('text');

  const addField = (newField) => {
    setFields((prevFields) => [...prevFields, newField]);
  };

  const clearFields = () => {
    setFields([]);
  };

  return (
    <GoogleSlideContext.Provider
      value={{
        fields,
        inputName,
        inputType,
        setInputName,
        setInputType,
        addField,
        clearFields,
      }}
    >
      {children}
    </GoogleSlideContext.Provider>
  );
};

export const useGoogleSlideContext = () => {
  const context = useContext(GoogleSlideContext);
  if (!context) {
    throw new Error('useGoogleSlideContext must be used within a GoogleSlideProvider');
  }
  return context;
};
