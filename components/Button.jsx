import React, { useState } from 'react'

function Button({onButtonClick,setChangeButtonText,buttonColors}) {

  const [counter, setCounter] = useState(-1);

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function buttonRollClicked(event){
    
    onButtonClick();

    setCounter(prevCounter => prevCounter + 1);
    
    Object.entries(buttonColors).forEach(([key, value]) => {
      if(value.bgColor=="red"){
        setChangeButtonText(prevText =>{
          const updateArrTxt = [...prevText];
          updateArrTxt[key] = prevText[key];
          return updateArrTxt
        });
      }
      else{
        setChangeButtonText(prevText =>{
          const updateArrTxt = [...prevText];
          updateArrTxt[key] = getRandomNum(1,7,prevText[key]);
          return updateArrTxt
        });
      }
    });

  }


  function textAboveRollButton(){
    let rollButtonText =  `🙃 Let's play! 🙃`;

    const buttonColorsValuesArray = Object.values(buttonColors);
    const bgColorsValuesArray = buttonColorsValuesArray.map(value => value.bgColor);
    const checkAllRedBgColors = bgColorsValuesArray.every(element => element === "red");
    if(checkAllRedBgColors){
      rollButtonText = `🏆 You win in ${counter} steps! 🏆`;
    } 
    else if(!checkAllRedBgColors && counter>0){
      rollButtonText = `🎉 Go on! 🎉`;
    }

    return rollButtonText
  }

    return (
      <div>
        <div className="textAboveRollButt">{textAboveRollButton()}</div>
        <button 
          onClick={buttonRollClicked} 
          className="button">Roll</button>
      </div>
    )
  }
  
  export default Button;