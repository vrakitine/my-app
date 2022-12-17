import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 


function AppVal() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne count = {count} onClick={handleClick}/>
        </p>
        <p>
          <MyButtonTwo count = {count} onClick={handleClick}/>
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
