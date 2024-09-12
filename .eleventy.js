const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    pathPrefix: "/becoming-talented-tools/",
    dir: {
      input: "src",
    },
  };
};
