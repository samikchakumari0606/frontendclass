
// let ImageArr=JSON.parse(localStorage.getItem("image"));
// console.log(ImageArr);


let counter=0;
let id;
function start(){
    
    let ImageArr=JSON.parse(localStorage.getItem("image"));
    let divBox=document.getElementById("box");
    let creatingImage=document.createElement("img");

    divBox.innerHTML=""

    creatingImage.src=ImageArr[counter];
    divBox.append(creatingImage);
    counter++;

    id=setInterval(function(){

        if(counter==ImageArr.length){
            counter=0;
        }

     creatingImage.src=ImageArr[counter];
     divBox.append(creatingImage);
     counter++;

    },3000)

}


function stop(){
    clearInterval(id);
    console.log("paused at",counter);
}


// setInterval(function,time)