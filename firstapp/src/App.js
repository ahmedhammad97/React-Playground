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

// In order to sync the state of multiple components,
// we need to keep this state in a common ancestor.
// Which will pass a "control function" to their props.
// Then, all the components can use this "control function"
// to mutate the state.
// In the parent component, setState might execute in an async
// so we must do it in the setState function form.

export default App;
