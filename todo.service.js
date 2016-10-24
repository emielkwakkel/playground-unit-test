(function() {
    'use strict';

    angular
        .module('todo')
        .service('TodoService', TodoService);

    TodoService.$inject = ['TODO_STATUS'];

    /**
     * @param {Object} TODO_STATUS Todo status constant
     * @constructor
     * @ngInject
     */
    function TodoService(TODO_STATUS) {
        var id = 1;
        var todos = [
            {
                id: 0,
                title: 'Test Angular app',
                state: TODO_STATUS.OPEN
            }
        ];
        this.newTodo = {};
        this.todos = todos;
        this.add = add;
        this.check = check;

        ////////////////

        /**
         * Add todo
         * @param {Object} todo The todo to add
         * @returns {Array} List of all todos
         */
        function add(todo) {
            // Todo must be an object containing a title
            if (!todo || typeof todo.title !== 'string') {
                return;
            }

            todo.state = TODO_STATUS.OPEN; // Add state to the object
            todo.id = id; // Add id to the object
            id += 1; // Add 1 tot the id to make it unique
            todos.push(todo); // Add the todo to the todos array
            this.newTodo = {}; // Empty the newTodo object

            return todos;
        }

        /**
         * @param {number} id Id of the todo to check
         */
        function check(id) {
            if(typeof id !== 'number') {
                return;
            }

            for (var todo in todos) {
                if (todos[todo].id === id) {
                    if (todos[todo].state === TODO_STATUS.COMPLETED) {
                        todos[todo].state = TODO_STATUS.OPEN;
                    } else {
                        todos[todo].state = TODO_STATUS.COMPLETED;
                    }
                }
            }
        }
    }
})();
