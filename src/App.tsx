import React from "react";
import { AppDataContextProvider } from "./contexts/AppData.context";
import { AppContainer } from "./App.styled";
import CharacterWidget from "./components/CharacterWidget";
import Controls from "./components/Controls";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    status: {
      alive: "#87c74026",
      dead: "#EB575726",
      unknown: "#E0E0E0",
    },
    border: "#E0E0E0",
    label: "#b2d0eb",
    shadow: "#00000026",
    hover: "#e8e8e8",
    background: "#f2f2f2",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppDataContextProvider>
        <AppContainer>
          <CharacterWidget />
          <Controls />
        </AppContainer>
      </AppDataContextProvider>
    </ThemeProvider>
  );
};

export default App;
