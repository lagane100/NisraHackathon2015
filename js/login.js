$(document).ready(function(){
    $(".panel").css("min-height", $("#login").height());
    $("#container").css("min-height", $(".panel").height());
  $('#loginBtn').on('click', function(){
    $.ajax({
      type: "POST",
      url: "login.php",
      data: {
        id: ('#Username')[0].value,
        passwd: ('#Password')[0].value
      },
      dataType: 'json',
      async: false,
      success: function(data) {
        alert("123");
      }.complete({
        alert("1234");
      });
    });
  });
});
