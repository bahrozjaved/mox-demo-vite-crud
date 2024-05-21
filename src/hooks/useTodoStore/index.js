import  { useContext } from 'react'
import { TodoContext } from '../../ContextProvider/todoContext'



export const useTodoStore = () => useContext(TodoContext)