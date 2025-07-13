// estilo
import styles from "./Form.module.css"

//Hooks
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react"

// Interface
import type { ITask } from "../../interfaces/Task"

interface Props {
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export const Form = ({taskList, setTaskList}: Props) => {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    //Função de submit da task
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => { 
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {
            id: id,
            title: title,
            difficulty: difficulty
        }

        setTaskList!([...taskList, newTask])
        setTitle("")
        setDifficulty(0)

        console.log(taskList)
    }


    return(
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.localInput}>
                    <label htmlFor="Title">Título:</label>
                    <input 
                        required
                        placeholder="Título da tarefa" 
                        type="text" name="title"
                        value={title}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => 
                            setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.localInput}>
                    <label htmlFor="difficulty">Dificuldade da tarefa:</label>
                    <input 
                        value={difficulty}
                        placeholder="Dificuldade da tarefa" 
                        type="number" name="difficulty"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => 
                            setDifficulty(parseInt(e.target.value))}
                    />
                </div>
                <button className="btn" type="submit">
                    Criar tarefa
                </button>
            </form>
        </div>
    )
}