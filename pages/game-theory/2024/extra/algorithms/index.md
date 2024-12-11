---
prev: false
next: false
---

# Алгоритмы решения типовых задач

## Нахождение седловой точки

Находим верхнюю и нижнюю цену игры.

Нижняя цена игры $\underline{v}$: в каждой строке находим минимальные элементы и среди них выбираем наибольший.

$$
\underline{v} = \max_{x \in X} \min_{y \in Y} H(x, y).
$$

Верхняя цена игры $\overline{v}$: в каждом столбце выбираем наибольшие элементы и среди них выбираем наименьший.

$$
\overline{v} = \min_{y \in Y} \max_{x \in X} H(x, y).
$$

::: info ПРИМЕР
Проверить наличие седловой точки в игре $H = \begin{bmatrix} 4 & 6 & 3 & 5 \\ 1 & 5 & 0 & 1 \end{bmatrix}$.

*Решение.* Найдём нижнюю и верхнюю цены:

$$
\underline{v} = \max_x \min_y h_{ij} = \max \set{3, 0} = 3, ~ ~ ~ (1,3);
$$

$$
\overline{v} = \min_y \max_x h_{ij} = \min \set{4, 6, 3, 5} = 3, ~ ~ ~ (1, 3).
$$

Поскольку $\underline{v} = \overline{v} = 3$ и координаты совпадают, то данная игра имеет седловую точку в чистых стратегиях. Цена игры равна $v = 3$.
:::

### Онлайн-калькуляторы
* https://math.semestr.ru/games/sedlopoint.php
* https://linprog.com/ru/main-game-theory

## Решение матричной игры в смешанных стратегиях

## Симплекс-метод

### Онлайн-калькуляторы
* https://math.semestr.ru/simplex/simplex.php
https://programforyou.ru/calculators/simplex-method
* https://linprog.com/ru/main-simplex-method