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

Проверим достаточное условие. Для этого нужно выразить $\left. \text{d}^2 L \right|_M$. Также найдём дифференциал $\varphi = 0$ и выразим, например, $\text{d} y$:

$$
\begin{cases}
\varphi'_x = 2x \\
\varphi'_y = 2y
\end{cases} \implies
\text{d} \varphi = 2x ~ \text{d}x + 2y ~ \text{d}y = 0 \implies
$$

$$
\implies
\text{d}y = {-2x ~ \text{d}x \over 2y} = -{x \over y} ~ \text{d}x.
$$

Найдём дифференциал $\text{d}^2 L$:

$$
\begin{cases}
L''_{xx} = 2 \lambda \\
L''_{xy} = 0 \\
L''_{yy} = 2 \lambda
\end{cases} \implies
\text{d}^2 L = 2 \lambda ~ (\text{d}x)^2 + 2 \lambda ~ (\text{d}y)^2.
$$

Подставим сюда ранее найденное выражение для $\text{d}y$, получим:

$$
\text{d}^2 L = 2 \lambda ~ (\text{d}x)^2 + 2 \lambda ~ \left(
   -{x \over y} ~ \text{d}x
\right)^2 =
$$

$$
= 2 \lambda ~ (\text{d}x)^2 + {2 \lambda x^2 \over y^2} ~ (\text{d}x)^2
= 2 \lambda \left(
   1 + {x^2 \over y^2}
\right) ~ (\text{d}x)^2.
$$

Теперь в каждой из точек $M_1(3,4)$ и $M_2(-3,-4)$, подозрительных на экстремум, найдём значение $\text{d}^2 L$:

1. Рассмотрим точку $M_1(3,4)$ ($\lambda = 1/2$):

   $$
   \left. \text{d}^2 L \right|_{M_1}
   = 2 \cdot {1 \over 2} \cdot \left( 1 + {3^2 \over 4^2} \right) ~ (\text{d}x)^2 =
   $$

   $$
   = \left( 1 + {9 \over 16} \right) ~ (\text{d}x)^2
   = {25 \over 16} ~ (\text{d}x)^2.
   $$

   Поскольку коэффициент $A = {25 \over 16} > 0$, то $M_1$ — условный минимум.

1. Рассмотрим точку $M_2(-3,-4)$ ($\lambda = -1/2$):

   $$
   \left. \text{d}^2 L \right|_{M_2}
   = 2 \cdot \left( -{1 \over 2} \right) \cdot \left( 1 + {(-3)^2 \over (-4)^2} \right) ~ (\text{d}x)^2 =
   $$

   $$
   = - \left( 1 + {9 \over 16} \right) ~ (\text{d}x)^2
   = -{25 \over 16} ~ (\text{d}x)^2.
   $$

   Поскольку коэффициент $A = -{25 \over 16} < 0$, то $M_2$ — условный максимум.

**Ответ:** $M_1(3,4)$ — условный минимум, $M_2(-3,-4)$ — условный максимум.
:::

## Задача №2

Каковы должны быть размеры консервной банки цилиндрической формы, чтобы на изготовление банки пошло наименьшее количество материала, если объём банки равен 500 см³?

::: info Решение
Формализуем данную задачу. Известно, что объём банки цилиндрической формы равен 500 см³:

$$
V = \pi r^2 h = 500,
$$

а также площадь её поверхности (боковая сторона + два круга) должна быть минимальной:

$$
S = 2 \pi r h + 2 \cdot \pi r^2 \to \text{min}.
$$

Таким образом, получаем следующую задачу:

$$
\begin{cases}
z = 2 \pi r h + 2 \pi r^2 \to \text{min}, \\
\varphi = \pi r^2 h - 500 = 0.
\end{cases}
$$

Перейдём к решению данной задачи. Составим лагранжиан:

$$
L = z + \lambda \varphi = \left( 2 \pi r h + 2 \pi r^2 \right) + \lambda \left( \pi r^2 h - 500 \right).
$$

Проверим необходимое условие экстремума. Для этого составим следующую систему и решим её:

$$
\begin{cases}
L'_r = 2 \pi h + 4 \pi r + 2 \lambda \pi r h = 0, \\
L'_h = 2 \pi r + \lambda \pi r^2 = 0, \\
\pi r^2 h - 500 = 0.
\end{cases}
$$

Преобразуем, поделив первое уравнение на $2 \pi$, а второе — на $\pi$:

$$
\begin{cases}
h + 2 r + \lambda r h = 0, \\
2 r + \lambda r^2 = 0, \\
\pi r^2 h - 500 = 0.
\end{cases}
$$

Разложим второе уравнение на множители:

