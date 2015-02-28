$(document).ready(function(){
  $('#signup').on('click', function(){
    $.ajax({
      type: "POST",
      url: "login.php",
      dataType: 'json',
      async: false,
      data: {
        id: ('#Username')[0].value,
        passwd: ('#Password')[0].value,
        sex: $("input[name='sex'][type='radio']:checked").val(),
        racial: $("input[name='racial'][type='radio']:checked").val()
      },
      success: function(data) {
        alert("123");
      },
      error: function(data){
        alert("data");
      }
    });
  });
});
