$(document).ready(function(){

  var $orders = $('#orders');
  var $name = $('#name');

function getBoard(){
  $.ajax({
    type: 'GET',
    url: 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/Deadpool',
    success: function(orders) {
      $.each(orders, function(i, order) {
        $orders.append('<li>name: '+ order.player_name +', score: '+ order.score + '</li>');
      });
    },
    error: function() {
      alert('Unable to get board')
    }
  });
}

  $('#add-order').on('click', function() {
    event.preventDefault();

    var order = {
      game_name: "Deadpool",
      player_name: "William",
      score: 90
    };

    $.ajax({
      type: "POST",
      url: "https://galvanize-leader-board.herokuapp.com/api/v1/leader-board",
      data: JSON.stringify(order),
      dataType: "json",
      contentType: 'application/json',
      success: function(data, textStatus) {
        console.log(data, textStatus)
      }
    });
  });
  
  getBoard();
});













