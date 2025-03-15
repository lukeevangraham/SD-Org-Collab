let router = require("express").Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const response = await Promise.all([
    axios.get("https://admin.grahamwebworks.com/api/oc-clubs"),
  ]);

  // console.log("RES: ", response[0].data.data);
  res.render("index", { clubs: response[0].data.data });
});

module.exports = router;
