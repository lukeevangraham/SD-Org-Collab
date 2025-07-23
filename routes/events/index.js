let router = require("express").Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const response = await Promise.all([
    axios.get(`${process.env.API_URL}oc-events?populate=*`),
  ]);

  // console.log("RESPONSE: ", response[0].data.data);

  res.render("./events/", { events: response[0].data.data });
});

module.exports = router;
