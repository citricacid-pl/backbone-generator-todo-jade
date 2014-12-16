/*global define*/

define([
    'underscore',
    'backbone',
    'models/todo',
    'localStorage'
], function (_, Backbone, TodoModel, LocalStorage) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel
    });

    TodosCollection.prototype.localStorage = new LocalStorage('backbone-generator-todos');

    return TodosCollection;
});
