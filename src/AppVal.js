import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function AppVal() {


  return (
    <div className="App">
      <header className="App-header">
        <p>
          First <MyButton />
        </p>
        <p>
          Second <MyButton />
        </p>
      </header>
    </div>
  );
}

export default AppVal;
