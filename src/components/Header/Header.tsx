import * as React from "react";
import { ButtonMenu } from "../Buttons/ButtonMenu";

interface IHeaderProps {}

function Header(props: IHeaderProps) {
  return (
    <header>
      <div>Logo</div>
      <menu>
        <li>Button 1</li>
        <li>
          <ButtonMenu />
        </li>
      </menu>
    </header>
  );
}

export default Header;
