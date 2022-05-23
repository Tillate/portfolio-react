import * as React from "react";
import ContainerPadding from "../utils/ContainerPadding";
import { IScreenContainerProps } from "./types";

function ScreenContainer(props: IScreenContainerProps) {
  return (
    <section style={{ background: props.color }} className="screenContainer">
      <ContainerPadding>{props.children}</ContainerPadding>
    </section>
  );
}

export default ScreenContainer;
