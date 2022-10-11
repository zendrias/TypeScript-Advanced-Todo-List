import React from 'react';
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'


interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoItem({ todo, todos, setTodos }: TodoItemProps) {
  return (
    <form className='todos__single'>
      <span className="todos__single--text">{todo.title}</span>
      <div className="">
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          < MdDone />
        </span>

      </div>
    </form>
  );
}

export default TodoItem;