import { useState } from "react";

const InputBox = (props) => {
    const { parentGetTask } = props;
    const [val, setVal] = useState('');

    const inputChnageHandler = (event) => {
        setVal(event.target.value);
    }
     /***
     *  Lifting state up: Sending state(data) from child component to the parent component.
     * 
     */
    const addTask = () => {
        parentGetTask(val);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter the task..."
                onChange={inputChnageHandler}
                value={val}
            />
            <button onClick={addTask}> Add Task</button>
        </>
   )
}

export default InputBox;