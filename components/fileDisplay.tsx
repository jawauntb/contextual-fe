import React from 'react';

const FileDisplay = ({ file, index, type }) => {
  return (
    <div key={index} className="my-2">
      <div className="bg-gray-200 rounded-lg p-4">
        <p className="text-gray-700">
          {type} {index + 1}: {file.name || file}
        </p>
      </div>
    </div>
  );
};

export default FileDisplay;