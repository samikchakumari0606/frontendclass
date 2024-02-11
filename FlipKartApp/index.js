
let data;
async function getData(){
    let res=await fetch("https://fakestoreapi.com/products");
    data=await res.json();
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
        let productImg=document.createElement("img");
        productImg.src=el.image;
        let addToCartBtn=document.createElement("button");
        addToCartBtn.innerText="add To cart";
        addToCartBtn.addEventListener("click",function(){
            addToCartFunc(el,index);
        })
        div.append(productImg,productName,productPrice,addToCartBtn);
        box.append(div);

    })

}

let arr=JSON.parse(localStorage.getItem("data"))||[];
function addToCartFunc(el,index){
    arr.push(el);
    console.log(el);
    console.log(index);
    localStorage.setItem("data",JSON.stringify(arr))
}


function highToLow(){

    let copy_data=data;
    copy_data=copy_data.sort(function(a,b){
        return b.price-a.price;
    })
   appendData(copy_data)
    console.log(copy_data)
}

function lowToHigh(){

    let copy_data_new=data;
    copy_data_new=copy_data_new.sort(function(a,b){
        return a.price-b.price
    })
    appendData(copy_data_new)
    console.log(copy_data_new)
}


function search(){
    let query=document.getElementById("query").value;
    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query)
    })
    appendData(copy_data);


}


