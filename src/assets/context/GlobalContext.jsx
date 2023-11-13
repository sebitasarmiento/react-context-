import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ photos, setPhotos, favorites, setFavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
