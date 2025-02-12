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

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  
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
  
  // Add bundle plugin for JS
  eleventyConfig.addPlugin(pluginBundle);
  
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