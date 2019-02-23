$( document ).ready(function() {
    $("#font-list").css({
        "background-color" : "#DDDDDD",
        "font-size" : "20px",
        "color" : "#000"
    });
    let fontItem = "";
    let randomColor, red, blue, green;
    for(var i=15;i<65;i++){
        fontItem = '<li id="font'+i+'" >I am Font Size: ' + i + '</li>'; 
        $("#font-list").append(fontItem);
        red = Math.floor(Math.random()*256);
        blue = Math.floor(Math.random()*256);
        green = Math.floor(Math.random()*256);
        console.log(red);
        randomColor = "rgb(" + red + ", " + green + ", " + blue +")";
        $("#font"+i).css({
            "background-color": randomColor,
            "font-size" : i+"px",
            "margin" : "0.5rem 0"
        });       
    }
});