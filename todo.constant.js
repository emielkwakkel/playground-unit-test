(function() {
    'use strict';

    angular
        .module('todo')
        .constant('TODO_STATUS', {
            OPEN: 'open',
            COMPLETED: 'completed'
        });

})();