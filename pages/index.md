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
#  - title: Алгебра и аналитическая геометрия
#    icon: 📏
#    details: Скоро
#    #link: /algebra
#  - title: Архитектура и программное обеспечение вычислительных сисем
#    icon: 💻
#    details: Скоро
#    #link: /computer-science
  - title: Базы данных и экспертные системы
    icon: <img src="/icons/card-file-box.png" width="32" />
    link: /databases
#  - title: Дифференциальные уравнения
#    icon: 𝑑𝑥
#    details: Скоро
#    #link: /diffeqs
#  - title: Математический анализ
#    icon: 🔎
#    details: Скоро
#    #link: /calculus
  - title: Комплексный анализ
    icon: 𝒊
    link: /complex-analysis
  - title: Объектно-ориентированное программирование
    icon: <img src="/icons/package.png" width="32" />
#    details: Скоро
    link: /oop
#  - title: Теория вероятностей и математическая статистика
#    icon: 🎲
#    details: Скоро
#    #link: /probability-theory
  - title: Теория игр и исследование операций
    icon: <img src="/icons/chess-pawn.png" width="32" />
    #details: Скоро
    link: /game-theory
#  - title: Физика
#    icon: ⚡
#    details: Скоро
#    #link: /physics
  - title: Численные методы
    #details: 
    icon: <img src="/icons/abacus.png" width="32" />
    link: /numerical-analysis
  - title: Элементы алгебры и теории чисел
    icon: <img src="/icons/input-numbers.png" width="32" />
#    details: Скоро
    link: /number-theory
#  - icon: ❔
#    details: Скоро
#  - icon: ❔
#    details: Скоро
---

<script setup>
document.title = "УПМ Вики";
</script>

<!--<script setup>
import { VPButton } from 'vitepress/theme';
</script>

<VPButton text="123" />-->