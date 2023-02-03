import React from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  id: string;
  label: string;
  accept: string[];
  multiple?: boolean;
}

const FileUpload: React.FC<Props> = ({ id, label, accept, multiple }) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept,
    multiple,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <div className="mb-5 backdrop-blur-md bg-yellow-100/25 rounded shadow-sm">
      <label
        htmlFor={id}
        className="block font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div {...getRootProps({ className: 'form-input relative' })}>
        <input {...getInputProps()} id={id} />
        <div className="backdrop-blur-sm  rounded p-2">
          {files.length
            ? files.map((file, index) => <div key={index}>{file.name}</div>)
            : isDragAccept
              ? <p>Drop here to upload {accept.join(', ')} files</p>
              : isDragReject
                ? <p>Files with extension other than {accept.join(', ')} will be rejected</p>
                : <p>Drag and drop files here or click to select files</p>}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
