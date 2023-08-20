import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import ListItems from "../listitems/ListItems";
const Todo = () => {

    const [tasks, setTasks] = useState([]);

    const getTask = (currentTask) => {
        console.log(currentTask);
        //console.log(tasks);
    }

    return (
        <>
          <h1 className="todo-heading">Todo APP</h1>  
            <InputBox parentGetTask={ getTask }/>
            <ListItems />
        </>
    )
}

export default Todo;