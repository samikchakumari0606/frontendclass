

let arr=JSON.parse(localStorage.getItem("data"));
console.log(arr);
let box=document.getElementById("box");

function appendData(arr){

    box.innerHTML="";
    let price=document.getElementById("price");
    let item=document.getElementById("item");
    let TotalPrice=0;
    let TotalItem=0;
    arr.forEach(function(el,index){
        TotalPrice=TotalPrice+Number(el.price);
        TotalItem++;
        let div=document.createElement("div");
        let productName=document.createElement("h1");
        productName.innerText=el.title;
        let productPrice=document.createElement("h3");
        productPrice.innerText=el.price;
        let productImg=document.createElement("img");
        productImg.src=el.image;
        let delProduct=document.createElement("button");
        delProduct.innerText="delete";
        delProduct.addEventListener("click",function(){
            delfunc(el,index)
        })
        div.append(productImg,productName,productPrice,delProduct);
        box.append(div);
       item.innerText=TotalItem;
       price.innerText=TotalPrice;
    })
}

appendData(arr);


function delfunc(el,index){
    console.log(el);
    console.log(index);
    arr.splice(index,1);
    localStorage.setItem("data",JSON.stringify(arr));
    appendData(arr);
}


