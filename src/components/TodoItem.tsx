import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../types/model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleDoneTask = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }
  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleEditTask = (id: number) => {
    if (!edit && !todo.isDone) {
      setEditTodo(todo.todo)
      console.log(id)
    }
    setEdit(!edit)
  }

  const onSubmitEditTask = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    if (!editTodo) return null
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo.trim() } : todo)))
    setEdit(false)
  }
  return (
    <form className='todos-item' onSubmit={(e) => onSubmitEditTask(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value)
          }}
          className='input-text-edit'
        />
      ) : todo.isDone ? (
        <s className='item-text'>{todo.todo}</s>
      ) : (
        <span className='item-text'>{todo.todo}</span>
      )}
      <div>
        <span className='item-icon'>
          <AiFillEdit
            onClick={() => {
              handleEditTask(todo.id)
            }}
            className='item-icon-edit'
          />
        </span>
        <span className='item-icon'>
          <AiFillDelete
            onClick={() => {
              handleDeleteTask(todo.id)
            }}
            className='item-icon-delete'
          />
        </span>
        <span className='item-icon' onClick={() => handleDoneTask(todo.id)}>
          <MdDone className='item-icon-done' />
        </span>
      </div>
    </form>
  )
}

export default TodoItem
