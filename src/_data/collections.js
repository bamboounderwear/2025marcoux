module.exports = {
  posts: function(collection) {
    return collection.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => {
        return new Date(b.data.date) - new Date(a.data.date);
      });
  },
  projects: function(collection) {
    return collection.getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => {
        return new Date(b.data.date) - new Date(a.data.date);
      });
  }
};