System.register(['aurelia-framework', 'interact'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, interact;
    var InteractGesturableCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (interact_1) {
                interact = interact_1;
            }],
        execute: function() {
            InteractGesturableCustomAttribute = (function () {
                function InteractGesturableCustomAttribute(element) {
                    this.element = element;
                }
                InteractGesturableCustomAttribute.prototype.attached = function () {
                    var _this = this;
                    interact(this.element)
                        .dropzone(Object.assign({}, this.value || {}))
                        .on('gesturestart', function (event) { return _this.dispatch('interact-gesturestart', event); })
                        .on('gesturemove', function (event) { return _this.dispatch('interact-gesturemove', event); })
                        .on('gestureend', function (event) { return _this.dispatch('interact-gestureend', event); });
                };
                InteractGesturableCustomAttribute.prototype.dispatch = function (name, data) {
                    this.element.dispatchEvent(new CustomEvent(name, {
                        bubbles: true,
                        detail: data,
                    }));
                };
                InteractGesturableCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element), 
                    __metadata('design:paramtypes', [HTMLElement])
                ], InteractGesturableCustomAttribute);
                return InteractGesturableCustomAttribute;
            }());
            exports_1("InteractGesturableCustomAttribute", InteractGesturableCustomAttribute);
        }
    }
});

//# sourceMappingURL=interact-gesturable.js.map
