(function foojs() {
    function foo() {
        console.log("foo.js");
    }
    module.export = foo;
})()(function mainjs() {
    const foo = require("foo.js");
    console.log("main.js");
    foo();
});