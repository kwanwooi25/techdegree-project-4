// Search
$('.input-search').on('keyup',function() {
  var $searchText = $(this).val().toLowerCase();
  if ($searchText === '') {
    $('img').parent().show();
  } else {
    $('img').parent().hide();
    $('img[alt*=' + $searchText + ']').parent().show();
  }
});

//Lightbox - lightGallery
var $lg = $('.gallery');
$lg.lightGallery({
  mode: 'lg-fade',
  speed: 300,
  download: false,
  counter: false
});
