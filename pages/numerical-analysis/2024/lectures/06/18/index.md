---
prev:
    text: § 38. Базисные сплайны
    link: ../17/
next:
    text: § 40. ДПФ для непериодической функции
    link: ../18/
---

**Тема 6. Аппроксимация функций**

# § 39. Дискретное преобразование Фурье для периодической функции

Как известно из матанализа, любая периодическая ограниченная функция может быть представлена в виде ряда Фурье.

Пусть функция $y = f(x)$ задана на интервале $x \in \left[ -{T \over 2}; {T \over 2} \right]$ и периодична с периодом $T$ (т. е. $f(x \pm T) = f(x)$). Тогда функция может быть представлена рядом вида

$$
f(x) \sim {a_0 \over 2} +
\sum_{n=1}^\infty \left(
    a_n \cos {2 \pi nx \over T} + b_n \sin {2 \pi nx \over T}
\right),
$$

где

$$
\begin{array}{c}
\displaystyle a_n = {2 \over T} \int_{-T/2}^{T/2} f(x) \cos {2 \pi nx \over T} ~ \text{d}x, \\
\displaystyle b_n = {2 \over T} \int_{-T/2}^{T/2} f(x) \sin {2 \pi nx \over T} ~ \text{d}x.
\end{array}
$$

Если ряд Фурье сходится к $f(x)$, то она также может быть представлена рядом в комплексной форме:

$$
f(x) \sim \sum_{l = -\infty}^{+\infty} c_l e^{il \omega x},
$$

где $\omega = {2 \pi \over T}$ — частота, $c_l = {a_l - ib_l \over 2}$, $c_l = \bar{c}_l = {a_l + ib_l \over 2}$, где

$$
c_l = {1 \over T} \int_{-T/2}^{T/2} f(x) e^{il \omega x} ~ \text{d}x.
$$

Возникает вопрос: как это перенести на случай функции, заданной на дискретном множестве, например, на сетке?

Рассмотрим такую функцию $y_k = f(x_k)$, где $X = \set{ x = x_k = kh, ~ k = 0, \pm 1, ..., \pm (n-1), n }$. Пусть $\omega = {2 \pi \over T}$, $f(T) = f(-T)$. Тогда:

::: info Определение
**Дискретным преобразованием Фурье** (ДПФ) называется функция целочисленного аргумента

$$
c_l = \sum_{x_k \in X} y_k e^{-il \omega x_k} \cdot {h \over T},
$$

где ${h \over T}$ — нормировочный множитель, $h = {T \over 2n}$, $l = 0, \pm 1, \pm 2, ...$ .
:::

Можно доказать, что ДПФ обладает следующими свойствами:

1. *Линейность:* если $y_k = \alpha y_k^{(1)} + \beta y_k^{(2)}$, где $\alpha, \beta = \text{const}$, то $c_k = \alpha c_k^{(1)} + \beta c_k^{(2)}$.

   (следует из определения)

2. *Периодичность:* рассмотрим сдвиг на $2n$:
   
   $$
   c_{l+2n} = \sum_{x_k \in X} y_k e^{-i(l + 2n) \omega x_k} \cdot {h \over T} =
   $$

   $$
   = \sum_{x_k \in X} y_k e^{-il \omega x_k} e^{-i \cdot 2n \cdot {2\pi \over T} \cdot kh} \cdot {h \over T} = \textcolor{gray}{\set{kh = x_k}} =
   $$

   $$
   = \sum_{x_k \in X} y_k e^{-il \omega x_k} e^{-i \cdot 2\pi k} \cdot {h \over T}
   = \sum_{x_k \in X} y_k e^{-il \omega x_k} \underbrace{e^{-i \cdot 2\pi k}}_{=1} \cdot {h \over T} = c_l.
   $$

   *Вывод:* ДПФ периодична с периодом $2n$.

   **Замечание.** Так как ДПФ периодична, $l$ достаточно брать из множества $l \in \Omega = \set{ 0; \pm 1; \pm 2; ...; \pm (n-1); n }$.

