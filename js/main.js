$('.chocolat-image').each(function() {
  var titleForChocolat = '<strong>'
                        + $(this).children('img').attr('alt')
                        + '</strong> - '
                        + $(this).children('img').attr('caption');
  $(this).attr('title', titleForChocolat);
});

$('.gallery').Chocolat({
  imageSize: 'cover',
  loop: true
});
