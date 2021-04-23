import React, { useState, useEffect } from 'react';

// local imports
import Marquee from './components/parent_components/Marquee';

function App() {
  const [check, setCheck] = useState();

  const getData = () => {
    const data = fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(function (data) {
        // console.log("data: ", data);
        // let checkData = data ? data.pages : 'no data';
        // setCheck(checkData);
        setCheck(data.pages);
      })
      .catch(error => console.error(error));
    return data;

  };

  useEffect(() => {
    getData();

  }, [])
  if (check !== undefined) {
    return (
      <div>
        <Marquee checkSelected={check} />
      </div>
    )
  } else {
    return <div className="initialRender">Loading...</div>
  }
}

export default App;
