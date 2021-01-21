import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer'

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todoes')) || [];
}

export const TodoApp = () => {

    const [ todoes, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todoes', JSON.stringify( todoes ));
    }, [ todoes ])

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todoes.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    
                    <TodoList 
                        todoes={ todoes }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>

        </div>
    )
}
