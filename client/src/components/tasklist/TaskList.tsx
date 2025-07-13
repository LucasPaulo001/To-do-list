//Interface
import type { ITask } from "../../interfaces/Task";

//Estilo
import styles from "./TaskList.module.css"

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  handleShowModal(task: ITask): void
}

//Icons
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import type React from "react";


export const TaskList = ({ taskList, handleDelete, showModal, setShowModal, handleShowModal }: Props) => {

  return (
    <div className={styles.containerTaskList}>
      <h2>Suas Tarefas:</h2>
      <div className={styles.contentList}>
        {taskList.length > 0 ? (
          taskList.map((t) => (
            <div className={styles.task} key={t.id}>
              <div className={styles.dataTask}>
                  <h4>{t.title}</h4>
                  <p>dificuldade: {t.difficulty}</p>
              </div>
              <div className={styles.toolTask}>
                <MdEdit onClick={() => handleShowModal(t)} />
                <FaRegTrashAlt onClick={() => handleDelete(t.id)} />
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma tarefa cadastrada</p>
        )}
      </div>
    </div>
  );
};
