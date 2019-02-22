// alert("Hello World");

// var redwalalist = document.querySelectorAll("#myId")[0];

// redwalalist.style.color="red";
// redwalalist.style.fontSize="20px";

// var twoThree = document.getElementsByClassName("myclass");

// twoThree[0].textContent = "Yeh kya ho gya!";

// var myList = document.getElementsByTagName("ul")[0];

// //myList.innerHTML = "<li style='color: blue;'>Amazing</li>";

// var myImg = document.querySelector("img");

// myImg.src="about-bg.jpg";

$("#myId").css("color", "red");

$("#change").click(function() {
    console.log("Button clicked");
    $(".myclass").text("Changed");
    $("ul").html("<li>I am changed</li>");
    $("img").attr("src","about-bg.jpg");
});

document.getElementById("change").addEventListener("click", function(){
    console.log("Second Button");
});