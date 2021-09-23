import React from "react";


const Form=({todos,setTodos,inputText,setInputText,setStatus})=>{

    const inputTextHandler=(e)=>{
        //console.log(e.target.value);
        setInputText(e.target.value)
    };

    const submitTododHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText,completed:false,id:Math.random()*1000},
        ]);
        setInputText("");
        console.log(todos);
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value);

    };

    return(
      <form>
          <input value={inputText} onChange={inputTextHandler}  type="text" className="todo-input"/>
          <button className="todo-button" typr="submit" onClick={submitTododHandler}>
              <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
              <select onChange={statusHandler} name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>
          </div>
      </form>      
    );
}

export default Form;