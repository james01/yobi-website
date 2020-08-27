module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("src/site/_includes/css");
  eleventyConfig.addPassthroughCopy("src/site/images");
  eleventyConfig.setTemplateFormats("html");

  return {
    dir: {
      input: "src/site",
      output: "build",
    },
  };
};
