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
    });
});

function setup() {
    angular.mock.module('todo', function($provide) {
        $provide.value('TODO_STATUS', {});
    });
    angular.mock.inject(function(TodoService) {
        todoService = TodoService;
    })
}

// beforeEach(function() {
//     setup();
// });

// describe('todoService', function() {
//     it('should exist', function() {
//         expect(todoService).to.exist;
//     });
//
//     describe('add', function() {
//         it('should add a todo to the todos array', function() {
//             var todo = {
//                 title: 'New todo',
//                 state: 'open'
//             };
//
//             todoService.add(todo);
//
//             expect(todoService.todos).length.to.be.above(1);
//
//         });
//     });
//
//     describe('check', function() {
//         it('should set')
//     });
//
// });


// function setup() {
//     angular.mock.module('todo', function($provide) {
//         $provide.value('TODO_STATUS', {});
//     });
//     angular.mock.inject(function(TodoService) {
//         todoService = TodoService;
//     });
// }