import React from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Jane"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard
        firstName="Tom"
        lastName="Jones"
        age={40}
        hairColor="Black"
      />
      <PersonCard
        firstName="Alice"
        lastName="Johnson"
        age={35}
        hairColor="Red"
      />
    </div>
  );
}

export default App;
