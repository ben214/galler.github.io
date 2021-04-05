$(document).ready(function() {
    // all custom jQuery will go here
});
var pics = ["file:///C:/Users/1/Documents/GitHub/ben214.github.io/01.jpg",
 "file:///C:/Users/1/Documents/GitHub/ben214.github.io/02.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/03.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/04.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/05.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/06.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/07.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/08.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/09.jpg",
  "file:///C:/Users/1/Documents/GitHub/ben214.github.io/10.jpg"];
 var current = document.getElementById("slimg").src;
 var i = pics.indexOf(current);
 var len = pics.length;
 var playing = pics[i];
 var slimg = $("#slimg");
 var num = $("#number").html;
  var bottom = $(".bottom");
 var bottomSrc = $(".bottom").attr("src");

function reply_click(id) {

 var id = event.srcElement.id;
 var what1 = event.srcElement.src;
 var ind = pics.indexOf(what1);
 console.log(what1 +" "+ ind);
 document.getElementById("slimg").src = what1;
 $(".bottom").css("opacity", "0.6");
 document.getElementById(id).style= "filter: opacity(100%)";
 return id
}
function findme() {
  var mydr = ["b1", "b2" , "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"];
    for (var i = 0; i < mydr.length; i++) {
      if (document.getElementById(mydr[i]).src == document.getElementById("slimg").src) {
        $(".bottom").css("opacity", "0.6");
        document.getElementById(mydr[i]).style= "filter: opacity(100%)";
        console.log("found you!"+ mydr[1]);
      };
  };
}
$(document.slides).ready(function starting() {
  findme(),
  document.onkeydown = checkKey;

  function checkKey(e) {
      e = e || window.event;
    if (e.keyCode == '37') {
         prev()// left arrow
      }
      else if (e.keyCode == '39') {
         next()// right arrow
      }
   }
});
function next() {
  var current = document.getElementById("slimg").src;
  var i = pics.indexOf(current);
  var len = pics.length;
  var playing = pics[i];
  if (i < len -1) {
    i++;
  }else{
    i = 0;
  }
    current = pics[i];
    document.getElementById("slimg").src = current;
    findme();
    console.log(current+" ");

}
function prev() {
  var current = document.getElementById("slimg").src;
  var i = pics.indexOf(current);
  var len = pics.length;
  var playing = pics[i];
  if (i > 0) {
    i--;
  }else{
    i = len -  1;
  }
    current = pics[i];
    document.getElementById("slimg").src = current;
    findme();
    console.log(current+" ");
}

$(document).ready(function(){
  setInterval(function() {
    $("#slimg").fadeOut(1000)
    $("#slimg").css({"borderRadius": "250px", "height": "300px", "width": "400px"},"slow")
    $("#slimg").css({"borderRadius": "10px", "height": "500px", "width": "720px"},"slow")
    next()
    $("#slimg").fadeIn(1000)
  }, 3000);
});

function bigImg(x){
  x.style.height = "+=40px";
  x.style.width = "+=50px";
  x.style.boxShadow = "3px 3px 20px 10px white";
  x.style.xIndex = "0";
  x.style.display = "inline";
};

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "300px";
  x.style.boxShadow = "3px 3px 10px 4px black";
  x.style.position = "inherit";
};

function sliide(){
  document.getElementById("playing").src = event.srcElement.src;
  $("#playing").animate({display: "inlineBlock", top: "250px",
  left: "20%", width: "720px", height: "500px",
boxShadow: "40px 40px 40px 10px black", opacity: "1"} ,4000);
  console.log($("#playing").attr("src"));
}
