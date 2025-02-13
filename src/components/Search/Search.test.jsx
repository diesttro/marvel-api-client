import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import Search from './Search';

const noop = () => {};

describe('Search', () => {
  afterEach(cleanup);

  it('should render the search input', () => {
    render(<Search resultsCount={0} onChangeSearch={noop} />);

    screen.getByRole('textbox');
  });

  it('should call onChangeSearch when you type', async () => {
    const handleChange = vi.fn();

    render(<Search resultsCount={0} onChangeSearch={handleChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Hulk' }
    });

    await waitFor(() => expect(handleChange).toHaveBeenCalled());
  });
});
