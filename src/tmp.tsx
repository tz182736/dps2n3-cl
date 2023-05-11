import React, { useState } from 'react';

interface IState {
  name: string;
  age: number;
}

const App = () => {
  const [people, setPeople] = useState<IState[]>([
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 30 },
  ]);
  const addPerson = (): void => {
    setPeople([...people, { name: '', age: 0 }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const newPeople = [...people];

    newPeople[index].name  = e.target.value;
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <input type="text" name="name" value={person.name} onChange={(e) => handleChange(e, index)} />
          <input type="number" name="age" value={person.age} onChange={(e) => handleChange(e, index)} />
        </div>
      ))}
      <button onClick={addPerson}>Add Person</button>
    </div>
  );
};

export default App;