(function mainjs() {
    console.log("main.js");
    const foo = foojs();
    foo();
})();

function foojs() {
    function foo() {
        console.log("foo.js");
    }
    return foo;
}