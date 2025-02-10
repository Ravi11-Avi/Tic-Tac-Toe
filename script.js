let currentplayer = "X";
let arr = Array(9).fill(null);    // sreating null array
let grid = document.getElementById('grid');

function checkwinner(){
    if(
        (arr[0] !== null && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[3] !== null && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[6] !== null && arr[6]==arr[7] && arr[7]==arr[8])||
        (arr[0] !== null && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1] !== null && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2] !== null && arr[2]==arr[5] && arr[5]==arr[8])||
        (arr[0] !== null && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[6] !== null && arr[6]==arr[4] && arr[4]==arr[2])
    ){
        alert(`${currentplayer} is winner`);
        grid.style.pointerEvents="none";
    }
    else{
        if (!arr.some(e =>(e) ===null)){
            alert('Its draw');
    }}
}

function backgroundColour(el){
    if (currentplayer =="X"){
        el.style.background=" rgb(252, 8, 8)";
    }
    else{
        el.style.background=" rgb(17, 187, 39)";
    }
}

function handleclick(el){     
    const id = el.id                // here we ggetting the id of tyhe coloum we clicked
    if (arr[id] !== null)return
    arr[id] = currentplayer       // here we changing the value with the index in the array
    el.innerText = currentplayer;      // showing the value that user isplaying
    checkwinner();
    backgroundColour(el);
  
    currentplayer = currentplayer==="X"? "O" : "X";        // changing the player form x to 0 then x
    
    
}