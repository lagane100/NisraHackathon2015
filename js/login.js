$(document).ready(function(){
  $('#loginBtn').on('click', function(){
    $.ajax({
      type: "POST",
      url: "login.php",
      dataType:'json',
      async: false,
      data: {
        id: ('#Username')[0].value,
        passwd: ('#Password')[0].value
      },
      success: function(data) {
        if(data["Mode"]==SUCCESS){
          alert("welcome back");
          //window.location.replace("roomList.html");
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
