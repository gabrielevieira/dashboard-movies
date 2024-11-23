import useFetch from "use-http";

const URL_API =
  "https://tools.outsera.com/backend-java/api/movies/?page=9&size=99&winner=true&year=2018";
export const useListMovies = () => {
  const { get, response, loading, error } = useFetch(URL_API);

  return {
    respListMovies: response,
    errorListMovies: error,
    loadingListMovie: loading,
    searchListMovies: get,
  };
};
