import React, { createContext, useState, useEffect, useMemo } from "react";
import ky from "ky";
import { API_URL } from "../config";
import type { Character } from "../types/RickAndMorty.types";

type AppData = {
  isLoading: boolean;
  character: {
    id: number;
    name: Character["name"];
    status: Character["status"];
    gender: Character["gender"];
    imageUrl: string;
    episodes: number;
  } | null;
  setCurrentCharacterId: React.Dispatch<React.SetStateAction<number>>;
};

export const AppDataContext = createContext<AppData>({
  isLoading: true,
  character: null,
  setCurrentCharacterId: () => {},
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [currentCharacterId, setCurrentCharacterId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(false);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(null);

  const appData: AppData = useMemo(() => {
    return {
      isLoading,
      character: characterData,
      setCurrentCharacterId,
    };
  }, [isLoading, characterData]);

  useEffect(() => {
    (async () => {
      const response: Character = await ky
        .get(`${API_URL}/character/${currentCharacterId}`)
        .json();

      const { id, name, gender, status, image, episode } = response;

      const nextCharacterData: AppData["character"] = {
        id,
        name,
        gender,
        status,
        imageUrl: image,
        episodes: episode.length,
      };

      setCharacterData(nextCharacterData);
      setIsLoading(false);
    })();
  }, [currentCharacterId]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
