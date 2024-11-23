import useFetch from "use-http";

const URL_API =
  "https://tools.outsera.com/backend-java/api/movies?winner=true&year=2018";
export const useStudiosWinnersForYear = () => {
  const { get, response, error, loading } = useFetch(URL_API);

  return {
    responseWinnersForYear: response,
    errorWinnersForYear: error,
    loadingWinnersForYear: loading,
    searchStudiosWinnersForYear: get,
  };
};
