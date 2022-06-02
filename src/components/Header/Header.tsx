import * as React from "react";
import { ButtonMenu } from "../Buttons/ButtonMenu";

interface IHeaderProps {
  onMenuButtonClicked: () => void;
}

function Header(props: IHeaderProps) {
  return (
    <header>
      <div>Logo</div>
      <menu>
        <li>Button 1</li>
        <li>
          <ButtonMenu onClick={props.onMenuButtonClicked}/>
        </li>
      </menu>
    </header>
  );
}

export default Header;
