var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var aurelia_framework_1 = require("aurelia-framework");
var NavBar = (function () {
    function NavBar() {
        this.router = null;
    }
    __decorate([
        aurelia_framework_1.bindable
    ], NavBar.prototype, "router");
    return NavBar;
})();
exports.NavBar = NavBar;
