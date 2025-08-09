---
prev: false
next: false
---

**Раздел I. Теория вероятностей**

# § 12. Основные дискретные распределения

## Биномиальное распределение

**Биномиальное распределение** с параметрами $n$, $p$, где $n \in \mathbb{N}$, $0 < p < 1$, имеет случайная величина $X$, равная числу успехов в серии из $n$ испытаний по схеме Бернулли с вероятностью успеха $p$. Тогда случайная величина $X$ принимает целое значение от $0$ до $n$, а вероятности вычисляются по *формуле Бернулли:*

$$
P \{ X = k \} = C_n^k \cdot p^k \cdot q^{n-k},
$$

где $q = 1 - p$.

Найдём $M(X)$ и $\mathcal{D}(X)$ для биномиального распределения. Для этого введём обозначение: $X_i$ — число успехов в испытании с номером $i$, $1 \le i \le n$.

| $\boldsymbol{X_i}$ | $\boldsymbol{0}$ | $\boldsymbol{1}$ |
|-|-|-|
| $P$ | $1 - p ~ ~ (=q)$ | $p$ |

Тогда

$$
X = X_1 + X_2 + \cdots + X_n = \sum_{i=1}^n X_i;
$$

$$
M(X) + M(X_1) + M(X_2) + \cdots + M(X_n) = \sum_{i=1}^n M(X_i),
$$

$$
M(X_i) = 0 \cdot q + 1 \cdot p = p;
$$

$$
\mathcal{D}(X_i) = \underbrace{M(X_i^2)}_{p} - \underbrace{M^2(X_i)}_{p^2} = p - p^2 = p(1 - p) = pq.
$$

Таким образом,

$$
M(X_i) = p, ~ ~ ~ ~ \mathcal{D}(X_i) = pq,
$$

$$
M(X) = \sum_{i=1}^n p = np.
$$

Так как испытания по схеме Бернулли независимые, то случайные величины $X_1, ..., X_n$ — независимые, значит, дисперсия их суммы также равна сумме дисперсий:

$$
\mathcal{D}(X) = \sum_{i=1}^n \mathcal{D}(X_i) = npq.
$$

Итак, для этого распределения

$$
M(X) = np, ~ ~ ~ ~ \mathcal{D}(X) = npq,
$$

$$
\sigma(X) = \sqrt{npq}.
$$

## Распределение Пуассона

Если $n$ в схеме Бернулли стремится к бесконечности, а $p \to 0$, причём $np$ остаётся постоянным ($np = \lambda > 0$), то

$$
p_n (k) = {\lambda^k \over k!} \cdot e^{-\lambda}.
$$

Случайная величина $X = 0, 1, ..., k, ...$ с вероятностями $P\{ X = k \} = {\lambda^k \over k!} \cdot e^{-\lambda}$ имеет **распределение Пуассона**.

Проверим, что сумма вероятностей равна 1:

$$
\sum_{k=0}^\infty p_k
= \sum_{k=0}^\infty {\lambda_k \over k!} e^{-\lambda}
= e^{-\lambda} \sum_{k=0}^\infty {\lambda^k \over k!} = (∗)
$$

Здесь сумма — это разложение в ряд Тейлора функции $e^\lambda$.

$$
(∗) = e^{-\lambda} \cdot e^\lambda = 1.
$$

Найдём для распределения Пуассона $M(X)$ и $\mathcal{D}(X)$:

$$
M(X)
= \sum_{k=0}^\infty k \cdot {\lambda^k \over k!} \cdot e^{-\lambda}
= \sum_{k=1}^\infty {\lambda^k \over (k-1)!} e^{-\lambda} =
$$

$$
= e^{-\lambda} \sum_{k=1}^\infty {\lambda^{k-1} \cdot \lambda \over (k-1)!}
= e^{-\lambda} \cdot \lambda \cdot \sum_{k=1}^\infty {\lambda^{k-1} \over (k-1)!} =
$$

$$
= \left\{ m = k-1 \right\}
= e^{-\lambda} \cdot \lambda \cdot \sum_{k=1}^\infty {\lambda^m \over m!} = e^{-\lambda} \cdot \lambda \cdot e^\lambda = \lambda.
$$

Таким образом, математическое ожидание случайной величины, имеющей распределение Пуассона с параметром $\lambda$, равняется $\lambda$.

> Доказать самостоятельно, что $\mathcal{D}(X) = \lambda$.

## Геометрическое распределение

**Геометрическое распределение** с параметром $p$ ($0 < p < 1$) имеет случайная величина $X$, равная числу испытаний до первого успеха включительно в схеме Бернулли с вероятностью успеха $p$.

$X$ принимает все натуральные значения, причём $p\{ X = 1\} = p$, $p\{ X = 2\} = pq$, $p\{ X = 3\} = pq^2$, ..., $p\{ X = k\} = pq^{k-1}$.

$$
\boxed{ ~ p \{ X = k \} = pq^{k-1} ~ }
$$

> Найти для геометрического распределения $M(X)$ и $\mathcal{D}(X)$.

## Гипергеометрическое распределение

Пусть имеется $a$ объектов первого типа и $b$ объектов второго типа. Из всех $a+b$ объектов делают выборку объёмом $n$. Случайная величина $X$, равная числу объектов первого типа в этой выборке, имеет **геометрическое распределение** с параметрами $a$, $b$, $n$.

Множество значений $X$ зависит от соотношения между параметрами, а вероятности вычисляются по формуле:

$$
P\{ X = k \} = { C_a^k \cdot C_b^{n-k} \over C_{a+b}^n }.
$$

