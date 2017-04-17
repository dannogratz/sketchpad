$(document).ready(function() {
  //declare the variables at the top of  your functions...it enables us to change them later
  var columnWidthCount = 40;
  var columnHeightCount = 40;
  
  function makeBoxes() {
    //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows later this variable will be updated
    var boxCount = columnWidthCount * columnHeightCount;
  //
    for (var i = 0; i < boxCount; i++) { //loop through each box
    //any code you place in here will execute each time we loop around
      $("<div class='squares'></div>").appendTo('#main');
    }
    //we only want to declare this once so we place it after the loop
    $(".squares").width((620 / columnWidthCount) - 2);
    $(".squares").height((620 / columnHeightCount) - 2);
    $('.squares').hover(
      function() {
        $(this).addClass('hover');
      }
    );
  }
  //fire the initial function
  makeBoxes();
  // fire function after click
  $('#goagain').on("click", function() {
 
    $('div').remove('.squares');

    var squaresHigh = prompt("How many squares high? (must be a number)");
    var squaresWide = prompt("How many squares wide? (must be a number)");
   //prompt returns a string...use parseInt to turn that number string into an integer
    columnWidthCount = parseInt(squaresWide);
    columnHeightCount = parseInt(squaresHigh);

    makeBoxes();
  });

  $("#rng").on("click", function(){
    $(".squares").hover(function(){

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+", "+g+", "+b+")"
      $(this).css("background-color", color)

    });

  });

  $("#clear").on("click", function(){
    var color = "#291B2C"
    $( ".squares" ).css("background-color", color)
    $( ".squares" ).hover(function(){
      $(this).css("background-color", "#CCA969")
    });

  });



  $( "#resetcolor" ).on("click", function(){
    $( ".squares" ).hover(function(){
      $(this).css("background-color", "#CCA969")
    });
  });

});