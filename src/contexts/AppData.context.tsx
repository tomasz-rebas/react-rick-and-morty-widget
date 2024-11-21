import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
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
  currentCharacterId: number;
  setCurrentCharacterId: Dispatch<SetStateAction<number>>;
  isError: boolean;
};

export const AppDataContext = createContext<AppData>({
  isLoading: true,
  character: null,
  currentCharacterId: 1,
  setCurrentCharacterId: () => {},
  isError: false,
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [currentCharacterId, setCurrentCharacterId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
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
    } catch (error: unknown) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentCharacterId]);

  const appData: AppData = useMemo(() => {
    return {
      isLoading,
      character: characterData,
      currentCharacterId,
      setCurrentCharacterId,
      isError,
    };
  }, [isLoading, characterData]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
