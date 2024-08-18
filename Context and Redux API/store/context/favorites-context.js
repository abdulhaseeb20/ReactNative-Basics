import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMeal, setFavoriteMeal] = useState({});

  function addFavorite(id) {
    setFavoriteMeal((currenFavIds) => [...currenFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMeal((currenFavIds) =>
      currenFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMeal,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
