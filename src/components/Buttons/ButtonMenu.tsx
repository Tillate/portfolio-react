import * as React from 'react';

export interface IButtonMenuProps {
}

export function ButtonMenu (props: IButtonMenuProps) {
    const [isClicked, setIsClicked] = React.useState(false);

  return (
    <button className="buttonMenu" onClick={() => setIsClicked(!isClicked)}>
      <span className={isClicked === false ? "styledBar" : "styledBar diagTop" }></span>
      <span className={isClicked === false ? "styledBar" : "styledBar isHidden" }></span>
      <span className={isClicked === false ? "styledBar" : "styledBar diagBot" }></span>
    </button>
  );
}
