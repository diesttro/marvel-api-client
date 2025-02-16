import { useState } from 'react';
import Search from '../../components/Search';
import Card from '../../components/Card';
import useGetQuery from '../../hooks/useGetQuery';
import { characterMapper } from '../../utils/mappers';
import './Home.css';

const Home = ({
  favoriteCharacters,
  onClickCharacter,
  onClickMarkAsFavorite
}) => {
  const [search, setSearch] = useState('');
  const { data: characters, isLoading } = useGetQuery(
    'http://gateway.marvel.com/v1/public/characters',
    { nameStartsWith: search, limit: 50 },
    characterMapper
  );

  return (
    <main className="characters-wrapper">
      <Search onChangeSearch={setSearch}>
        {isLoading ? 'Loading results' : `${characters?.length} results`}
      </Search>
      {characters ? (
        <div className="list">
          {characters.map((character) => {
            const isFavorite = favoriteCharacters.some(
              (favorite) => favorite.id === character.id
            );

            const handleClick = () =>
              onClickCharacter({ ...character, isFavorite });

            const handleClickMarkAsFavorite = () =>
              onClickMarkAsFavorite((prevItems) =>
                isFavorite
                  ? prevItems.filter((prevItem) => prevItem.id !== character.id)
                  : [...prevItems, character]
              );

            return (
              <Card
                key={character.id}
                character={character}
                isFavorite={isFavorite}
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

export default Home;
