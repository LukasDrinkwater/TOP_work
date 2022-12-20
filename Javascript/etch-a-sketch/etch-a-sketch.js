


//button that asks for user input to set the grid size
//pass the userInput variable into the removeChildDivs function
//so it can be used in the function
document.getElementById("getUserInput").addEventListener('click',
() => {
  let userInput = prompt("Please enter the amount for rows",0);
  if (userInput <= 100) {
    removeChildDivs(userInput);
  } else if (userInput > 100) {
    alert("The maximum size of the grid is 100.");
  }

})

function getUserInput() {
  let userInput = prompt("Please enter the amount of rows",0);
  return(userInput);
}


//function to make grid. 2 loops that make a row then loop through
//to make the columns
//also put the .addEventListener function in instead of having
//it as a seperate function. It doesnt need to be in both loops as 
//its working just on the row.
function makeDivs(v){
    let e = document.querySelector(".grid-container"); 
    for(let i = 0; i < v; i++){ 
      let row = document.createElement("div"); 
      row.className = "row";
      //event is the element in the => function it passes itself back
      row.addEventListener("mouseover", (event) => {
        event.target.className = "hovered";
      });
      for(let j = 1; j <= v; j++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare";
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 
   
}




//checks to see if the container has any divs in it when the button
//is pressed so it doesnt make another grid, it replaces the one 
//already made. Uses the userInput variable that is made in the 
//event listener.
function removeChildDivs(userInput) {
  let checkChildDivs = document.getElementsByClassName("grid-container")[0];
  if (checkChildDivs.children.length > 0) {
    checkChildDivs.innerHTML = '';
  }
  makeDivs(userInput);
}

