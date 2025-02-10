import { useState } from 'react';
import useGetQuery from '../../hooks/useGetQuery';
import Comic from '../../components/Comic';
import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';
import './Detail.css';

const Detail = ({ character, onClickMarkAsFavorite }) => {
  const { data: comics, isLoading } = useGetQuery(
    character.comics.collectionURI,
    {
      orderBy: 'onsaleDate',
      limit: 20
    }
  );
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);
  const { name, description, thumbnail } = character;

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
          <img
            className="character__image"
            src={`${thumbnail.path}.${thumbnail.extension}`}
          />
          <div className="character__info">
            <div className="group">
              <h1 className="character__name">{name}</h1>
              <button
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
        {isLoading ? <p>Loading comics</p> : null}
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
