export class Model {
  items;

  constructor() {
    this.items = [
      new ToDoItem("Breakfast", true),
      new ToDoItem("Check E-mails", false),
      new ToDoItem("Check Tasks", false),
      new ToDoItem("Coding", false)
    ];
  }
}

export class ToDoItem {
  description;
  action;

  constructor(desctiption, action) {
    this.description = desctiption;
    this.action = action;
  }
}
