var RenameMeArea = RenameMeArea || {}; 

RenameMeArea = (function ($) {

    function prepare() {
        /* anything needed to run at script load (not page load) would be declared here */
    }

    function run() {
        /* executed on document load */
    }

    /* Add any new functions specific to this project here */

    return {
        run: run,
        prepare: prepare
    };


})(jQuery);

/*
Anonymous function to prepare the page prior to load being complete
*/

$(function () {
    RenameMeArea.prepare();
});

$(document).ready(function () {
    RenameMeArea.run();
});