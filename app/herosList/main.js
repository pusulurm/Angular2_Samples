System.register(['angular2/platform/browser', './herosListComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, herosListComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (herosListComponent_1_1) {
                herosListComponent_1 = herosListComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(herosListComponent_1.HerosList);
        }
    }
});
//# sourceMappingURL=main.js.map