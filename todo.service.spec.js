'use strict';

var todoService;

beforeEach(function() {
    setup();
});

describe('todoService', function() {
    it('should exist', function() {
        expect(todoService).to.exist;
    });

    describe('add', function() {
        it('should add a todo to the todos array', function() {
            var todo = {
                title: 'New todo',
                state: 'open'
            };

            todoService.add(todo);

            expect(todoService.todos).length.to.be.above(1);
        });

        it('should return undefined if no todo is supplied', function() {
            var todos = todoService.add();

            expect(todos).to.be.undefined;
        })
    });
});


function setup() {
    angular.mock.module('todo', function($provide) {
        $provide.constant('TODO_STATUS', {test:"test"});
    });
    angular.mock.inject(function(TodoService) {
        todoService = TodoService;
    })
}