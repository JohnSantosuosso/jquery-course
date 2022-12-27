$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select the #list and find all <li> tags it contains
  $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");
  // This contains even indirect children further down in the hierarchy

  // Select the #list and find only <li> that are *direct* children
  $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");


  // Search for even non-direct parents


  // Select the (unique) direct parent of an element

  // highlight(content);

  // Search through siblings on the same level in the HTML hierarchy
  $("#list").siblings(":header").css("background-color", "rgba(180, 30, 30, 0.8"); //selects all header tags on same level as list

  // Select the previous sibling of a selected element
  $("#list").prev().css("background-color", "rgba(0, 30, 30, 0.8"); //selects previous element in DOM from the list

  // Select the next sibling of a selected element
  $("#list").next().css("background-color", "rgba(50, 130, 30, 0.8");
});
// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}
