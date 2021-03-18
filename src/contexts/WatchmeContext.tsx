import { createContext, useState, ReactNode } from 'react';

interface WatchmeContextData {
    selectedGenreId: number;
    setSelectedGenreId: (selectedGenreId: number) => void;
}

interface WatchmeProviderProps {
    children: ReactNode;
}

export const WatchmeContext = createContext({} as WatchmeContextData);

export function WatchmeProvider({ children }: WatchmeProviderProps) { 

    const [selectedGenreId, setSelectedGenreId] = useState(1);


    return(
        <WatchmeContext.Provider
            value={{
                selectedGenreId,
                setSelectedGenreId,
            }}
        >
            { children }
        </WatchmeContext.Provider>
    );
}