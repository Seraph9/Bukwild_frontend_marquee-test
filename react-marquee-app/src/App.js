import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// local imports
// import Header from './components/parent_components/Header';
import Marquee from './components/parent_components/Marquee';

function App() {
  return (
    <div>

      <Marquee />
      {/* <BrowserRouter>
        <Route exact path='/Industries' component={Marquee}></Route>
        <Route exact path='/Services' component={ }></Route>
        <Route exact path='/About Us' component={ }></Route>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
