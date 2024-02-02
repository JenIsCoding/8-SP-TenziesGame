import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Game from '../components/Game'

function App() {

  ///////////////// useState SETTINGS ///////////////// 

  // Number of the buttons

  const arrayLength = 10; //number of the square buttons
  
  // Change and set the text inside the buttons

  let textArray = [
    "1","2","3","4","5","6","7","8","9","10"
  ]

  const [changeButtonText, setChangeButtonText] = useState(textArray);

  // Change and set the background color of the buttons
  
  let obj = {};
  
  for(let i=0; i<arrayLength; i++ ){
    obj[i] = {
      id: i,
      bgColor: "white",
  };}

  const [buttonColors, setButtonColors] = useState(obj);

  ///////////////// ON CLICK FUNCTIONS ///////////////// 

  // Function triggered when one of the 10 button has been clicked

  function gameButtonsClicked() {
    console.log("One of the 10 buttons has been clicked!");
  }

  function rollButtonClicked() {
    console.log("Roll! Button clicked!");
  }

  return (
    <div className="big-container">
      <div className="small-container">
            <Header></Header>
            <Game 
              onButtonClick={gameButtonsClicked}
              changeButtonText={changeButtonText}
              buttonColors={buttonColors}
              setButtonColors={setButtonColors}
              ></Game>
            <Button 
              onButtonClick={rollButtonClicked}
              setChangeButtonText={setChangeButtonText}
              buttonColors={buttonColors}
              ></Button>
      </div>
    </div>
  )
}

export default App;