// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const docConfig = require('./docConfig.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AliceNet',
  tagline: 'Getting Started',
  url: 'https://docs.alicenet.duckdns.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alice', // Usually your GitHub org/user name.
  projectName: 'alice-net-documentation-hub', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MadBase/alice-docs-hub',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/MadBase/alice-docs-hub',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'AliceNet Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/quickstart',
            position: 'left',
            label: 'Quick Start',
          },
          {
              to: '/blog',
              label: "Blog"
          },
          {
            to: '/docs/',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/alice-net-wallet/intro',
            position: 'left',
            label: 'AliceNetWallet',
          },
          {
            to: '/docs/alice-net-js/intro',
            position: 'left',
            label: 'AliceNetJs',
          },
        //   {
        //     href: 'https://github.com/MadBase/alice-docs-hub',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        {
            type: 'dropdown',
            position: 'right',
            label: "Demo Apps",
            items: []
          },
          {
            type: 'dropdown',
            position: 'right',
            label: "Technical Docs",
            items: []
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AliceNet`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// Add Documentation Configuration to Navigation && Footer
const devDocIdx = config.themeConfig.navbar.items.map(e => (e.label)).indexOf("Technical Docs");
const appLinksIdx = config.themeConfig.navbar.items.map(e => (e.label)).indexOf("Demo Apps");
const addItemToDocs = item => config.themeConfig.navbar.items[devDocIdx].items.push(item); 
const addItemToDemoApps = item => config.themeConfig.navbar.items[appLinksIdx].items.push(item); 
// Add technical doc links
Object.keys(docConfig.technical).forEach(key => {
    let technicalDocObj = docConfig.technical[key];
    addItemToDocs({
        label: technicalDocObj.name,
        href: technicalDocObj.url
    });
})
// Add demo app links
Object.keys(docConfig.demoapps).forEach(key => {
    let demoAppObj = docConfig.demoapps[key];
    addItemToDemoApps({
        label: demoAppObj.name,
        href: demoAppObj.url
    });
})

module.exports = config;
