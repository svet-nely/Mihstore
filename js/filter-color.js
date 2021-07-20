//var $container = $('#container').isotope({
//itemSelector: '.products-card',
//layoutMode: 'fitRows',
//    getSortData: {
//      color: '.color'
//      }
//  });

$(function(){

  var $container = $('#container'),
      $checkboxes = $('.filters-select option');

  $container.isotope({
    itemSelector: '.products-card'
  });

  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.red', '.blue'] -> '.red, .blue'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });

  //$('#shuffle').click(function(){
  //  $container.isotope('shuffle');
  //});



});

//$('.filters-select').on('change', function() {
//        var filterValue = this.value;
//        $container.isotope({
//        filter: filterValue
//        });
//        return false;
//  });

//  $('.filter-select-content').each(function(i, filterSelectContent) {
//    var $filterSelectContent = $(filterSelectContent);
//    $filterSelectContent.on('click', 'option', function() {
//      $filterSelectContent.find('.active').removeClass('active');
//      $(this).addClass('active');
//    });
//  });


// init Isotope
//var $container = $('#container').isotope({
//itemSelector: '.products-card',
//layoutMode: 'fitRows',
//getSortData: {
//  filter: ['data-sort-color']
//}
//});

// bind filter on select change
//$('.filters-select').on('change', function() {
//  var filterValue = this.value;
  // get filter value from option value
//  $container.isotope({ filter: this.value });
//});
