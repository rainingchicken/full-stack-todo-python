import React from "react";

const TodoList = ({ tasks, updateTask, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };
      const res = await fetch(
        `http://127.0.0.1:5000/delete_task/${id}`,
        options
      );
      if (res.status === 200) {
        updateCallback();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.date}</td>
                <td>{task.task}</td>
                <td>
                  <button onClick={() => updateTask(task)}>UPDATE</button>
                  <button onClick={() => onDelete(task.id)}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
