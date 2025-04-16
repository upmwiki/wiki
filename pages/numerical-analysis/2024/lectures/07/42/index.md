---
prev:
    text: § 41. Квадратурные формулы
    link: ../41
next: false
    #text: § 42. Формулы Ньютона-Котеса
    #link: ../42
---

**Тема 7. Численное интегрирование**

# § 42. Формулы Ньютона-Котеса

Выберем шаг $h = {b - a \over N}$ и разобъём отрезок $[a,b]$ на элементарные участки $[x_i; x_{i+1}]$, $i = \overline{0, N-1}$, $x_i = a + ih$. На каждом таком участке построим интерполяционный многочлен невысокого порядка.

## Формулы прямоугольников ($n = 0$)

<figure>
    <img src="/media/images/numerical_analysis_42_1.jpg" width="60%" />
</figure>

* Формула левых прямоугольников:

  $$
  \int_a^b f(x) ~ \text{d}x \approx
  \sum_{i=1}^N f(x_{i-1}) h.
  $$

* Формула средних прямоугольников:

  $$
  \int_a^b f(x) ~ \text{d}x \approx
  \sum_{i=1}^N f\left({ x_{i-1} + x_i \over 2 }\right) h.
  $$

* Формула правых прямоугольников:

  $$
  \int_a^b f(x) ~ \text{d}x \approx
  \sum_{i=0}^{N-1} f(x_{i}) h.
  $$

В данных квадратурных формулах все весовые коэффициенты $c_i = h$.

## Формула трапеций ($n = 1$)

<figure>
    <img src="/media/images/numerical_analysis_42_2.jpg" width="60%" />
</figure>

$$
\int_a^b f(x) ~ \text{d}x \approx
\sum_{i=1}^n {f(x_{i-1}) + f(x_i) \over 2} h
= \left(
    { f(x_0) + f(x_n) \over 2 } + \sum_{i=1}^{N-1} f(x_i)
\right) h.
$$

## Формула Симпсона ($n = 2$)

<figure>
    <img src="/media/images/numerical_analysis_42_3.jpg" width="60%" />
</figure>

В этом случае число элементарных участков должно быть чётным ($N = 2m$).

Рассмотрим задачу на примере одного из участков:

$$
\int_\alpha^\beta f(x) ~ \text{d}x \approx
\int_\alpha^\beta \left(
    f(\alpha) + { f(\alpha+h) - f(\alpha) \over h } (x - \alpha) + 
\right.
$$

$$
\left.
    + { f(\beta) - 2f(\alpha + h) + f(\alpha) \over 2h^2 } (x - \alpha)(x - \alpha - h)
\right) ~ \text{d}x =
$$

$$
= \textcolor{gray}{\set{ (x - \alpha)(x - \alpha - h) = (x - \alpha)^2 - h(x - \alpha) }} =
$$

$$
= f(\alpha) \cdot 2h + { f(\alpha + h) - f(\alpha) \over h } \cdot {(2h)^2 \over 2} +
$$

$$
+ { f(\beta) - 2f(\alpha + h) + f(\alpha) \over 2h^2 } \left( {(2h)^3 \over 3} - h \cdot {(2h)^2 \over 2} \right) =
$$

$$
= {h \over 3} \cdot \left( f(\alpha) + 4f(\alpha + h) + f(\beta) \right).
$$

Тогда интеграл по всему отрезку равен

$$
\int_a^b f(x) ~ \text{d}x \approx
\sum_{i=1}^{2m-1} \int_{x_{i-1}}^{x_{i+1}} f(x) ~ \text{d}x =
$$

$$
= {h \over 3} \cdot \left(
    f(x_0) + f(x_N) + 4 \sum_{i=1}^m f(x_{2i} - 1) + 2 \sum_{i=1}^{m-1} f(x_{2i})
\right).
$$

Остаётся вопрос: какая из этих формул точнее и при каких обстоятельствах? Ответ на него можно получить, зная формулы остаточных членов интегрирования.