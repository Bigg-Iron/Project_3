const axios = require("axios");
const router = require("express").Router();

router.get("/launches", (req, res) => {
  axios
    .get("https://launchlibrary.net/1.3/launch", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
