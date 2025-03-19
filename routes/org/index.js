let router = require("express").Router();
const axios = require("axios");

router.get("/:slug", async (req, res) => {
  console.log("HERE: ", req.params.slug);
  console.log("URL: ", process.env.API_URL);

  const response = await Promise.all([
    axios.get(
      `${process.env.API_URL}oc-clubs?filters[slug][$eq]=${req.params.slug}&populate=*`
    ),
  ]);

  // console.log("RESPONSE: ", response[0].data.data[0]);

  res.render("./org/", { club: response[0].data.data[0] });
});

module.exports = router;
