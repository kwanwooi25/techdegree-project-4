/* ==================================================
 Search Box
================================================== */

$('.input-search').on('keyup',function() {
  var $searchText = $(this).val().toLowerCase();
  if ($searchText === '') {     // if nothing is typed on search field,
    $('img').parent().show();   // show all the images
  } else {                      // if input is not null,
    $('img').parent().hide();   // hide all the images first,
    $('img[alt*=' + $searchText + ']').parent().show();
                                /* then only show the images
                                   when the images' alt attribute includes
                                  the text input on search field. */
  }
});


/* ==================================================
 Lightbox Gallery
================================================== */

var $lg = $('.gallery');
$lg.lightGallery({
  mode: 'lg-fade',
  speed: 300,
  download: false,
  counter: false
});
