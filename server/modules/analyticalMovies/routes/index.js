const AnalyticalMoviesController = require("../controllers/AnalyticalMoviesController");

router.get("/api/listMovie", AnalyticalMoviesController.moviesData);

module.exports = router;
