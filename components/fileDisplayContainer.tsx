import React from 'react';
import FileDisplay from './fileDisplay';

const FileDisplayContainer = ({ links, textFiles, jsonFile, handleTextFiles, handleJsonFile }) => {
  return (
    <div className="container mx-auto p-4 mt-4 max-w-6xl">
      {links.map((link, index) => (
        <FileDisplay key={index} file={link} index={index} type="Link" />
      ))}
      {textFiles.map((file, index) => (
        <FileDisplay key={index} file={file} index={index} type="Text File" />
      ))}
      {jsonFile ? (
        <FileDisplay key={jsonFile.name} file={jsonFile} index={0} type="JSON File" />
      ) : null}
    </div>
  );
};

export default FileDisplayContainer;