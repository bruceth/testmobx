import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './store/todolist'

var todos = new TodoList();

ReactDOM.render(
  <App todoList={todos} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
