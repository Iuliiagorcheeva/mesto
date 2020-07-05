export default class Section{
  constructor({items, renderer}, elementSelector){
    this._items = items;
    this._renderer = renderer;

    this._elementSelector = elementSelector;
  }
  renderItem(){
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element){
    this._elementSelector.append(element);
  }
}