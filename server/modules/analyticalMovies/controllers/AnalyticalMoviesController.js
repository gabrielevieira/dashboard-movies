const AnalyticalMoviesService = require("../../../server");

exports.moviesData = async (res, next) => {
  try {
    const response = await AnalyticalMoviesService.getMoviesData(
      page,
      size,
      winner,
      year
    );
    return res.json(response);
  } catch (error) {
    next(error);
    res.status(500).json({ message: "Error fetching data" });
  }
};
