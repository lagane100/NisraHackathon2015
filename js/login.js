$(document).ready(function(){
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
