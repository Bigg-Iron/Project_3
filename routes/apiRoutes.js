const axios = require("axios");
const router = require("express").Router();
const favController = require("../controllers/favController");

router.get("/launches", (req, res) => {
  axios
    .get("https://launchlibrary.net/1.3/launch", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/favorite"
router.route("/favorite")
  .get(favController.findAll)
  .post(favController.create)
  .delete(favController.removeAll);

// Matches with "/api/favorite/:userid"
router
.route("/favorite/:userid")
.get(favController.findByUserId)

module.exports = router;
