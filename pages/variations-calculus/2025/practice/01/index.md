---
prev: false
next: false
---

**Практическое занятие**

# Условный экстремум функции нескольких переменных

<!-- Начало теоретической части -->

Обычный экстремум:

$$
u(x,y) \to \text{extr}
$$

Условный экстремум:

$$
\begin{cases}
u(x, y) \to \text{extr} \\
\varphi(x, y) = 0
\end{cases}
$$

**Метод множителей Лагранжа:**

1. Вводится лагранжиан

   $$
   L = u + \lambda \varphi,
   $$
   
   где $\lambda$ — это *множитель Лагранжа*, который нужно найти.

2. Проверяется необходимое условие экстремума:

   $$
   \begin{cases}
   L'_x = 0 \\
   L'_y = 0 \\
   \varphi = 0
   \end{cases}
   $$

3. Достаточное условие экстремума: пусть нашли точку $M$, подозрительную на экстремум.

   Дифференциал лагранжиана:
   $$
   \text{d}^2 L = L''_{xx} ~ (\text{d}x)^2 + 2 L''_{xy} ~ \text{d}x \text{d}y + L''_{yy} ~ (\text{d}y)^2.
   $$

   Продифференцируем $\varphi = 0$:

   $$
   \text{d}\varphi = \varphi'_x ~ \text{d}x + \varphi'_y ~ \text{d}y = 0.
   $$

   Подставим в $M$:

   $$
   \left.\text{d}\varphi \right|_M = \left.\varphi'_x\right|_M ~ \text{d}x + \left.\varphi'_y\right|_M ~ \text{d}y = 0.
   $$

   Выразим $\text{d}y$ через $\text{d}x$ и подставим в дифференциал Лагранжиана:

   $$
   \left.\text{d}^2 L\right|_M = A ~ (\text{d}x)^2.
   $$

   Проверим знак $A$:

   * если $A > 0$, то $M$ — минимум;
   * если $A = 0$, то $M$ — максимум.

<!-- Конец теоретической части -->

## Задача №1

Найти условный экстремум функции $z = 5 - 3x - 4y$ при условии $x^2 + y^2 = 25$.

::: info Решение
Запишем задачу в виде системы:

$$
\begin{cases}
z = 5 - 3x - 4y \to \text{extr} \\
\varphi = x^2 + y^2 - 25 = 0
\end{cases}
$$

Составим лагранжиан:

$$
L = z + \lambda \varphi = 5 - 3x - 4y + \lambda \left(
    x^2 + y^2 - 25
\right).
$$

Проверим необходимое условие экстремума. Для этого составим следующую систему и решим её:

$$
\begin{cases}
L'_x = -3 + 2 \lambda x = 0 \\
L'_y = -4 + 2 \lambda y = 0 \\
x^2 + y^2 - 25 = 0
\end{cases}
$$

Из первых двух уравнений выразим $x$ и $y$:

$$
x = {3 \over 2 \lambda}, ~ ~ ~ ~ y = {4 \over 2 \lambda} = {2 \over \lambda}.
$$

Подставим данные выражения в третье уравнение:

$$
\left({3 \over 2 \lambda}\right)^2 + \left({2 \over \lambda}\right)^2 - 25 = 0
\implies
$$

$$
\implies
{9 \over 4 \lambda^2} + {4 \over \lambda^2} - 25 = 0
\implies
$$

$$
\implies
{25 \over 4\lambda^2} - 25 = 0
\implies
{1 \over 4 \lambda^2} - 1 = 0
\implies
$$

$$
\implies 4 \lambda^2 = 1 \implies \lambda^2 = {1 \over 4} \implies
\left[
\begin{array}{l}
\lambda_1 = 1/2, \\
\lambda_2 = -1/2.
\end{array}
\right.
$$

1. При $\lambda = 1/2$ получаем точку с координатами
   
   $$
   \begin{cases}
   \displaystyle x = {3 \over 2 \cdot {1 \over 2}} = 3, \\
   \displaystyle y = {2 \over {1 \over 2}} = 4
   \end{cases}
   \implies M_1 (3, 4).
   $$

2. При $\lambda = -1/2$ получаем точку с координатами

   $$
   \begin{cases}
   \displaystyle x = {3 \over 2 \cdot \left(-{1 \over 2}\right)} = -3, \\
   \displaystyle y = {2 \over -{1 \over 2}} = -4
   \end{cases}
   \implies M_2 (-3, -4).
   $$

Таким образом, получили точки $M_1(3, 4)$ и $M_2(-3, -4)$, подозрительные на экстремум.

Проверим достаточное условие:

1. 
:::