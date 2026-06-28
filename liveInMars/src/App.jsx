import { useState } from "react";
import { Button } from "./components/Button/button";
import { Container } from "./components/Container/container";
import "./App.css";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main/main";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
      </Main>
    </Container>
  );
}

export default App;
