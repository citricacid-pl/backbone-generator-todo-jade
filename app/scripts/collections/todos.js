/*global define*/

define([
    'underscore',
    'backbone',
    'models/todo'
], function (_, Backbone, TodosModel) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        model: TodosModel
    });

    return TodosCollection;
});
