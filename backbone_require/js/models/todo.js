/*global Backbone */
var app = app || {};

//匿名函数立即执行，我们在此函数内声明的任何变量，不会污染全局作用域，他们也不会上升到窗口对象
//
// 意思是说他们不会意外地覆盖任何已存在的变量
(function () {
	'use strict';

	// Todo Model
	// ----------

	// app.todo等于某些东西  ，传入一个对象字面量
	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},
		
		// Toggle the `priority` state of this todo item.
		togglePriority: function () {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
