export class TodoListLong {
  constructor(title, desc, priority, date) {
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.date = date;
  }
  listDetails() {
    return this;
  }
}

export class TodoListShort {
  constructor(title, desc, priority, date) {
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.date = date;
  }
  listDetails() {
    return this;
  }
}

export class ShoppingList {
  constructor(item) {
    this.item = item;
  }
  listDetails() {
    return this;
  }
}
