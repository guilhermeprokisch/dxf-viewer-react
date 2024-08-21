// src/App.jsx
import React, { useState, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import GitHub from "@mui/icons-material/GitHub";
import DxfViewer from "./components/DxfViewer";
import LayersList from "./components/LayersList";
import FileUploadButton from "./components/FileUploadButton";
import UrlInputDialog from "./components/UrlInputDialog";
import AboutDialog from "./components/AboutDialog";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

const LAYERS_WIDTH = 300;

function App() {
  const [dxfUrl, setDxfUrl] = useState(null);
  const [layers, setLayers] = useState([]);
  const [isUrlDialogOpen, setIsUrlDialogOpen] = useState(false);
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);
  const [showLayer, setShowLayer] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDxfUrl(url);
    }
  };

  const handleUrlSubmit = (url) => {
    setDxfUrl(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    setIsUrlDialogOpen(false);
  };

  const handleToggleLayer = useCallback(
    (layerName, isVisible) => {
      setLayers((prevLayers) =>
        prevLayers.map((layer) =>
          layer.name === layerName ? { ...layer, isVisible } : layer,
        ),
      );
      if (showLayer) {
        showLayer(layerName, isVisible);
      }
    },
    [showLayer],
  );

  const handleLayersLoaded = useCallback((loadedLayers, showLayerFunction) => {
    setLayers(loadedLayers);
    setShowLayer(() => showLayerFunction);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DXF Viewer
            </Typography>
            <FileUploadButton onChange={handleFileChange} />
            <Button color="inherit" onClick={() => setIsUrlDialogOpen(true)}>
              URL
            </Button>
            <Button color="inherit" onClick={() => setIsAboutDialogOpen(true)}>
              About
            </Button>
            <IconButton
              color="inherit"
              href="https://github.com/vagran/dxf-viewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: LAYERS_WIDTH,
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <DxfViewer dxfUrl={dxfUrl} onLayersLoaded={handleLayersLoaded} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: LAYERS_WIDTH,
              bottom: 0,
              overflow: "auto",
              borderLeft: "1px solid #DBDBDB",
              backgroundColor: "background.paper",
            }}
          >
            <LayersList layers={layers} onToggleLayer={handleToggleLayer} />
          </Box>
        </Box>
      </Box>
      <UrlInputDialog
        open={isUrlDialogOpen}
        onClose={() => setIsUrlDialogOpen(false)}
        onSubmit={handleUrlSubmit}
      />
      <AboutDialog
        open={isAboutDialogOpen}
        onClose={() => setIsAboutDialogOpen(false)}
      />
    </ThemeProvider>
  );
}

export default App;
