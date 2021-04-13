$(document).ready(function (e) {
  $("ul li a").on("click", function () {
    $("li a").removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");
    var eHref = $(href);

    $("html,body").animate(
      {
        scrollTop: eHref.offset().top - 50,
      },
      1150,
      "easeInOutExpo"
    );
    e.preventDefault;
  });
});
