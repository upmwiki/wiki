---
prev: false
next: false
---

**Практическое занятие**

# Условный экстремум функций нескольких переменных

Обычный экстремум: $u(x, y) \to \text{extr}$.

Условный экстремум:

$$
\begin{cases}
u(x,y) \to \text{extr} \\
\varphi(x, y) = 0.
\end{cases} \tag{∗}
$$

Метод множителей Лагранжа:

$$
L = u + \lambda \varphi,
$$

где $L$ — лагранжиан, а $\lambda$ — множитель Лагранжа — нужно найти.

1. Необходимое условие экстремума:

   $$
   \begin{cases}
   L'_x = 0, \\
   L'_y = 0, \\
   \varphi = 0.
   \end{cases}
   $$

2. Достаточное условие экстремума: пусть нашли точку $M$, подозрительную на экстремум.

   $$
   \text{d}^2 L = L''_{xx} (\text{d}x)^2 + 2 L''_{xy} \text{d}x\text{d}y + L''_{yy} (\text{d}y)^2. \tag{∗∗}
   $$

   Продифференцируем $(∗)$:

   $$
   \text{d}\varphi = \varphi'_x \text{d}x + \varphi'_y \text{d}y = 0.
   $$

   Подставим в $M$:

   $$
    \text{d}\varphi \bigg\vert_M = \varphi'_x \bigg\vert_M \text{d}x + \varphi'_y \bigg\vert_M \text{d}y = 0.
   $$

   Выразим $\text{d}y$ через $\text{d}x$ и подставим в $(∗∗)$:

   $$
   \text{d}^2 L \bigg\vert_M = A(\text{d}x)^2.
   $$

   * Если $A > 0$, то $M$ — минимум;
   * Если $A < 0$, то $M$ — максимум.

::: info Задача 1
Найти условный экстремум функции $z = 5 - 3x - 4y$ при условии $x^2 + y^2 = 25$.

$$
\begin{cases}
z = 5 - 3x - 4y \to \text{extr} \\
x^2 + y^2 = 25.
\end{cases}
$$

*Решение.* Составим лагранжиан:

$$
L = 5 - 3x - 4y + \lambda \left( x^2 + y^2 - 25 \right).
$$

Составим систему:

$$
\begin{cases}
L'_x = -3 + 2\lambda x = 0, \\
L'_y = -4 + 2\lambda y = 0, \\
x^2 + y^2 - 25 = 0.
\end{cases}
$$

Выразим $x$ и $y$:

$$
\begin{cases}
x = {3 \over 2\lambda}, \\
y = {2 \over \lambda}, \\
{9 \over 4\lambda^2} + {4 \over \lambda^2} - 25 = 0.
\end{cases}
$$

$$
{25 \over 4\lambda^2} - 25 = 0 \implies {1 \over 4\lambda^2 - 1} = 0 \implies
$$

