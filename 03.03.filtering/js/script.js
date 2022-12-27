$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");
  // Same as $("#list > li:even"), using more advanced CSS
  $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");


  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  $("li").filter(function(index) { //iterates through li items looking at index value of each item
    return index % 3 === 2; //returns true (keeps element) only if index modulo 3 is equal to 1
  }).css("background-color", "rgba(180, 0, 30, 0.8");
  
  // Keep only the first item of a selection
  $("li").first().css("background-color", "rgba(0, 0, 30, 0.8");


  // Keep only the last item of a selection
  $("li").last().css("background-color", "rgba(130, 0, 30, 0.8");

  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  $("li").eq(4).css("background-color", "rgba(0, 180, 30, 0.8");

  // Keep only the second last item (index -2):
  $("li").eq(-2).css("background-color", "rgba(0, 180, 30, 0.8");


});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}
