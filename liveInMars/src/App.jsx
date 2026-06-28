import { useState } from "react";
import { Button } from "./components/Button/button";
import { Container } from "./components/Container/container";
import "./App.css";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main/main";
import { Typography } from "./components/Typography";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Curiosidades sobre Marte</Typography>
          <Typography variant="body">
            Nos cards trazemos muitas curiosidades sobre os mistérios do planeta
            vermelho pelo olhar do curiosity.
          </Typography>
        </div>
      </Main>
    </Container>
  );
}

export default App;
