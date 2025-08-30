import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["task1", "task2", "task3", "task4"];
  const isDisabled = false;
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (event) => {
    console.log(event);
    setInput(event.target.value);
  };
  return (
    <>
      <h1 style={{ color: "black", fontSize: "45px" }}>{count}</h1>
      <input type="text" onChange={handleChange} />
      <button
        disabled={isDisabled}
        value="Add Task button"
        onClick={handleClick}
      >
        Add Task
      </button>
      <h2>{input}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
