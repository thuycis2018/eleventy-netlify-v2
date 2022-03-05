module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
