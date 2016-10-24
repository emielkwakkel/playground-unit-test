(function() {
    'use strict';

    angular
        .module('todo')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['TodoService'];

    /**
     * @param {Object} todoService Todo service
     * @constructor
     * @ngInject
     */
    function TodoController(todoService) {
        var vm = this;
        vm.newTodo = todoService.newTodo;
        vm.todos = todoService.todos;
        vm.addTodo = todoService.add;
    }

})();
