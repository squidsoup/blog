module.exports = {
  title: 'Kit Randel',
  description: 'blog',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/squidsoup',
        },
      ],
      copyright: [
        {
          text: 'Creative Commons Attribution 4.0 International License | Copyright © 2021-present Kit Randel',
          link: 'https://creativecommons.org/licenses/by/4.0/',
        },
      ],
    },
    sitemap: {
      hostname: "http://blog.nocturne.nz"
    }
  },
}
