"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var StringLiteralType = (function (_super) {
    __extends(StringLiteralType, _super);
    function StringLiteralType(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    StringLiteralType.prototype.clone = function () {
        var clone = new StringLiteralType(this.value);
        clone.isArray = this.isArray;
        return clone;
    };
    StringLiteralType.prototype.equals = function (type) {
        return type instanceof StringLiteralType &&
            type.isArray == this.isArray &&
            type.value == this.value;
    };
    StringLiteralType.prototype.toObject = function () {
        var result = _super.prototype.toObject.call(this);
        result.type = 'stringLiteral';
        result.value = this.value;
        return result;
    };
    StringLiteralType.prototype.toString = function () {
        return '"' + this.value + '"';
    };
    return StringLiteralType;
}(abstract_1.Type));
exports.StringLiteralType = StringLiteralType;
//# sourceMappingURL=string-literal.js.map