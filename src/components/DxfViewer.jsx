// src/components/DxfViewer.jsx
import React, { useEffect, useRef, useCallback } from "react";
import { DxfViewer as DxfViewerLib } from "dxf-viewer";
import * as THREE from "three";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const DxfViewer = ({ dxfUrl, onLayersLoaded }) => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const showLayer = useCallback((layerName, isVisible) => {
    if (viewerRef.current) {
      viewerRef.current.ShowLayer(layerName, isVisible);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && !viewerRef.current) {
      viewerRef.current = new DxfViewerLib(containerRef.current, {
        clearColor: new THREE.Color("#fff"),
        autoResize: true,
        colorCorrection: true,
      });
    }

    if (dxfUrl && viewerRef.current) {
      setIsLoading(true);
      viewerRef.current
        .Load({ url: dxfUrl })
        .then(() => {
          const layers = viewerRef.current.GetLayers();
          onLayersLoaded(
            layers.map((layer) => ({ ...layer, isVisible: true })),
            showLayer,
          );
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading DXF:", error);
          setIsLoading(false);
        });
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.Destroy();
        viewerRef.current = null;
      }
    };
  }, [dxfUrl, onLayersLoaded, showLayer]);

  useEffect(() => {
    const handleResize = () => {
      if (viewerRef.current) {
        viewerRef.current.Resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "& canvas": {
          display: "block",
          width: "100% !important",
          height: "100% !important",
        },
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default DxfViewer;
