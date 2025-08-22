---
prev: false
next: false
---

# № 5.26

## Условие

Решить простейшие задачи классического вариационного исчисления 5.11—5.80.

$$
\intop_2^3 \left(
    t^2 - 1
\right) \dot{x}^2 ~ \text{d}t \to \text{extr};
~~
x(2) = 0, ~ x(3) = 1.
$$

## Ответ

::: details Ответ из задачника
$$
{ \ln \left(3 \cdot {t-1 \over t+1}\right) \over \ln(3/2) } \in \text{abs min}, ~ ~ S_\max = + \infty.
$$
:::

## Решения

### Решение №1

Требуется найти экстремали задачи классического вариационного исчисления, имеющей следующий вид:

$$
\begin{cases}
\displaystyle \intop_2^3 \left( t^2 - 1 \right) \dot{x}^2 ~ \text{d}t \to \text{extr} \\
x(2) = 0, ~ x(3) = 1
\end{cases}
$$

Из курса известно, что эстремумы задачи классического вариационного исчисления удовлетворяют уравнению Эйлера-Лагранжа. Другими словами, составими уравнение Эйлера-Лагранжа и найдя его решения, мы сможем получить экстремали исходной задачи.

Уравнение Эйлера-Лагранжа в общем виде имеет следующий вид:

$$
{\text{d} \over \text{d}t} L_{\dot{x}} = L_x.
$$

Выпишем лагранжиан:

$$
L = \left( t^2 - 1 \right) \dot{x}^2.
$$

Поскольку лагранжиан зависит только от $\dot{x}$ и $t$, то вместо уравнения Эйлера-Лагранжа можно воспользоваться *интегралом импульса*:

$$
L_{\dot{x}} = \text{const}.
$$

Вычислим $L_{\dot{x}}$:

$$
L_{\dot{x}} = 2 \dot{x} \left( t^2 - 1 \right).
$$

Подставим в интеграл импульса:

$$
2 \dot{x} \left( t^2 - 1 \right) = C_1.
$$

Выразим $\dot{x}$:

$$
\dot{x} = {C_1 \over 2 \left( t^2 - 1 \right)}.
$$

Проинтегрируем обе части равенства:

$$
\int \dot{x} ~ \text{d}t = \int {C_1 \over 2 \left( t^2 - 1 \right)} ~ \text{d}t;
$$

$$
x = {C_1 \over 2} \int {\text{d}t \over t^2 - 1};
$$

$$
x = {C_1 \over 2} \ln \left| { t - 1 \over t + 1 } \right| + C_2;
$$

$$
x = \tilde{C}_1 \ln \left| {t-1 \over t+1} \right| + C_2.
$$

Найдём значения $\tilde{C}_1$ и $C_2$ с помощью краевых условий:

$$
\begin{array}{r}
x(2) = 0: \\
x(3) = 1:
\end{array}
~~
\begin{cases}
0 = \tilde{C}_1 \ln \left|{ 2 - 1 \over 2 + 1 }\right| + C_2, \\
1 = \tilde{C}_1 \ln \left|{ 3 - 1 \over 3 + 1 }\right| + C_2;
\end{cases}
$$

$$
\begin{cases}
0 = \tilde{C}_1 \ln { 1 \over 3 } + C_2, \\
1 = \tilde{C}_1 \ln { 1 \over 2 } + C_2;
\end{cases}
$$

$$
\begin{cases}
0 = - \tilde{C}_1 \ln 3 + C_2, \\
1 = - \tilde{C}_1 \ln 2 + C_2.
\end{cases}
$$

Вычтем из второго уравнения первое:

$$
1 = \tilde{C}_1 (\ln 3 - \ln 2) \implies \tilde{C}_1 = {1 \over \ln 3 - \ln 2} = {1 \over \ln (3/2)}.
$$

Подставим $\tilde{C}_1$, например, в первое уравнение:

$$
0 = -{1 \over \ln (3/2)} \ln {1 \over 3} + C_2;
$$

$$
C_2 = { \ln 3 \over \ln(3/2) }.
$$

Таким образом, допустимая экстремаль имеет вид

$$
\hat{x}
= {1 \over \ln(3/2)} \ln \left| t - 1 \over t + 1 \right| + {\ln 3 \over \ln(3/2)} =
$$

$$
= {1 \over \ln(3/2)} \cdot \ln \left( 3 \cdot {t - 1 \over t + 1} \right).
$$

Докажем, что найденная экстремаль доставляет слабый минимум (максимум). Обозначим

$$
J(x) = \intop_2^3 \left( t^2 - 1 \right) \dot{x}^2 ~ \text{d}t,
$$

тогда

$$
J(\hat{x} + h) - J(\hat{x})
= \intop_2^3 \left( t^2 - 1 \right) (\dot{\hat{x}} + \dot{h})^2 ~ \text{d}t
- \intop_2^3 \left( t^2 - 1 \right) \dot{\hat{x}}^2 ~ \text{d}t =
$$

$$
= \intop_2^3 \left( t^2 - 1 \right) \left(
    \dot{\hat{x}}^2 + 2 \dot{\hat{x}} \dot{h} + \dot{h}^2
\right) ~ \text{d}t - \intop_2^3 \left( t^2 - 1 \right) \dot{\hat{x}}^2 ~ \text{d}t =
$$

$$
= \intop_2^3 \left( t^2 - 1 \right) \left(
    \dot{\hat{x}}^2 + 2 \dot{\hat{x}} \dot{h} + \dot{h}^2 - \dot{\hat{x}}^2
\right) ~ \text{d}t =
$$

$$
= \intop_2^3 \left( t^2 - 1 \right) \left(
    2 \dot{\hat{x}} \dot{h} + \dot{h}^2
\right) ~ \text{d}t =
$$

$$
= 2 \intop_2^3 \left(t^2-1\right) \dot{\hat{x}} \dot{h} ~ \text{d}t
+ \intop_2^3 \left(t^2-1\right) \dot{h}^2 ~ \text{d}t.
$$

Поскольку $J'(\hat{x})[h] = 0$, то первый интеграл равен нулю. Таким образом, получаем, что

$$
J\left( \hat{x} + h \right) - J(\hat{x}) = \intop_2^3 \left(t^2-1\right) \dot{h}^2 ~ \text{d}t.
$$

Поскольку значение оставшегося интеграла неотрицательное, т. е.

$$
\intop_2^3 \left(t^2-1\right) \dot{h}^2 ~ \text{d}t \ge 0,
$$

то получаем, что

$$
J (\hat{x} + h) - J(\hat{x}) \ge 0
$$

или, что то же самое,

$$
J (\hat{x} + h) \ge J(\hat{x}).
$$

Это означает, что $\hat{x}$ достигает слабый минимум.