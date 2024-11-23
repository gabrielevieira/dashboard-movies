import useFetch from "use-http";

const URL_API =
  "https://tools.outsera.com/backend-java/api/movies?projection=years-with-multiple-winners";

export const useMultipleWinners = () => {
  const { get, response, loading, error } = useFetch(URL_API);

  return {
    responseMultipleWinners: response,
    errosMultipleWinners: error,
    loadingMultipleWinners: loading,
    searchMultipleWinners: get,
  };
};
