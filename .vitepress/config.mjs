import { defineConfig } from 'vitepress'

import sidebarNumericalAnalysisLectures2024 from '../sidebars/numerical-analysis-lectures-2024.json';
import sidebarNumericalAnalysisLabs2024 from '../sidebars/numerical-analysis-labs-2024.json';
import sidebarDatabasesLabs2024 from '../sidebars/databases-labs-2024.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "УПМ Вики",
  //description: "A VitePress Site",
  titleTemplate: ':title · УПМ Вики',

  markdown: {
    math: true,
    lineNumbers: true,
  },
  lastUpdated: true,
  appearance: 'dark',
  srcDir: 'pages',
  lang: 'ru-RU',
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: { label: 'Содержание страницы', level: 'deep' },

    editLink: {
      pattern: 'https://github.com/upmwiki/wiki/edit/main/pages/:path',
      text: 'Редактировать на GitHub'
    },

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
      //{ text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' },
      //{ text: "Калькуляторы", link: "/calculators" },
    ],

    sidebar: {
      '/numerical-analysis/lectures/2024': {
        base: '/numerical-analysis/lectures/2024',
        items: sidebarNumericalAnalysisLectures2024
      },
      '/numerical-analysis/labs/2024': {
        base: '/numerical-analysis/labs/2024',
        items: sidebarNumericalAnalysisLabs2024
      },
      '/databases/labs/2024': {
        base: '/databases/labs/2024',
        items: sidebarDatabasesLabs2024
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/upmwiki/wiki' }
    ],

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    logo: { src: '/logo.png', },
    //siteTitle: false,
  }
})
