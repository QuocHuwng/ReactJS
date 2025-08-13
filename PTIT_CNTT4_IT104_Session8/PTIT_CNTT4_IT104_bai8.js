var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function partialUpdate(obj, updates) {
    return __assign(__assign({}, obj), updates);
}
var original = { name: 'Alice', age: 30, job: 'Developer' };
var updated1 = partialUpdate(original, { age: 31 });
console.log(updated1);
var updated2 = partialUpdate(original, { name: 'Bob', job: 'Designer' });
console.log(updated2);
