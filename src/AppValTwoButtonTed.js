import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 

// C:\Users\val\ReactProjects\my-app\src\vaop\va-scripts\va-script-10.json
//import { vaScript } from "./vaop/va-scripts/va-script-10.json";
// Playing in https://beta.reactjs.org/learn 
// import { dashboard } from "data/data_can.json";
//https://reactjs.org/docs/context.html
//https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks


function MyButtonOne() {
  const [count_1, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <button onClick={handleClick}>
      MyButtonOne Clicked {count_1} times
    </button>
  );
}

function MyButtonTwo() {
  const [count_2, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <button onClick={handleClick}>
      MyButtonTwo Clicked {count_2} times
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
