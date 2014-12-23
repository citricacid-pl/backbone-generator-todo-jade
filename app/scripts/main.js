/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        localStorage: '../bower_components/backbone.localStorage/backbone.localStorage-min',
        jade: '../bower_components/jade/jade'
    }
});

require([
    'backbone',
    'views/todos',
    'collections/todos'
], function (Backbone, TodosView, TodosCollection) {
    var todosView = new TodosView({
        collection: new TodosCollection()
    });

    Backbone.history.start();
});
