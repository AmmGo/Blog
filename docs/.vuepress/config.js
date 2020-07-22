module.exports = {
  title: '老派旅人',
  base: '/AmmGo.github.io/',
  description: 'Blog example for Mediumish theme with VuePress',
  logo: './assets/img/avatar1.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Amm',
      avatar: '/assets/img/avatar1.png',
      link: 'https://github.com/AmmGo',
      linktext: 'Follow',
      },
      {
        name: 'Uhz',
        avatar: '/assets/img/avatar1.png',
        link: 'https://github.com/AmmGo',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/AmmGo',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/AmmGo/Blog'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/AmmGo/Blog/',
    },
    smoothScroll: true
  },
}
