import React from 'react'
import { Todo } from '../types/model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDoneTask = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }
  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <form className='todos-item'>
      {todo.isDone ? <s className='item-text'>{todo.todo}</s> : <span className='item-text'>{todo.todo}</span>}
      <div>
        <span className='item-icon'>
          <AiFillEdit />
        </span>
        <span className='item-icon'>
          <AiFillDelete onClick={() => handleDeleteTask(todo.id)} />
        </span>
        <span className='item-icon' onClick={() => handleDoneTask(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default TodoItem
