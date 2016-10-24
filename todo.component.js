(function() {
    'use strict';

    angular
        .module('todo')
        .component('todo', {
            templateUrl: 'todo.html',
            bindings: {
                item: '='
            },
            controller: controller
        });

    controller.$inject = ['TodoService'];

    function controller(todoService) {
        this.checkTodo = todoService.check;
    }

})();
