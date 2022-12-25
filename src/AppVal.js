import './App.css';
import { useState } from 'react';

// how to show and hide components in react
// https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components
// how to show and hide div on button click in react js
// https://youtu.be/uXk62ZgPH-4 


const vaScript = {
  "Action_init":{
     "Direction_one":"Action_operand_1_attach_one",
     "Direction_two":"Action_operand_1_attach_two",     
     "Direction_three":"Action_operand_1_attach_three",     
     "Direction_plus":"Action_init",
     "Direction_equal":"Action_init",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_one":{
     "Direction_one":"Action_operand_1_attach_one",
     "Direction_two":"Action_operand_1_attach_two",
     "Direction_three":"Action_operand_1_attach_three",  
     "Direction_plus":"Action_waiting_for_operand_2_for_plus",
     "Direction_equal":"Action_warning_10__Second_operand_is_missing",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_two":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_three":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_warning_10__Second_operand_is_missing":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_warning_10__Second_operand_is_missing",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_waiting_for_operand_2_for_plus":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_one":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_two":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
  "Action_operand_2_attach_three":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
   "Action_clear":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_init",
    "Direction_equal":"Action_init",
    "Direction_clear":"Action_clear"
   },
   "Action_show_result":{
    "Direction_one":"Action_clear",
    "Direction_two":"Action_clear",
    "Direction_three":"Action_clear",  
    "Direction_plus":"Action_clear",
    "Direction_equal":"Action_clear",
    "Direction_clear":"Action_clear"
   }
  };

function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  const [previousAction, setPreviousAction] = useState('Action_init');
  const [directionAction, setDirectionAction] = useState('Direction_init');
  const [operandOne, setOperandOne] = useState('');
  const [operandTwo, setOperandTwo] = useState('');
  const [result, setResult] = useState('');
  const [warningMsg, setWarningMsg] = useState('');

  const [show, setShow] = useState(false);
  

  function getAction(direction) {
    console.log('Click!!!'); 
    console.log(direction); 

    setWarningMsg('');

    const nextAction = vaScript[currentAction][direction];
  
    if(vaScript.hasOwnProperty(nextAction)){
  
      console.log('currentAction in case:[' + nextAction +']');

      switch(nextAction) {
        case "Action_init":
          // do nothing
          break;
        case "Action_clear":
          setOperandOne('');
          setOperandTwo('');
          setResult('')
          break;
          case "Action_show_result":
            var temp = +operandOne + +operandTwo;
            setResult(temp);
            break;
        case "Action_operand_1_attach_one":
          setOperandOne(operandOne + '1')
          break;
        case "Action_operand_1_attach_two":
          setOperandOne(operandOne + '2')
          break;
        case "Action_operand_1_attach_three":
          setOperandOne(operandOne + '3')
          break;
        case "Action_waiting_for_operand_2_for_plus":
          // do nothing
          break;
        case "Action_operand_2_attach_one":
          setOperandTwo(operandTwo + '1')
          break;
        case "Action_operand_2_attach_two":
          setOperandTwo(operandTwo + '2')
          break;
        case "Action_operand_2_attach_three":
          setOperandTwo(operandTwo + '3')
          break;
        case "Action_warning_10__Second_operand_is_missing":
          setWarningMsg('Second operand is missing')
          break;
        default:
          console.log('Error: Unknown action in default:[' + nextAction + ']')
      }
    } else {
      switch(nextAction) {

          default:
            console.log('Error: [' + nextAction + ']')
        }

      console.log('Stop --> [' + nextAction + ']')
    }

    setDirectionAction(direction);
    setPreviousAction(currentAction);
    setCurrentAction(nextAction);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mini Calculator</h2>
        <p className = "App-header-warning">
          <small>{warningMsg}</small>
        </p>
        <p>
          [{operandOne}] + [{operandTwo}] = [{result}] 
        </p>
        <p> 
          <DigitOne onClick={() => getAction('Direction_one')}/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <DigitTwo onClick={() => getAction('Direction_two')}/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <DigitThree onClick={() => getAction('Direction_three')}/><br/><br/>
          <ActionPlus onClick={() => getAction('Direction_plus')}/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <ActionEqual onClick={() => getAction('Direction_equal')}/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <ActionClear onClick={() => getAction('Direction_clear')}/>
        </p>
        <p>
          <ShowHideVaTrace onClick={()=>setShow(!show)}/>
        </p>
        {show &&
          <div>
            <p className = "App-header-trace">
                va-trace:<br/>
                <small>previous: </small>[<span className="App-header-trace-action">{previousAction}</span>]<br/>
                <small>direction: </small>[<span className="App-header-trace-action">{directionAction}</span>]<br/>
                <small>current: </small>[<span className="App-header-trace-action">{currentAction}</span>]
                <br/>
                <br/>
                open source code: <a className = "App-header-link" 
            href="https://github.com/vrakitine/my-app" 
            target="_blank"><span>github.com/vrakitine/my-app</span></a>
                <br/>
                &nbsp;
            </p>
            <p className = "App-header-trace">
              va-script
              <pre>
                <code>
                {JSON.stringify(vaScript, null, 2) }
                </code>
              </pre>
            </p>
          </div>
        }
        <p>
          <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" /> &nbsp;  
          Powered by <a className = "App-header-link" 
          href="https://vaop.notion.site/82c7784f41af4739bf1a185fc4e12bbc" 
          target="_blank"><span>VAOP</span></a>
        </p>
      </header>
    </div>
  );
}

function DigitOne({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>1</b>&nbsp;&nbsp;&nbsp;</button>);}
function DigitTwo({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>2</b>&nbsp;&nbsp;&nbsp;</button>);}
function DigitThree({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>3</b>&nbsp;&nbsp;&nbsp;</button>);}
//
function ActionPlus({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>+</b>&nbsp;&nbsp;&nbsp;</button>);}
function ActionEqual({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>=</b>&nbsp;&nbsp;&nbsp;</button>);}
function ActionClear({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>CA</b>&nbsp;&nbsp;&nbsp;</button>);}
function ShowHideVaTrace({onClick}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>Show/Hide va-trace & va-script</b>&nbsp;&nbsp;&nbsp;</button>);}

export default AppVal;
