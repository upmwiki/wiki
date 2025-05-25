---
prev:
    text: § 39. Дискретное преобразование Фурье для периодической функции
    link: ../18/
next:
    text: Тема 7. Численное интегрирование
    link: ../../07/intro/
---

**Тема 6. Аппроксимация функций**

# § 40. ДПФ для непериодической функции

Пусть функция задана на всей числовой оси:

$$
y = f(x), ~ ~ ~ ~ x \in (-\infty, \infty),
$$

$x \in X = \set{ x = x_k = 0; \pm 1; \pm 2; ... }$, $k \in \mathbb{Z}$.

Будем считать, что выполняется условие абсолютной сходимости:

$$
\sum_{x_k \in X} \left| f(x_k) \right| < \infty.
$$

В этом случае назовём дискретным преобразованием Фурье выражение

$$
c(\beta) = \sum_{x_k \in X} f(x_k) e^{-i \beta x_k} h,
$$

где $h$ — нормировочный множитель. Тогда ДНФ обладает следующими свойствами:

1. *Линейность:* если $f = af_1 + bf_2$, где $a,b = \text{const}$, то $c(\beta) = ac_1(\beta) + bc_2(\beta)$

   (следует из определения)

2. *Периодичность:*
   
   $$
   c\left(\beta + {2\pi \over h}\right)
   = \sum_{x_k \in X} f(x_k) e^{-i \left( \beta + {2 \pi \over h}\right) x_k} =
   $$

   $$
   = \sum_{x_k \in X} f(x_k) e^{-i \beta x_k} \underbrace{e^{-i \cdot 2\pi k}}_{=1} = c(\beta),
   $$

   т. е. ДПФ периодична с периодом ${2 \pi \over h}$.

3. *Обратное преобразование:*

   $$
   {1 \over 2\pi} \int_{-\pi/h}^{\pi/h} c(\beta) e^{i\beta x_k} ~ \text{d}\beta =
   $$

   $$
   = {1 \over 2\pi} \int_{-\pi/h}^{\pi/h} \sum_{x_j \in X} f(x_j) e^{-i \beta x_j} \cdot h \cdot e^{i\beta x_k} ~ \text{d}\beta =
   $$

   $$
   = {h \over 2\pi} \sum_{x_j \in X} f(x_j) \int_{-\pi/h}^{\pi/h} e^{i\beta (x_k - x_j)} ~ \text{d}\beta = (∗)
   $$

   $$
   \int_{-\pi/h}^{\pi/h} e^{i\beta(x_k - x_j)} ~ \text{d}\beta =
   $$

   $$
   = \begin{cases}
   2\pi h, ~ ~ ~ ~ k = j \\
   \left.{ e^{i\beta(x_k-x_j)} \over i(x_k - x_j) }\right|_{-\pi/h}^{\pi/h} = {e^{i\pi(k-j)} - e^{-i\pi(k-j)} \over ih(k-j)} = {2 \sin(k-j) \pi \over h(k-j)} = 0, ~ ~ ~ ~ k \ne j
   \end{cases}
   $$

   $$
   (∗) = {h \over 2\pi} f(x_k) \cdot {2 \pi h \over h} = f(x_k) \implies
   $$

   $$
   \implies {1 \over 2\pi} \int_{-\pi/h}^{\pi/h} c(\beta) e^{i\beta x_k} ~ \text{d}\beta
   $$

   — обратное преобразование.