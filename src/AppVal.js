import './App.css';
import { useState } from 'react';


function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  //const [previousAction, setPreviousActione] = useState('Action_init');
  const [direction, setDirection] = useState('Direction_00');

  console.log('currentAction', currentAction); 
  //console.log(direction); 

  function getCurrentAction(d) {
    setDirection(d);
    /*
    console.log(d); 
    setDirection(d);
    console.log(direction);
    if(d === 'Direction_one'){
      //return(setCurrentAction('Action_one'));
    }
    if(d === 'Direction_two'){
      //return(setCurrentAction('Action_two'));
    } 
    */
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne onClick={getCurrentAction('Direction_one')} action = {currentAction} dd = {direction}/>
        </p>
        <p>
          <MyButtonTwo onClick={getCurrentAction('Direction_two')} action = {currentAction} dd = {direction}/>
        </p>
      </header>
    </div>
  );
}

function MyButtonOne({onClick, action, dd}) {

  return (
    <button onClick={onClick}>
      MyButtonOne: [{action}] [{dd}]
    </button>
  );
}

function MyButtonTwo({onClick, action, dd}) {

  return (
    <button onClick={onClick}>
      MyButtonTwo: [{action}] [{dd}]
    </button>
  );
}

export default AppVal;