---

*(Дополнение от 13.11.2023)*

Найдём $M(X)$ и $\mathcal{D}(X)$ для геометрического распределения.

$$
M(X)
= 1 \cdot p \cdot q^0 + 2 \cdot p \cdot q^1 + 3 \cdot p \cdot q^2 + \cdots + npq^{n-1} + \cdots =
$$

$$
= p \cdot \left(
    1 + 2q + 3q^2 + \cdots + nq^{n-1} + \cdots
\right) =
$$

$$
= p \cdot \left(
    1 + q + q^2 + \cdots + q^n + \cdots
\right)' =
$$

$$
= p \cdot \left(
    {1 \over 1 - q}
\right)'
= p \cdot \left(
    - { 1 \over (1 - q)^2 }
\right) \cdot (-1) =
$$

$$
= {p \over (1-q)^2}
= {p \over p^2} = {1 \over p}.
$$

$$
\mathcal{D}(X)
= M(X^2) - M^2(X) =
$$

$$
= \left(
    1^2 p q^0 + 2^2 p q^1 + 3^2 p q^2 + \cdots + n^2 p q^{n-1} + \cdots
\right) - {1 \over p^2} =
$$

$$
= p \left[
    \left(
        2 + 3 \cdot 2 \cdot q + 4 \cdot 3 \cdot q^2 + \cdots + n (n+1) q^{n-1} + \cdots
    \right) ~ -
\right.
$$

$$
\left.
    - \left(
        1 + 2q + 3q^2 + \cdots + nq^{n-1} + \cdots
    \right)
\right] - {1 \over p^2} =
$$

$$
= p \left(
    \left( {1 \over 1 - q} \right)''
    -
    \left( {1 \over 1 - q} \right)'
\right) - {1 \over p^2} =
$$

$$
= p \left(
    {2 \over (1-q)^3} - {1 \over (1 - q)^2}
\right) - {1 \over p^2} =
$$

$$
= p \left( {2 - 1 + q \over (1-q)^3} \right) - {1 \over p^2}
= p \left( 1 + q \over (1-q)^2 \right) - {1 \over p^2} =
$$

$$
= p \cdot {1 + q \over q^3} - {1 \over p^2}
= {1 + q - 1 \over p^2}
= {q \over p^2} = {1 - p \over p^2}.
$$

Найдём $M(X)$ и $\mathcal{D}(X)$ случайной величины, распределённой по закону Пуассона.

$$
M(X)
= 0 \cdot {\lambda^0 e^{-\lambda} \over 0!}
+ 1 \cdot {\lambda^1 e^{-\lambda} \over 1!}
+ 2 \cdot {\lambda^2 e^{-\lambda} \over 2!} + \cdots =
$$

$$
= e^{-\lambda} \lambda \left(
    1 + {\lambda \over 1!} + {\lambda^2 \over 2!} + \cdots + {\lambda^n \over n!}
\right) =
$$

$$
= \lambda \cdot e^{-\lambda} \cdot e^{\lambda} = \lambda.
$$

$$
\mathcal{D}(X) = \left(
    0 \cdot {\lambda^0 e^{-\lambda} \over 0!}
    + 1 \cdot {\lambda^1 e^{-\lambda} \over 1!}
    + 2 \cdot {\lambda^2 e^{-\lambda} \over 2!} + \cdots
\right) - \lambda^2 =
$$

$$
= \lambda e^{-\lambda}
\left(
    {1 \over 0!} + 2 \cdot {\lambda \over 1!} + 3 \cdot {\lambda^2 \over 2!} + \cdots + n {\lambda^{n-1} \over (n-1)!} + \cdots
\right) - \lambda^2 =
$$

$$
= \lambda e^{-\lambda} \left(
    \lambda + {\lambda^2 \over 1!} + {\lambda^3 \over 2!} + \cdots + {\lambda^n \over (n-1)!}' - \lambda^2
\right) =
$$

$$
= \lambda e^{-\lambda} \left[
    \lambda \cdot \left(
        1 + {\lambda \over 1!} + {\lambda^2 \over 2!} + \cdots + {\lambda^{n-1} \over (n-1)!} + \cdots
    \right)
\right]' - \lambda^2 =
$$

$$
= \lambda e^{-\lambda} \left( \lambda e^\lambda \right)' - \lambda^2
= \lambda e^{-\lambda} \left( e^\lambda + \lambda e^\lambda \right) - \lambda^2 =
$$

$$
= \lambda + \lambda^2 - \lambda^2 = \lambda.
$$

::: info Пример (Пуассоновский поток событий)
Поток событий — события, происходящие во времени с неким интервалом.

**Пуассоновским потоком** событий называется временна́я последовательность однородных событий, обладающая тремя свойствами:

1. **ординарность:** для малых промежутков времени вероятность того, что за этого промежуток произойдёт больше одного события, пренебрежимо мала по сравнению с вероятностью того, что произойдёт одно событие;

2. **стационарность:** вероятность появления определённого числа событий за данный промежуток времени зависит только от длины этого промежутка;

3. **отсутствие последействия:** вероятность появления определённого числа событий за данный промежуток времени не зависит от того, сколько событий появилось до этого промежутка.

Среднее число событий в единицу времени называется **интенсивностью потока** ($\lambda$).

Если $X$ — число событий данного потока за промежуток времени длины $T$, то $X$ имеет распределение Пуассона с параметром $\lambda T$.

$$
P_T \{ X = k \} = {(\lambda T)^k \cdot e^{-\lambda T} \over k!}.
$$
:::
