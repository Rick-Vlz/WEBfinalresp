$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();
    $("h1, h2, h3, h4, h5").css({
        "color":
        "Grey",
        "font-family": 
        "xd"});
    $("#vid1").attr("src", "assets/video/vid1.mp4");
    $("#vid2").attr("src", "assets/video/vid2.mp4");
    $("#vid3").attr("src", "assets/video/vid3.mp4");

    new TypeIt("#simpleUsage", {
        speed: 65,
        waitUntilVisible: true,
    })
    .exec(async () => {
        //-- Return a promise that resolves after something happens.
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 1200);
    });
    })
    .type("  Una vida mas larga... Una con mas posibilidades")
    .go();
   
});
