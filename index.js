(function() {

    angular
        .module('myApp', [])
        .config(config)
        .run(run);

    function config() {
        console.log('config');
    }

    function run($scope) {
        console.log('hello');
    }

    function another_function() {
        
    }

})();
