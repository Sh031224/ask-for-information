//
// Generates a sidebar based on file structure and
// markdown frontmatter properties.
//
// ---
// title: My Cool Feature
// sidebar_label: Introduction
// ---
//
// sidebar_sort_order: the sort order of this page in the sidebar
// sidebar_label: the link text to show for this page
//
// To determine the name of categories and their sort order,
// we look in the frontmatter of the first child page (after sorting) for
// the following properties:
//
// sidebar_category: the name of the category
// sidebar_category_order: the sort order of the category
//

const fs = require("fs");
const path = require("path");

const isMarkdown = /\.md$/i;

// TODO: use a more efficient way to achieve this
function findInFrontMatter(contents, property) {
  const regMatch = new RegExp(`^${property}:\\s+(.*?)$`, "i");
  let frontmatter;
  let value = contents.split("\n").find((line, i) => {
    if (line === "---") {
      frontmatter = !frontmatter;
    } else if (frontmatter) {
      return line.indexOf(`${property}: `) === 0;
    }
    return false;
  });

  return value ? value.match(regMatch)[1] : null;
}

function generateSidebar({ baseDir, sourceDir }) {
  const searchIn = path.join(baseDir, sourceDir);

  const files = fs.readdirSync(searchIn, { withFileTypes: true });

  const items = files
    .sort()
    .map((dirent) => {
      const { name } = dirent;
      const filePath = path.join(sourceDir, name);

      if (dirent.isDirectory()) {
        const items = generateSidebar({ baseDir, sourceDir: filePath });
        const introItem = items.find((item) => typeof item === "string");

        let label;
        let sortOrder;

        if (introItem) {
          const contents = fs.readFileSync(path.join(searchIn, `${introItem}.md`), "utf8");

          label = findInFrontMatter(contents, "sidebar_category");
          sortOrder = findInFrontMatter(contents, "sidebar_category_order");
        }
        return {
          type: "category",
          label: label || name,
          sortOrder: sortOrder ? Number(sortOrder) : Infinity,
          items
        };
      }

      if (!filePath.match(isMarkdown)) {
        return;
      }

      const contents = fs.readFileSync(path.join(searchIn, name), "utf8");
      let sortOrder = findInFrontMatter(contents, "sidebar_sort_order");
      sortOrder = sortOrder ? Number(sortOrder) : Infinity;

      const fileId = filePath.replace(isMarkdown, "");

      return {
        type: "doc",
        id: fileId,
        sortOrder
      };
    })
    .filter((i) => !!i)
    .sort((a, b) => {
      if (a.sortOrder != null && b.sortOrder != null) {
        return a.sortOrder - b.sortOrder;
      }
      if ((a.sortOrder != null) & (b.sortOrder == null)) {
        return -1;
      }
      return 1;
    });

  // remove additional sidebar properties not supported
  // by docusaurus to avoid errors and warnings.
  return items.map(({ id, sortOrder, ...item }) => id || item);
}

module.exports = generateSidebar;
