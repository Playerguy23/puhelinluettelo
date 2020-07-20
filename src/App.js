import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import requestService from './services/requestService';

const App = () => {
  const [persons, setPersons] = useState([]);
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

    if (nonAddable) {
      alert(`${newName} is alredy in use.`);
    } else {
      requestService.createPerson(newObject)
        .then(response => {
          setPersons(persons.concat(response.data));
        });
    }

    setNewNumber('');
    setNewName('');

    event.target.reset();
  }

  const getPersonsByRequest = () => {
    requestService.getAllPersons()
      .then(response => {
        setPersons(response.data);
      });
  }

  useEffect(getPersonsByRequest, []);

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
