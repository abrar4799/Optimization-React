import React, { useState } from 'react';
import Button from "./components/UI/Button/Button"

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara , setShowPare] = useState(false)

  const ToggleParaHandler = () =>{
    setShowPare( (prevShowPara) => !showPara )
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}/>
     <Button onClick={ToggleParaHandler}>Toggle Para!</Button>
    
    </div>
  );
}

export default App;
