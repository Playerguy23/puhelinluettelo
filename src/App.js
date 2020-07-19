import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '050-389293'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleAddName = (event) => {
    event.preventDefault();

    let nonAddable;

    const newObject = {
      name: newName,
      number: newNumber
    }

    persons.forEach(person => {
      nonAddable = person.name === newName;
    });

    nonAddable ? alert(`${newName} is alredy in use.`) : setPersons(persons.concat(newObject));

    setNewNumber('');
    setNewName('');

    event.target.reset();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <PersonForm handleAddName={handleAddName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={persons} />
    </div>
  )

}

export default App;
