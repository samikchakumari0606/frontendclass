// console.log("cgvhjbkm")
let apiKey="AIzaSyD_BINBGkF4VnBhnMIo15hx-WRkwdnDzIo";

async function search(){
 let query=document.getElementById("query").value;
 let url=`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&part=snippet`;
 let res=await fetch(url);
 let data=await res.json();
 let array_of_videos=data.items;
 appendYouTubeData(array_of_videos);
 console.log("data",array_of_videos)
}

let box=document.getElementById("box");
function appendYouTubeData(data){
    box.innerHTML=""
    data.forEach((el)=>{

        let titleName=el.snippet.title;
        let videoId=el.id.videoId;
   
        let div=document.createElement("div");
        let title=document.createElement("h1");
        title.innerText=titleName;
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}?si=dxYAOjDoodUDMpkx`;
        div.append(title,iframe);
        box.append(div);
     
    })

}

