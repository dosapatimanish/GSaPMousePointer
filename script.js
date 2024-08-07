var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var imageDiv =document.querySelector("#image");


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        // ease:"back..out"
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:2,
        backgroundColor:"rgba(255, 255, 255, 0.332)",
        duration:0.6
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})


