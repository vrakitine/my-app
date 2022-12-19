import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 


function AppVal() {

  

  const [countOne, setCountOne] = useState(0);

  console.log('countOne', countOne); 

  function handleClickOne() {
    setCountOne(countOne + 1);
    console.log('countOne----', countOne); 
  }

  const [countTwo, setCountTwo] = useState(0);

  function handleClickTwo() {
    setCountTwo(countTwo + 1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne count = {countOne} onClick={handleClickOne} countTwo={countTwo}/>
        </p>
        <p>
          <MyButtonTwo count = {countTwo} onClick={handleClickTwo} countOne={countOne}/>
        </p>
      </header>
    </div>
  );
}

function MyButtonOne({count, onClick, countTwo}) {

  return (
    <button onClick={onClick}>
      MyButtonOne Clicked {count} times [{countTwo}]
    </button>
  );
}

function MyButtonTwo({count, onClick, countOne}) {

  if(count === countOne) return null

  return (
    <div>
    <p>
      [{countOne}]
    </p>
    <button onClick={onClick}>
      MyButtonTwo Clicked {count} times [{countOne}]
    </button>
    </div>
  );
}

export default AppVal;
