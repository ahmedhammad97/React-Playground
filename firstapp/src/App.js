import React from 'react';
import FirstComponent from './first';
import SecondComponent from './second'; 

function App() {
  return (
    <div className="App">
      <FirstComponent heading="What a heading!!" />
      <SecondComponent paragraph="Just a simple paragraph." />
    </div>
  );
}

export default App;
