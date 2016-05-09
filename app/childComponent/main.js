System.register(['angular2/platform/browser', './parentComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, parentComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (parentComponent_1_1) {
                parentComponent_1 = parentComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(parentComponent_1.ParentComponent);
        }
    }
});
//# sourceMappingURL=main.js.map