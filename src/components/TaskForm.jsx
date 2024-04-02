import React, { useState } from "react";

import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskData.task}
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              name="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag
              name="Javascript"
              selectTag={selectTag}
              selected={checkTag("Javascript")}
            />
            <Tag
              name="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleChange}
              value={taskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
