let counter=0;
function slideshow(){

    let divBox=document.getElementById("ss");
    let myImg=document.createElement("img");

    let arr=[
        "https://images.unsplash.com/photo-1682687219800-bba120d709c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1706606992618-9108da774e75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1704686580626-d53ce68985d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
    ]

    myImg.src=arr[counter];
    divBox.append(myImg);
    counter++;

    setInterval(function(){
    
        if(counter==arr.length){
            counter=0;
        }

    myImg.src=arr[counter];
    divBox.append(myImg);
    counter++;

    },3000)

}

// slideshow();

let myList=[
 
    {
        name:"Phobla",
        rating:6,
        img:"https://i.pinimg.com/236x/fd/0d/9d/fd0d9d4c85d3dcf09fa6f8526ed40458.jpg",
    },
    
    {
        name:'The Jungle Book',
        rating:9,
        img:"https://i.pinimg.com/236x/34/69/5c/34695caa9cf423e7680a92952a699fd1.jpg",
    },

    {
        name:"Ki & Ka",
        rating:5,
        img:"https://i.pinimg.com/236x/42/b7/06/42b706fa6b94dfdd03209063b26fe52f.jpg"
    },

    {
        name:"Bajirao Mastani",
        rating:"7" ,
        img:"https://i.pinimg.com/236x/4b/83/83/4b83830289033abadd8892538793a21e.jpg"
    },

    {
        name:"Sanam Teri Kasam",
        rating:4,
        img:"https://i.pinimg.com/236x/4b/9e/eb/4b9eeb978011485a563d90ba5f59f2ae.jpg"
    },

    {
        name:"Airlift",
        rating:8,
        img:"https://i.pinimg.com/236x/97/c9/b1/97c9b18f3aa3bc41b94f17ccf5068837.jpg"
    },

    {
        name:"Masan",
        rating:9,
        img:"https://i.pinimg.com/236x/da/15/81/da1581be1c2ab284cfb07b8b3f3c0b39.jpg"
    },
    {
        name:"Bhag Milkha Bhag",
        rating:10,
        img:"https://i.pinimg.com/236x/cb/96/f7/cb96f766487640fda1ce8fc04a88a9a9.jpg"
    },
    {
        name:"Aashiqui 2",
        rating:10,
        img:"https://i.pinimg.com/236x/fa/90/58/fa90586f6e43ee7c78207146b636bd81.jpg"
    }
    
]


localStorage.setItem("myMovie",JSON.stringify(myList));

let myArr=JSON.parse(localStorage.getItem("myMovie"));

console.log(myArr);


function appendMovie(myArr){
   let divBox=document.getElementById("box");
    divBox.innerHTML=null;
    myArr.forEach(function(elem){

   let div=document.createElement("div");
   let movieName=document.createElement("p");
   movieName.innerText=elem.name;
   let movieRating=document.createElement("p");
   movieRating.innerText=elem.rating;
   let movieImage=document.createElement("img");
   movieImage.src=elem.img;
   div.append(movieImage,movieName,movieRating);
   divBox.append(div);


    })
}

// appendMovie(myArr);

let myPromise=new Promise(function(resolve,reject){

    setTimeout(function(){
        let data=myArr;
        if(data){
            resolve(data)
        }
        else{
            reject("data not found")
        }

    },3000)

})

console.log(myPromise)

myPromise.then(function(res){
    appendMovie(myArr)
})
myPromise.catch(function(err){
      console.log(err);
});


function high(){
    let myArr=JSON.parse(localStorage.getItem("myMovie"));
    myArr=myArr.sort(function(a,b){
        return b.rating-a.rating
    });
     appendMovie(myArr);
     console.log(myArr)
}

function low(){
    let myArr=JSON.parse(localStorage.getItem("myMovie"));
    myArr=myArr.sort(function(a,b){
        return a.rating-b.rating
    })
    appendMovie(myArr) 
    console.log(myArr)
}



