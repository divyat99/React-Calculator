import React, { useState} from 'react';

//using eval is not recommended for security and performance reasons
const Calci = () => {
const [input, setInput] = useState('');
const [result, setResult] = useState('');

const handleInput=(value)=>{
  setInput(input+value)
};
const allClear=()=>{
setInput('')
setResult('')
}

const calculate=()=>{
  setResult(eval(input))
}
  return (
   <>
   
<div style={{padding:'20px',margin:'90px',backgroundColor:'grey'}} className="calculator card">
  <input
    type="text"
    className="calculator-screen"
 
    disabled=""
    // value={calci.num ? calci.num : calci.res}
    value={input}
 
  />
   <input
    type="text"
    className="calculator-screen "
 
    disabled=""
    // value={calci.num ? calci.num : calci.res}
    value={result}
 
  />
  
 
  <h3>Calculator</h3>
  <div className="calculator-keys">
    <button  onClick={()=>handleInput('+')} type="button" className="operator btn btn-info" value="+">
      +
    </button>
    <button onClick={()=>handleInput('-')} type="button" className="operator btn btn-info" value="-">
      -
    </button>
    <button onClick={()=>handleInput('*')} type="button" className="operator btn btn-info" value="*">
      ×
    </button>
    <button onClick={()=>handleInput('/')} type="button" className="operator btn btn-info" value="/">
      ÷
    </button>
    <button onClick={()=>handleInput('7')} type="button" value={7} className="btn btn-light waves-effect">
      7
    </button>
    <button onClick={()=>handleInput('8')} type="button" value={8} className="btn btn-light waves-effect">
      8
    </button>
    <button onClick={()=>handleInput('9')} type="button" value={9} className="btn btn-light waves-effect">
      9
    </button>
    <button onClick={()=>handleInput('4')} type="button" value={4} className="btn btn-light waves-effect">
      4
    </button>
    <button  onClick={()=>handleInput('5')} type="button" value={5} className="btn btn-light waves-effect">
      5
    </button>
    <button onClick={()=>handleInput('6')} type="button" value={6} className="btn btn-light waves-effect">
      6
    </button>
    <button onClick={()=>handleInput('1')} type="button" value={1} className="btn btn-light waves-effect">
      1
    </button>
    <button onClick={()=>handleInput('2')} type="button" value={2} className="btn btn-light waves-effect">
      2
    </button>
    <button onClick={()=>handleInput('3')} type="button" value={3} className="btn btn-light waves-effect">
      3
    </button>
    <button onClick={()=>handleInput('00')} type="button" value='00' className="btn btn-light waves-effect">
      00
    </button>
    <button onClick={()=>handleInput('0')} type="button" value={0} className="btn btn-light waves-effect">
      0
    </button>
    <button
    onClick={()=>handleInput('.')}
      type="button"
      className="decimal function btn btn-light waves-effect"
      value="."
    >
      .
    </button>
   
    <button
   onClick={calculate}
      type="button"
      className="equal-sign operator btn btn-danger"
      value="="
    >
      =
    </button>
    <button
    onClick={allClear}
      type="button"
      className="all-clear btn btn-danger "
      value="all-clear"
    >
      AC
    </button>
  </div>
</div>


   </>
  )
}

export default Calci