import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import ListItems from "../listitems/ListItems";
const Todo = () => {

    const [tasks, setTasks] = useState([]);

    const getTask = (currentTask) => {
        const newTasks = [...tasks];
        newTasks.push({
            id: Date.now(),
            taskName: currentTask
        });
        // console.log(newTasks);
        setTasks(newTasks);
    }

    const removeTask = (event) => {
        console.log(event.target.id);
        const restOfTasks = tasks.filter((task) => {
            return task.id !== parseInt(event.target.id);
        });
        setTasks(restOfTasks);

    }

    return (
        <>
          <h1 className="todo-heading">Todo APP</h1>  
            <InputBox parentGetTask={ getTask }/>
            <ListItems tasks={ tasks } removeTask = { removeTask } />
        </>
    )
}

export default Todo;