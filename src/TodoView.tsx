import { observer } from 'mobx-react'
import * as React from 'react'
import Todo from './store/todo'

interface todoViewPros {
  todo : Todo;
  deleteFunc?(index:any):void;
}

@observer
class TodoView extends React.Component<todoViewPros> {

  render() {
    const {todo, deleteFunc} = this.props
    return(
      <div>
        <input
          type="checkbox"
          checked={todo.finished}
          // onClick={() => todo.finished = !todo.finished}
          onChange={(e) => {todo.finished = e.target.checked}}
        />{todo.id}
        <button onClick={deleteFunc}>删除本项</button>
      </div>
    )
  }
}
export default TodoView