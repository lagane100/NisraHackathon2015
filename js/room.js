function showText(val)
{
  if (val)
    document.all.RoomPassword.style.display = "inline";
    else
    {
      document.all.RoomPassword.value = "";
      document.all.RoomPassword.style.display = "none";
    }
}

var socket = io.connect();

socket.on('date', function(data) {
  $('#date').text(data.date);
});

$(document).ready(function(){
  $('#enter').on('click', function(){
    socket.emit('client_data', {
      'letter': $('#text')[0].value
    });
  });
});
