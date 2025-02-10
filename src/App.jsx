import { useState } from 'react';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/700.css';
import { Header, Home, Detail, Favorites } from './layout';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [characterDetail, setCharacterDetail] = useState();

  const handleClickLogo = () => {
    setShowFavorites(false);
    setCharacterDetail(null);
  };

  const handleClickFavorites = () => {
    setShowFavorites(true);
    setCharacterDetail(null);
  };

  const handleClickCharacter = (character) => {
    setShowFavorites(false);
    setCharacterDetail(character);
  };

  return (
    <>
      <Header
        favoritesCount={favorites.length}
        onClickLogo={handleClickLogo}
        onClickFavorites={handleClickFavorites}
      />
      {showFavorites ? (
        <Favorites
          favoriteCharacters={favorites}
          onClickCharacter={handleClickCharacter}
          onClickMarkAsFavorite={setFavorites}
        />
      ) : null}
      {characterDetail ? (
        <Detail
          character={characterDetail}
          onClickMarkAsFavorite={setFavorites}
        />
      ) : null}
      {!showFavorites && !characterDetail ? (
        <Home
          favoriteCharacters={favorites}
          onClickCharacter={handleClickCharacter}
          onClickMarkAsFavorite={setFavorites}
        />
      ) : null}
    </>
  );
}

export default App;
