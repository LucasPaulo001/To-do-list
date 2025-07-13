import type { ITask } from "../../interfaces/Task"


interface Props {
    taskList: ITask[]
}


export const TaskList = ({taskList}: Props) => {
    return(
        <div>
            <h4>Lista de tarefas</h4>
            <ul>
                {taskList.length > 0 ? 
                taskList.map((t) => (
                    <li key={t.id}>{t.title} - {t.difficulty}</li>
                )) : (
                    <p>Nenhuma tarefa cadastrada</p>
                )}
            </ul>
        </div>
    )
}