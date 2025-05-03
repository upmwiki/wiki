---
prev:
    text: § 41. Квадратурные формулы
    link: ../41
next:
    text: § 43. Применение формул Ньютона-Котеса
    link: ../43
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

## Оценка погрешности интегрирования

Чтобы оценить качество квадратурной формулы, требуется знать не только её, но и остаточный член. Рассмотрим данную задачу на примере формулы средних прямоугольников:

$$
\int_a^b f(x) ~ \text{d}x \approx \sum_{i=1}^N f\left({x_{i-1} + x_i \over 2}\right) h.
$$

Требуется найти остаточный член интегрирования.

Разобъём отрезок интегрирования на элементарные участки:

$$
\int_a^b f(x) ~ \text{d}x = \sum_{i=1}^N \int_{x_{i-1}}^{x_i} f(x) ~ \text{d}x.
$$

Воспользуемся внутри каждого интервала формулой Тейлора. Обозначим $\displaystyle {x_{i-1} + x_{i} \over 2} = \hat{x}_i$. Тогда:

$$
f(x) = f(\hat{x}_i) + f'(\hat{x}_i)(x - \hat{x}_i) + {f''(\xi_i) \over 2} (x - \hat{x}_i)^2,
$$

где $\xi_i \in [x_{i-1}, x_i]$.

Тогда интеграл

$$
\int_{x_{i-1}}^{x_i} f(x) ~ \text{d}x = \int_{x_{i-1}}^{x_i} \left[
    f(\hat{x}_i) + f'(\hat{x}_i)(x-\hat{x}_i) + {f''(\xi_i) \over 2} (x - \hat{x}_i)^2
\right] ~ \text{d}x =
$$

$$
= \textcolor{gray}{\set{x_i - x_{i-1} = h}} = f(\hat{x}_i) \cdot h + \int_{x_{i-1}}^{x_i} {f''(\xi_i) \over 2} (x - \hat{x}_i)^2 ~ \text{d}x = (*)
$$

::: info Теорема (интегральная теорема о среднем)
Если $f_2(x)$ сохраняет знак на $[a;b]$, то

$$
\int_a^b f_1(x) f_2(x) ~ \text{d}x = f_1(c) \cdot \int_a^b f_2(x) ~ \text{d}x
$$

где $c \in [a, b]$.
:::

По интегральной теореме о среднем:

$$
(*) = f(\hat{x}_i) \cdot h + {f''(\xi_i) \over 2} \int_{x_{i-1}}^{x_i} (x - \hat{x}_i)^2 ~ \text{d}x =
$$

$$
= f(\hat{x}_i) \cdot h + {f''(\xi_i) \over 2} \left({(h/2)^3 \over 3} - {(-h/2)^2 \over 3}\right) =
$$

$$
= f(\hat{x}_i) \cdot h + {f''(\hat{\xi}_i) \over 24} \cdot h^3.
$$

Если теперь вернёмся к изначальному интегралу, то тогда получится следуюее:

$$
\int_a^b f(x) ~ \text{d}x = \sum_{i=1}^N \left( f(\hat{x}_i) \cdot h \right) + \sum_{i=1}^N \left( f''(\hat{\xi}_i) \cdot {h^3 \over 24} \right).
$$

Для непрерывной функции справедлива следующая теорема о среднем.

::: info Теорема (о среднем)
$$
{1 \over N} \sum_{i=1}^N f(x_i) = f(\mu),
$$

где $x_\min \le \mu \le x_\max$.
:::

Будем считать $f''(x)$ непрерывной на $[a, b]$. Тогда

$$
\sum_{i=1}^N f''(\hat{\xi}_i) = N \cdot f''(\xi),
$$

где $\xi \in [a, b]$.

Учитывая, что $h = {b - a \over N} \implies N = {b - a \over h}$, окончательно получим:

$$
\int_a^b f(x) ~ \text{d}x = \sum_{i=1}^N f\left( x_{i-1} + x_i \over 2 \right) \cdot h + {f''(\xi) \cdot h^2 \over 24} (b-a),
$$

где $\xi \in [a, b]$; первое слагаемое представляет из себя квадратурную формулу, а второе — остаточный член интегрирования $R$.

Очевидно, что при $h \to 0$ $R \to 0$, т. е. чем меньше шаг интегрирования, тем точнее квадратурная формула.

::: info Замечание
В формулу остаточного члена входит неизвестный параметр $\xi$, значит, мы не можем точно знать погрешность интегрирования, поэтому обычно пользуются оценкой погрешности:

$$
|R| \le {M_2 \cdot h^2 \over 24} (b-a),
$$

где $M_2 = \max\limits_{x \in [a,b]} \left| f''(x) \right|$.

Аналогично для остальных формул можно получить следующие оценки:

* для формулы левых и правых прямоугольников:

  $$
  |R| \le {M_1 \cdot h \over 2} (b - a);
  $$

* для формулы трапеций:

  $$
  |R| \le {M_2 \cdot h^2 \over 12} (b-a);
  $$

* для формулы Симпсона:
  
  $$
  |R| \le {M_4 \cdot h^4 \over 180} (b-a),
  $$

где $M_k = \max\limits_{x \in [a,b]} \left| f^{(k)}(x) \right|$ (максимум $k$-ой производной).
:::

Таким образом, мы теперь можем сравнить качество формул и понять, как ими пользоваться.