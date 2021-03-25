$(document).ready(function () {
  $("img").click(function() {
  const value = parseInt($(this).attr('value'));
  if (value === 1) {
    $("#honey-badger-text").show();
    $("#sloth-text").hide();
    $("#murder-hornet-text").hide();
  } else if (value === 2) {
    $("#honey-badger-text").hide();
    $("#sloth-text").show();
    $("#murder-hornet-text").hide();
  } else {
    $("#honey-badger-text").hide();
    $("#sloth-text").hide();
    $("#murder-hornet-text").show();
  }
  })
});
