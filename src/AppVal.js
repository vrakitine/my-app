import './App.css';
import { useState } from 'react';
// Playing in https://beta.reactjs.org/learn 
// import { dashboard } from "data/data_can.json";
//https://reactjs.org/docs/context.html
//https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks


function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  //const [previousAction, setPreviousAction] = useState('Action_init');
  const [direction, setDirection] = useState('Direction_00');

  console.log('currentAction', currentAction); 
  //console.log(direction); 

  function getAction(d) {
    console.log('Click!!!'); 
    //setCurrentAction('Action_one');
    console.log(d); 

    if(d === 'Direction_one'){
      return(setCurrentAction('Action_one'));
    }
    if(d === 'Direction_two'){
      return(setCurrentAction('Action_two'));
    } 
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyButtonOne onClick={() => getAction('Direction_one')} action = {currentAction} dd = {direction}/>
        </p>
        <p>
          <MyButtonTwo onClick={() => getAction('Direction_two')} action = {currentAction} dd = {direction}/>
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
