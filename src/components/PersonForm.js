import React from 'react';

const PersonForm = ({ handleAddName, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={handleAddName}>
      <div>name: <input type="text" onChange={handleNameChange} /></div>
      <div>number: <input type="text" onChange={handleNumberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;