import React, { useState , useCallback} from 'react';
import Button from "./components/UI/Button/Button"

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara , setShowPare] = useState(false)
  const [allwToggle , setAllowToggle] = useState(false)
/** Function is an object is Javascript */
  const ToggleParaHandler =useCallback( () =>{
    if(allwToggle){
    setShowPare( (prevShowPara) => !prevShowPara )
    }
  }  ,[allwToggle] ) 

  const allowToggleHandler = () => {
    setAllowToggle(true)

  }
  
   
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
     <Button onClick={ToggleParaHandler}>Toggle Para!</Button>
    
    </div>
  );
}

export default App;
