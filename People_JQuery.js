function initJQ() {
  $(".personbox").css({
    "height": "162px"
  })
}


$(document).ready(function() {
  /*Åpner og lukker personbokser*/
  $(".personbox").click(function() {
    if ($(this).css("--expanded") == "1") {
      console.log("hello world!")
      $(this).css({
        "height": "",
        "--expanded": "",
        "opacity": ""
      });
      $(".unimportant").css
    } else {
      console.log("hello")
      $(this).css({
        "height": "auto",
        "opacity": "1",
        "--expanded": "1"
      });
    }
  });

});
