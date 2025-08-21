---
prev: false
next: false
---

# № 2.8

## Условие

Решить задачи 2.1—2.20.

$$
4x + 3y \to \text{extr}; ~ ~ x^2 + y^2 = 1.
$$

## Ответ

::: details Ответ из задачника
$$
(-4/5, -3/5) \in \text{abs min}, ~ ~ ~ (4/5, 3/5) \in \text{abs max},
$$

$$
S_\max = -S_\min = 5.
$$
:::

## Решения

### Решение №1

<!--::: details Теория
**Теорема 1.** *Пусть $f$ — функция одного переменного, определённая в некотором интервале, содержащем точку $\hat{x}$, и дважды дифференцируемая в точке $\hat{x}$.*

**Необходимые условия экстремума.** *Если $\hat{x}$ есть точка локального минимума (максимума) функции $f$, то*

$$
f'(\hat{x}) = 0, ~ ~ ~ f''(\hat{x}) \ge 0 ~ ~ ~ (f'' (\hat{x}) \le 0).
$$

**Достаточные условия экстремума.** *Если*

$$
f'(\hat{x}) = 0, ~ ~ ~ f''(\hat{x}) \ge 0 ~ ~ ~ (f'' (\hat{x}) \le 0),
$$

*то $\hat{x}$ — точка локального минимума (максимума) функции $f$.*
:::-->

Имеем задачу следующего вида:

$$
\begin{cases}
z = 4x + 3y \to \text{extr} \\
\varphi = x^2 + y^2 - 1 = 0
\end{cases}
$$

Составим лагранжиан:

$$
L = z + \lambda \varphi = 4x + 3y + \lambda \left(
    x^2 + y^2 - 1
\right).
$$

**Проверим небходимое условие экстремума.** Для этого составим следующую систему и найдём её решение:

$$
\begin{cases}
L'_x = 4 + 2x \lambda = 0, \\
L'_y = 3 + 2y \lambda = 0, \\
\varphi = x^2 + y^2 - 1 = 0.
\end{cases}
$$

Из первого и второго уравнений выразим $x$ и $y$ через $\lambda$:

$$
4 + 2x \lambda = 0 \implies x = - { 2 \over \lambda };
$$

$$
3 + 2y \lambda = 0 \implies y = - { 3 \over 2 \lambda }.
$$

Подставим полученные выражения в третье уравнение:

$$
\left(
    -{2 \over \lambda}
\right)^2 + \left(
    -{3 \over 2 \lambda}
\right)^2 - 1 = 0.
$$

Упростим:

$$
{4 \over \lambda^2} + {9 \over 4 \lambda^2} = 1.
$$

Приведём к общему знаменателю:

$$
\frac{4 \cdot 4 + 9}{4 \lambda^2} = 1;
$$

$$
\frac{25}{4 \lambda^2} = 1;
$$

$$
4 \lambda^2 = 25;
$$

$$
\lambda = \sqrt{25 \over 4} = \pm {5 \over 2}.
$$

Таким образом, получаем два случая: либо $\lambda = 5/2$ либо $\lambda = -5/2$. Рассмотрим каждый из них.

1. Пусть $\lambda = 5/2$. Подставим в выражения для $x$ и $y$:

   $$
   x
   = -{2 \over \lambda}
   = -{2 \over {5 \over 2}}
   = -{ 2 \cdot 2 \over 5 }
   = -{4 \over 5};
   $$

   $$
   y
   = -{3 \over 2 \lambda}
   = -{3 \over 2 \cdot {5 \over 2}}
   = -{3 \cdot 2 \over 2 \cdot 5}
   = -{3 \over 5}.
   $$

   Таким образом, получаем точку $M_1\left( -{4 \over 5}, -{3 \over 5} \right)$, подозрительную на экстремум.

2. Пусть $\lambda = -5/2$. Произведя аналогичные действия, получим $x = {4 \over 5}$, $y = {3 \over 5}$. Таким образом, получаем точку $M_2\left( {4 \over 5}, {3 \over 5} \right)$, подозрительную на экстремум.

В результате проверки необходимого условия экстремума были получены две точки, подозрительные на экстремум.

**Проверим достаточное условие экстремума.** Для этого нужно вычислить $\text{d}^2 L$ в каждой из точек $M_1$ и $M_2$.

$$
\text{d}^2 L = L''_{xx} ~ (\text{d}x)^2 + 2 L''_{xy} ~ \text{d}x \text{d}y + L''_{yy} ~ (\text{d}y)^2.
$$

Вычислим $L''_{xx}$, $L''_{xy}$, $L''_{yy}$:

