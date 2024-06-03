// omdb api
// let url=``

// let num1=10;
// let num2=5;
// let num3=num1+num2;
// console.log("num1"+" "+"num2"+" "+"is"+" "+ num3);//string concatination
// console.log(`sum of ${num1} and  ${num2} is ${num3} `)//template litrals


async function myDebounce(){
    let query=document.getElementById("query").value;
    let res=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fcbdda70&s=${query}`);
    let data=await res.json();
    let actual_data=data.Search;
    if(actual_data!=undefined){
        appendMovieData(actual_data);
    }
    
    console.log("data",actual_data);
}

let box=document.getElementById("box")
function appendMovieData(data){
    box.innerHTML=""
    data.forEach(function(el){

        let div=document.createElement("div");
        let movieName=document.createElement("h1");
        movieName.innerText=el.Title;
        let movieYear=document.createElement("p");
        movieYear.innerText=el.Year;
        let movieImage=document.createElement("img");
        movieImage.src=el.Poster;
        div.append(movieImage,movieName,movieYear);
        box.append(div);
    })

}

// 5sec
// tapu==>news==>2 
// jethalal==>news==>1    
                        

let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }
 

   id= setTimeout(()=>{
       func()
    },delay)


}

      









   








