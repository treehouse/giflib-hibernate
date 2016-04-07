$(function(){
    // Activate mobile nav toggle button
    $(".button-collapse").sideNav({edge: 'right'});

    // Activate close icons for dismissible alerts
    $('[data-close]').on('click',function(){
        $(this).parent().remove();
    });

    // Capture change event on file inputs
    $('input[type=file]').on("change",function(){
        var value = $(this).val().split('\\').pop();
        value = value == null || value == '' ? $(this).find('.placeholder').data('placeholder') : value;
        $(this).parent('.file-wrapper').find('.placeholder').text(value);
    });

    var onChange = function(obj) {
        // Get option style
        var style = $(obj.selEl).find('li.cs-selected').attr('style');

        // Set style of parent cs-select placeholder to style of option
        $(obj.selPlaceholder).attr('style',style);
    };

    var onLoad = function(obj) {
        // Get selected option
        var $option = $(obj.el).find('option[selected]');

        if($option.length > 0) {
            // Get option style
            var style = $(obj.el).find('option[selected]').attr('style');

            // Set style of parent cs-select placeholder to style of option
            $(obj.selPlaceholder).attr('style',style);

            // Mark selected item as selected
            $(obj.selEl).find('ul li[data-value="' + obj.el.value + '"]').addClass('cs-selected');
        } else {
            // Unmark list items as cs-selected, since first is selected by default
            $(obj.selEl).find('ul li').removeClass('cs-selected');

            // Set select element's value to empty string
            $(obj.el).val('');
        }
    };

    // Activate Codrops select magic
    (function() {
        [].slice.call( document.querySelectorAll( 'select' ) ).forEach( function(el) {
            new SelectFx(el,{onLoad:onLoad,onChange:onChange});
        });
    })();
});