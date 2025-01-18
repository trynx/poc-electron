import React, { useState } from "react";

const FileOpener = () => {
  const [fileContent, setFileContent] = useState("");

  const handleOpenFile = async () => {
    const content = await window.electronAPI.openFile();
    setFileContent(content);
  };

  return (
    <div>
      <button onClick={handleOpenFile}>Open File</button>
      {fileContent && <p>{fileContent}</p>}
    </div>
  );
};

export default FileOpener;
