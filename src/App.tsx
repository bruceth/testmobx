import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import TodoView from './TodoView'
import TodoList from './store/todolist'

// import logo from './logo.svg';
interface aProps {
    todoList : TodoList
}
@observer
class App extends React.Component<aProps>  {
  constructor(props:aProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handlePop = this.handlePop.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleClick() {
    this.props.todoList.push()
  }
  handlePop() {
    this.props.todoList.pop()
  }
  handleDelete(index : any) {
    this.props.todoList.remove(index)
  }

  render() {
      return <div>
          <ul>
              {this.props.todoList.todos.map((todo , index) =><TodoView todo={todo} key={todo.id} deleteFunc={() => this.handleDelete(index)} />)}
          </ul>
          <button onClick={this.handleClick}>push new todo</button>
          <button onClick={this.handlePop}>pop</button>
          
          Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
  }
}

export default App;
