"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
        this.items = [
            new ToDoItem("Breakfast", true),
            new ToDoItem("Check E-mails", false),
            new ToDoItem("Check Tasks", false),
            new ToDoItem("Coding", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var ToDoItem = /** @class */ (function () {
    function ToDoItem(desctiption, action) {
        this.description = desctiption;
        this.action = action;
    }
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=model.js.map