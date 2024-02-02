function Game({onButtonClick, changeButtonText, buttonColors, setButtonColors}) {


  function gameItemClicked(event) {
    onButtonClick();
    const buttonId = event.target.id; //get id of the div
    //Attention: the div are named as "div0", "div1" and so on...
    //So when we're checking for the equality between this id and the the id of the object 
    //in the following part: `if(index == getMyId){//rest of the code}`,
    //we have to change "div0" (that is a string) to 0 (number).
    //That's why we use "replace" and "parseInt" to achieve this!

    // const buttonText = event.target.innerHTML;
    
    const getMyId = parseInt(buttonId.replace("div",""));

    
    Object.keys(buttonColors).map((key, index) => {

      if(index == getMyId){

        setButtonColors(prevColors => (
          {
          ...prevColors,
          [index]: { ...buttonColors[index], bgColor: "red" }
        }
        ));

      } 
    });
      
  }

    return (
      <div className="game-container">
        {Object.keys(buttonColors).map((info,index) => (
        <button 
              id={`div${index}`} 
              key={index} 
              style={{ backgroundColor: buttonColors[index].bgColor }} 
              onClick={gameItemClicked} 
              className="game-button-item">
          {changeButtonText[index]}
        </button>
      ))}
      </div>
    )
  }
  
  export default Game;