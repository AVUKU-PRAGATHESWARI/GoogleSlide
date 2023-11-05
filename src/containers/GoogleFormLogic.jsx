import React, { useState } from 'react';
import { supabase } from '../config/apiConfig';
import GoogleSlideUI from '../pages/Google-Slide/GoogleSlideUI';

const GoogleSlideLogic = () => {
  const [fields, setFields] = useState([]);
  const [addingField, setAddingField] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('text');

  const addField = () => {
    setAddingField(true);
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

  const createTable = async () => {
    console.log("huyghtfgf")
    try {
      if (fields.length === 0) {
        console.error('Cannot create a table without fields.');
        return;
      }

      const columnDefinitions = fields
        .map((field) => `${field.name} ${field.type}`)
        .join(', ');

      const tableName = 'your_table_name'; // Change 'your_table_name' to your desired table name

      const createTableQuery = `CREATE TABLE ${tableName} (${columnDefinitions});`;

      const { data, error } = await supabase.from('your_table_name').execute(createTableQuery);

      if (error) {
        console.error('Error creating table:', error);
      } else {
        console.log('Table created successfully:', data);
        // Additional logic for successful table creation
      }
    } catch (error) {
      console.error('Error creating table:', error);
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
      createTable={createTable} // Pass the createTable function to your UI component
    />
  );
};

export default GoogleSlideLogic;