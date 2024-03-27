
function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML= "Good morning, I am Roger Jin";
    } else if (h>=12 && h< 18) {
        E.innerHTML+= "Good afternoon, I am Roger Jin";
    } else if (h>=18 && h<20){
        E.innerHTML= "Good evening, I am Roger Jin";
    } else {
        E.innerHTML="Good night, I am Roger Jin";
    } 
}
/*greetingFunc();*/

var L = window.location.href;
console.log(L);
if (L.includes("index.html")){
    greetingFunc();
}

function addYear(){
    var d=new Date();
    var y= d.getFullYear();
    var E=document.getElementById("copyYear");
    E.innerHTML += y;
}
/*
function showList(){
    document.getElementById("FavList").style.display="block"
    document.getElementById("SeeMoreBTN").style.display="none"
}
*/

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});
$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }


 // Initialize and add the map

let map;

async function initMap() {
const position = { lat: 40.441886254142254, lng:-80.01286467469035};
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
 });

const marker = new AdvancedMarkerElement({
   map: map,
   position: position,
   title: "CMU",
 });
}

var L = window.location.href;
console.log(L);
if (L.includes("index.html")){
    greetingFunc();
}

var L = window.location.href;
console.log(L);
if (L.includes("fun.html")){
    initMap();
}


