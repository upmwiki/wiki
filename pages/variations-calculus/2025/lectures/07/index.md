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

...

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

[image]

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

[image]

Если $y'$ мало, то $\sin \theta \approx y'$ (а $\sqrt{1 + (y')^2} \approx 1$).

Тогда

$$
F = 4 \pi \rho v^2 \int_0^l y \cdot (y')^3 ~ \text{d}x \to \min.
$$

$$
y' L_{y'} - L = C_1.
$$