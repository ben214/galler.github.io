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

$(".linepic > img:gt(0)").hide();
setInterval(function() {
  $('.linepic > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slimg');
}, 3000);
