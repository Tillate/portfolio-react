import { styled } from "@stitches/react";
import Header from "./components/Header/Header";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";
import ScreenTitle from "./components/ScreenTitle/ScreenTitle";

function App() {
  return (
    <>
      <Header />
      <main>
        <ScreenContainer color="green">
          <ScreenTitle>
            <span>Hi, my <br /> name is Allan</span>
          </ScreenTitle>
        </ScreenContainer>
        <ScreenContainer color="blue">
          <ScreenTitle>
            <span>Some things <br /> I've worked on</span>
          </ScreenTitle>
        </ScreenContainer>
        <ScreenContainer color="red">Les prjets</ScreenContainer>
        <ScreenContainer color="pink">
        <ScreenTitle>
            <span>Contact me</span>
          </ScreenTitle>
        </ScreenContainer>
      </main>
    </>
  );
}

export default App;
