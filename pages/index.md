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
  - title: Вариационное исчисление и оптимальное управление
    icon: <img src="/icons/chart-increasing.png" width="32" />
    link: /variations-calculus
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
  - title: Методы оптимизации
    icon: <img src="/icons/stopwatch.png" width="32" />
    link: /optimization-methods
  - title: Объектно-ориентированное программирование
    icon: <img src="/icons/package.png" width="32" />
#    details: Скоро
    link: /oop
  - title: Проектная деятельность
    link: /project-activity
    icon: <img src="/icons/ledger.png" width="32" />
  - title: Теория вероятностей и математическая статистика
    icon: 🎲
    link: /probability-theory
  - title: Теория игр и исследование операций
    icon: <img src="/icons/chess-pawn.png" width="32" />
    #details: Скоро
    link: /game-theory
  - title: Уравнения математической физики
    icon: <img src="/icons/memo.png" width="32" />
    link: /matphysics
#  - title: Физика
#    icon: ⚡
#    details: Скоро
#    #link: /physics
  - title: Функциональный анализ
    icon: <img src="/icons/infinity.png" width="32" />
    link: /functional-analysis
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