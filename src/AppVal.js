import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 


function AppVal() {

  const [currentAction, setAction] = useState('Action_init');
  //const [previousAction, setPreviousActione] = useState('Action_init');
  const [direction, setDirection] = useState('Direction_00');

  console.log('currentAction', currentAction); 
  //console.log(direction); 

  function getAction(d) {
    console.log('Click!!!'); 
    //setAction('Action_one');
    console.log(d); 
    //setDirection(d);
    /*
    console.log(d); 
    setDirection(d);
    console.log(direction);
    if(d === 'Direction_one'){
      //return(setAction('Action_one'));
    }
    if(d === 'Direction_two'){
      //return(setAction('Action_two'));
    } 
    */
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne onClick={getAction('Direction_one')} action = {currentAction} dd = {direction}/>
        </p>
        <p>
          <MyButtonTwo onClick={getAction('Direction_two')} action = {currentAction} dd = {direction}/>
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
