/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

//使用jQuery进行加载，我们之前已经有了其他组织范式的经验了
//视图是用户可以看到的，并且可以与之进行交互的东西
//router和View一样，只是用于URL栏
//我们的model即todo.js还有collections即各种todo的模型集合
//然后运行的app.js用于创建新应用
$(function () {
	'use strict';
	// kick things off by creating the `App`
	new app.AppView();
});