$$
r \left(2 + \lambda r \right) = 0.
$$

Таким образом, получаем два случая: либо $r = 0$ либо $r = -{2 \over \lambda}$. Первый случай не подходит, так как при нём $\varphi = 0 \ne 500$. Рассмотрим второй случай.

Подставим выражение $r = -{2 \over \lambda}$ в первое уравнение системы:

$$
h + 2 \cdot \left( -{2 \over \lambda} \right) + \lambda \left( -{2 \over \lambda} \right) h = 0;
$$

$$
h - 4 \cdot {1 \over \lambda} - 2h = 0;
$$

$$
4 \cdot {1 \over \lambda} + h = 0;
$$

$$
h = - {4 \over \lambda}.
$$

Заметим, что таким образом $h = 2r$.

Подставим полученные выражения для $r$ и $h$ в третье уравнение:

$$
\pi \cdot \left(
   - {2 \over \lambda}
\right)^2 \cdot \left( -{4 \over \lambda} \right) - 500 = 0;
$$

$$
- 4 \pi \cdot {4 \over \lambda^3} = 500;
$$

$$
-{16 \pi \over \lambda^3} = 500;
$$

$$
\lambda^3 = -{16 \pi \over 500} ~ ~ \left(= {8 \pi \over 250}\right);
$$

$$
\lambda = \sqrt[3]{ -{ 8 \pi \over 250 } } = -{2 \sqrt[3]{\pi} \over 5 \sqrt[3]{2}}.
$$

Используя полученное значение $\lambda$, вычислим значения $r$ и $h$:

$$
r
= { 2 \cdot 5 \sqrt[3]{2} \over 2 \sqrt[3]{\pi} }
= {5 \sqrt[3]{2} \over \sqrt[3]{\pi}};
$$

$$
h
= 2r
= {10 \sqrt[3]{2} \over \sqrt[3]{\pi}}.
$$

Таким образом, получили точку $M\left( {5 \sqrt[3]{2} \over \sqrt[3]{\pi}}, {10 \sqrt[3]{2} \over \sqrt[3]{\pi}} \right)$, подозрительную на экстремум.

Проверим достаточное условие. Для этого нужно выразить Найдём $\text{d} \varphi = 0$ и $\text{d}^2 L$:

$$
\begin{cases}
\varphi'_r = 2 \pi r h = 0, \\
\varphi'_h = \pi r^2 = 0
\end{cases} \implies
\text{d} \varphi = 2 \pi r h ~ \text{d}r + \pi r^2 ~ \text{d}h = 0
\implies
$$

$$
\implies
\text{d}h = {-2 \pi r h ~ \text{d}r \over \pi r^2} ~
\left( \text{d}h = -{2h \over r} ~ \text{d}r = -4 ~ \text{d}r \right)
$$

Найдём дифференциал $\text{d}^2 L$:

$$
\begin{cases}
L''_{rr} = 4 \pi + 2 \lambda \pi h \\
L''_{rh} = 2 \pi + 2 \lambda \pi r \\
L''_{hh} = 0
\end{cases} \implies
$$

$$
\implies
\text{d}^2 L = (4 \pi + 2 \lambda \pi h) ~ (\text{d}r)^2 + 2 \cdot (2\pi + 2 \lambda \pi r) ~ \text{d}r \text{d}h;
$$

$$
\text{d}^2 L
= 2 \pi (2 + \lambda h) ~ (\text{d}r)^2 + 4 \pi (1 + \lambda r) ~ \text{d}r \text{d}h.
$$

Подставим $\lambda = -{2 \over r}$ и $h = 2r$:

$$
\left. \text{d}^2 L \right|_M
= 2 \pi \left(2 - 4\right) ~ (\text{d}r)^2 + 4 \pi (1 - 2) ~ \text{d}r \text{d}h;
$$

Подставим $\text{d}h = - 4 ~ \text{d}r$:

$$
\left. \text{d}^2 L \right|_M
= -4 \pi ~ (\text{d}r)^2 - 4\pi \cdot (-4) ~ (\text{d}r)^2;
$$

$$
\left. \text{d}^2 L \right|_M
( -4\pi + 16\pi ) ~ (\text{d}r)^2;
$$

$$
\left. \text{d}^2_L \right|_M
= 12 \pi ~ (\text{d}r)^2.
$$

Коэффициент $A = 12 \pi > 0$, следовательно, точка $M$ доставляет условный минимум.

**Ответ:** $M\left( {5 \sqrt[3]{2} \over \sqrt[3]{\pi}}, {10 \sqrt[3]{2} \over \sqrt[3]{\pi}} \right)$ — условный минимум.
:::