require(dotenv).config();
const express = require("express");
const app = express();
const userRoutes = require("./modules/analyticalMovies/routes/index");

app.use(express.json());

app.use(`/api/v1`, userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});
