import React,  { useState } from 'react';
import uuid from 'uuid/v4'

function Tasks(){
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleKeyPress = event => {
        if (event.key === 'Enter') addTask()
    }

    const updateTaskText = (event)=>{
        setTaskText(event.target.value);
    }
    
    const addTask = ()=>{
        setTasks([...tasks, {taskText, id: uuid()}]);
        //we dont want to modify the old array, instead we will make a new array
    }

    const completeTask = completedTask => () =>{
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    const deleteTask = taskToDelete => () =>{
        setCompletedTasks(completedTasks.filter(task => task.id !== taskToDelete.id))
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} onKeyPress={handleKeyPress}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task=>{
                        const {id, taskText} = task;
                        return(
                            <div key={id} onClick={completeTask(task)}>
                                {taskText}
                            </div>
                        )
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task =>{
                        const {id, taskText} = task;
                        return(
                            <div key={id}>
                                {taskText}{' '}
                                <span onClick={deleteTask(task)} className='delete-task'>x</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Tasks;