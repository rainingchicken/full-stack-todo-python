import React from "react";

const TodoList = ({ tasks, updateTask, updateCallback }) => {
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
                  <button>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
