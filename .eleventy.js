module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats("html");

  return {
    dir: {
      input: "src/site",
      output: "build",
    },
  };
};
