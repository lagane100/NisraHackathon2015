$(document).ready(function(){
<<<<<<< HEAD
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
        alert(data);
      }
    });
  });
});
=======
  $('#loginBtn').on('click', function(){
    alert("123");
  });
});

$(document).ready(function(){
  $(".panel").css("min-height", $("#login").height());
  $("#container").css("min-height", $(".panel").height());
});
>>>>>>> bb2bf7f8eb35827d59333253730ce2614e9af124
