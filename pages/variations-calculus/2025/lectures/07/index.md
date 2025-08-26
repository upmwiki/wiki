---
prev:
    text: 6. Условие экстремума второго порядка
    link: ../06/
next:
    text: 8. Простейшая задача ВИ для нескольких функций
    link: ../08/
---

**Лекция 7**

# Примеры исследования классических задач на слабый минимум

## Задача геометрической оптики

Частный случай:

$$
\begin{cases}
\displaystyle 2 \pi \int_0^1 y \sqrt{ 1 + (y')^2 } ~ \text{d}x \to \min \\
\displaystyle y(0) = 1, ~ ~ y(1) = \text{ch} ~\! 1.
\end{cases}
$$

Мы ранее нашли, что в общей постановке $\hat{y} = C_1 ~ \text{ch} ~\! {x - C_2 \over C_1}$. Тогда решение нашей конкретной задачи: $\hat{y} = \text{ch} ~\! x$.

Условие Лежандра:

$$
\hat{L}_{\dot{y}\dot{y}}
= \left(
    {y\dot{y} \over \sqrt{1 + \dot{y}^2}}
\right)_\dot{y}
={\hat{y} \over \left(
    1 + \dot{\hat{y}}^2
\right)^{3/2}}
=
$$

(подставим экстремаль)

$$
= {\text{ch} ~\! x \over (1 + \text{sh}^2 ~\! x)^{3/2}}
= {\text{ch} ~\! x \over (\text{ch}^2 ~\! x)^{3/2}}
= {\text{ch} ~\! x \over \text{ch}^3 ~\! x}
= \text{ch}^2 ~\! x
> 0 \implies
$$

$\implies$ условие Лежандра выполнено.

Условие Якоби:

$$
\hat{L}_{y\dot{y}}
= { \dot{\hat{y}} \over \sqrt{ 1 + \dot{\hat{y}}^2 } }
= {\text{sh} ~\! x \over \text{ch} ~\! x} = \text{th} ~\! x,
$$

$$
\hat{L}_{yy} = 0.
$$

Уравнение Якоби:

$$
a(x) h'' + b(x) h' + c(x) h = 0.
$$

* $\displaystyle a(x) = \hat{L}_{\dot{y}\dot{y}} = {1 \over \text{ch}^2 ~\! x}$;
* $\displaystyle b(x) = {\text{d} \over \text{d}t} \hat{L}_{\dot{y}\dot{y}} = {2 ~ \text{sh} ~\! x \over \text{ch}^3 ~\! x}$;
* $\displaystyle c(x) = {\text{d} \over \text{d}t} \hat{L}_{\dot{y}y} - \hat{L}_{yy} = {1 \over \text{ch}^2 ~\! x}$.

Подставив, получим:

$$
{h'' \over \text{ch}^2 ~\! x} - {2 ~ \text{sh} ~\! x \cdot h' \over \text{ch}^3 ~\! x} + {h \over \text{ch}^2 ~\! x} = 0;
$$

$$
h'' - 2 ~ \text{th} ~\! x \cdot h' + h = 0, ~ ~ h(0) = 0.
\tag{∗}
$$

Решения:

$$
\left[
    \begin{array}{l}
        h_1 = \text{sh} ~\! x, \\
        h_2 = x ~ \text{sh} ~\! x - \text{ch} ~\! x.
    \end{array}
\right.
$$

Проверим, что $h_2$ — решение:

$$
h_2' = x ~ \text{ch} ~ x,
~~
h_2'' = \text{ch} ~ x + x ~ \text{sh} ~ x.
$$

Подставим в $(∗)$:

$$
(\text{ch} ~ x + x ~ \text{sh} ~ x)
- 2 ~ \text{th} ~ x \cdot (x ~ \text{ch} ~ x)
+ (x ~ \text{sh} ~ x - \text{ch} ~ x) = 0;
$$

$$
\text{ch} ~ x + x ~ \text{sh} ~ x - 2x ~ \text{sh} ~ x + x ~ \text{sh} ~ x - \text{ch} ~ x = 0;
$$

$$
0 = 0. ~ ~ ~ ~ \text{(✓)}
$$

Тогда решение:

$$
\begin{cases}
h = C_1 ~ \text{sh} ~\! x + C_2 \left(
    x ~ \text{sh} ~\! x - \text{ch} ~\! x
\right), \\
h(0) = 0.
\end{cases}
$$

$h(0) = 0 \implies C_2 = 0$.

Тогда решение:

$$
h = C_1 ~ \text{sh} ~\! x.
$$

Данное решение не имеет сопряжённых точек на $[0; 1]$. Следовательно, $\hat{x}$ — слабый минимум.

## Задача о наименьшем сопротивлении потоку

Определить формулу твёрдого тела, движущегося в потоке газа с наименьшим сопротивлением. Будем для простоты рассматривать тело вращения.

<figure>
    <img src="/media/images/IMG_20250824_200957_463.jpg" />
</figure>

Давление газа надо искать в виде

$$
p = 2 \rho v^2 \sin^2 \theta,
$$

где
* $\rho$ — плотность газа,
* $v$ — скорость газа относительно тела,
* $\theta$ — угол между скоростью и её тангенсальной составляющей.

Давление направлено перпендикутярно поверхности.

$$
\text{d}S = 2\pi y \sqrt{ 1 + (y')^2 } ~ \text{d}x.
$$

Тогда можем записать составляющую силы по оси $Ox$, действующую на кольцо:

$$
\text{d}F =
\underbrace{
    2\rho v^2 \sin^2 \theta
}_{p}
\cdot
\underbrace{
    2\pi y \sqrt{ 1 + (y')^2 }
}_{\text{d}S}
\cdot \sin \theta ~ \text{d}x.
$$

Сформулируем задачу:

$$
\begin{cases}
\displaystyle F = \int_0^l 4\pi \rho v^2 \sin^3 \theta \cdot y \sqrt{1 + (y')^2} ~ \text{d}x \to \min \\
\displaystyle y(0) = 0, ~ ~ y(l) = R.
\end{cases}
$$

Утверждается, что

$$
\sin \theta = {y' \over \sqrt{1 + (y')^2}}.
$$

<figure>
    <img width="40%" src="/media/images/IMG_20250826_143604_029.jpg" />
</figure>

Если $y'$ мало, то $\sin \theta \approx y'$ (а $\sqrt{1 + (y')^2} \approx 1$).

Тогда

$$
F = 4 \pi \rho v^2 \int_0^l y \cdot (y')^3 ~ \text{d}x \to \min.
$$

Применим интеграл энергии:

$$
y' L_{y'} - L = C_1;
$$

$$
y' \cdot 3 (y')^2 y - (y')^3 \cdot y = C_1;
$$

$$
(y')^3 \cdot y = C_1;
$$

$$
y' = {C_1 \over \sqrt[3]{y}};
$$

$$
{\text{d}y \over \text{d}x} = {C_1 \over \sqrt[3]{y}};
$$

$$
\int C_1 ~ \text{d}x = \int \sqrt[3]{y} ~ \text{d}y;
$$

$$
C_1 x + C_2 = y^{4/3};
$$

$$
y = \left(
    C_1 x + C_2
\right)^{3/4}.
$$

Вычислим $C_1$ и $C_2$ с помощью краевых условий $y(0) = 0$, $y(l) = R$:

$$
\begin{array}{r}
y(0) = 0: \\
y(l) = R:
\end{array}
~~
\begin{cases}
0 = (C_1 \cdot 0 + C_2)^{3/4}, \\
R = (C_1 \cdot l + C_2)^{3/4};
\end{cases}
$$

$$
\begin{cases}
0 = C_2^{3/4}, \\
R = (C_1 \cdot l + C_2)^{3/4};
\end{cases}
$$

$$
\begin{cases}
C_2 = 0, \\
R = (C_1 \cdot l)^{3/4};
\end{cases}
$$

$$
\begin{cases}
C_2 = 0, \\
\displaystyle C_1 = {R^{4/3} \over l}.
\end{cases}
$$

Таким образом, допустимые экстремали имеют вид

$$
\hat{y} = R \cdot \left(
    {x \over l}
\right)^{3/4}.
$$

Для конкретных начальных данных исследуем полученную экстремаль на слабый минимум.

$$
\begin{cases}
\displaystyle F = 4 \pi \rho \upsilon^2 \intop_0^1 (y')^3 y ~ \text{d}x; \\
y(0) = 0, ~ y(1) = 1.
\end{cases}
$$

Тогда экстремаль имеет вид

$$
\hat{y} = x^{3/4}.
$$

Проверим выполнимость усиленного условия Лежандра:

$$
\hat{L}_{y'y'}
= 6 \hat{y}' \hat{y}
= 6 \cdot {3 \over 4} \cdot x^{-1/4} \cdot x^{3/4}
= {9 \over 2} \sqrt{x} \ge 0,
$$

следовательно, усиленное условие Лежандра выполенно.

Проверим выполнимость условия Якоби:

$$
\hat{L}_{y' y}
= 3 (\hat{y}')^2 = 3 \cdot {9 \over 16} \cdot x^{-1/2}
= {27 \over 16 \sqrt{x}};
$$

$$
\hat{L}_{yy} = 0.
$$

Вычислим $a(x)$, $b(x)$, $c(x)$ для уравнения Якоби:

$$
a(x) = {9 \over 2} \sqrt{x};
$$

$$
b(x) = {9 \over 4 \sqrt{x}};
$$

$$
c(x) = -{27 \over 32 x \sqrt{x}}.
$$

Таким образом, уравнение Якоби принимает вид

$$
{9 \over 2} \sqrt{x} \cdot h'' + {9 \over 4\sqrt{x}} \cdot h' - {27 \over 32 x \sqrt{x}} h = 0.
$$

Умножим на ${2 \over 9} x \sqrt{x}$:

$$
x^2 \cdot h'' + {1 \over 2} x \cdot h' - {3 \over 16} \cdot h = 0.
$$

Сделаем замену $x = e^s$. Выразим $h'$ и $h''$:

$$
h' = h'_s \cdot s'_x = \set{ s = \ln x } = {h'_s \over x};
$$

$$
h'' = (h')'_s \cdot s'_x = \left(
    {h'_s \over x}
\right)'_s \cdot {1 \over x}
= {h''_{ss} \cdot x - h'_s \cdot x \over x^3} =
$$

$$
= {h''_{ss} - h'_s \over x^2}.
$$

Подставим в уравнение Якоби:

$$
h''_{ss} - h'_s + {1 \over 2} h'_s - {3 \over 16} h = 0.
$$

Умножим на $16$:

$$
16 h''_{ss} - 8 h'_s - 3h = 0.
$$

Решим данное дифференциальное уравнение. Составим характеристическое уравнение и решим его:

$$
16 \lambda^2 - 16 \lambda - 3 = 0 \implies
$$

$$
\implies
\lambda_{1,2} = {4 \pm 8 \over 16}
= \left[
    \begin{array}{l}
        \lambda_1 = -{1 \over 4} \\
        \lambda_2 = {3 \over 4}
    \end{array}
\right.
$$

Таким образом, общее решение уравнения Якоби имеет вид

$$
h = C_1 e^{-s/4} + c_2 e^{3s/4}
= C_2 \cdot \sqrt[4]{x^3} + C_1 \cdot {1 \over \sqrt[4]{x}}.
$$

Вычислим $C_1$ и $C_2$ с помощью условия $h(t_0) = 0$ (в данном случае $t_0 = 0$). Однако при подстановке $x = 0$ в общее решение получим деление на $0$. Тогда будем рассматривать условие $h(\varepsilon) = 0$:

$$
0
= C_2 \cdot \sqrt[4]{\varepsilon^3} + C_1 \cdot {1 \over \sqrt[4]{\varepsilon}}
= C_1 \cdot {x - \varepsilon \over \sqrt[4]{x}}
\xrightarrow{\varepsilon \to 0} C_1 \cdot \sqrt[4]{x^3}.
$$

> При вычислении $\lambda_{1,2}$ была допущена ошибка.

Таким образом, $\hat{x}$ — слабый минимум.