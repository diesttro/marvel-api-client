import { afterEach, describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Comic from './Comic';

describe('Comic', () => {
  afterEach(cleanup);

  it('should render the comic image, title and date', () => {
    const data = {
      dates: [
        {
          type: 'onsaleDate',
          date: '1962-05-01T00:00:00-0400'
        }
      ],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/59933ea5b5c2e',
        extension: 'jpg'
      },
      title: 'Incredible Hulk'
    };

    render(<Comic data={data} />);

    screen.getByAltText('Incredible Hulk');
    screen.getByText('Incredible Hulk');
    screen.getByText('1962');
  });
});
