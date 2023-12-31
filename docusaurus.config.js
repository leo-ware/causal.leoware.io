// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

    onBrokenLinks: 'warn',
    // onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    markdown: {
        mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid'],

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
                    routeBasePath: '/',
                    remarkPlugins: [
                        require('remark-math'),
                    ],
                    rehypePlugins: [
                        [require('rehype-katex'), {output: "mathml"}]
                    ],
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: githubUrl,
                },
                blog: false,
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
            // docs: {
            //     sidebar: {
            //         hideable: true,
            //     }
            // },
            navbar: {
                title: siteTitle,
                logo: {
                    alt: 'logo',
                    src: 'img/causaldict_logo.svg',
                },
                items: [
                    {label: "About", to: "/about", position: "left"},
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Course',
                    },
                    // {to: '/', label: "Tools", position: 'left'},
                    {
                        href: githubUrl,
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Navigation',
                        items: [
                            {
                                label: 'Home',
                                to: '/',
                            },
                            {
                                label: 'Course',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: "Contribute",
                        items: [
                            {
                                label: "GitHub",
                                href: githubUrl,
                            },
                            {
                                label: "Issues",
                                href: githubUrl + "/issues",
                            }
                        ]
                    },
                    {
                        title: 'Info',
                        items: [
                            {
                                label: 'About',
                                to: '/about',
                            },
                            {
                                label: 'My Work',
                                href: 'https://leoware.io',
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
