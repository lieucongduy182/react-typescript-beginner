import React from 'react'
import { Todo } from '../types/model'
import TodoItem from './TodoItem'
import './style.css'

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
      })}
    </div>
  )
}

export default TodoList
