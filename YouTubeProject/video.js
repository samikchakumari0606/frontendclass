
let video_div=document.getElementById("videoDiv");

function playVideo(){
let {videoId}=JSON.parse(localStorage.getItem("clicked_video"));
let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${videoId}?si=MHqaJ4yjr7EsGciK?autoplay=1`;
iframe.width="100%";
iframe.setAttribute("allowfullscreen",true);
video_div.append(iframe);


}