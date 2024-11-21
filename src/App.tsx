import React from "react";
import { AppDataContextProvider } from "./contexts/AppData.context";
import { AppContainer } from "./App.styled";
import CharacterWidget from "./components/CharacterWidget";
import Controls from "./components/Controls";

const App: React.FC = () => {
  return (
    <AppDataContextProvider>
      <AppContainer>
        <CharacterWidget />
        <Controls />
      </AppContainer>
    </AppDataContextProvider>
  );
};

export default App;
