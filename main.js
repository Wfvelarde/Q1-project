$(document).ready(function(){

  var $orders = $('#orders');
  var $name = $('#first_name2');
// console.log($name)
function getBoard(){
  $.ajax({
    type: 'GET',
    url: 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/Space',
    success: function(orders) {
      $.each(orders, function(i, order) {
        $orders.append('<li>'+ order.player_name + order.score + '</li>');
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
      game_name: "Space",
      player_name: $name,
      score: score
    };
// console.log($name);
    $.ajax({
      type: "POST",
      url: "https://galvanize-leader-board.herokuapp.com/api/v1/leader-board",
      data: JSON.stringify(order),
      dataType: "json",
      contentType: 'application/json',
      success: function(data, textStatus) {
        console.log("hello")
      }
    });
  });
  
  getBoard();
});













