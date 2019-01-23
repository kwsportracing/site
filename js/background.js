$(document).ready(function() {
  var bgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg','8.jpg'];
  var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
  var path = '../img/background/';
  var imageUrl = path + bg;
  $('#hero').css('background-image', 'url(' + imageUrl +')');
});
