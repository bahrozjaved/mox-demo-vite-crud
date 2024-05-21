import React, { createContext, useContext } from 'react'

import { createTodoStore } from "../store/index";

import { useLocalObservable } from 'mobx-react';

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const todoStore = useLocalObservable(createTodoStore)

    return (
        <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
    )
}
