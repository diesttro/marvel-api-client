import { useState } from 'react';
import useGetQuery from '../../hooks/useGetQuery';
import { comicMapper } from '../../utils/mappers';
import Comic from '../../components/Comic';
import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';
import './Detail.css';

const Detail = ({ character, onClickMarkAsFavorite }) => {
  const { name, description, thumbnail } = character;
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);
  const { data: comics, isLoading } = useGetQuery(
    character.comicsURI,
    {
      orderBy: 'onsaleDate',
      limit: 20
    },
    comicMapper
  );

  const handleClickMarkAsFavorite = () => {
    setIsFavorite((prevValue) => !prevValue);
    onClickMarkAsFavorite((prevItems) =>
      isFavorite
        ? prevItems.filter((prevItem) => prevItem.id !== character.id)
        : [...prevItems, character]
    );
  };

  return (
    <main>
      <div className="character-wrapper">
        <section className="character">
          <img className="character__image" src={thumbnail} />
          <div className="character__info">
            <div className="group">
              <h1 className="character__name">{name}</h1>
              <button
                aria-label={
                  isFavorite ? 'Unmark as favorite' : 'Mark as favorite'
                }
                className="reset-button"
                onClick={handleClickMarkAsFavorite}
              >
                {isFavorite ? (
                  <Heart aria-hidden="true" />
                ) : (
                  <EmptyHeart aria-hidden="true" />
                )}
              </button>
            </div>
            <p className="character__description">{description}</p>
          </div>
        </section>
      </div>
      <section className="comics">
        <h3 className="comics__title">Comics</h3>
        {isLoading ? <p>Loading results</p> : null}
        {comics ? (
          <div className="comics__list">
            {comics.map((comic) => (
              <Comic key={comic.id} data={comic} />
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Detail;
