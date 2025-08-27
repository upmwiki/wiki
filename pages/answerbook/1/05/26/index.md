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

**Исследуем найденную экстремаль на слабый экстремум.** Проверим выполнение усиленных условий Лежандра и Якоби.

Сначала вычислим вторые производные лагранжиана:

$$
\hat{L}_{xx} = 0;
$$

$$
\hat{L}_{x\dot{x}} = 0;
$$

$$
\hat{L}_{\dot{x}\dot{x}} = 2 \left( t^2 - 1 \right).
$$

Поскольку $\hat{L}_{\dot{x}\dot{x}} = 2 \left( t^2 - 1 \right) > 0$, то выполняется усиленное условие Лежандра.

Теперь проверим выполнение условия Якоби. Запишем уравнение Якоби с условием $h(t_0) = 0$:

$$
\begin{cases}
\displaystyle {\text{d} \over \text{d}t} W_{\dot{h}} = W_h, \\
h(2) = 0,
\end{cases}
$$

где

$$
W(h, \dot{h}, t)
= \hat{L}_{xx} h^2 + 2 \hat{L}_{x\dot{x}} h\dot{h} + \hat{L}_{\dot{x}\dot{x}} \dot{h}^2
= 2 \left (t^2 - 1 \right) \dot{h}^2,
$$

и проверим наличие сопряжённых точек.

Вычислим производные $W_h$ и $W_{\dot{h}}$:

$$
W_h = 0;
$$

$$
W_{\dot{h}} = 4 \dot{h} \left( t^2 - 1 \right).
$$

Подставим в уравнение Якоби:

$$
{\text{d} \over \text{d}t} \left(
    4 \dot{h} \left(t^2 - 1 \right)
\right) = 0.
$$

Проинтегрируем обе части равенства по $t$:

$$
\int {\text{d} \over \text{d}t} \left(
    4 \dot{h} \left(t^2 - 1 \right)
\right) ~ \text{d}t = \int 0 ~ \text{d}t;
$$

$$
4 \dot{h} \left( t^2 - 1 \right) = C_1.
$$

Преобразуем

$$
\dot{h} = {C_1 \over t^2 - 1};
$$

Получили дифференциальное уравнение с разделяющимися переменными:

$$
\text{d}h = {C_1 \over t^2 - 1} ~ \text{d}t.
$$

Проинтегрируем обе части данного уравнения:

$$
\int \text{d}h = \int {C_1 \over t^2 - 1} ~ \text{d}t;
$$

$$
h = C_1 \ln \left|{ t - 1 \over t + 1 }\right| + C_2.
$$

Поскольку $h(2) = 0$, то

$$
0 = C_1 \ln \left|{ 2 - 1 \over 2 + 1 }\right| + C_2;
$$

$$
0 = - C_1 \ln 3 + C_2;
$$

$$
C_2 = C_1 \ln 3,
$$

и тогда

$$
h(t) = C_1 \ln \left|{ t - 1 \over t + 1 }\right| + C_1 \ln 3 =
$$

$$
= C_1 \ln \left( 3 \cdot {t - 1 \over t + 1} \right).
$$

Проверим наличие сопряжённых точек для $h(t)$ на интервале $(2; 3]$. Приравняем $h(t)$ к нулю:

$$
h(t) = 0;
$$

$$
C_1 \ln \left( 3 \cdot {t - 1 \over t + 1} \right) = 0;
$$

$$
3 \cdot {t - 1 \over t + 1} = 0;
$$

$$
3t - 3 = t + 1;
$$

$$
2t = 4;
$$

$$
t = 2.
$$

$h(t)$ обращается в ноль (т. е. $h(t) = 0$) только при $t = 2$, значит, сопряжённых точек нет, следовательно, выполняется усиленное условие Якоби.

Получили, что усиленные условия Лежандра и Якоби выполняются. Таким образом, $\hat{x}$ — слабый минимум.

**Исследуем найденную экстремаль на сильный экстремум.** Проверим выполнение условия Вейерштрасса.

Составим функцию Вейерштрасса для данной задачи и проверим знак её значения.

Функция Вейерштрасса $E(t, x, y, z)$ выглядит следующим образом:

$$
E(t, x, y, z) = L(t, x, z) - L(t, x, y) - (z - y) L_y (t, x, y).
$$

Вычислим каждое из слагаемых:

$$
L(t, x, \dot{x}) = \left( t^2 - 1 \right) \dot{x}^2
\implies
\begin{cases}
L(t, x, z) = \left( t^2 - 1 \right) z^2, \\
L(t, x, y) = \left( t^2 - 1 \right) y^2, \\
L_y (t, x, y) = 2y \left( t^2 - 1 \right).
\end{cases}
$$

Тогда функция Вейерштрасса принимает следующий вид:

$$
E(t, x, y, z) = \left( t^2 - 1 \right) z^2 - \left( t^2 - 1 \right) y^2 - (z - y) \cdot 2y \left( t^2 - 1 \right) =
$$

$$
= \left( t^2 - 1 \right) \left( z^2 - y^2 - 2yz + 2y^2 \right) =
$$

$$
= \left( t^2 - 1 \right) \left( z^2 - 2yz + y^2 \right)
= \left( t^2 - 1 \right) (z - y)^2.
$$

Значение этой функции всегда будет неотрицательным. Следовательно, $\hat{x}$ — сильный минимум.

<!--Подставим полученную экстремаль в интеграл задачи:

$$
\hat{x} = {1 \over \ln(3/2)} \cdot \ln \left(
    3 \cdot {t - 1 \over t + 1}
\right) \implies
$$

$$
\implies
\dot{\hat{x}}
= {2 \over \ln(3/2) \cdot (t^2 - 1)} \implies
$$

$$
\implies
J(\hat{x})
= \intop_2^3 (t^2 - 1) \cdot \left(
    {2 \over \ln(3/2) \cdot (t^2 - 1)}
\right)^2 ~ \text{d}t =
$$

$$
= \intop_2^3 { 4 \cdot (t^2 - 1) \over \ln^2(3/2) \cdot (t^2 - 1)^2 } ~ \text{d}t =
$$

$$
= {4 \over \ln^3(3/2)} \intop_2^3
$$-->

### Решение №2

Покажем, что найденная экстремаль даёт слабый минимум, по определению. Обозначим

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