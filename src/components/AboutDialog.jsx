// src/components/AboutDialog.jsx
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AboutDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>About DXF Viewer</DialogTitle>
      <DialogContent>
        <Typography>
          This is a React-based DXF viewer using the dxf-viewer library. It
          allows you to view DXF files directly in your browser.
        </Typography>
        <Typography sx={{ mt: 2 }}>Features:</Typography>
        <ul>
          <li>Load DXF files from your device</li>
          <li>Load DXF files from a URL</li>
          <li>Toggle layer visibility</li>
          <li>View layer colors</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
