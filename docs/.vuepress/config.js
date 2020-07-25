module.exports = {
   plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ], 
      '@vuepress/back-to-top',true,
    
    
  ],

  title: '老派旅人',
  base: '/Blog/',
  description: '寒江孤影.江湖故人.相逢何必曾相识',
  logo: './assets/img/avatar.png',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
  ],
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Amm',
      avatar: '/assets/img/avatar.png',
      link: 'https://github.com/AmmGo',
      linktext: 'Follow',
      },
      {
        name: 'Uhz',
        avatar: '/assets/img/avatar.png',
        link: 'https://github.com/AmmGo',
        linktext: 'Follow',
      },
	   {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
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
          link: '#',
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
          text: 'Copyright © 1996 - 2018 Amm Corporation, All Rights Reserved',
          link: 'https://github.com/AmmGo/Blog',
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
   /**newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    }, */
    feed: {
      canonical_base: 'https://github.com/AmmGo/Blog',
    },
    smoothScroll: true
  },
}
