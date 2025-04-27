---
prev:
    text: 4. Простейшая задача вариационного исчисления
    link: ../04/
next:
    text: 6. Условие экстремума второго порядка
    link: ../06/
---

**Лекция 5**

# Интеграл уравнения Эйлера

На предыдущей лекции мы познакомились с простейшей задачей вариационного исчисления:

$$
\begin{cases}
\displaystyle \int_{t_0}^{t_1} L(x, \dot{x}, t) ~ \text{d}t \to \text{extr} \\
\displaystyle x(t_0) = x_0; ~ x(t_1) = x_1.
\end{cases}
$$

Рассмотрим ситуации, когда возможно понизить порядок.

## $L = L(\dot{x}, t)$

<!--В случае, когда интегрант $L$ зависит только от $\dot{x}$ и $t$-->

Тогда

$$
{\text{d} \over \text{d}t} L_\dot{x} = L_x = 0 \implies L_\dot{x} = \text{const}
$$

(интеграл импульса)

Частный случай задачи геометрической оптики:

$$
\begin{cases}
J(x) = \intop_{t_0}^{t_1} { \sqrt{1 + \dot{x}^2} \over t } ~ \text{d}t \to \text{extr} \\
x(t_0) = x_0; ~ x(t_1) = x_1.
\end{cases}
$$

$$
L_\dot{x} = { \dot{x} \over t \sqrt{1 + \dot{x}^2} } = C.
$$

$$
{ \dot{x} \over \sqrt{1 + \dot{x}^2} } = C_1t;
$$

$$
{ \dot{x}^2 \over 1 + \dot{x}^2 } = C_1^2 t^2;
$$

$$
C_1^2 t^2 = 1 - {1 \over 1 + \dot{x}^2};
$$

$$
1 + \dot{x}^2 = {1 \over 1 - C_1^2 t^2};
$$

$$
\dot{x} = \sqrt{ {1 \over 1 - C_1^2 t^2} - 1 } = 
\sqrt{ 1 - 1 + C_1^2 t^2 \over 1 - C_1^2 t^2 } =
\sqrt{ C_1^2 t^2 \over 1 - C_1^2 t^2 }
$$

$$
\implies {\text{d}x \over \text{d}t} = {C_1 t \over \sqrt{1 - C_1^2 t^2}}.
$$

$$
\text{d}x = { C_1 t \over \sqrt{1 - C_1^2 t^2} } ~ \text{d}t;
$$

$$
x - C_2 = {C_1 \over 2} \int { \text{d}t^2 \over \sqrt{ 1 - C_1^2 t^2 } } =
{C_1 \over 2C_1^2} \int { \text{d} (C_1^2 t^2) \over \sqrt{ 1 - C_1^2 t^2 } } =
$$

$$
= -{1 \over 2C_1} \cdot 2 \sqrt{ 1 - C_1^2 t^2 } = { \sqrt{1 - C_1^2 t^2} \over C };
$$

$$
-C_1 (x - C_2) = \sqrt{ 1 - C_1^2 t^2 };
$$

$$
C_1^2 t^2 + C_1^2 (x - C_2)^2 = 1;
$$

$$
(x - C_2)^2 + t^2 = {1 \over C_1^2}.
$$

Таким образом, экстремалями являются *окружности*.

## $L = L(x, \dot{x})$

В этом случае - интеграл энергии:

$$
\dot{x} L_\dot{x} - L = \text{const}
$$

::: info Доказательство
...
:::

::: info Задача (о наименьшей поверхности вращения)
Определить кривую $y = y(x)$, проходящую через точки $A(a, a_1)$ и $B(b, b_1)$, от вращения которой вокруг оси $Ox$ получается поверхность минимальной площади.

[image]

Формализуем:

$$
\begin{cases}
S = 2\pi \int_a^b y(x) \sqrt{1 + (y'(x))^2} ~ \text{d}x \to \min \\
y(a) = a_1; ~ y(b) = b_1.
\end{cases}
$$

Пишем интеграл энергии:

$$
L_\dot{y} = {y\dot{y} \over \sqrt{1 + \dot{y}^2}};
$$

$$
\dot{y} { y\dot{y} \over \sqrt{1 + \dot{y}^2} } - y \sqrt{1 + \dot{y}^2} = C_1;
$$

$$
y \dot{y}^2 - y (1 + \dot{y})^2 = C_1 \sqrt{1 + \dot{y}^2};
$$

$$
-y = C_1 \sqrt{1 + \dot{y}^2};
$$

$$
1 + \dot{y}^2 = {y^2 \over C_1^2};
$$

$$
\dot{y} = \sqrt{ {y^2 \over C_1^2} - 1 };
$$

$$
{\text{d}y \over \text{d}x} = \sqrt{ {y^2 \over C_1^2} - 1 };
$$

$$
\text{d}x = {C_1 \over \sqrt{y^2 - C_1^2}} ~ \text{d}y;
$$

$$
x - C_2 = C_1 \int {\text{d}y \over \sqrt{y^2 - C_1^2}};
$$

$$
x - C_1 = C_1 \ln\left| y + \sqrt{y^2 - C_1^2} \right| - C_1 \ln C_1;
$$

$$
\ln\left| y + \sqrt{y^2 - C_1^2} \right| = {x + C_1 \ln C_1 - C_2 \over C_1};
$$

$$
C_1 \exp\left({x - C_2 \over C_1}\right) = y + \sqrt{y^2 - C_1^2};
$$

$$
C_1 \exp\left({x - C_2 \over C_1}\right) - y = \sqrt{y_2 - C_1^2};
$$

$$
C_1^2 \exp\left(2{x - C_2 \over C_1}\right) - 2y C_1 \exp\left({x - C_2 \over C_1}\right) + y^2 = y^2 - C_1^2;
$$

$$
C_1^2 \exp\left(2{x - C_2 \over C_1}\right) - 2y C_1 \exp\left({x - C_2 \over C_1}\right) = -C_1^2;
$$

$$
y = {C_1^2 \exp\left(2{x - C_2 \over C_1}\right) + C_1^2 \over 2 C_1 \exp\left({x - C_2 \over C_1}\right)} =
{C_1 \exp\left(2{x - C_2 \over C_1}\right) + C_1 \over 2 \exp\left({x - C_2 \over C_1}\right)} =
$$

$$
= {C_1^2 \left(\exp\left(2{x - C_2 \over C_1}\right) + 1\right) \over 2C_1 \exp\left({x - C_2 \over C_1}\right)} =
{C_1 \over 2} \left( \exp\left({x - C_2 \over C_1}\right) + \exp\left(-{x - C_2 \over C_1}\right) \right) \implies
$$

$$
\implies y = C_1 \text{ch} \left({x - C_2 \over C_1}\right).
$$

(цеаная линия)

Поверхность вращения - катеноид.
:::

## Задача о брахистохроне

*(Дорешаем.)*

