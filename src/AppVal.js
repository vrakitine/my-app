import './App.css';
import { useState } from 'react';
// C:\Users\val\ReactProjects\my-app\src\vaop\va-scripts\va-script-10.json
//import { vaScript } from "./vaop/va-scripts/va-script-10.json";
// Playing in https://beta.reactjs.org/learn 
// import { dashboard } from "data/data_can.json";
//https://reactjs.org/docs/context.html
//https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks


function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  const [previousAction, setPreviousAction] = useState('Action_init');
  const [direction, setDirection] = useState('Direction_00');
  const [vaScript, setVaScript] = useState(getVaScript());

  console.log('currentAction', currentAction); 
  console.log(getVaScript()); 

  function getVaScript() {
    var vaScript = {
      "Action_init":{
         "Direction_one":"Action_one",
         "Direction_two":"Action_two"
      },
      "Action_one":{
         "Direction_one":"Action_two",
         "Direction_two":"Action_one"
      },
      "Action_two":{
         "Direction_one":"Action_two",
         "Direction_two":"Action_one"
      }
    };


    return vaScript;
  }

  function getAction(d) {
    console.log('Click!!!'); 
    console.log(d); 

    //var vaScript = getVaScript();
    console.log(vaScript); 
    var temp = previousAction;
    setPreviousAction(currentAction);

    return(setCurrentAction(vaScript[temp][d]));
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
