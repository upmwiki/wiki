import { defineConfig } from 'vitepress'

import sidebarNumericalAnalysisLectures2024 from '../sidebars/numerical-analysis-lectures-2024.json';
import sidebarNumericalAnalysis2024 from '../sidebars/2024-numerical-analysis.json';
import sidebarNumberTheoryLectures2024 from '../sidebars/number-theory-lectures-2024.json';
import sidebarNumericalAnalysisLabs2024 from '../sidebars/numerical-analysis-labs-2024.json';
import sidebarDatabasesLabs2024 from '../sidebars/databases-labs-2024.json';
import sidebarOOPLabs2024 from '../sidebars/oop-labs-2024.json';
import sidebarGameTheoryLabs2024 from '../sidebars/game-theory-2024-lectures.json';
import optimizationMethodsLectures2025 from '../sidebars/optimization-methods-lectures-2025.json';
import variationsCalculus2025 from '../sidebars/2025-variations-calculus.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "УПМ Вики",
  //description: "A VitePress Site",
  description: "УПМ Вики",
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
      { text: '<img src="/icons/open-book.png" width="16" style="display: inline; transform: translateY(1px);" /> Библиотека', link: '/library' },
      //{ text: '<img src="/icons/bell.png" width="16" title="Список изменений" />', link: '/updates' },
      //{ text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' },
      //{ text: "Калькуляторы", link: "/calculators" },
    ],

    sidebar: {
      // численные методы
      '/numerical-analysis/lectures/2024': {
        base: '/numerical-analysis/lectures/2024',
        items: sidebarNumericalAnalysisLectures2024
      },
      '/numerical-analysis/2024': {
        base: '/numerical-analysis/2024',
        items: sidebarNumericalAnalysis2024
      },
      '/numerical-analysis/labs/2024': {
        base: '/numerical-analysis/labs/2024',
        items: sidebarNumericalAnalysisLabs2024
      },
      // базы данных и экспертные системы
      '/databases/labs/2024': {
        base: '/databases/labs/2024',
        items: sidebarDatabasesLabs2024
      },
      // элементы алгебры и теории чисел
      '/number-theory/lectures/2024': {
        base: '/number-theory/lectures/2024',
        items: sidebarNumberTheoryLectures2024
      },
      // объектно-ориентированное программирование
      '/oop/2024/labs': {
        base: '/oop/2024/labs',
        items: sidebarOOPLabs2024
      },
      // теория игр и исследование операций
      '/game-theory/2024/lectures': {
        base: '/game-theory/2024/lectures',
        items: sidebarGameTheoryLabs2024
      },
      // методы оптимизации
      '/optimization-methods/2025': {
        base: '/optimization-methods/2025',
        items: optimizationMethodsLectures2025
      },
      // вариаицонное исчисление и оптимальное управление
      '/variations-calculus/2025': {
        base: '/variations-calculus/2025',
        items: variationsCalculus2025
      },
    },

    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/upmwiki/wiki' }
    ],*/

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    logo: { src: '/logo.png', },
    //siteTitle: false,
  },
  sitemap: {
    hostname: "https://upmwiki.netlify.app/"
  }
})
