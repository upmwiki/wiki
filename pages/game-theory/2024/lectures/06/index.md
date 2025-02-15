---
prev:
    text: 5. Задача линейного программирования
    link: ../05
next:
    text: 7. Решение матричных игр 2×2, 2×n, m×2
    link: ../07
---

**Лекция 6**


# Редукция игры

В сегодняшней лекции мы широко будем использовать теорему из прошлой лекции, поэтому напомним её.

::: info ТЕОРЕМА
Для матричной игры $\Gamma_A$ справедливо следующее соотношение

$$
\max_x \min_j H(x, j) = v_a = \min_y \max_i H(i, y),
$$

причём экстремумы по смешанным стратегиям $x$ и $y$ достигаются на оптимальных стратегиях игроков.
:::

Это значит, в частности, что если $x^*$ и $y^*$ — оптимальные стратегии игроков 1 и 2 соответственно, то

$$
\begin{matrix}
\min\limits_j H(x^*, j) = \min\limits_j x^* a^j, \\
\max\limits_i H(i, y^*) = \max\limits_i a^i y^*.
\end{matrix}
$$

Напомним, что $a^j$ — вектор-столбец, а $a^i$ — вектор-строка матрицы игры $A$. В соответствии с этим

$$
\begin{matrix}
xa^j = \xi_1 a_{1j} + \xi_2 a_{2j} + \cdots + \xi_m a_{mj}, \\
a_i y = \eta_1 a_{i1} + \eta_2 a_{i2} + \cdots + \eta_n a_{in}.
\end{matrix}
$$

## Доминирование стратегий

::: info ОПРЕДЕЛЕНИЕ (Доминирующая стратегия)
Стратегия $x'$ игрока 1 доминирует стратегию $x''$ в $(m \times n)$-игре $\Gamma_A$, если для всех чистых стратегий $j \in \set{1, ..., n}$ игрока 2 выполняются неравенства:

$$
x' a^j \ge x'' a^j.
$$
:::

Аналогично, стратегия $y'$ игрока 2 доминирует его же стратегию $y''$, если $\forall i \in \set{1, ..., m}$ игрока 1:

$$
a_i y' \le a_i y''.
$$

При строгих знаках неравенства это строгое доминирование.

::: info ОПРЕДЕЛЕНИЕ (Эквивалентные стратегии)
Стратегии $x'$ и $x''$ игрока 1 называются эквивалентными (обозначается $x' \sim x''$) в игре $\Gamma_A$, если $\forall j \in \set{1, ..., n}$

$$
x' a^j = x'' a^j.
$$
:::

Для двух эквивалентных стратегий выполняется

$$
H(x', y) = H(x'', y).
$$

## Доминируемые стратегии

::: info ОПРЕДЕЛЕНИЕ (Доминируемая стратегия)
Стратегия $x''$ ($y''$) игрока 1 (2) доминируема, если существует стратегия $x' \ne x''$ ($y' \ne y''$) этого игрока, которая доминирует $x''$ ($y''$). В противном случае стратегия $x''$ ($y''$) недоминируема.
:::

Аналогично вводится понятие строго доминируемой стратегии (см. строгое доминирование).

:::: info ТЕОРЕМА
Если в игре $\bar{\Gamma}_A$ стратегия $x'$ одного из игроков доминирует оптимальную стратегию, то стратегия $x'$ также оптимальна.

::: info Доказательство
Из условия доминирования $\forall j = \overline{1, n} : x' a^j \ge x^* a^j$, а из условия оптимальности стратегии $x^*$ $\forall j = \overline{1,n}$:

$$
v_A = \min_j x^* a^j \ge \min_j x' a^j \ge \min_j x^* a^j = v_A.
$$

Следовательно, стратегия $x'$ тоже оптимальна. $~~\blacksquare$
:::

::::

:::: info ТЕОРЕМА
Если в игре $\bar{\Gamma}_A$ стратегия $x^*$ одного из игроков оптимальна, то $x^*$ — недоминируема строго.

::: info Доказательство
Пусть $x^*$ — строго доминируема, т. е. $\exists x' \in X: x' a^j > x^* a^j$, $\forall j = \overline{1,n}$. Отсюда следует:

$$
\min_j x' a^j > \min_j x^* a^j.
$$

Но в силу оптимальности $x^* \in X$ выполняется

$$
\min_j x^* a^j = v_A.
$$

Тогда, согласно нашему предположению, выполняется строгое неравенство

$$
\max_x \min_j xa^j > v_A,
$$

что противоречит тому, что $v_A$ — цена игры. Противоречие. $~~\blacksquare$

Обратное утверждение неверно.
:::

::::

## Теорема о доминировании

::: info ОПРЕДЕЛЕНИЕ (Расширение стратегии на $i$-м месте)
Если $x = (\xi_1, \xi_2, ..., \xi_m) \in X$ и $1 \le i \le m+1$, то расширением стратегии $x$ на $i$-м месте будем называть вектор $\bar{x}_i = (\xi_1, ..., \xi_{i-1}, 0, \xi_i, ..., \xi_m) \in \mathbb{R}^{m+1}$.

