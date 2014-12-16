/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/todo',
    'views/todo'
], function ($, _, Backbone, JST, TodoModel, TodoView) {
    'use strict';

    var TodosView = Backbone.View.extend({
        el: '#todo-app',

        template: JST['app/scripts/templates/todos.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'submit': 'createTodo'
        },

        initialize: function () {
            this.render();
            this.listenTo(this.collection, 'add', this.addTodoItem);
            this.listenTo(this.collection, 'reset', this.addAllTodoItems);
            this.collection.fetch();
        },

        render: function () {
            this.$el.html(this.template());
        },

        createTodo: function (e) {
            e.preventDefault();
            var title = this.$('#new-todo').val().trim();

            if (title) {
                this.collection.create(new TodoModel({
                    title: title
                }));
                $('#new-todo').val();
            }
        },

        addTodoItem: function (todo) {
            var view = new TodoView({model: todo});

            this.$('ul').append(view.render().el);
        },

        addAllTodoItems: function () {
            this.collection.each(this.addTodoItem, this);
        }
    });

    return TodosView;
});
