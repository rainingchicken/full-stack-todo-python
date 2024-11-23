import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <div>
      <h1>Todo</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.date}</td>
                <td>{task.task}</td>
                <td>
                  <button>UPDATE</button>
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
