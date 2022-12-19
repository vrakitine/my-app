import './App.css';
import { useState } from 'react';


function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  //const [previousAction, setPreviousActione] = useState('Action_init');
  //const [direction, setDirection] = useState('Direction_00');

  function getCurrentAction(direction) {
    if(direction === 'Direction_one'){
      return(setCurrentAction('Action_one'));
    }
    if(direction === 'Direction_two'){
      return(setCurrentAction('Action_two'));
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne onClick={getCurrentAction} direction = 'Direction_one'/>
        </p>
        <p>
          <MyButtonTwo onClick={getCurrentAction} direction = 'Direction_two'/>
        </p>
        {/*
        <p>
          <MyButtonPlus onClick={getNextAction} direction = 'Direction_plus'/>
        </p>
        <p>
          <MyButtonEnter onClick={getNextAction} direction = 'Direction_enter'/>
        </p>
      */}
      </header>
    </div>
  );
}

function MyButtonOne({onClick, direction}) {

  return (
    <button onClick={onClick(direction)}>
      MyButtonOne: [{currentAction}]
    </button>
  );
}

function MyButtonTwo({onClick, direction}) {

  return (
    <button onClick={onClick(direction)}>
      MyButtonTwo: [{currentAction}]
    </button>
  );
}

export default AppVal;
