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
        <form class="my-4 mx-auto flex">
    	    <input value={inputText} onChange={inputTextHandler}  type="text" class="rounded-l-lg shadow-inner text-gray-800 bg-gray-100" placeholder="Enter Task . . ."/>
		    <button typr="submit" onClick={submitTododHandler} class=" rounded-r-lg bg-indigo-500 hover:bg-indigo-600 px-3 text-gray-800 font-bold uppercase border-indigo-500 border-t border-b border-r"><i className="add-icon fa fa-plus-square"></i></button>
        <div class="relative inline-flex ml-5">
            <svg class="w-5 h-5 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/>
            </svg>
            <select onChange={statusHandler} name="todos" className="border border-gray-300 rounded-lg text-gray-600 h-14 pl-5 pr-10 bg-gray-100 shadow-inner hover:border-gray-400 focus:outline-none appearance-none">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
	</form>

    
      
    );
    
}

export default Form;