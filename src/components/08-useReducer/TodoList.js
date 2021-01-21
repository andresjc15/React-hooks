import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todoes, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todoes.map( (todo, i) => 
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo }
                        index= { i }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                )
            }
        </ul>
    )
}
