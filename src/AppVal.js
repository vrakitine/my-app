import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 

function MyButtonOne() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <button onClick={handleClick}>
      MyButtonOne Clicked {count} times
    </button>
  );
}
function MyButtonTwo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <button onClick={handleClick}>
      MyButtonTwo Clicked {count} times
    </button>
  );
}

function AppVal() {


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne />
        </p>
        <p>
          <MyButtonTwo />
        </p>
      </header>
    </div>
  );
}

export default AppVal;
