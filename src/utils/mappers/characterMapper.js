const characterMapper = (character) => ({
  id: character.id,
  name: character.name,
  description: character.description,
  thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
  comicsURI: character.comics.collectionURI
});

export default characterMapper;
