// WOW.js 초기화
new WOW().init();

$(function () {
  const $list = $('.all_products');
  const $item = $('.all_products li');
  const itemWidth = $item.outerWidth(true);
  const visibleCount = 4;
  let index = 0;

  $('.next').on('click', function () {
    if (index < $item.length - visibleCount) {
      index++;
      $list.css('transform', `translateX(${-itemWidth * index}px)`);
    }
  });

  $('.prev').on('click', function () {
    if (index > 0) {
      index--;
      $list.css('transform', `translateX(${-itemWidth * index}px)`);
    }
  });
});
