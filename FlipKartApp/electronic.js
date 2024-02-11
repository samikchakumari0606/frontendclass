// console.log("welcome")

async function getData(){
    let res=await fetch("https://fakestoreapi.com/products/category/electronics");
    let data=await res.json();
    appendData(data);
    console.log(data);
}
getData();


let box=document.getElementById("box");
function appendData(data){
    box.innerHTML=""
    data.forEach(function(el,index){
        let div=document.createElement("div");
        let productName=document.createElement("h1");
        productName.innerText=el.title;
        let productPrice=document.createElement("p");
        productPrice.innerText=el.price;
        let productImage=document.createElement("img");
        productImage.src=el.image;
        let addTocart=document.createElement("button");
        addTocart.innerText="add To Cart";
        addTocart.addEventListener("click",function(){
            addToCartFunction(el,index)
        })
        div.append(productImage,productName,productPrice,addTocart);
        box.append(div);

    })
    
}

let arr=JSON.parse(localStorage.getItem("data"))||[]
function addToCartFunction(el,index){
console.log(el);
console.log(index);
arr.push(el);
localStorage.setItem("data",JSON.stringify(arr));
}
