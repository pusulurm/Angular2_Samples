System.register(['angular2/platform/browser', './helloWorldComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, helloWorldComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (helloWorldComponent_1_1) {
                helloWorldComponent_1 = helloWorldComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(helloWorldComponent_1.HelloWorld);
        }
    }
});
//# sourceMappingURL=main.js.map