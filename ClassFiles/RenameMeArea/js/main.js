define([
    "jquery",
    "underscore",
    "score_ccf/ModuleLoader",
    "scorebootstrap",
    "matchHeight",
    "tabCollapse"
],
function ($, _, moduleLoader, scorebootstrap) {
    "use strict";

    //prevents dropdown from closing when clicked inside
    $(document).on("click", ".score-megamenu .dropdown-menu", function (e) {
        e.stopPropagation();
    });

    //initialize match height
    $(".score-style-box").matchHeight();
    $(".score-highlight").matchHeight();

    // if you need to monkey patch anything in Score Bootstrap Initialization logic
    // here's where you would do it. Before calling to init(). Something like:
    // scorebootstrap.Accordion.init = function() { ... }

    // init SCORE Bootstrap components (Tabsets, Accordeons, Carousels, etc.)
    scorebootstrap.init();

    //turn tabs into accordion
    $(".nav-tabs").tabCollapse();

    moduleLoader.loadPendingModules().done(function() {
        // anything that neeeds to run globally when all modules are loaded goes here
    });
});