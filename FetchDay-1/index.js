console.log("cfvghbjn")

async function getData(){
    // all products
    let res=await fetch("https://fakestoreapi.com/products");
    // console.log(res);
    // category
    // let res= await fetch("https://fakestoreapi.com/products/category/men's clothing"); 
    let data=await res.json();
     appendData(data);
    console.log(data);
}

getData();


function appendData(data){

    let box=document.getElementById("box");
    box.innerHTML=""
    data.forEach(function(el){

        let div=document.createElement("div");
        let title=document.createElement("h1");
        title.innerText=el.title;
        let price=document.createElement("p");
        price.innerText=el.price;
        let img=document.createElement("img");
        img.src=el.image;
        let description=document.createElement("p");
        description.innerText=el.description;
        div.append(title,price,description,img);
        box.append(div);
     })
}

// appendData(data)


