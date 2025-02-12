import EmptyHeart from '../../assets/empty-heart.svg';
import Heart from '../../assets/heart.svg';
import './Card.css';

const Card = ({ character, isFavorite, onClick, onClickMarkAsFavorite }) => {
  const { name, thumbnail } = character;

  const handleClick = (event) => {
    // It's not ideal but links still don't behave like links
    event.preventDefault();

    onClick();
  };

  return (
    <div className="card-wrapper">
      <a
        aria-label={`See ${name} detail`}
        className="reset-link card"
        href="#"
        onClick={handleClick}
      >
        <img
          alt={name}
          className="card__image"
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <div className="card__info">
          <span className="card__name">{name}</span>
        </div>
      </a>
      <button
        aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
        className="reset-button card__favorite"
        onClick={onClickMarkAsFavorite}
      >
        {isFavorite ? (
          <Heart aria-hidden="true" width="12" height="100%" />
        ) : (
          <EmptyHeart aria-hidden="true" width="12" height="100%" />
        )}
      </button>
    </div>
  );
};

export default Card;
