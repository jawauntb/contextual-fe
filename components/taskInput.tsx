import React, { useState } from "react";

type Props = {
  task: string;
  setTask: (task: string) => void;
  setLinks: (links: string[]) => void;
};

const regex = /(https?:\/\/[^\s]+)/g;

const TaskInput: React.FC<Props> = ({ task, setTask, setLinks }) => {
  const [tempTask, setTempTask] = useState(task);

  const extractLinks = () => {
    const links = tempTask.match(regex) || [];
    setLinks(links);
    setTask(tempTask.replace(regex, ""));
  };

  return (
    <input
      type="text"
      className="resize form-input w-full mx-auto text-center rounded-lg border-2 border-gray-300 py-2 px-4 block my-6 shadow-md"
      placeholder="Enter a link or plain text"
      value={tempTask}
      onChange={(event) => setTempTask(event.target.value)}
      onBlur={extractLinks}
    />
  );
};

export default TaskInput;
