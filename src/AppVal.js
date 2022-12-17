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
          <MyButtonOne count = {countOne} onClick={handleClickOne}/>
        </p>
        <p>
          <MyButtonTwo count = {countTwo} onClick={handleClickTwo}/>
        </p>
      </header>
    </div>
  );
}

function MyButtonOne({count, onClick}) {

  return (
    <button onClick={onClick}>
      MyButtonOne Clicked {count} times
    </button>
  );
}

function MyButtonTwo({count, onClick}) {

  return (
    <button onClick={onClick}>
      MyButtonTwo Clicked {count} times
    </button>
  );
}

export default AppVal;
