import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);
    if (info.file.status === 'done') {
      onUpload(info.file.originFileObj);
    }
  };

  return (
    <Upload
      onChange={handleChange}
      fileList={fileList}
      beforeUpload={() => false}
      aria-label="Upload file"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default FileUpload;
