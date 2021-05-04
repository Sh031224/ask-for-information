/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Ask for Information",
  tagline: "함께 만들어가는 코딩 지식",
  url: "https://sh031224.github.io",
  baseUrl: "/ask-for-information/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Sh031224", // Usually your GitHub org/user name.
  projectName: "ask-for-information", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "e845f60dd2cbe598ed83871f0efa10fb",
      indexName: "ask-for-information",
      appId: "KKHBEPUL5Q"
    },
    navbar: {
      title: "Ask-for-information",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "문서",
          position: "left"
        },
        { to: "blog", label: "가이드", position: "left" },
        {
          href: "https://github.com/Sh031224/ask-for-information",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "커뮤니티",
          items: [
            {
              label: "시작하기",
              to: "docs"
            },
            {
              label: "건의사항 및 이슈",
              href: "https://github.com/Sh031224/ask-for-information/issues/new"
            }
          ]
        },
        {
          title: "더 보기",
          items: [
            {
              label: "가이드",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/Sh031224/ask-for-information"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ask-for-information, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Sh031224/ask-for-information/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
