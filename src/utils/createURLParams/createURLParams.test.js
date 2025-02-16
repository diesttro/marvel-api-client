import { describe, expect, it } from 'vitest';
import createURLParams from './createURLParams';

describe('Create URL params', () => {
  it('should create string of url params', () => {
    const params = {
      nameStartsWith: 'Hulk',
      limit: 50
    };

    expect(createURLParams(params)).toEqual('nameStartsWith=Hulk&limit=50');
  });

  it('should avoid empty values on the string', () => {
    const params = {
      nameStartsWith: '',
      limit: 50
    };

    expect(createURLParams(params)).toEqual('limit=50');
  });
});
