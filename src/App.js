import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleAddName = (event) => {
    event.preventDefault();

    const newObject = {
      name: newName
    }

    let addable = true;

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is alredy in use.`);

        addable = false;
      }
    });

    if (addable) {
      setPersons(persons.concat(newObject));
    }

    setNewName('');

    event.target.reset();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input type="text" onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => {
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )

}

export default App;
