$(document).ready(function(){
  $('#loginBtn').on('click', function(){
    alert("123");
  });
});

$(document).ready(function(){
  $(".panel").css("min-height", $("#login").height());
  $("#container").css("min-height", $(".panel").height());
});
