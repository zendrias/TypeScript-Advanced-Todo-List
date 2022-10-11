import './styles.css'
import { useRef } from 'react'

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleSubmit }: TodoProps) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
      handleSubmit(e)
      inputRef.current?.blur()
    }}>

      <input
        type="input"
        placeholder="Enter A Task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />

      <button className="input__submit" type="submit">Go</button>
    </form>
  );
}

export default InputField;