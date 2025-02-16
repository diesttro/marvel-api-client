const comicMapper = (comic) => ({
  id: comic.id,
  title: comic.title,
  dates: comic.dates,
  thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension
});

export default comicMapper;
