import './Comic.css';

const Comic = ({ data }) => {
  const { thumbnail, title, dates } = data;

  return (
    <div className="comic">
      <img
        alt={title}
        className="comic__image"
        src={`${thumbnail.path}.${thumbnail.extension}`}
      />
      <p className="comic__title">{title}</p>
      <p className="comic__year">
        {dates.find((date) => date.type === 'onsaleDate').date.slice(0, 4)}
      </p>
    </div>
  );
};

export default Comic;
