// src/components/LayersList.jsx
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const LayersList = ({ layers, onToggleLayer }) => {
  const handleToggle = (layer) => () => {
    onToggleLayer(layer.name, !layer.isVisible);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {layers.map((layer) => {
        const labelId = `checkbox-list-label-${layer.name}`;

        return (
          <ListItem key={layer.name} dense button onClick={handleToggle(layer)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={layer.isVisible}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={layer.name}
              secondary={
                <Box
                  component="span"
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: `#${layer.color.toString(16).padStart(6, "0")}`,
                    display: "inline-block",
                    marginRight: 1,
                    verticalAlign: "middle",
                  }}
                />
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default LayersList;