$$
L''_{xx}
= (L'_x)'_x
= (4 + 2 x \lambda)'_x
= 2 \lambda;
$$

$$
L''_{xy}
= (L'_x)'_y
= (4 + 2x \lambda)'_y
= 0;
$$

$$
L''_{yy}
= (L'_y)'_y
= (3 + 2y \lambda)'_y
= 2 \lambda.
$$

Подставим в $\text{d}^2L$:

$$
\text{d}^2 L = 2 \lambda ~ (\text{d}x)^2 + 2 \lambda ~ (\text{d}y)^2.
$$

Постараемся как-то выразить $\text{d}y$ через $\text{d}x$, чтобы в дифференциале $\text{d}^2 L$ было приращение только по одной переменной $x$.

Известно, что $\varphi = 0$, следовательно, $\text{d} \varphi = 0$. Найдём $\text{d} \varphi$:

$$
\begin{rcases}
\text{d} \varphi = \varphi'_x ~ \text{d}x + \varphi'_y ~ \text{d}y = 0 \\
\varphi'_x = 2x \\
\varphi'_y = 2y
\end{rcases} \implies
\text{d} \varphi = 2x ~ \text{d}x + 2y ~ \text{d}y = 0 \implies
$$

$$
\implies \text{d}y = - { 2x ~ \text{d}x \over 2y } = -{x \over y} ~ \text{d}x.
$$

Подставим в $\text{d}^2 L$:

$$
\text{d}^2 L = 2 \lambda ~ (\text{d}x)^2 + 2 \lambda \cdot \left(
    -{x \over y} ~ \text{d}x
\right)^2;
$$

$$
\text{d}^2 L = 2 \lambda ~ (\text{d}x)^2 + {2 \lambda x^2 \over y^2} ~ (\text{d}x)^2;
$$

$$
\text{d}^2 L = 2 \lambda \left(
    1 + {x^2 \over y^2}
\right) ~ (\text{d}x)^2.
$$

Теперь вычислим данный дифференциал в каждой из точек $M_1$ и $M_2$.

1. В точке $M_1\left( -4/5, -3/5 \right)$ ($\lambda = 5/2$):
   
   $$
   \left. \text{d}^2 L \right|_{M_1}
   = 2 \cdot {5 \over 2} \cdot \left(
    1 + { \left( -{4 \over 5} \right)^2 \over \left( -{3 \over 5} \right)^2 }
   \right) ~ (\text{d}x)^2 =
   $$

   $$
   = 5 \cdot \left(
    1 + { {16 \over 25} \over {9 \over 25} }
   \right) ~ (\text{d}x)^2
   = 5 \cdot \left(
    1 + {16 \over 9}
   \right) ~ (\text{d}x)^2 =
   $$

   $$
   = {125 \over 9} ~ (\text{d}x)^2.
   $$

   Поскольку ${125 \over 9} > 0$, то точка $M_1$ доставляет условный минимум.

   В данной точке значение функционала равно

   $$
   S_\min
   = z(-4/5, -3/5)
   = 4 \cdot \left(-{4 \over 5}\right) + 3 \cdot \left(-{3 \over 5}\right)
   =
   $$

   $$
   = -{16 \over 5} - {9 \over 5}
   = -{25 \over 5}
   = -5.
   $$

2. В точке $M_2\left( 4/5, 3/5 \right)$ ($\lambda = -5/2$):
   
   $$
   \left. \text{d}^2 L \right|_{M_2}
   = 2 \cdot \left(-{5 \over 2}\right) \cdot \left(
    1 + { \left( {4 \over 5} \right)^2 \over \left( {3 \over 5} \right)^2 }
   \right) ~ (\text{d}x)^2 =
   $$

   $$
   = -5 \cdot \left(
    1 + { {16 \over 25} \over {9 \over 25} }
   \right) ~ (\text{d}x)^2
   = -5 \cdot \left(
    1 + {16 \over 9}
   \right) ~ (\text{d}x)^2 =
   $$

   $$
   = -{125 \over 9} ~ (\text{d}x)^2.
   $$

   Поскольку $-{125 \over 9} < 0$, то точка $M_2$ доставляет условный максимум.

   В данной точке значение функционала равно
   
   $$
   S_\max
   = z(4/5, 3/5)
   = 4 \cdot {4 \over 5} + 3 \cdot {3 \over 5} =
   $$
   
   $$
   = {16 \over 5} + {9 \over 5}
   = {25 \over 5}
   = 5.
   $$

**Ответ:** $M_1(-4/5, -3/5)$ — условный минимум, $S_\min = -5$; $M_2(4/5, 3/5)$ — условный максимум, $S_\max = 5$.