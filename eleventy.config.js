export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");

  eleventyConfig.addCollection("fieldNotes", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("field-notes")
      .reverse();
  });
eleventyConfig.addCollection("lists", function(collectionApi) {
  return collectionApi
    .getFilteredByTag("lists")
    .reverse();
});
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
}
