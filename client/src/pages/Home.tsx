import { useState } from "react";
import { Form } from "../components/form/Form";
import { TaskList } from "../components/tasklist/TaskList";
import { Modal } from "../components/modal/Modal";

//Interfaces
import type { ITask } from "../interfaces/Task";

export const Home = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const handleShowModal = (task: ITask): void => {
    setShowModal((prev) => !prev);
    setTaskToUpdate(task)
  };

  const updateTask = (id: number, title: string, difficulty: number) => {

    const updatedTask: ITask = {
      id,
      title,
      difficulty
    }

    const updateItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updateItems)

    setShowModal(false)

  }

  return (
    <div className="container">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<Form textBtn="Editar Tarefa" handleUpdate={updateTask} taskList={TaskList} task={taskToUpdate} />}
      />
      <h2>O que você quer fazer?</h2>
      <Form
        textBtn="Salvar Tarefa"
        taskList={taskList}
        setTaskList={setTaskList}
        
      />
      <TaskList
        setShowModal={setShowModal}
        showModal={showModal}
        taskList={taskList}
        handleDelete={deleteTask}
        handleShowModal={handleShowModal}
      />
    </div>
  );
};
