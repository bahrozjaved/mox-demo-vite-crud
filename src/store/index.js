import { nanoid } from 'nanoid'

export const createTodoStore = () => {
    return {
        todoList: [],
        deletedList: [],
        addTodo(title,task) {
            const todo = {
                id: nanoid(),
                title,
                task,
                done: false,
            }
            this.todoList.push(todo)
        },
        complete(id) {
            this.todoList = this.todoList.filter(e => {
                if (e.id == id) {
                    e.done = true
                    return e
                }
                else {
                    return e
                }
            })
        },
        incomplete(id) {
            this.todoList = this.todoList.filter(e => {
                if (e.id == id) {
                    e.done = false
                    return e
                }
                else {
                    return e
                }
            })
        },
        delete(id) {
            const data = this.todoList.find(e =>e.id === id);
            this.todoList = this.todoList.filter(e =>e.id !== id);
       
            this.deletedList.push(data);
        },

    }
}