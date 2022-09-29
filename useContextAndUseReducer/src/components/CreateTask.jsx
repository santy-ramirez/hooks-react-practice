import { useState, useContext, useEffect } from 'react';
import TaskContext from '../context/task/TaskContext';

function CreateTask(props) {
    const [task, setTask] = useState("")
    const { handleAddTask } = useContext(TaskContext)
    console.log(handleAddTask)

    const handleChangeinput = (e) => {
        console.log(e.target.value)
        setTask(e.target.value)
    }
    const saveTask = () => {
        console.log("sea ctivo el click save")
        handleAddTask(task)

    }


    return (
        <div>
            <h1>hola create Task</h1>
            <label>ingre Task
                <input onChange={handleChangeinput} type='text' />
                <button onClick={saveTask} >add</button>
            </label>
        </div>
    );
}

export default CreateTask;