// // set f on start
//     window.onload = function(){
//         setGrid();
//     };


let board= document.querySelector('.board');
    board.style.gridTemplateColumns= 'repeat(16, 1fr)';
    board.style.gridTemplateRows= 'repeat(16, 1fr)';

let div = document.createElement("div");
for(let i= 0; i<256; i++){
    
    document.getElementById("main").appendChild(div);
    div.classList.add("draw")
    ;
  }
  pen= document.getElementsByClassName('draw');
  pen.addEventListener(
    "mouseenter",
    (event) => {
    div.style.backgroundColor= 'blue'    
    });