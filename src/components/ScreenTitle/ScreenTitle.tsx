import * as React from "react";

interface IScreenTitleProps {
  screenName?: string;
  children: React.ReactNode;
}

function ScreenTitle(props: IScreenTitleProps) {
  return (
    <dl>
      <dt>{props.screenName}</dt>
      <dd>
        {props.children}
      </dd>
    </dl>
  );
}

export default ScreenTitle;
