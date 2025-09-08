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
import sidebarProbabilityTheory2023 from '../sidebars/probability-theory-2023.json';
import sidebarProjectActivity2022 from '../sidebars/2022-project-activity.json';
import timetableSidebar from '../sidebars/timetable.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "УПМ Вики",
  //description: "A VitePress Site",
  description: "УПМ Вики",
  titleTemplate: ':title · УПМ Вики',

  // https://stackoverflow.com/questions/75219687/vue-vite-reached-heap-limit-allocation-failed-javascript-heap-out-of-memory
  /*vite: {
    server: {
      watch: {
        followSymlinks: false,
      }
    }
  },*/

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
      text: 'Исходный код на GitHub'
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
    notFound: {
      title: "СТРАНИЦА НЕ НАЙДЕНА",
      quote: "Запрашиваемая страница либо не существует либо в настоящее время доступна по другому адресу",
      linkText: "Вернуться на главную",
      linkLabel: "Вернуться на главную страницу"
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Расписание занятий', link: '/timetable/2025-02/' },
      {
        text: 'Архив',
        items: [
          { text: 'Решебники', link: '/answerbook/' },
          { text: 'Библиотека', link: '/library/' },
          //{ text: '<img src="/icons/open-book.png" width="16" style="display: inline; transform: translateY(1px);" /> Библиотека', link: '/library' },
        ]
      }
      //{ text: '<img src="/icons/bell.png" width="16" title="Список изменений" />', link: '/updates' },
      //{ text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' },
      //{ text: "Калькуляторы", link: "/calculators" },
    ],

    sidebar: {
      // численные методы
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
      // теория вероятностей и математическая статистика
      '/probability-theory/2023': {
        base: '/probability-theory/2023',
        items: sidebarProbabilityTheory2023
      },
      // проектная деятельность
      '/project-activity/2022': {
        base: '/project-activity/2022',
        items: sidebarProjectActivity2022
      },
      // расписание занятий
      '/timetable': {
        base: '/timetable',
        items: timetableSidebar
      }
    },

    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/upmwiki/wiki' }
    ],*/

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ],

    logo: { src: '/logo.png', },
    //siteTitle: false,
  },
  sitemap: {
    hostname: "https://upmwiki.netlify.app/"
  }
})
