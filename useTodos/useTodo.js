import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos])

  const handleNewTodo = ( todo ) => {
      const action = {
          type: '[TODO] add',
          payload: todo
      }
      dispatch(action)
  }

  const handleRemoveTodo = (id) => {
      const action = {
        type: '[TODO] remove',
        payload: id
      }
      dispatch( action)
  }

  const handleToggleTodo = (id) => {
      const action = {
          type: '[TODO] toggle',
          payload: id
      }
      dispatch( action)
  }

  const todosCount = todos.length

  const pendingCount = todos.filter( todo => !todo.done).length

  return {
    todos,
    todosCount,
    pendingCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
}
