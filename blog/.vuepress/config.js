module.exports = {
  title: 'Kit֍Randel',
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
        {
          type: 'instagram',
          link: 'https://www.instagram.com/bayardrandel/',
        },
      ],
      copyright: [
        {
          text: 'Creative Commons Attribution 4.0 International License | Copyright © 2021-present Kit Randel',
          link: 'https://creativecommons.org/licenses/by/4.0/',
        },
      ],
    },
    smoothScroll: true,
    sitemap: {
      hostname: "http://blog.nocturne.nz"
    },
    newsletter: {
     endpoint: "https://nocturne.us7.list-manage.com/subscribe/post?u=41a63131d0c3c27cc02ab0a00&amp;id=ddf33fea94"
   },
  },
}
