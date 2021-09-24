import React,{useState,useEffect} from "react";
import './TodoTemp.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Navbar from '../../components/navbar/Navbar';

function TodoTemp() {

  const[inputText,setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  const[status,setStatus]=useState("all");
  const[filteredTodos,setFilteredTodos]=useState([]);


  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=>todo.completed===true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo)=>todo.completed===false));
          break; 
        default:
          setFilteredTodos(todos);
          break; 
    }
  }


  const saveLocalTodos=()=>{

      localStorage.setItem('todos',JSON.stringify(todos))
    
  };


  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800" id="Todo-Main-Div">
      <Navbar />
      <div className="flex flex-col justify-center align-center">
        <div className="todo-header">
          <h1 className="text-gray-900 dark:text-gray-100 text-5xl font-medium title-font mb-10 mt-10 font-extrabold">Todo List </h1>
        </div>
        <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        />
        <TodoList setTodos={setTodos} todos={todos} inputText={inputText}
        filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default TodoTemp;


