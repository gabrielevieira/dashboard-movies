const axios = require("axios");

exports.getMoviesData = async (page, size, winner, year) => {
  const response = await axios.get(
    `/?page=${page}&size=${size}&winner=${winner}&year=${year}`
  );
  return response;
};
