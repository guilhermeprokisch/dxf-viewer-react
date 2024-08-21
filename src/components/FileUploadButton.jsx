// src/components/FileUploadButton.jsx
import React from "react";
import Button from "@mui/material/Button";

const FileUploadButton = ({ onChange }) => {
  return (
    <Button color="inherit" component="label">
      Upload File
      <input type="file" hidden accept=".dxf" onChange={onChange} />
    </Button>
  );
};

export default FileUploadButton;
