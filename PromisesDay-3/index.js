// console.log("cvghj")
// https://media3.giphy.com/media/LzwcNOrbA3aYvXK6r7/giphy.webp?cid=790b7611nl0x3bbwa29fg8v32up3kb1whdiruyejcrhr8due&ep=v1_gifs_trending&rid=giphy.webp&ct=g
//https://media0.giphy.com/media/c76IJLufpNwSULPk77/giphy.webp?cid=790b7611nl0x3bbwa29fg8v32up3kb1whdiruyejcrhr8due&ep=v1_gifs_trending&rid=giphy.webp&ct=g

let myImg=document.getElementById("myImgHtml");

function getData(){
    return true
}


let myPromise=new Promise(function(resolve,reject){

    let data=getData();

    if(data){
        setTimeout(function(){
            resolve(data)
        },3000)
    }
    else{
        reject("err",err)
    }

})
console.log(myPromise)

myPromise.then(function(res){
myImg.src=" https://media3.giphy.com/media/LzwcNOrbA3aYvXK6r7/giphy.webp?cid=790b7611nl0x3bbwa29fg8v32up3kb1whdiruyejcrhr8due&ep=v1_gifs_trending&rid=giphy.webp&ct=g"
})

myPromise.catch(function(){
myImg.src="https://media0.giphy.com/media/c76IJLufpNwSULPk77/giphy.webp?cid=790b7611nl0x3bbwa29fg8v32up3kb1whdiruyejcrhr8due&ep=v1_gifs_trending&rid=giphy.webp&ct=g"
})