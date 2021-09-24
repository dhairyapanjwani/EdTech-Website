import React from "react";

const Todo=({text,todo,todos,setTodos})=>{

    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    };

    const completeHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed
                };
            }
                return item;
            
        }))
    };

    return( 
        <div className="todo shadow-md rounded-2xl border-gray-100 border-2 dark:border-2 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-100">
            <li className={`todo-item ${todo.completed? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}>
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                </path>
            </svg>
            </button>
            <button onClick={deleteHandler} className="trash-btn shadow-lg rounded-2xl mr-2"><i className="delete-icon fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;