import Marvel from '../../assets/marvel.svg';
import Heart from '../../assets/heart.svg';
import './Header.css';

const Header = ({ favoritesCount, onClickLogo, onClickFavorites }) => {
  const handleClick = (callback) => (event) => {
    // It's not ideal but links still don't behave like links
    event.preventDefault();

    callback();
  };

  return (
    <header className="header-wrapper">
      <nav className="header-nav">
        <a
          aria-label="Go home"
          className="reset-link header-link"
          href="#"
          onClick={handleClick(onClickLogo)}
        >
          <Marvel aria-hidden="true" />
        </a>
        <a
          aria-label="See favorite characters"
          className="reset-link header-link"
          href="#"
          onClick={handleClick(onClickFavorites)}
        >
          <Heart aria-hidden="true" />
          <span className="count-text">{favoritesCount}</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
