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
  currentId: number;
  setCurrentId: Dispatch<SetStateAction<number>>;
  isError: boolean;
};

export const AppDataContext = createContext<AppData>({
  isLoading: true,
  character: null,
  currentId: 1,
  setCurrentId: () => {},
  isError: false,
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [currentId, setCurrentId] = useState<AppData["currentId"]>(1);
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(true);
  const [isError, setIsError] = useState<AppData["isError"]>(false);
  const [characterData, setCharacterData] =
    useState<AppData["character"]>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response: Character = await ky
        .get(`${API_URL}/character/${currentId}`)
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
  }, [currentId]);

  const appData: AppData = useMemo(() => {
    return {
      isLoading,
      character: characterData,
      currentId,
      setCurrentId,
      isError,
    };
  }, [isLoading, characterData]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
