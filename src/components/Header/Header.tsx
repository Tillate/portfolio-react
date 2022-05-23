import * as React from "react";

interface IHeaderProps {}

function Header(props: IHeaderProps) {
  return (
    <header>
        <div>Logo</div>
        <menu>
          <li>Button 1</li>
          <li>Button 2</li>
        </menu>
    </header>
  );
}

export default Header;