3. *Обраное преобразование:*

   $$
   \sum_{l \in \Omega} c_l e^{il \omega x_k} =
   \sum_{l \in \Omega} {h \over T} \sum_{x_j \in X} y_j e^{-il \omega x_j} e^{il \omega x_k} =
   $$

   $$
   = {h \over T} \sum_{x_j \in X} y_j \sum_{l \in \Omega} e^{il \omega (x_k - x_j)};
   $$

   $$
   \sum_{l \in \Omega} e^{il \omega (x_k - x_j)} = \textcolor{gray}{\set{x_k = kh; ~ ~ x_j = jh}} = \sum_{l \in \Omega} e^{il {\pi \over n} (k - j)} =
   $$

   $$
   = \sum_{l \in \Omega} \left( e^{i {\pi \over n} (k - j)} \right)^l = \textcolor{gray}{\style{font-family:Times}{\text{(геом. прогрессия)}}}\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\! =
   $$

   $$
   = \begin{cases}
   2n, & k = j, \\
   { 1 - \left( e^{i {\pi \over n} (k - j)} \right)^{2n} \over 1 - e^{i {\pi \over n} (k - j)} } = {1 - e^{i \cdot 2\pi (k-j)} \over 1 - e^{i {\pi \over n} (k - j)}} = 0, & k \ne j.
   \end{cases}
   $$

   Таким образом,

   $$
   \sum_{l \in \Omega} c_l e^{il \omega x_k} = {h \over T} \cdot y_k \cdot 2n = y_k,
   $$

   следовательно,

   $$
   y_k = \sum_{l \in \Omega} c_l e^{il \omega x_k}
   $$

   — *обратное ДНФ*.

## ДПФ для производных

Пусть функция $y = f(x)$ задана на сетке (с шагом $h$). Как будет показано в дальнейшем, аппроксимация её производных выглядит следующим образом:

* правая аппроксимация:

  $$
  f_x = { f(x + h) - f(x) \over h }.
  $$

* левая аппроксимация:

  $$
  f_\bar{x} = { f(x) - f(x - h) \over h }.
  $$

* вторая производная:

  $$
  f_{x\bar{x}} = { f_x - f_\bar{x} \over h } = { f(x + h) - 2f(x) + f(x - h) \over h^2 }.
  $$

Если взять $c(f_x)_l$, то по определению это

$$
c(f_\bar{x})_l = \sum_{x_k \in X} { y_{k+1} - y_k \over h } e^{il \omega x_k} {h \over T} =
$$

$$
= {1 \over T} \sum_{x_k \in X} y_{k+1} e^{-il \omega x_k} -
\underbrace{{1 \over T} \sum_{x_k \in X} y_k e^{-il \omega x_k}}_{{1 \over h} c_l} = (∗)
$$

Сделаем замену $k + 1 = s$. Тогда $k = s - 1$, а $k \in X \implies s \in X$ (периодичность):

$$
(∗) = {1 \over T} \sum_{x_s \in X} y_s e^{-il \omega x_{s-1}} - {1 \over h} c_l =
$$

$$
= {1 \over h} c_l e^{il \omega h} - {1 \over h} c_l = {e^{il \omega h} - 1 \over h} c_l.
$$

Аналогично можно получить, что

$$
c_l(f_\bar{x}) = { 1 - e^{-il \omega x_k} \over h } c_l.
$$

Объединим выражения. Тогда (в силу линейности):

$$
c(f_{x\bar{x}})_l = {1 \over h} \left(
    { e^{il \omega h} - 1 \over h } - { 1 - e^{-il \omega h \over h} }
\right) c_l =
$$

$$
= { e^{il \omega h} + e^{-il \omega h} - 2 \over h^2 } c_l
= { 2\cos l \omega h - 2 \over h^2 } c_l
= - { 4 \sin^2 { l \omega h \over 2 } \over h^2 } c_l.
$$

::: info Пример
Часто в дифференциальных уравнениях правая часть бывает задана на сетке. Рассмотрим следующую задачу:

$$
y'' - a^2 y = f(x),
$$

где граничные условия периодические: $y(-\pi) = y(\pi)$. Функция $f = f(x_k)$ — сеточная функция. $T = 2\pi$, $\omega = {2 \pi \over T} = 1$, $h = {T \over 2n} = {\pi \over n}$.

Прямое преобразование:

$$
c(y'' - a^2y)_l = \left(
    -{ 4 \sin^2 {lh \over 2} \over h^2 } - a^2
\right) c_l,
$$

$$
c(f)_l = \sum_{x_k \in X} f_k e^{-ilx_k}
$$

$$
\implies c_l = - { c(f)_l \over { 4 \sin^2 {lh \over 2} \over h^2 } + a^2 }.
$$

Далее берётся обратное преобразование и находится $y_k$.
:::