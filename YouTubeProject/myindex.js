console.log("fvghbjk");

let apiKey="AIzaSyBjZ-7RnrSWEHZgkl3AKVg657OESyZQpkw"
async function search(){
    let query=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&part=snippet`
    let res=await fetch(url);
    let data=await res.json();
    let array_of_video=data.items;
    appendYouTubeData(array_of_video);
    console.log("data",array_of_video)
}

async function trendingVideos(){
    let query=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&part=snippet&chart=mostPopular`
    let res=await fetch(url);
    let data=await res.json();
    let array_of_video=data.items;
    appendYouTubeData(array_of_video);
    console.log("data",array_of_video)
}

trendingVideos();



let box=document.getElementById("homePageDiv");
function appendYouTubeData(data){
    box.innerHTML=""
    data.forEach(({snippet,id})=>{

        let title=snippet.title;
        let channelTitle=snippet.channelTitle;
        let thumbnail=snippet.thumbnails.high.url;
        let videoId=id.videoId;

        let div=document.createElement("div");
        let titleName=document.createElement("h1");
        titleName.innerText=title;
        let channelTitleName=document.createElement("h3");
        channelTitleName.innerText=channelTitle
        let thumbnailImg=document.createElement("img");
        thumbnailImg.src=thumbnail;
        div.append(thumbnailImg,titleName,channelTitleName)
        box.append(div);

       let data={
            snippet,
            videoId
       }
       
        div.onclick=()=>{
           storeVideo(data)
       }
        
    })

}

function storeVideo(data){
   localStorage.setItem("clicked_video",JSON.stringify(data))
   window.location.href="video.html";
}