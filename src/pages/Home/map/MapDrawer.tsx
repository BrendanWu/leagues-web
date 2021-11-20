import * as React from "react";
import Drawer from "@material-ui/core/Drawer";

const MapDrawer = (props: {
  text: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  const { isVisible, onClose, text } = props;
  return (
    <Drawer anchor={"right"} open={isVisible} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>{text}</div>
    </Drawer>
  );
};
export default MapDrawer;
