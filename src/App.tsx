import { styled } from "@stitches/react";
import Header from "./components/Header/Header";
import Scene from "./components/Scene/Scene";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";
import ScreenTitle from "./components/ScreenTitle/ScreenTitle";

function App() {
  return (
    <>
      <Header />
      <Scene />
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
