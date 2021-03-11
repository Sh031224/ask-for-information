const generateSidebar = require("./generate-docusaurus-sidebar.js");

const guides = generateSidebar({ baseDir: "./docs", sourceDir: "" });

module.exports = {
  // someSidebar: {
  //   Docusaurus: ['doc1', 'doc2', 'doc3'],
  //   Features: ['mdx'],
  // },
  guides
};
