---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
markdownStyles: false

hero:
  name: "УПМ Вики"
  #text: "A VitePress Site"
  tagline: Конспекты и решебник
  actions:
#     - theme: alt
#       text: О направлении
#       link: /about-fos
     - theme: alt
       text: Калькуляторы
       link: /calculators

features:
  - title: Теория вероятностей и математическая статистика
    icon: 🎲
    link: /probability-theory
  - title: Теория игр
    icon: ♟️
    link: /game-theory
  - title: Физика
    icon: ⚡
    link: /physics
  - title: Численные методы
    #details: 
    icon: 🔢
    link: /numerical-analysis
  - title: Элементы алгебры и теории чисел
    icon: 🔢
    link: /number-theory
---

<script setup>
  document.title = "УПМ Вики";
</script>