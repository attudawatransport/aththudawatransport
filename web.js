let image=document.getElementById("changimg");
let images=['ee.jpg','ff.jpg','IMG_0790.JPG']
setInterval(function(){
    let random=Math.floor(Math.random()*2);
    image.src=images[random];
},2500);