import React from 'react';
import FirstComponent from './first';
import SecondComponent from './second';
import ContainerComponent from './container';

function App() {
  return (
    <div className="App">
      <FirstComponent heading="What a heading!!" />
      <SecondComponent paragraph="Just a simple paragraph." />
      <ContainerComponent label="Time now is: " />
    </div>
  );
}

export default App;
