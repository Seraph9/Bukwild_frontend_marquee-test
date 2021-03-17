import React, { useState, useEffect, useContext } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';

// local imports
// import Header from './components/parent_components/Header';
import DataContext from './DataContext';
import Marquee from './components/parent_components/Marquee';

function App() {

  const [contents, setContents] = useState();
  const getData = () => {
    const data = fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(function (data) {
        // console.log(data);
        setContents(data);
      })
      .catch(error => console.error(error));
    return data;

  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <DataContext.Provider value={contents}>
        <Marquee />
      </DataContext.Provider>
      {/* <BrowserRouter>
        <Route exact path='/Industries' component={Marquee}></Route>
        <Route exact path='/Services' component={ }></Route>
        <Route exact path='/About Us' component={ }></Route>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
