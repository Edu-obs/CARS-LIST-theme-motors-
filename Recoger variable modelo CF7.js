
 (function ($) {
    $(document).ready(function () {
      $('a[href="#popmake-747"]').on('click', function () {
        var tituloCoche = $(this).parents('.listing-list-loop').find('.stm-listing-compare').attr('data-title');
        $('#mod-coche').val(tituloCoche);
      });
    });
  })(jQuery);



