import * as React from "react";
import { IScreenContainerProps } from "./types";

function ScreenContainer(props: IScreenContainerProps) {
  return (
    <section style={{ background: props.color }} className="screenContainer">
      {props.text}
    </section>
  );
}

export default ScreenContainer