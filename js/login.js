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
    $.ajax({
      type: "POST",
      url: "login.php",
      dataType: 'json',
      async: false,
      data: {
        id: ('#Username')[0].value,
        passwd: ('#Password')[0].value
      },
      success: function(data) {
        if(data["Mode"]=="SUCCESS"){
          alert("welcome back");
          window.location.replace("roomList.html");
        }
        else{
          alert("Wrong password or account");
          window.location.replace(window.location.href);
        }
      },
      error: function(data) {
        alert(data);
      }
    });
  });
});

$(document).ready(function(){
  $(".panel").css("min-height", $("#login").height());
  $("#container").css("min-height", $(".panel").height());
});
<<<<<<< HEAD

$(document).ready(function(){
  $('#back').on('click', function(){
    window.location.replace("index.html");
  });
});
=======
>>>>>>> bb2bf7f8eb35827d59333253730ce2614e9af124
>>>>>>> 4e022f5f29ee9282e5b6b80ebe6286d7bd59f798
