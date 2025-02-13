const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postCssImport = require("postcss-import");
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Add markdown filter for use in templates
  eleventyConfig.addFilter("markdown", function(value) {
    return markdownLibrary.render(value);
  });

  // Add limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    if (!Array.isArray(array)) return [];
    return array.slice(0, limit || array.length);
  });

  // Configure collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  
  // Watch JS files for changes
  eleventyConfig.addWatchTarget("./src/scripts/");
  
  // Process CSS with PostCSS and Tailwind
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function(content, inputPath) {
      if (!inputPath.endsWith('.css')) return;
      
      return async () => {
        let output = await postcss([
          postCssImport,
          tailwindcss,
          autoprefixer
        ]).process(content, {
          from: inputPath
        });
        
        return output.css;
      };
    }
  });
  
  // Pass through static files
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy({"src/scripts": "scripts"});
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};