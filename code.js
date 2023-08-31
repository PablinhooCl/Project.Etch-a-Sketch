let click = true
let color= 'black';
function boardSize(size){

if (size>=2 && size<=100){

let board= document.querySelector('.board');
    board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`;

  let sizeSquare= size*size;
  
    for(let i= 0; i<sizeSquare; i++){
    let div = document.createElement("div");
    board.appendChild(div);
    board.insertAdjacentElement('beforeend', div);
    div.addEventListener("mouseover", changeColor);
    div.style.backgroundColor= 'white';
    };
  } else{

      alert('ERROR, try numbers beetwen 2 and 100 it may take some time to load')

    } 
  }

boardSize(16);
  function resetBoard(){
    let board= document.querySelector(".board");
    let pixel= board.querySelectorAll("div");
    pixel.forEach((div) => (div.style.backgroundColor= 'white'));
    blackGradient= 240;
  };
  function blackBoard(){
    let board= document.querySelector(".board");
    let pixel= board.querySelectorAll("div");
    pixel.forEach((div) => (div.style.backgroundColor= 'black'));
  }


  function colorChanger(input){
    color=input
  };
let blackGradient= 240
let randomColor= `hsl(${Math.random() *360},100%, 50%)` ;
console.log(blackGradient);
  function changeColor(){
    if (click){
    if (color === "random"){
      this.style.backgroundColor=`hsl(${Math.random() *360},100%, 50%)` ;}
      else if(color==="black"){
      this.style.backgroundColor = `rgb(${blackGradient}, ${blackGradient}, ${blackGradient})`;
      console.log(blackGradient);
      blackGradient-= 24;
      
      
     }
    else{
      this.style.backgroundColor= color}} }
   