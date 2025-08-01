---
prev: false
next: false
---

**Практическое занятие**

# Практическое занятие №1

## Пример

Упростить выражение
$$
{(1 + 3i)(8 - i) \over (2 + i)^2}.
$$

::: info Решение
$$
{(1 + 3i)(8 - i) \over (2 + i)^2}
= {8 - i + 24i - 3i^2 \over 4 + 4i + i^2}
= {8 + 23i + 3 \over 4 + 4i - 1} =
$$

$$
= {11 + 23i \over 3 + 4i} = {(11 + 23i)(3 - 4i) \over (3 + 4i)(3 - 4i)} =
$$

$$
= {33 - 44i + 69i - 92i^2 \over 9 - 16i^2} = {125 + 25i \over 25} = 5 + i.
$$

**Ответ:** $5 + i$.
:::

## Задача 1

Решить систему

$$
\begin{cases}
(1 + i) z_1 + (1 - i) z_2 = 1 + i, \\
(1 - i) z_1 + (1 + i) z_2 = 1 + 3i.
\end{cases}
$$

::: info Решение
Решим данную систему методом Крамера:

$$
\Delta = \begin{vmatrix}
1 + i & 1 - i \\
1 - i & 1 + i
\end{vmatrix} = (1 + i)^2 - (1 - i)^2 =
$$

$$
= 1 + 2i + i^2 - 1 + 2i - i^2 = 4i;
$$

$$
\Delta_1 = \begin{vmatrix}
1 + i & 1 - i \\
1 + 3i & 1 + i
\end{vmatrix} = (1 + i)^2 - (1 - i)(1 + 3i) =
$$

$$
= 1 + 2i + i^2 - (1 + 3i - i - 3i^2) =
$$

$$
= 1 + 2i - 1 - 1 - 3i + i - 3 = -4;
$$

$$
\Delta_2 = \begin{vmatrix}
1 + i & 1 + i \\
1 - i & 1 + 3i
\end{vmatrix}
= (1 + i)(1 + 3i) - (1 + i)(1 - i) =
$$

$$
= (1 + 3i + i + 3i^2) - (1 - i^2) =
$$

$$
= 1 + 3i + i - 3 - 1 - 1 = 4i - 4.
$$

Тогда решение имеет вид

$$
z_1 = {\Delta_1 \over \Delta} = {-4 \over 4i} = -{1 \over i} = -{i \over -1} = i;
$$

$$
z_2 = {\Delta_2 \over \Delta} = {4i - 4 \over 4i} = 1 - {1 \over i} = 1 + i.
$$

> Также требуется произвести проверку полученного решения, подставив его в исходную систему.

**Ответ:** $z_1 = i$, $z_2 = 1 + i$.
:::

## Задача 2

Найдите все числа, сопряжённые своему квадрату.

::: info Решение
Требуется найти такие числа $z$, что $\bar{z} = z^2$.

Поскольку $z = x + iy$, $\bar{z} = x - iy$ то преобразуем данное равенство:

$$
x - iy = (x + iy)^2;
$$

$$
x - iy = x^2 + 2ixy - y^2.
$$

Рассмотрим отдельно действительную и мнимую части:

$$
\begin{array}{rl}
\text{Re} ~ z: & x = x^2 - y^2; \\
\text{Im} ~ z: & -iy = 2ixy \implies -1 = 2x.
\end{array}
$$

Можно легко получить $x = -{1 \over 2}$. Подставим в первое уравнение и выразим $y$:

Таким образом,

$$
-{1 \over 2} = {1 \over 4} - y^2 \implies
y^2 = {1 \over 4} + {1 \over 2} \implies
$$

$$
\implies y^2 = {3 \over 4} \implies y = \pm {\sqrt{3} \over 2}.
$$

Таким образом, нашли следующие числа:

$$
z_1 = {1 \over 2} + i{\sqrt{3} \over 2}, ~ ~ ~ ~ z_2 = {1 \over 2} - i{\sqrt{3} \over 2}.
$$
:::

## Задача 3

Решить уравнение $z^2 = 5 - 12i$.

::: info Решение
Поскольку $z = x + iy$, то уравнение можно представить в виде

$$
(x + iy)^2 = 5 - 12i;
$$

$$
x^2 + 2ixy - y^2 = 5 - 12i.
$$

Отдельно рассмотрим действительную и мнимую части:

$$
\begin{cases}
x^2 - y^2 = 5, \\
2ixy = -12i;
\end{cases}
$$

$$
\begin{cases}
x^2 - y^2 = 5, \\
xy = -6.
\end{cases}
$$

$$
xy = -6 \implies x = -{6 \over y}, ~ ~ y \ne 0.
$$

$$
{36 \over y^2} - y^2 = 5;
$$

Приведём слагаемые к общему знаменателю и перенесём в одну сторону:

$$
y^4 - 5y^2 + 36 = 0.
$$

Сделаем замену: $t = y^2$ ($t > 0$). Тогда уравнение примет вид

$$
t^2 - 5t + 36 = 0.
$$

Решив его, получим следующие корни:

$$
\left[
    \begin{array}{l}
    
    \end{array}
\right.
$$
:::