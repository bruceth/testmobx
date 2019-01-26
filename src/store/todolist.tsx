import { computed, observable, action } from 'mobx';
import Todo from './todo'

// import * as mobx from 'mobx'
// mobx.configure({ enforceActions: 'always' })

class TodoList {
  @observable todos : Todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
  @action push() {
    let length = this.todos.length
    this.todos.push(new Todo(
      ++length,
      'A new todo'
    ))
  }
  @action remove(id : number) {
    this.todos.splice(id, 1)
  }
  @action pop() {
    this.todos.pop()
  }
}

export default TodoList