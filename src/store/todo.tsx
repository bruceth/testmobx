import { observable } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
  constructor(id:number, title : string ) {
    this.title = title
  }
}
export default Todo