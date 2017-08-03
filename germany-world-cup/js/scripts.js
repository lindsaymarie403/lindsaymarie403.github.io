$(document).ready(function() {
  $("button").click(function() {
    $(".legend").toggle();
    $("#hide, #show").toggle();
    $("button").toggleClass("btn-danger");
  });

});
