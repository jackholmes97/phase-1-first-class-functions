function receivesAFunction(callbackFunc) {
    callbackFunc();
}

function returnsANamedFunction() {
    return function namedFunc() {
        console.log(`This is a named Function.`);
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`This is an anonymous functon.`);
    }
}