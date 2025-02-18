import { useQuery } from '@tanstack/react-query';
import SparkMD5 from 'spark-md5';
import createURLParams from '../utils/createURLParams';

const TS = 1;
const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;

const defaultParams = {
  ts: TS,
  apikey: PUBLIC_API_KEY,
  hash: SparkMD5.hash(TS + PRIVATE_API_KEY + PUBLIC_API_KEY)
};

const getQuery = async (url, mapper) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const results = json.data.results;

    return mapper ? results.map(mapper) : results;
  } catch (error) {
    console.error(error);
  }
};

const useGetQuery = (uri = '', params = {}, mapper) => {
  const urlParams = createURLParams({
    ...defaultParams,
    ...params
  });

  return useQuery({
    queryKey: [uri, urlParams],
    queryFn: () => getQuery(uri + '?' + urlParams, mapper)
  });
};

export default useGetQuery;
