import React, { useState } from 'react';
import TaskInput from './taskInput';
import FileDisplayContainer from './fileDisplayContainer';
import FileUploadContainer from './fileUploadContainer';

const FormInput: React.FC = () => {
  const [task, setTask] = useState('');
  const [links, setLinks] = useState<string[]>([]);
  const [textFiles, setTextFiles] = useState<File[]>([]);
  const [jsonFile, setJsonFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleTextFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFiles(Array.from(event.target.files!));
  };

  const handleJsonFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJsonFile(event.target.files![0]);
  };

  return (
    <div className="w-full max-w-xs m-7 w-80 container mx-auto rounded-lg overflow-hidden border border-gray-200 backdrop-blur-md bg-white/50 shadow-xl items-center">
      <form onSubmit={handleSubmit} className="p-5">
        <div className="resize">
          <TaskInput
            task={task}
            setTask={setTask}
            setLinks={setLinks}
          />
        </div>
        <FileUploadContainer />
        <FileDisplayContainer
          links={links}
          textFiles={textFiles}
          jsonFile={jsonFile}
          handleTextFiles={handleTextFiles}
          handleJsonFile={handleJsonFile} />
      </form >
    </div >
  );
}

export default FormInput;