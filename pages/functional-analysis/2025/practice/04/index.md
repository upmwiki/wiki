---
prev: false
next: false
---

**Практическое занятие**

## Мера

:::: info Задача 1
Имеется измеримое пространство $(X, \mathcal{F}, \mu)$. Пусть $x = [0; 10]$, $\mathcal{F}$ — борелевская $\sigma$-алгебра (мера интервала равна его длине), $\mu$ — мера Лебега. Посчитать интеграл

$$
\intop_{[0;5]} x^2 ~ \text{d}\mu.
$$

::: info Решение
$$
\intop_{[0;5]} x^2 ~ \text{d}\mu =
\intop_0^5 x^2 ~ \text{d}x = \left.{x^3 \over 3} \right|_0^5
= {5^3 \over 3} - 0 = {125 \over 3}.
$$

**Ответ:** $125/3$.
:::
::::

:::: info Задача 2
Дано измеримое пространство $(X, \mathcal{F}, \mu)$. Пусть $X = \set{1, 2, 3}$, $\mathcal{F} = 2^x$ (т. е. все подмножества $X$), $\mu(\set{1}) = 5$, $\mu(\set{2}) = 3$, $\mu(\set{3}) = 6$. Функция $f$ такая, что $f(1) = 3$, $f(2) = -4$, $f(3) = 11$. Посчитать интеграл

$$
\intop_X f(x) ~ \text{d}\mu.
$$

::: info Решение
$$
\intop_X f(x) ~ \text{d}\mu
= f(1) \cdot \mu(\set{1}) + f(2) \cdot \mu(\set{2}) + f(3) \cdot \mu(\set{3}) =
$$

$$
= 3 \cdot 5 + (-4) \cdot 3 + 11 \cdot 6
= 15 - 12 + 66 = 69.
$$

**Ответ:** $69$.
:::
::::

:::: info Задача 3
$X = \set{a,b,c,d}$. $\mathcal{F} = \sigma(\set{a,b}, \set{c})$. Функция $g$ такая, что $g(a) = 3$, $g(b) = 4$, $g(c) = -1$, $g(d) = 5$. Мера: $\mu(\set{a,b}) = 2$, $\mu(\set{c}) = 3$, $\mu(\set{d}) = 1$. Посчитать интеграл

$$
\intop_X g ~ \text{d}\mu.
$$

::: info Решение
**Ответ:** интеграл не существует, т. к. функция $g$ не измерима по этой мере; прообраз значения $g = 3$ — это $\set{a}$, а $\set{a} \notin \mathcal{F}$.
:::

*(А если $g(b) = 3 ~ (= g(a))$, то интеграл считается. Показано в следующей задаче.)*
::::

:::: info Задача 4
$X = \set{a,b,c,d}$. $\mathcal{F} = \sigma(\set{a,b}, \set{c})$. Функция $h$ такая, что $h(a) = 5$, $h(b) = 5$, $h(c) = 3$, $h(d) = 2$. Мера: $\mu(\set{a,b}) = 2$, $\mu(\set{c}) = 3$, $\mu(\set{d}) = 1$. Посчитать интеграл

$$
\intop_X h ~ \text{d}\mu.
$$

::: info Решение
$$
\intop_X h ~ \text{d}\mu
= 5 \cdot \mu(\set{a,b}) + 3 \cdot \mu(\set{c}) + 2 \cdot \mu(\set{d}) =
$$

$$
= 5 \cdot 2 + 3 \cdot 3 + 2 \cdot 1 = 10 + 9 + 2 = 21.
$$

**Ответ:** $21$.
:::
::::

:::: info Задача 5
Пусть $X = [0; 10]$. $\mathcal{F}$ — борелевская $\sigma$-алгебра. $\mu(\set{3}) = 2$; $\mu((a;b)) = 7 \cdot (b-a)$, если $4 < a < b < 6$; $\mu($ любой интервал, не содержащий $\set{3}$ либо $(4;6)) = 0$. Функция $f(x) = x^2$. Посчитать интеграл

$$
\intop_{(1;8)} x^2 ~ \text{d}\mu.
$$

::: info Решение
$$
\intop_{(1;8)} x^2 ~ \text{d}\mu
= f(3) \cdot \mu(\set{3}) + 7 \intop_4^6 x^2 ~ \text{d}x =
$$

$$
= 9 \cdot 2 + 7 \cdot \left.{x^3 \over 3} \right|_4^6
= 18 + {7 \over 3} \left( 216 - 64 \right) =
$$

$$
= 18 + {7 \cdot 152 \over 3} = {1118 \over 3}.
$$

**Ответ:** $1118/3$.
:::
::::

## Метрические пространства

:::: info Задача 1
Пусть $X = C[0;1]$ (функции, непрерывные на отрезке $[0;1]$, т. е. по умолчанию задана метрика $d(f,g) = \max\limits_{[0;1]} |f(x) - g(x)|$). Является ли последовательность функций $x_n = x^n$, $n = 1,2,3,...$, сходящейся?

::: info Решение
Стремится ли эта последовательность к какой-то непрерывной функции?

$$
x_n \xrightarrow[n \to \infty]{} f(x) =
\begin{cases}
0, & 0 \le x < 1, \\
1, & x = 1.
\end{cases}
$$

Однако в точке $x = 1$ разрыв, следовательно, $f(x) \notin C[0;1]$. Тогда не сходится, т. к. предельная функция разрывная.

...

:::
::::

Любая сходящаяся последовательность фундаментальна, т. е. $\lim\limits_{n,m \to \infty} d(x_n, x_m) = 0$.

:::: info Задача 2
$X = C[0;1]$. $d(f,g) = \max\limits_{[0;1]} |f(x) - g(x)|$. Является ли последовательность $x_n = x^n$ фундаментальной?

::: info Решение
$$
d(x_n, x_m) = \max_{[0;1]} |x^n - x^m| = (∗)
$$

$$
(x^n - x^m)' = n \cdot x^{n-1} - m \cdot x^{m-1} = 0.
$$

Пусть $n > m$, тогда $n \cdot x^{n-m} = m$, следовательно, $\displaystyle x = \left({m \over n}\right)^{1 \over n-m}$.

$$
(∗) =
\left(\left({m \over n}\right)^{1 \over n-m}\right)^n
- \left(\left({m \over n}\right)^{1 \over n-m}\right)^m.
$$

$$
\lim_{n,m \to \infty}
\left[ \left(\left({m \over n}\right)^{1 \over n-m}\right)^n
- \left(\left({m \over n}\right)^{1 \over n-m}\right)^m \right] =
$$
$$
= 
\lim_{n,m \to \infty} \left({m \over n}\right)^{n \over n-m}
- \lim_{n,m \to \infty} \left({m \over n}\right)^{m \over n-m}
= \set{ m = \alpha n } =
$$

$$
= \left\{
    \begin{matrix}
    {n \over n-m} = {n \over (1-\alpha)n} = {1 \over \alpha} \\
    {m \over n-m} = {\alpha \over 1 - \alpha}
    \end{matrix}
\right\}
= \lim \alpha^{1 \over 1 - \alpha} - \lim \alpha^{\alpha \over 1-\alpha} = \text{число} \not\rightarrow 0.
$$
:::
::::