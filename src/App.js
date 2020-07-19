import React, { useState } from 'react';

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
      <form onSubmit={handleAddName}>
        <div>name: <input type="text" onChange={handleNameChange} /></div>
        <div>number: <input type="text" onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => {
        return <p key={person.name}>{person.name} {person.number}</p>
      })}
    </div>
  )

}

export default App;
