import * as React from 'react';
import {styled} from "@stitches/react";

const StyledContainer = styled("div", {
    // width:"100vw",
    height: "100vh",
    backgroundColor: "blue",
});
interface IScreenContainerProps {
}

export function ScreenContainer (props: IScreenContainerProps) {
  return (
    <StyledContainer className="screenContainer">Screen Container</StyledContainer>
  );
}

