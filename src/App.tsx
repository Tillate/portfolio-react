import * as React from "react";
import { styled } from "@stitches/react";
import Header from "./components/Header/Header";
import { MenuDrawer } from "./components/MenuDrawer/MenuDrawer";
import Scene from "./components/Scene/Scene";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";
import ScreenTitle from "./components/ScreenTitle/ScreenTitle";
import ContainerPadding from "./components/utils/ContainerPadding";
import "antd/dist/antd.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <Header onMenuButtonClicked={handleMenuClick}/>
      <Scene />
      <MenuDrawer onClose={handleMenuClick} visible={isMenuOpen} />
      <main>
        <ScreenContainer>
          <ScreenTitle>
            <span className="title">
              Hi, my <br /> name is Allan
            </span>
          </ScreenTitle>
        </ScreenContainer>
        <ScreenContainer>
          <ScreenTitle>
            <span>
              Some things <br /> I've worked on
            </span>
          </ScreenTitle>
        </ScreenContainer>
        <ScreenContainer>Les projets</ScreenContainer>
        <ScreenContainer>
          <ScreenTitle>
            <span>Contact me</span>
          </ScreenTitle>
        </ScreenContainer>
      </main>
    </>
  );
}

export default App;
