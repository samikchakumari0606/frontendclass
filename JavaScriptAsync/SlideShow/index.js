
// console.log("cfvghbjn")

function StoreImage(){

    let InputImage=document.getElementById("url").value;

    let ImageArr=JSON.parse(localStorage.getItem("image"))||[];

    ImageArr.push(InputImage);

    localStorage.setItem("image",JSON.stringify(ImageArr));

}



