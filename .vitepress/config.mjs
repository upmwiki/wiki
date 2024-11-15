import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "УПМ Вики",
  //description: "A VitePress Site",
  titleTemplate: ':title · УПМ Вики',

  markdown: {
    math: true,
    lineNumbers: true
  },
  lastUpdated: true,
  //appearance: 'force-dark',
  srcDir: 'pages',
  lang: 'ru-RU',
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: { label: 'Содержание страницы' },

    docFooter: {
      prev: '‹ Назад',
      next: 'Далее ›'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    /*sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/upmwiki/wiki' }
    ]
  }
})
