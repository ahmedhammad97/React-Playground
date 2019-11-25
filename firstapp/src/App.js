import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FirstComponent from './components/first';
import SecondComponent from './components/second';
import ContainerComponent from './components/container';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      {/* Use the keyword "exact" to prevent nesting routes */}
      <Route path="/first" 
        render={props => <FirstComponent heading="Heading inside a router!" />} 
      />
      <Route path="/second" 
        render={props => <SecondComponent paragraph="Paragraph inside a router!" />} 
      />
      <Route path="/container" component={ContainerComponent} /> 
    </div>
    </BrowserRouter>
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
