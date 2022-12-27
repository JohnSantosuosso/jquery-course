$(function () {
  //jQuery goes here...

  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000); //with fadeout it disappears completely and can't reference again
  $(".blue-box").fadeTo(2000, 0);
  $(".red-box").fadeIn(1000);
  $(".red-box").fadeTo(1000, 0.5); //second parameter defines the opacity we want to fade to

  $(".red-box").fadeToggle(1000); //if already shown, will fade out, if not show, will fade in
});
