(function() {

    var body = document.body;

    run();
    gun();
    one_more_function();

    function run() {
        body.innerHTML = 'No more hello Git';
    }

    function sayPanda() {
        body.innerHTML = 'Say Panda';
    }

    function gun() {
        console.log('putting something here');
    }

    function one_more_function() {
        console.log('continue ahead');
    }

    function another_function() {
        
    }

})();