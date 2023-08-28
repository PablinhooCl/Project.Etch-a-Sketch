// set f on start
    window.onload = function(){
        setGrid();
    };






// setting the div s 16x16
    function setGrid(){
        for(let i= 0; i<256; i++){
            var div = document.createElement("div");
        document.getElementById("main").appendChild(div);
          }
    }
