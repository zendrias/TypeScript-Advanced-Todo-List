import React from 'react';
import { Todo } from '../model'
import TodoItem from './TodoItem'
import './styles.css'

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div className='todos'>
      {todos.map(todo => (
        < TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;