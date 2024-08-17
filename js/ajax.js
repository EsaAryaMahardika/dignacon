$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".nav-item").removeClass("active");
    $(this).parent().addClass("active");
    $(".tab-pane").removeClass("show active");
    var target = $(this).attr("data-bs-target");
    $(target).addClass("show active");
  });
  $("#dagnaf-tab").on("click", function (event) {
    event.preventDefault();
    $(".title")
      .removeClass("show")
      .fadeOut(200, function () {
        $(this).text("Dagnaf").fadeIn(200).addClass("show");
      });
  });
  $("#dagnapress-tab").on("click", function (event) {
    event.preventDefault();
    $(".title")
      .removeClass("show")
      .fadeOut(200, function () {
        $(this).text("Dagnapress").fadeIn(200).addClass("show");
      });
  });
  $("#dagnalev-tab").on("click", function (event) {
    event.preventDefault();
    $(".title")
      .removeClass("show")
      .fadeOut(200, function () {
        $(this).text("Dagnalev").fadeIn(200).addClass("show");
      });
  });
  $("#dagnatemp-tab").on("click", function (event) {
    event.preventDefault();
    $(".title")
      .removeClass("show")
      .fadeOut(200, function () {
        $(this).text("Dagnatemp").fadeIn(200).addClass("show");
      });
  });
  $("#dagnasens-tab").on("click", function (event) {
    event.preventDefault();
    $(".title")
      .removeClass("show")
      .fadeOut(200, function () {
        $(this).text("Dagnasens").fadeIn(200).addClass("show");
      });
  });
});
