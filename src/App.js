import React from 'react';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" initialAge={25} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" initialAge={30} hairColor="Brown" />
      <PersonCard firstName="Alice" lastName="Johnson" initialAge={35} hairColor="Blonde" />
      <PersonCard firstName="Bob" lastName="Brown" initialAge={40} hairColor="Red" />
    </div>
  );
}

export default App;
