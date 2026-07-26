/*  Theme Name: Blogezy - Responsive Blog Template
    Author: Zoyothemes
    Version: 1.0.0
    File Description:Main JS file of the template
*/
(function($) {

    'use strict';

    function initNavToggle() {
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            var expanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !expanded);
            $('#site-nav').toggleClass('is-open');
        });
    }

    function initSearchToggle() {
        $('#search-toggle').on('click', function (event) {
            event.preventDefault();
            var expanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !expanded);
            $('#site-search').toggleClass('is-open');
            if (!expanded) {
                $('#search-input').trigger('focus');
            }
        });
    }

    function init() {
        initNavToggle();
        initSearchToggle();
    }
    init();

})(jQuery)
