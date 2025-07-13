import { useState } from "react"
import { Form } from "../components/form/Form"
import { TaskList } from "../components/tasklist/TaskList"

//Interfaces
import type { ITask } from "../interfaces/Task"

export const Home = () => {
    const [taskList, setTaskList] = useState<ITask[]>([])

    return(
        <div className="container">
            <h2>O que você quer fazer?</h2>
            <Form taskList={taskList} setTaskList={setTaskList}/>
            <TaskList taskList={taskList}/>
        </div>
    )
}