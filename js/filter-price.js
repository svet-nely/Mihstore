var $container = $('#container').isotope({
  // options
  itemSelector: '.payment-card-col',
  layoutMode: 'masonry',
  getSortData: {
    price: '.number parseFloat',
  }
});

$('.filter-list-content').on('click', 'input', function() {
  var sortValue = $(this).attr('data-sort-value');
  var sortDirection = $(this).attr('data-sort-direction');
  sortDirection = sortDirection == 'asc';
  $container.isotope({
    sortBy: sortValue,
    sortAscending: sortDirection
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'input', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});
