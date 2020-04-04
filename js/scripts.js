$(document).ready(function() {
    $(".clickable1").click(function() {
    $(".development-text").slideToggle();
    $(".development-icon").slideToggle()
  });
    $(".clickable2").click(function() {
    $(".product-text").slideToggle();
    $(".product-icon").slideToggle()
  });
    $(".clickable").click(function() {
    $(".design-text").slideToggle();
    $(".design-icon").slideToggle()
  });
    $(".snake").snakeify({
      speed: 200
    })
})

document.getElementById("submit").addEventListener("click",function(event){
  event.preventDefault()
})
function validateForm(){
  var username = $("#NAME").val();
  var useremail = $("#EMAIL").val();
  var usermessage = $("#MESSAGE").val();

  if (username === ""){
  document.getElementById("Invalid").innerText = "Please enter your name!"
  document.getElementById("Invalid").style.color ="white"
} else if(useremail === ""){
  document.getElementById("Invalid1").innerText = "Please enter your email!"
  document.getElementById("Invalid1").style.color ="white"
} else if(usermessage === ""){
  document.getElementById("Invalid2").innerText = "Please type your message!"
  document.getElementById("Invalid2").style.color ="white"
} else{
  document.getElementById("contact").innerHTML = "Thank you for your feedback!"
  document.getElementById("contact").style.fontSize = "50px"
  document.getElementById("contact").style.textAlign = "center"
  document.getElementById("contact").style.color ="White"
  document.getElementById("contact").style.padding = "20%"
  alert("Thank you for reaching to us " + username +  ". Your message has been received by us and is being reviewed")
};
};