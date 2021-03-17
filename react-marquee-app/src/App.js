import React, { useState, useEffect } from 'react';

// local imports
import DataContext from './DataContext';
import Marquee from './components/parent_components/Marquee';

function App() {
  const [check, setCheck] = useState();
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
        //console.log("data: ", data);
        let checkData = data ? data.pages : 'no data';
        setCheck(checkData);
        let relevantData = data ? data.pages.map(page => page.blocks) : 'no data';
        relevantData = relevantData.reduce((acc, ele) => acc.concat(ele));
        //console.log("relevant: ", relevantData);
        setContents(relevantData);
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
        <Marquee checkSelected={check} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
