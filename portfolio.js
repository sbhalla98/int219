document.onload=slideshow();
$(".next").hover(function(event){
    var target=event.target;
    $(target).animate({"height":"100px","width":"110px","right":"0px"},"fast");
},
function(event){
    var target=event.target;
    $(target).animate({"height":"80px","width":"90px","right":"5px"},"fast");
})
var arr = ['./images/portfolio.jpg','./images/portfolio.jpeg','./images/prtofolio.png','./images/prtoflio.jpg','./images/portfolio1.jpg'];
var imgname = document.getElementsByClassName("mainimg")[0].getAttribute('src');
function slideshow(){
    var i=1;
    slideshowid = setInterval(() => {
        document.getElementsByClassName("mainimg")[0].setAttribute('src',arr[i]);
        i++;
        if(i==(arr.length)){
                i=0;
        }
    }, 3000);
}
function moveToContact(){
    $('html,body').animate({scrollTop:($('#contact').offset().top)},500);
}
function moveToAbout(){
    $('html,body').animate({scrollTop:($('#aboutus').offset().top)},500);
}
function moveToBlog(){
    $('html,body').animate({scrollTop:($('#Blog').offset().top)},500);
}