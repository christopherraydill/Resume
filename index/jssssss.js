//plus and minus
$(document).ready(function() {
    $(".dropdown p").click(
        function() {
            $(this).toggleClass("minus");
            $(this).next().slideToggle(1000);
        }
    );  // end click
}); // end ready
