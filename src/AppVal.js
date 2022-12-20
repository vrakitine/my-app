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

  //console.log('currentAction', currentAction); 
  //console.log(getVaScript()); 

  // First summand 2. Second summand 2. Find the value of the sum
  /*
  "Direction_plus":"Action_waiting_for_operand_2"
  "Direction_equal":"Action_waiting_for_operand_2"
  */

  //getAction(directionAction);

  function getVaScript() {
    var vaScript = {
      "Action_init":{
         "Direction_one":"Action_operand_1_attach_one",
         "Direction_two":"Action_operand_1_attach_two",
         "Direction_plus":"Action_init",
         "Direction_equal":"Action_init"
      },
      "Action_operand_1_attach_one":{
         "Direction_one":"Action_operand_1_attach_one",
         "Direction_two":"Action_operand_1_attach_two",
         "Direction_plus":"Action_waiting_for_operand_2_for_plus",
         "Direction_equal":"Error_10__Second_operand_is_missing"
      },
      "Action_operand_1_attach_two":{
        "Direction_one":"Action_operand_1_attach_one",
        "Direction_two":"Action_operand_1_attach_two",
        "Direction_plus":"Action_waiting_for_operand_2_for_plus",
        "Direction_equal":"Error_10__Second_operand_is_missing"
      },
      "Action_waiting_for_operand_2_for_plus":{
        "Direction_one":"Action_operand_2_attach_one",
        "Direction_two":"Action_operand_2_attach_two",
        "Direction_plus":"Action_waiting_for_operand_2_for_plus",
        "Direction_equal":"Error_10__Second_operand_is_missing"
      },
      "Action_operand_2_attach_one":{
        "Direction_one":"Action_operand_2_attach_one",
        "Direction_two":"Action_operand_2_attach_two",
        "Direction_plus":"Action_show_result",
        "Direction_equal":"Action_show_result"
      },
      "Action_operand_2_attach_two":{
        "Direction_one":"Action_operand_2_attach_one",
        "Direction_two":"Action_operand_2_attach_two",
        "Direction_plus":"Action_show_result",
        "Direction_equal":"Action_show_result"
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
    //vaScript.hasOwnProperty(previous)
    if(vaScript.hasOwnProperty(previous)){
      var current = vaScript[previous][direction];
      setCurrentAction(current)
      console.log('currentAction in case:[' + current +']');
      switch(current) {
        case "Action_init":
        
          break;
        case "Action_operand_1_attach_one":
          
          break;
        case "Action_operand_1_attach_two":
          
          break;
        case "Action_waiting_for_operand_2_for_plus":
          
          break;
        case "Action_operand_2_attach_one":
          
          break;
        case "Action_operand_2_attach_two":
          
          break;

        default:
          console.log('Error: Unknown action in default:[' + current + ']')
      }


      return;
    }
    if(!(vaScript.hasOwnProperty(previous))){

      console.log('Stop', previous)
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
         <small>previousAction:</small>[{previousAction}] ==&gt; <small>directionAction:</small>[{directionAction}] ==&gt; <small>currentAction:</small>[{currentAction}]
        </p>
        <p>
          <DigitOne onClick={() => getAction('Direction_one')}/> | <DigitTwo onClick={() => getAction('Direction_two')}/>
        </p>
        ---
        <p>
          <ActionPlus onClick={() => getAction('Direction_plus')}/>
        </p>
        ---
        <p>
          <ActionEqual onClick={() => getAction('Direction_equal')}/>
        </p>
      </header>
    </div>
  );
}

function DigitOne({onClick}) {return (<button onClick={onClick}>[ 1 ]</button>);}
function DigitTwo({onClick}) {return (<button onClick={onClick}>[ 2 ]</button>);}
//
function ActionPlus({onClick}) {return (<button onClick={onClick}>[ + ]</button>);}
function ActionEqual({onClick}) {return (<button onClick={onClick}>[ = ]</button>);}

export default AppVal;
