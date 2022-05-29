import * as React from "react";
import { Drawer } from "antd";

export interface IMenuDrawerProps {
  onClose: () => void;
  visible: boolean;
}

export function MenuDrawer(props: IMenuDrawerProps) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={props.onClose}
      visible={props.visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
