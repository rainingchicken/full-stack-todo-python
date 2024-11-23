import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const fetchTasks = async () => {
    const res = await fetch(`http://127.0.0.1:5000/tasks`);
    const data = await res.json();
    setTasks(data.tasks);
    console.log(data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTask({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    if (isModalOpen) return;
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const onUpdate = () => {
    closeModal();
    fetchTasks();
  };
  return (
    <div>
      <button onClick={openCreateModal}>Create New Task</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Form existingTask={currentTask} updateCallback={onUpdate} />
          </div>
        </div>
      )}

      <TodoList
        tasks={tasks}
        updateTask={openEditModal}
        updateCallback={onUpdate}
      />
    </div>
  );
};

export default App;
