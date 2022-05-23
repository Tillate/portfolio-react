import { styled } from "@stitches/react";
import Header from "./components/Header/Header";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <ScreenContainer text="container 1" color="green" />
        <ScreenContainer text="container 2" color="blue" />
        <ScreenContainer text="container 3" color="red" />
        <ScreenContainer text="container 4" color="pink" />
      </main>
    </>
  );
}

export default App;
