import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
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
            <Form />
          </div>
        </div>
      )}

      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
