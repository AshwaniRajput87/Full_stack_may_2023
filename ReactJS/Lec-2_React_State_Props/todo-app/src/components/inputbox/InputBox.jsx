import { useState } from "react";

const InputBox = (props) => {
    const [val, setVal] = useState('');

    const setInputData = (event) => {
       //console.log(event.target.value);
        setVal(event.target.value);
    }

    const addTask = () => {
        console.log('task added');
        console.log(props);
        props.parentGetTask(val);
    }

    return (
        
        <>
            <input
                type="text"
                placeholder="Enter the task..."
                onChange={setInputData}
                value={val}
            />
            <button onClick={addTask}> Add Task</button>
        </>
   )
}

export default InputBox;