$$
\implies 4\lambda^2 = 1 \implies \lambda^2 = {1 \over 4} \implies \left[
    \begin{array}{l}
    \lambda_1 = {1 \over 2}, \\
    \lambda_2 = -{1 \over 2}.
    \end{array}
\right.
$$

Для каждого из значений $\lambda_1$ и $\lambda_2$ вычислим $x$ и $y$:

* $\lambda_1 = {1 \over 2}$: $~x = {3 \over 2\lambda = 3}, y = {2 \over \lambda} = 4 \implies M_1(3,4).$
* $\lambda_2 = -{1 \over 2}$: $~x = -3, y = -4 \implies M_2(-3, -4)$.

Достаточное условие:

$$
\varphi'_x = 2x, ~ ~ ~ \varphi'_y = 2y.
$$

$$
\text{d}\varphi = 2x ~ \text{d}x + 2y ~ \text{d}y = 0.
$$

$$
\text{d}y = -{2x ~ \text{d}x \over 2y} = -{x \over y} ~ \text{d}x.
$$

1. $\text{d}y \bigg\vert_{M_1} = -{3 \over 4} ~ \text{d}x$.

   $$
   L''_{1xx} = 2\lambda, ~ ~ L''_{1xy} = 0, ~ ~ L''_{1yy} = 2\lambda.
   $$

   $$
   \text{d}^2 L_1 = 2\lambda (\text{d}x)^2 + 2\lambda (\text{d}y)^2.
   $$

   $$
   \text{d}^2 L_1 \bigg\vert_{M_1} = (\text{d}x)^2 + (\text{d}y)^2 = (\text{d}x)^2 + \left( -{3 \over 4} \text{d}x \right)^2 =
   $$
   $$
   = \left(1 + {9 \over 16}\right) (\text{d}x)^2 = {25 \over 16} (\text{d}x)^2.
   $$

   $A = {25 \over 16} > 0$, следовательно $M_1$ является условным минимумом.

2. $\text{d}y \bigg\vert_{M_2} = -{3 \over 4} ~ \text{d}x$.

   $$
   \text{d}^2 L_1 \bigg\vert_{M_2} = -(\text{d}x)^2 - {9 \over 16} (\text{d}x)^2 = -{25 \over 16} (\text{d}x)^2.
   $$

   $A = -{25 \over 16} < 0$, следовательно $M_2$ является условным максимумом.
:::

::: info Задача 2
Каковы должны быть размеры консервной банки цилиндрической формы, чтобы на изготовление банки пошло наименьшее количество материала, если объём банки равен 500 см³?

*Решение.* Составим систему:

$$
\begin{cases}
V = \pi r^2 h = 500, \\
S = 2\pi r h + 2 \pi r^2 \to \min.
\end{cases}
$$

$$
L = 2\pi r^2 + 2\pi r h + \lambda(\pi r^2 h - 500).
$$

$$
\begin{cases}
L'_r = 4\pi r + 2\pi h + 2\lambda \pi r h = 0, \\
L'_h = 2\pi r + \lambda \pi r^2 = 0, \\
\pi r^2 h - 500 = 0.
\end{cases}
$$

$$
\begin{cases}
2r + h + \lambda r h = 0, \\
2r + \lambda r^2 = 0, \\
\pi r^2 h - 500 = 0.
\end{cases}
$$

Разложим второе уравнение на множители:

$$
r(2 + \lambda r) = 0.
$$

Здесь есть два случая: либо $r = 0$ либо $r = -{2 \over \lambda}$. Первый случай не подходит, поскольку противоречит условию. Таким образом, рассмотрим второй случай.

Подставим $r = -{2 \over \lambda}$ в первое уравнение:

$$
2 \cdot -{2 \over \lambda} + h + \lambda h \cdot -{2 \over \lambda} = 0.
$$

$$
-{4 \over \lambda} + h - 2h = 0;
$$

$$
-{4 \over \lambda} - h = 0;
$$

$$
h = -{4 \over \lambda}.
$$

Подставим в третье уравнение:

$$
\pi \cdot {4 \over \lambda^2} \cdot \left(-{4 \over \lambda}\right) = 500;
$$

$$
-16\pi \cdot {1 \over \lambda^3} = 500;
$$

$$
\lambda^3 = -{16 \pi \over 500} = -{8 \pi \over 250};
$$

$$
\lambda = \sqrt[3]{-8\pi \over 250} = -{2 \sqrt[3]{\pi} \over 5 \sqrt[3]{2}};
$$

$$
r = {2 \cdot 5 \sqrt[3]{2} \over 2\sqrt[3]{\pi}} = {5 \sqrt[3]{2} \over \sqrt[3]{\pi}};
$$

$$
h = {2 \cdot 5 \sqrt[3]{2} \over \sqrt[3]{\pi}}. ~ ~ ~ (h = 2r)
$$

Таким образом, получили точку $M\left({5 \sqrt[3]{2} \over \sqrt[3]{\pi}}, {10 \sqrt[3]{2} \over \sqrt[3]{\pi}}\right)$.

Достаточное условие:

$$
\begin{array}{c}
L''_{rr} = 4\pi + 2\lambda \pi h \\
L''_{rh} = 2 \pi + 2\lambda \pi r \\
L''_{hh} = 0
\end{array}
$$

$$
\text{d}^2 L = (4\pi + 2\lambda \pi h) (\text{d}r)^2 + (2\pi + 2\lambda \pi r)(\text{d}r \text{d}h).
$$

$$
\text{d}^2 L \bigg\vert_M = \set{\lambda = -{2 \over r}, h = 2r} = (4\pi - 8\pi) (\text{d}r)^2 + 2(2\pi - 4\pi) (\text{d}r \text{d}h) =
$$
$$
= -4\pi (\text{d}r)^2 = -4\pi ~ \text{d}r \text{d}h.
$$

$$
\text{d}\varphi = 2\pi rh ~ \text{d}r + \pi r^2 ~ \text{d}h = 0 \implies \text{d}h = -{2h ~ \text{d}r \over r} = -4 ~ \text{d}r.
$$

$$
\text{d}^2 L \bigg\vert_M = -4\pi (\text{d}r)^2 + 16\pi (\text{d}r)^2 = 12\pi (\text{d}r)^2.
$$

$12\pi > 0$, следовательно $M$ является условным минимумом.
:::