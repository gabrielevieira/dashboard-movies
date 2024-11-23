import useFetch from "use-http";

const URL_API =
  "https://tools.outsera.com/backend-java/api/movies?projection=max-min-win-interval-for-producers";

export const useMultipleWinnersForInterval = () => {
  const { get, response, error, loading } = useFetch(URL_API);

  return {
    responseMultipleWinnersInterval: response,
    errorMultipleWinnersInterval: error,
    loadingMultipleWinnersInterval: loading,
    searchMultipleWinnersForInterval: get,
  };
};
