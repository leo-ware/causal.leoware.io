// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const obsidian = require('remark-obsidian');
const math = require('remark-math');
const katex = require('rehype-katex');
const imgLinks = require("@pondorasti/remark-img-links")
// const gfm = require('remark-gfm');


// Constants
const siteTitle = 'Causal: dict';
const siteUrl = 'https://causal.leoware.io';
const githubUrl = 'https://github.com/leo-ware/causal.leoware.io'


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: siteTitle,
    tagline: 'A repository of knowledge on structural causal inference',
    favicon: 'img/causaldict_logo.ico',

    // Set the production url of your site here
    url: siteUrl,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'leo-ware', // Usually your GitHub org/user name.
    projectName: 'causal.leoware.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            // @ts-ignore ironic
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    remarkPlugins: [
                        require('remark-math'),
                    ],
                    rehypePlugins: [
                        [require('rehype-katex'), {output: "mathml"}]
                    ],
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/leo-ware/causal.leoware.io',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/causaldict_logo.svg', // social card
            navbar: {
                title: siteTitle,
                logo: {
                    alt: 'logo',
                    src: 'img/causaldict_logo.svg',
                },
                items: [
                    // {label: "About", to: "/", position: "left"},
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Browse',
                    },
                    // {to: '/', label: "Tools", position: 'left'},
                    {
                        href: 'https://github.com/leo-ware/causal.leoware.io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/leo-ware/causal.leoware.io',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Leo Ware. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
