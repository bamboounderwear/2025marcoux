const Image = require("@11ty/eleventy-img");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const htmlMinifier = require("html-minifier-terser");
const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postCssImport = require("postcss-import");

async function imageShortcode(src, alt, sizes = "100vw") {
  if (!src) throw new Error("Missing image source");
  if (!alt) throw new Error("Missing image alt");

  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "_site/img",
    urlPath: "/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
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
          autoprefixer,
          ...(process.env.NODE_ENV === "production" ? [cssnano] : [])
        ]).process(content, {
          from: inputPath
        });
        
        return output.css;
      };
    }
  });
  
  // Pass through CSS files
  eleventyConfig.addPassthroughCopy("src/styles");
  
  // Pass through static files
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add image shortcode
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  
  // Add bundle plugin for JS
  eleventyConfig.addPlugin(pluginBundle);
  
  // Add bundle shortcode for JS
  eleventyConfig.addShortcode("bundledJs", function () {
    return `<script src="/bundle.js"></script>`;
  });
  
  // Minify HTML in production
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return htmlMinifier.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        });
      }
      return content;
    });
  }

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