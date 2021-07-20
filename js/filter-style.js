//var $output = $('#output');

  // filter with selects and checkboxes
//var $checkboxes = $('.filter-checkbox input');

// init Isotope
//var $container = $('#container').isotope({
//  itemSelector: '.products-card',
//  layoutMode: 'fitRows'
//  getSortData: {
//    style: ['data-style']
//  }
//});

//$checkboxes.change( function() {
  // map input values to an array
//  var inclusives = [];
  // inclusive filters from checkboxes
//  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
//    if ( elem.checked ) {
//      inclusives.push( elem.value );
//    }
//  });

  // combine inclusive filters
//  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

//  $output.text( filterValue );
//  $container.isotope({ filter: filterValue })
//});



$(function(){

  $container.isotope({
    itemSelector: '.products-card',
    //layoutMode: 'fitRows'
  });

  var $container = $('#container'),
      $checkboxes = $('.filter-checkbox option');

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

  $('#output').click(function(){
    $container.isotope('shuffle');
  });

});
