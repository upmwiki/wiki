---
prev: false
next: false
---

**Практическое занятие**

# Натуральный НОД

<Badge type="info" style="margin: 1rem 0 1.5rem 0">Не завершено</Badge>

**Натуральный НОД** чисел $a$ и $b$ будем обозначать так:

$$
d = (a; b).
$$

Можно доказать, что:
* НОД можно найти для любых двух ненулевых целых чисел;
* НОД единственен с точностью до знака,

откуда следует, что любая пара целых чисел, отличных от нуля, имеет единственный положительный НОД.

::: info ПРИМЕР
Найти НОД чисел 132 и -550, выписав все положительные общие делители этих чисел.

*Решение.*

$$
\begin{array}{r|l}
132 & 2 \\
66 & 2 \\
33 & 3 \\
11 & 11 \\
1 & 
\end{array}
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
\begin{array}{r|l}
550 & 5 \\
110 & 11 \\
10 & 5 \\
2 & 2 \\
1
\end{array}
$$

Таким образом, $d(132; -550) = 2 \cdot 11 = 22$.
:::

Практический способ отыскания НОД двух натуральных чисел называют **алгоритмом Евклида**.

Пусть даны два натуральных числа $a$ и $b$, причём $b \ne 0$. Будем выполнять последовательно деление с остатком.

Сначала разделим $a$ на $b$ (считаем $a > b$). Получим

$$
a = bq_1 + r_1,
$$

где $0 \le r_1 < b$.

Если $r_1 = 0$, то $a ~ \small \vdots \normalsize ~ b$ и $d = (a;b)$.

Предположим, что $r_1 \ne 0$. Тогда на него можно разделить с остатком число $b$. Получим

$$
b = r_1 q_2 + r_2,
$$

где $0 \le r_2 < r_1$.

Если $r_2 \ne 0$, то на него можно разделить с остатком $r_1$:

$$
r_1 = r_2 q_3 + r_3,
$$

где $0 \le r_3 < r_2$.

Аналогично, если $r_3 \ne 0$:

$$
r_2 = r_3 q_4 + r_4,
$$
где $0 \le r_4 < r_3$, и так далее.

Рано или поздно мы получим нулевой остаток.

Пусть $r_k$ ещё не равно нулю, а $r_{k+1}$ — равно (т. е. $r_k \ne 0$, $r_{k+1} = 0$). Тогда

$$
\begin{array}{ll}
r_{k-2} = r_{k-1} q_k + r_k, & & (0 \le r_k < r_{k-1}) \\
r_{k-1} = r_k q_{k+1}. & 
\end{array}
$$

Тогда $r_k$ — НОД $a$ и $b$.