import React, { useState } from "react";

const Form = () => {
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date,
      task,
    };
    const url = `http://127.0.0.1:5000/create_task`;
    const options = {
      method: "POST",
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
      <input type="submit" value="Create Task" />
    </form>
  );
};

export default Form;
