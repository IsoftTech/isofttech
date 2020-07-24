$(document).ready(function () {
  // Initializing slide / carousel
  $(".carousel-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Side drawer events

  $(".hamburger").click(function () {
    $(".menu-sm").addClass("active");
    $(".backdrop").addClass("active");
    $("body").addClass("inactive");
  });

  $(".close-menu-btn").click(function () {
    $(".menu-sm").removeClass("active");
    $(".backdrop").removeClass("active");
    $("body").removeClass("inactive");
  });

  $(".backdrop").click(function () {
    $(".menu-sm").removeClass("active");
    $(".backdrop").removeClass("active");
    $("body").removeClass("inactive");
  });

  $("[name='auth']").change(function () {
    var id = this.id;
    if (id === "sign-up") {
      $(".for-signin").addClass("hide");
      $(".for-signup").removeClass("hide");
    } else if (id === "sign-in") {
      $(".for-signup").addClass("hide");
      $(".for-signin").removeClass("hide");
    }
  });

  $(".answer-toggler").click(function () {
    $(this).next().slideToggle();
  });

  function progress(done, current, divHide, divShow) {
    $("." + done).addClass("done");
    $("." + current).addClass("active");
    $("." + divHide).removeClass("show");
    $("." + divHide).addClass("hide");
    $("." + divShow).addClass("show");
  }

  $(".to-delivery").click(function () {
    progress("auth", "delivery", "login-signup", "delivery");
  });

  $(".to-billing").click(function () {
    progress("delivery", "billing", "delivery", "billing");
  });

  $(".to-payment").click(function () {
    progress("billing", "order", "billing", "payment");
  });

  function tabChangeHandler(event) {
    $(event.data.tabContainer + " .tabs > .tab").removeClass("active");
    $(this).addClass("active");

    var contentToShow = $(this).attr("data-tab-show");
    $(event.data.contentContainer + " > " + event.data.content).removeClass(
      "active"
    );
    $(event.data.contentContainer + " > #" + contentToShow).addClass("active");
  }

  // Dashboard tab events

  $(".dashboard-tab-container .tabs > .tab").on(
    "click",
    "",
    {
      tabContainer: ".dashboard-tab-container",
      contentContainer: ".dashboard-tab-content-container",
      content: ".dashboard-content",
    },
    tabChangeHandler
  );

  // Orders tab events

  $(".orders-tab-container .tabs > .tab").on(
    "click",
    "",
    {
      tabContainer: ".orders-tab-container",
      contentContainer: ".orders-content-container",
      content: ".orders-content",
    },
    tabChangeHandler
  );

  // Listings tab events

  $(".listings-tab-container .tab").on(
    "click",
    "",
    {
      tabContainer: ".listings-tab-container",
      contentContainer: ".listings-content-container",
      content: ".listings-content",
    },
    tabChangeHandler
  );

  // Sales tab events

  $(".sales-tab-container .tab").on(
    "click",
    "",
    {
      tabContainer: ".sales-tab-container",
      contentContainer: ".sales-content-container",
      content: ".sales-content",
    },
    tabChangeHandler
  );

  // Payments tab events

  $(".payments-tab-container .tab").on(
    "click",
    "",
    {
      tabContainer: ".payments-tab-container",
      contentContainer: ".payments-content-container",
      content: ".payments-content",
    },
    tabChangeHandler
  );

  // Favourites tab events

  $(".favourites-tab-container .tab").on(
    "click",
    "",
    {
      tabContainer: ".favourites-tab-container",
      contentContainer: ".favourites-content-container",
      content: ".favourites-content",
    },
    tabChangeHandler
  );

  // Settings tab events

  $(".settings-tab-container .tab").on(
    "click",
    "",
    {
      tabContainer: ".settings-tab-container",
      contentContainer: ".settings-content-container",
      content: ".settings-content",
    },
    tabChangeHandler
  );
});
