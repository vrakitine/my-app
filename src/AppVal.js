import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 


function AppVal() {

  const [countOne, setCountOne] = useState(0);

  function handleClickOne() {
    setCountOne(countOne + 1);
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

  return (
    <button onClick={onClick}>
      MyButtonTwo Clicked {count} times [{countOne}]
    </button>
  );
}

export default AppVal;
