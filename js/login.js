$(document).ready(function(){
<<<<<<< HEAD
    $(".panel").css("min-height", $("#login").height());
    $("#container").css("min-height", $(".panel").height());
});
=======
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
>>>>>>> f552a337942cb0706400f7ef6ed6b36aca0ecbdb
