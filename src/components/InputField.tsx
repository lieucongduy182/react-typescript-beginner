import React, { useRef } from 'react'
import './style.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAddTask(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type='text'
        value={todo}
        onChange={onChange}
        className='input-field'
        placeholder='Enter a task'
      />
      <button className='input-submit' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default InputField
