import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(`http://127.0.0.1:5000/tasks`);
    const data = await res.json();
    setTasks(data.tasks);
    console.log(data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
