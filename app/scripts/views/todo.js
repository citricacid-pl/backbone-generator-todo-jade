/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TodoView = Backbone.View.extend({
        template: JST['app/scripts/templates/todo'],

        tagName: 'li',

        id: '',

        className: '',

        events: {
            'click input[type="checkbox"]': 'toggle',
            'dblclick span': 'toggleEdit',
            'submit form': 'toggleEdit'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        toggle: function () {
            this.model.toggle();
        },

        toggleEdit: function () {
            var input = this.$('form input');
            var title = input.val().trim();

            if(!title) {
                this.model.destroy();
                this.remove();
                return;
            }

            this.$el.toggleClass('editing');
            if (title === this.model.get('title')) {
                input.val(title);
                input.focus();
            } else {
                this.model.set('title', title);
                this.model.save();
                this.render();
            }
        }
    });

    return TodoView;
});
