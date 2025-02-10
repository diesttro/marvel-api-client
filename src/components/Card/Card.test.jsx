import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';

const character = {
  name: 'Hulk',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
    extension: 'jpg'
  }
};
const noop = () => {};

describe('Card', () => {
  afterEach(cleanup);

  it('should render the card image, title and button', () => {
    render(
      <Card character={character} onClick={noop} onClickMarkAsFavorite={noop} />
    );

    screen.getByAltText('Hulk');
    screen.getByText('Hulk');
    screen.getByRole('button');
  });

  it('should call onClick when the card is clicked', () => {
    const handleClick = vi.fn();

    render(
      <Card
        character={character}
        onClick={handleClick}
        onClickMarkAsFavorite={noop}
      />
    );

    fireEvent.click(screen.getByRole('link'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('should call onClickMarkAsFavorite when the button is clicked', () => {
    const handleClickMarkAsFavorite = vi.fn();

    render(
      <Card
        character={character}
        onClick={noop}
        onClickMarkAsFavorite={handleClickMarkAsFavorite}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClickMarkAsFavorite).toHaveBeenCalled();
  });
});
