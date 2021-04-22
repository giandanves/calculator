class Storage {
  constructor() {
    this.history = [];
  }

  save(operation) {
    const idExists = this.history.find(
      (saved) => operation.id === saved.id,
    );

    if (idExists) {
      throw new Error('This ID already exists on memory');
    } else {
      this.history.push(operation);
    }
  }

  find({ id, date, content }) {
    if (
      id == undefined &&
      date == undefined &&
      content == undefined
    ) {
      return null;
    } else {
      return this.history.find(
        (object) =>
          (object.id == id || id == undefined) &&
          (object.date == date || date == undefined) &&
          (object.content == content || content == undefined),
      );
    }
  }

  first() {
    return this.history[this.history.length - 1];
  }

  findAll({ id, date, content }) {
    return this.history.filter(
      (object) =>
        (object.id == id || id == undefined) &&
        (object.date == date || date == undefined) &&
        (object.content == content || content == undefined),
    );
  }

  delete(id) {
    const filteredHistory = this.history.filter(
      (object) => object.id !== id,
    );
    const deletedItem = this.history.find(
      (object) => object.id === id,
    );
    if (!deletedItem) {
      throw new Error('id is not registered');
    }
    this.history = filteredHistory;
    return deletedItem;
  }
  deleteMany(ids) {
    const filteredHistory = this.history.filter(
      (object) => !ids.includes(object.id),
    );
    const deletedItems = this.history.filter((object) =>
      ids.includes(object.id),
    );
    if (deletedItems.length !== ids.length) {
      throw new Error('Some id is not registered');
    }
    this.history = filteredHistory;
    return deletedItems;
  }

  addMany(array) {
    const addable = [];
    const history = this.history;

    for (let i of array) {
      if (array.filter((item) => item === i).length > 1) {
        throw new Error('Repeated IDs provided');
      }
    }

    array.find((object) => {
      let sameIDCheck = history.find(
        (element) => element.id == object.id,
      );

      if (sameIDCheck) {
        throw new Error('Repeated IDs');
      } else {
        addable.push(object);
      }
    });

    if (addable.length != array.length) {
      throw new Error('Cannot add all the provided items');
    } else {
      addable.forEach((object) => this.history.push(object));
    }
    return addable;
  }
}

export default Storage;