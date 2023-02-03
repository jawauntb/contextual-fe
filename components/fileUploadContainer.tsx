import React from 'react';
import FileUpload from './fileUpload';

interface Props { }

const FileUploadContainer: React.FC<Props> = () => {
  return (
    <div className="">
      <FileUpload
        id="text-files"
        label="Upload Text Files (txt, csv)"
        accept={['.txt', '.csv']}
        multiple
      />
      <FileUpload
        id="json-file"
        label="Upload JSON File"
        accept={['.json']}
      />
    </div>
  );
};

export default FileUploadContainer
