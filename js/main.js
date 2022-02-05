// Services Slider
$(".owl-service").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1, nav: false },
    600: { items: 1, nav: false },
    1024: { items: 3, nav: true },
    1200: { items: 3, nav: true },
  },
});
$(".owl-courses").owlCarousel({
  items: 4,
  loop: true,
  dots: true,

  autoplay: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("nav ul li a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
// Accordion
const accItems = document.querySelectorAll(".acc-item");
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));
function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) =>
    item != this ? item.classList.remove("acc-item-active") : null
  );
  // toggle active class on current item
  if (this.classList != "acc-item-active") {
    this.classList.toggle("acc-item-active");
  }
}
// Digits Animation
const counters = document.querySelectorAll(".count-digit");
const speed = 200;
counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("value");
    const data = +counter.innerText;
    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };
  animate();
});

// $(window).scroll(function() {
//   if (visible($('.count-digit'))) {
//   }
// })