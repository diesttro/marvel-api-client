import { useState } from 'react';
import Search from '../../components/Search';
import Card from '../../components/Card';
import './Favorites.css';

const Favorites = ({
  favoriteCharacters,
  onClickCharacter,
  onClickMarkAsFavorite
}) => {
  const [search, setSearch] = useState('');
  const characters = search
    ? favoriteCharacters.filter((character) =>
        character.name.toLowerCase().includes(search)
      )
    : favoriteCharacters;

  return (
    <main className="favorites-wrapper">
      <Search resultsCount={characters?.length} onChangeSearch={setSearch} />
      {characters ? (
        <div className="favorite-list">
          {characters.map((character) => {
            const handleClick = () =>
              onClickCharacter({ ...character, isFavorite: true });

            const handleClickMarkAsFavorite = () =>
              onClickMarkAsFavorite((prevItems) =>
                prevItems.filter((prevItem) => prevItem.id !== character.id)
              );

            return (
              <Card
                key={character.id}
                character={character}
                isFavorite
                onClick={handleClick}
                onClickMarkAsFavorite={handleClickMarkAsFavorite}
              />
            );
          })}
        </div>
      ) : null}
    </main>
  );
};

export default Favorites;
