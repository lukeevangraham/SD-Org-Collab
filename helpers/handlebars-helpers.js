module.exports = {
  formatDate: function (date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date.replace(/-/g, "/")).toLocaleDateString(
      "en-US",
      options
    );
  },
  getCloudinaryResize: (url, width) => {
    return `${url.replace("/upload/", `/upload/w_${width}/`)} ${width}w`;
  },
};