Например, расширением вектора $\left( {1 \over 3}, {2 \over 3}, {1 \over 3} \right)$ на 2-м месте является вектор $\left( {1 \over 3}, 0, {2 \over 3}, {1 \over 3} \right)$.
:::


:::: info ТЕОРЕМА (о доминировании)
Пусть $\Gamma_A$ — матричная игра с матрицей $A$ размера $(m \times n)$. Предположим, что $i$-я строка матрицы $A$ доминируема (т. е. доминируема чистая стратегия $i$ первого игрока) и пусть $\Gamma_{A'}$ — игра с матрицей $A'$, получаемой из $A$ вычёркиванием $i$-й строки. Тогда справедливы следующие утверждения:

1. $v_A = v_{A'}$
2. Всякая оптимальная стратегия $y^*$ игрока 2 в игре $\Gamma_{A'}$ является оптимальной и в игре $\Gamma_A$.
3. Если $x^*$ — произвольная оптимальная стратегия игрока 1 в игре $\Gamma_{A'}$, и $\bar{x}^*_i$ — расширение стратегии $x^*$ на $i$-м месте, то $\bar{x}^*_i$ — оптимальная стратегия этого игрока в игре $\Gamma_A$.
4. Если $i$-я строка матрицы $A$ строго доминируема, то произвольная оптимальная стратегия $\bar{x}^*$ игрока 1 в игре $\Gamma_A$ может быть получена из некоторой оптимальной стратегии $x^*$ в игре $\Gamma_{A'}$ расширением на $i$-м месте.

::: info Доказательство
Пусть доминируемой является последняя $m$-я строка (это не нарушает общности) и $x = (\xi_1, ..., \xi_m)$ — смешанная стратегия, которая доминирует строку $m$. Если $\xi_m = 0$, то из условия доминирования $\forall j = \overline{1, n}$ получим

$$
xa^j = \sum_{i=1}^m \xi_i a_{ij} = \sum_{i=1}^{m-1} \xi_i a_{ij} \ge a_{mj},
$$

$$
\sum_{i=1}^{m-1} \xi_i = 1, ~ ~ \xi_i \ge 0, ~ ~ i = \overline{1, m-1}.
$$

Если же $\xi_m > 0$, то рассмотрим вспомогательный вектор $x' = (\xi'_1, ..., \xi'_m)$, в котором

$$
\xi'_i = \begin{cases}
{\xi_i \over 1 - \xi_m}, & i \ne m, \\
0, & i = m.
\end{cases}
$$

Компонены $x'$ неотрицательны, $\forall i = \overline{1,m}: \xi'_i \ge 0$ и $\sum\limits_{i=1}^m \xi'_i = 1$. В то же время для всех столбцов $j = \overline{1,n}$ из условия $xa^j = \sum\limits_{i=1}^m \xi_i a_{ij} \ge a_{mj}$ имеем

$$
{1 \over 1 - \xi_m} \sum_{i=1}^m \xi_i a_{ij} \ge a_{mj} {1 \over 1 - \xi_m} \sum_{i=1}^m \xi_i \implies
$$

$$
\implies \sum_{i=1}^{m-1} {\xi_i \over 1 - \xi_m} a_{ij} \ge a_{mj} \sum_{i=1}^{m-1} {\xi_i \over 1 - \xi_m}.
$$

Получаем таким образом

$$
\sum_{i=1}^{m-1} \xi'_i a_{ij} \ge a_{mj} \sum_{i=1}^{m-1} \xi'_i = a_{mj}, ~ ~ ~ j = \overline{1, n}.
$$

В результате получается, что из доминирования $m$-й строки всегда следует, что она не превосходит выпуклую комбинацию остальных $m-1$ строк.

Пусть $(x^*, y^*) \in Z(\Gamma_{A'})$ — ситуация равновесия в игре $\Gamma_{A'}$, $x^* = (\xi^*_1, ..., \xi^*_{m-1})$, $y^* = (\eta^*_1, ..., \eta^*_n)$. Для доказательства утверждений 1-3 достаточно показать, что $H(\bar{x}^*_m, y^*) = v_{A'}$ и

$$
\sum_{j=1}^n a_{ij} \eta^*_j \le v_{A'} \le \sum_{i=1}^{m-1} a_{ij} \xi^*_i + 0 \cdot a_{mj}.
\tag{1}
$$

Первое очевидно ($\xi^*_m = 0$). По второму. Из оптимальности $(x^*, y^*)$ следует

$$
\sum_{j=1}^n a_{ij} \eta^*_j \le v_{A'} \le \sum_{i=1}^{m-1} a_{ij} \xi^*_i, ~ ~ ~ i=\overline{1,m-1}, ~ ~ j = \overline{1,n}.
$$

Отсюда сразу следует правая часть неравенства (1).

Докажем теперь левую часть неравенства. Для этого достаточно показать, что

$$
\sum_{j=1}^n a_{mj} \eta^*_j \le v_{A'}.
$$

Справедливость этого утверждения следует из цепочки неравенств:

$$
\sum_{j=1}^n a_{mj} \eta^*_j \le \sum_{j=1}^n \sum_{i=1}^{m-1} a_{ij} \xi'_i \eta^*_j \le \sum_{i=1}^{m-1} v_{A'} \xi'_i = v_{A'}.
$$

Осталось доказать утверждение 4 теоремы. В случае строгого доминирования $m$-й строки, неравенства выполняются как строгие:

$$
\sum_{i=1}^{m-1} \xi_i a_{ij} > a_{mj}, ~ ~ ~
\sum_{i=1}^{m-1} \xi'_i a_{ij} > a_{mj}.
$$

Тогда

$$
\sum_{j=1}^n a_{mj} \eta^*_j < \sum_{j=1}^n \sum_{i=1}^{m-1} a_{ij} \xi'_i \eta^*_j \le v_{A'}.
$$

Т.о. у любой оптимальной стратегии игрока 1 $m$-я компонента равна нулю. Теорема доказана.
:::

::::

## Теорема о доминировании, формулировка для второго игрока

::: info ТЕОРЕМА
Пусть $\Gamma_A$ — матричная игра с матрицей $A$ размера $(m \times n)$. Предположим, что $j$-й столбец матрицы $A$ доминируем (т. е. доминируема чистая стратегия $j$ второго игрока) и пусть $\Gamma_{A'}$ — игра с матрицей $A'$, получаемой из $A$ вычёркиванием $j$-го столбца. Тогда справедливы следующие утверждения:

1. $v_A = v_{A'}$
2. Всякая оптимальная стратегия $x^*$ игрока 1 в игре $\Gamma_{A'}$ является оптимальной и в игре $\Gamma_A$.
3. Если $y^*$ — произвольная оптимальная стратегия игрока 2 в игре $\Gamma_{A'}$ и $\bar{y}^*_j$ — расширение стратегии $y^*$ на $j$-м месте, то $\bar{y}^*_j$ — оптимальная стратегия игрока 2 в игре $\Gamma_A$.
4. Если $j$-й столбец матрицы $A$ строго доминируем, то произвольная оптимальная стратегия $\bar{y}^*$ игрока 2 в игре $\Gamma_A$ может быть получена из некоторой оптимальной стратегии $y^*$ в игре $\Gamma_{A'}$ расширением на $j$-м месте.
:::

## Пример

::: info ПРИМЕР
Рассмотрим игру с матрицей

$$
A = \begin{bmatrix}
2 & 1 & 1 & 0 \\
2 & 3 & 1 & 3 \\
3 & 1 & 2 & 0 \\
0 & 3 & 0 & 6
\end{bmatrix}.
$$

Видно, что $a_3 \ge a_1$, поэтому можно убрать первую строку:

$$
A_1 = \begin{bmatrix}
2 & 3 & 1 & 3 \\
3 & 1 & 2 & 0 \\
0 & 3 & 0 & 6
\end{bmatrix}.
$$

Теперь $a^1 \ge a^3$, поэтому мы вычёркиваем первый столбец ($a^1 \ge a^3$ означает хуже для игрока 2):

$$
A_2 = \begin{bmatrix}
3 & 1 & 3 \\
1 & 2 & 0 \\
3 & 0 & 6
\end{bmatrix}
$$

Теперь в этой матрице нет доминируемых строк или столбцов. Но зато столбец $a^1$ превосходит выпуклую комбинацию $a^2$ и $a^3$, т. к.

$$
a^1 \ge {1 \over 2} a^2 + {1 \over 2} a^3.
$$

Исключаем первый столбец и получаем

$$
A_3 = \begin{bmatrix}
1 & 3 \\
2 & 0 \\
0 & 6
\end{bmatrix}.
$$

В полученной матрице 1-я строка эквивалентна смешанной стратегии $x = \left( 0, {1 \over 2}, {1 \over 2} \right)$, ибо

$$
1 = {1 \over 2} \cdot 2 = 0 \cdot {1 \over 2}, ~ ~ ~ 3 = 0 \cdot {1 \over 2} + 6 \cdot {1 \over 2}.
$$

Исключая первую строку, придём к матрице

$$
A_4 = \begin{bmatrix}
2 & 0 \\
0 & 6
\end{bmatrix}.
$$

Здесь $x^* = y^* = \left({3 \over 4}, {1 \over 4}\right)$, цена игры $v_A = {3 \over 2}$. Расширения указанных стратегий на 1-м и 2-м местах: $\bar{x}^*_{12} = \bar{y}^*_{12} = \left(0, 0, {3 \over 4}, {1 \over 4}\right)$.
:::