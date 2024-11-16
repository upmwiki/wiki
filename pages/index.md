---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
#markdownStyles: false

hero:
  #name: "УПМ Вики"
  #text: "A VitePress Site"
  #tagline: Архив конспектов
  actions:
#     - theme: alt
#       text: О направлении
#       link: /about-fos
#     - theme: alt
#       text: Калькуляторы
#       link: /calculators

features:
  - title: Базы данных и экспертные системы
    icon: 🗃️
    link: /databases
  - title: Объектно-ориентированное программирование
    icon: 📦
    details: Скоро
    #link: /oop
  - title: Теория вероятностей и математическая статистика
    icon: 🎲
    details: Скоро
    #link: /probability-theory
  - title: Теория игр
    icon: ♟️
    details: Скоро
    #link: /game-theory
  - title: Физика
    icon: ⚡
    details: Скоро
    #link: /physics
  - title: Численные методы
    #details: 
    icon: 🔢
    link: /numerical-analysis
  - title: Элементы алгебры и теории чисел
    icon: 🔢
    details: Скоро
    #link: /number-theory
---

<script setup>
document.title = "УПМ Вики";
</script>

<!--<script setup>
import { VPButton } from 'vitepress/theme';
</script>

<VPButton text="123" />-->