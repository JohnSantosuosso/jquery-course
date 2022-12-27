$(function () {

  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  $("li:first").remove();

  //challenge
  $("form").children().not("input:text, textarea, br").remove();

  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  $("#list").after(detached);

  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  // $("form").empty();

});

//Using detach vs remove
//If you use remove and try to reinsert the variable with an event listener attached, the DOM will forget any associated event listeners, we DO NOT have this issue with 'detach'
