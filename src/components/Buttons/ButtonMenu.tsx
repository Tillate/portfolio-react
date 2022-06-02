import * as React from "react";

export interface IButtonMenuProps {
  onClick: () => void;
}

export function ButtonMenu(props: IButtonMenuProps) {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    props.onClick();
    setIsClicked(!isClicked);
  };

  return (
    <button className="buttonMenu" onClick={handleClick}>
      <span
        className={isClicked === false ? "styledBar" : "styledBar diagTop"}
      ></span>
      <span
        className={isClicked === false ? "styledBar" : "styledBar isHidden"}
      ></span>
      <span
        className={isClicked === false ? "styledBar" : "styledBar diagBot"}
      ></span>
    </button>
  );
}
