import { useReducer } from 'react';
import TaskReducer from './TaskReducer';
import TaskContext from './TaskContext';


function TaskState(props) {
    const initialState = [{ id: 1, text: "firt task" }];
    const [state, dispatch] = useReducer(TaskReducer, initialState)
    const handleAddTask = (t) => {

        dispatch({
            type: "ADD_TASK",
            payload: t
        }

        )
    }
    const handleDeleteTask = (id) => {
        dispatch({
            type: "DELETE_TASK",
            payload: id
        })
    }
    return (
        <TaskContext.Provider value={{ state, handleAddTask, handleDeleteTask }} >
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;