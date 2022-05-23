import * as React from "react";

export interface IContainerPaddingProps {
  children: React.ReactNode;
}
function ContainerPadding(props: IContainerPaddingProps) {
  return <div className="containerPadding">{props.children}</div>;
}

export default ContainerPadding;
