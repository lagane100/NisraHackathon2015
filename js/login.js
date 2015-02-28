$(document).ready(function(){
  $('#loginBtn').on('click', function(){
    $.ajax({
      type: "POST",
      url: "login.php",
      dataType:'json',
      data: {
        id: ('#Username')[0].value,
        passwd: ('#Password')[0].value
      },
      success: function(data) {
        alert(data["Mode"]);
      },
      error: function(data) {
        alert(data["Mode"]);
      }
    });
  });
});

$(document).ready(function(){
  $(".panel").css("min-height", $("#login").height());
  $("#container").css("min-height", $(".panel").height());
});
