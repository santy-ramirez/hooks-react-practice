import { useContext } from 'react';
import TaskContext from '../context/task/TaskContext';

function ListTask(props) {
    const { state, handleDeleteTask } = useContext(TaskContext)
    console.log(state)

    return (
        <div>
            <h2  >Hola List Task</h2>
            <ul>
                {
                    state.map(t =>
                        <div key={t.id} >
                            <li>{t.text} </li><button
                                onClick={() => { handleDeleteTask(t.id) }}   >delete</button>
                        </div>
                    )}
            </ul>
        </div>
    );
}

export default ListTask; 