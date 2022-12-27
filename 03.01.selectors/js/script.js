$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // To select elements in jQuery, you can simply use any CSS selector inside
  // the $() function by passing it in as a string.

  // Select all paragraph tags
    $("p").css("background-color", "rgba(180, 180, 30, 0.7");

  // Select all elements with the class .red-box (only one in this case)
  $(".red-box").css("background-color", "rgba(180, 180, 30, 0.7");

  // Select the unique element with ID "list"
  $("#list").css("background-color", "rgba(180, 180, 30, 0.7");

  // Select all h2, p, and input tags
  $("h2, p, input").css("background-color", "rgba(90, 90, 180, 0.8");

  // Select only the last <li> on the page
  $("li:last").css("background-color", "rgba(180, 90, 180, 0.8");

  // Select all even list items on the page (every second list item)
  $("li:even").css("background-color", "rgba(180, 90, 180, 0.8");

  // Select all odd list items (every other list item)
  $("li:even").css("background-color", "rgba(50, 90, 180, 0.8");

  // Select all input elements that are checked/selected
  // Checkboxes and radio buttons don't have background-color
  $("input:text").css("background-color", "rgba(120, 90, 180, 0.8");

  // Select all input elements of type email
  $("input:email").css("background-color", "rgba(130, 40, 180, 0.8");

// Helper function which highlights the given element with yellow background
});
