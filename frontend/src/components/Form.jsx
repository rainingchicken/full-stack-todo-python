import React, { useState } from "react";

const Form = ({ existingTask = {}, updateCallback }) => {
  const [date, setDate] = useState(existingTask.date || "");
  const [task, setTask] = useState(existingTask.task || "");

  const updating = Object.entries(existingTask).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date,
      task,
    };
    const url =
      `http://127.0.0.1:5000/` +
      (updating ? `update_task/${existingTask.id}` : "create_task");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    if (res.status !== 201 && res.status !== 200) {
      const data = await res.json();
      alert(data.msg);
    } else {
      console.log(await res.json());
      updateCallback();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="dateForm">Date:</label>
        <input
          type="date"
          name="date"
          id="dateForm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskForm">Task:</label>
        <input
          type="text"
          name="task"
          id="taskForm"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
  );
};

export default Form;
