//Function for adding points in console

function adPointsConsole (onePointers, threePointers){
let sum= onePointers*2+threePointers*3;
console.log(sum)
}

adPointsConsole(2,1)

//function for showing score in the DOM

document.getElementById("scoreButton").onclick= function(){
    let twoPoints=document.getElementById("two-points").value
    let threePoints=document.getElementById("three-points").value
    let sum=twoPoints*2+threePoints*3
   document.getElementById("teamScore").innerHTML = sum
}
