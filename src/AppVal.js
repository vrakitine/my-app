import './App.css';
import { useState } from 'react';
import vaScript from './vaop/va-scripts/va-script-10.json';

function AppVal() {

  const [currentAction, setCurrentAction] = useState('Action_init');
  const [previousAction, setPreviousAction] = useState('Action_init');
  const [directionAction, setDirectionAction] = useState('Direction_init');
  const [operandOne, setOperandOne] = useState('');
  const [operandTwo, setOperandTwo] = useState('');
  const [result, setResult] = useState('');
  const [warningMsg, setWarningMsg] = useState('');

  const [showVaTrace, setShowVaTrace] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  

  function getAction(direction) {
    console.log('Click!!!'); 
    console.log(direction); 

    setWarningMsg('');
    setShowWarning(false)

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
        case "Action_operand_1_attach_zero":
          setOperandOne(operandOne + '0')
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
        case "Action_operand_1_attach_four":
          setOperandOne(operandOne + '4')
          break;
        case "Action_operand_1_attach_five":
          setOperandOne(operandOne + '5')
          break;
        case "Action_operand_1_attach_six":
          setOperandOne(operandOne + '6')
          break;
        case "Action_operand_1_attach_seven":
          setOperandOne(operandOne + '7')
          break;
        case "Action_operand_1_attach_eight":
          setOperandOne(operandOne + '8')
          break;
        case "Action_operand_1_attach_nine":
          setOperandOne(operandOne + '9')
          break; 
        case "Action_waiting_for_operand_2_for_plus":
          // do nothing
          break;
        case "Action_operand_2_attach_zero":
          setOperandTwo(operandTwo + '0')
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
        case "Action_operand_2_attach_four":
          setOperandTwo(operandTwo + '4')
          break;
        case "Action_operand_2_attach_five":
          setOperandTwo(operandTwo + '5')
          break;
        case "Action_operand_2_attach_six":
          setOperandTwo(operandTwo + '6')
          break;
        case "Action_operand_2_attach_seven":
          setOperandTwo(operandTwo + '7')
          break;
        case "Action_operand_2_attach_eight":
          setOperandTwo(operandTwo + '8')
          break;
        case "Action_operand_2_attach_nine":
          setOperandTwo(operandTwo + '9')
          break;
        case "Action_warning_10__Second_operand_is_missing":
          setWarningMsg('Second operand is missing');
          setShowWarning(true);
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
        <h2>Mini Regular & Binary Calculator</h2>
        {showWarning &&
          <p className = "App-header-warning">
            <small>{warningMsg}</small>
          </p>
        }         
        <p>
          [{operandOne}] + [{operandTwo}] = [{result}] 
        </p>
        <p> 
          <CalcButton onClick={() => getAction('Direction_seven')} buttonName = '7'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_eight')} buttonName = '8'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_nine')} buttonName = '9'/><br/><br/>
         
          <CalcButton onClick={() => getAction('Direction_four')} buttonName = '4'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_five')} buttonName = '5'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_six')} buttonName = '6'/><br/><br/>

         
         
          <CalcButton onClick={() => getAction('Direction_one')} buttonName = '1'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_two')} buttonName = '2'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_three')} buttonName = '3'/><br/><br/>
          
          <CalcButton onClick={() => getAction('Direction_zero')} buttonName = '0'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_plus')} buttonName = '+'/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <CalcButton onClick={() => getAction('Direction_equal')} buttonName = '='/><br/><br/>
          <CalcButton onClick={() => getAction('Direction_clear')} buttonName = 'CA'/>
        </p>
        <p>
          <ShowHideVaTrace onClick={()=>setShowVaTrace(!showVaTrace)} showVaTrace={showVaTrace}/>
        </p>
        {showVaTrace &&
          <div>
            <p className = "App-header-trace">
                === va-trace ===<br/><br/>
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
              === va-script ===<br/><br/>
              v-agent is following this script. When you push any button, <br/>v-agent defined Current Action based on Previous Action and Direction.
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

function CalcButton({onClick, buttonName}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>{buttonName}</b>&nbsp;&nbsp;&nbsp;</button>);}
function ShowHideVaTrace({onClick, showVaTrace}) {return (<button onClick={onClick}>&nbsp;&nbsp;&nbsp;<b>{showVaTrace ? "Hide va-trace" : "Show va-trace"}</b>&nbsp;&nbsp;&nbsp;</button>);}

export default AppVal;
