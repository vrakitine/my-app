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
  const [directionAction, setDirectionAction] = useState('Direction_init');
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

  function getAction(direction) {
    console.log('Click!!!'); 
    console.log(direction); 

    //
    setDirectionAction(direction)
    var previous = previousAction;
    setPreviousAction(currentAction);
    //
    return(setCurrentAction(vaScript[previous][direction]));
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
         <small>previousAction:</small>[{previousAction}] ==> <small>directionAction:</small>[{directionAction}] ==> <small>currentAction:</small>[{currentAction}]
        </p>
        <p>
          <MyButtonOne onClick={() => getAction('Direction_one')}/>
        </p>
        <p>
          <MyButtonTwo onClick={() => getAction('Direction_two')}/>
        </p>
      </header>
    </div>
  );
}

function MyButtonOne({onClick}) {

  return (
    <button onClick={onClick}>
      MyButtonOne
    </button>
  );
}

function MyButtonTwo({onClick}) {

  return (
    <button onClick={onClick}>
      MyButtonTwo
    </button>
  );
}

export default AppVal;
