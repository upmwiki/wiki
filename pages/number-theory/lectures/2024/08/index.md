---
prev:
    text: § 7. Сравнимость по модулю
    link: ../07/
next:
    text: § 9. Решение сравнений
    link: ../09/
---

**Лекция**

# § 8. Три теоремы о сравнениях

::::: info ТЕОРЕМА 1 (МАЛАЯ ТЕОРЕМА ФЕРМА)
Если $p$ — простое число, $a \!\!\not \small \vdots \normalsize ~ p$ ($a \in \mathbb{Z}$), то $a^{p-1} \equiv 1 \pmod{p}$.

:::: info Доказательство
Пусть $r$ — остаток от деления $a$ на $p$. Тогда $a \equiv r \pmod{p}$. Т. к. $a \!\! \not \small \vdots \normalsize ~ p$, то $r \ne 0$.

Рассмотрим в сокращённой таблице умножения в $p$-арифметике строку с номером $r$: там стоят остатки $r_1, r_2, ..., r_{p-1}$.

Получается, что $r \otimes 1 = r_1$, $r \otimes 2 = r_2$, ..., $r \otimes (p-1) = r_{p-1}$. По основному свойству таблицы умножения $r_1, r_2, ..., r_{p-1}$ — это те же остатки $1, 2, ..., p-1$, но, быть может, в другом порядке.

Эти равенства запишем в виде сравнений:

$$
\begin{array}{c}
r \cdot 1 \equiv r_1 \pmod{p} \\
r \cdot 2 \equiv r_2 \pmod{p} \\
\cdots \\
r \cdot (p-1) \equiv r_{p-1} \pmod{p}
\end{array}
$$

Используя умножение сравнений, получим

$$
r^{p-1} \cdot 1 \cdot 2 \cdot ... \cdot (p - 1) \equiv r_1 \cdot r_2 \cdot ... \cdot r_{p-1} \pmod{p}
$$

Поскольку числа от $1$ до $p-1$ взаимно просты с $p$, то, по свойству сравнений С8, можно разделить обе части на произведения этих чисел:

$$
r^{p-1} \equiv 1 \pmod{p}.
$$

Тогда

$$
\begin{rcases}
a \equiv r \pmod{p} \\
r^{p-1} \equiv 1 \pmod{p}
\end{rcases} \implies a^{p-1} \equiv r^{p-1} \equiv 1 \pmod{p}. ~ ~ ~ \blacksquare
$$
::::

:::: info Следствие
Для любого целого $a$ и любого простого $p$

$$
a^p \equiv a \pmod{p}.
$$

::: info Доказательство
Либо $a ~ \small \vdots \normalsize ~ p$ либо $a \!\! \not \small \vdots \normalsize ~ p$.

Если $a \!\! \not \small \vdots \normalsize ~ p$, то тогда по малой теореме Ферма

$$
\begin{array}{c}
a^{p-1} \equiv 1 \pmod{p} ~ ~ ~ |\cdot a \\
a^p \equiv a \pmod{p}
\end{array}
$$

Если $a ~ \small \vdots \normalsize ~ p$, то $a \equiv 0 \pmod{p}$ и $a^p ~ \small \vdots \normalsize ~ p$, то есть $a^p \equiv 0 \pmod{p}$.

$$
\begin{rcases}
a \equiv 0 \pmod{p} \\
a^p \equiv 0 \pmod{p}
\end{rcases} \implies a^p \equiv a \pmod{p}. ~ ~ ~ \blacksquare
$$
:::
::::
:::::

Пусть $m \in \mathbb{N}$. Обозначим через $\varphi(m)$ количество натуральных чисел, которые меньше $m$ и взаимно просты с $m$. Мы видели, что если $m = p$ — простое, то $\varphi(p) = p - 1$.

:::: info ТЕОРЕМА 2 (ТЕОРЕМА ЭЙЛЕРА)
Пусть $m \in \mathbb{N}$, $m > 1$ и $a \in \mathbb{Z}$, причём $(a; m) = 1$. Тогда

$$
a^{\varphi(m)} \equiv 1 \pmod{m}.
$$

::: info Доказательство
Выберем из сокращённой таблицы умножения $m$-арифметики те строки и столбцы, номера которых взаимно просты с $m$ (их всего будет $\varphi(m)$). Полученная "уменьшенная" таблица будет размером $\varphi(m) \cdot \varphi(m)$.

1. Если перемножить два остатка, взаимно простых с $m$, то получится остаток, взаимно простой с $m$.

   Пусть $(r_1; m)$, $(r_2; m) = 1$, $r_1 \otimes r_2 = r$. Тогда $r_1 \cdot r_2 \equiv r \pmod{m}$.

   Если $(r; m) \ne 1$, то существует простое число $p$ такое, что $r ~ \small \vdots \normalsize ~ p$ и $m ~ \small \vdots \normalsize ~ p$.

   Следовательно, $r_1 \cdot r_2 = r + mt ~~~ \small \vdots \normalsize ~ p$ $\implies$ $r_1 \cdot r_2 ~ \small \vdots \normalsize ~ p$. Значит, т. к. $p$ — простое, то либо $r_1 ~ \small \vdots \normalsize ~p$ либо $r_2 ~ \small \vdots \normalsize ~ p$. Также $m ~ \small \vdots \normalsize ~ p$. Это противоречит тому, что $(r_1; m) = 1$ и $(r_2; m) = 1$. Значит $(r_1 \cdot r_2; m) = 1$. Таким образом, в уменьшенной таблице умножения содержатся только остатки, взаимно простые с $m$.

2. В каждой строке уменьшенной таблицы числа не повторяются.

   Действительно, если остатки $r$, $r_1$ и $r_2$ взаимно просты с $m$ и предположить, что $r \otimes r_1 = r \otimes r_2$, то это означает, что $r \cdot r_1 \equiv r \cdot r_2 \pmod{m}$.
   
   Поскольку $(r; m) = 1$, сократим на $r$:
   
   $$
   r_1 \equiv r_2 \pmod{m},
   $$

   чего не может быть.

3. Пусть $r$ — остаток от деления $a$ на $m$. Поскольку $(a; m) = 1$, то $(r; m) = 1$.

   Возьмём в уменьшенной талице строку с номером $r$. У нас получится:

   $$
   \begin{array}{c}
   r \cdot r_1 \equiv r_1' \pmod{m} \\
   r \cdot r_2 \equiv r_2' \pmod{m} \\
   r \cdot r_{\varphi(m)} \equiv r_{\varphi(m)}' \pmod{m}
   \end{array}
   $$

   Перемножив эти сравнения, получим

   $$
   r^{\varphi(m)} \cdot r_1 \cdot r_2 \cdot ... \cdot r_{\varphi(m)} \equiv r_1 \cdot r_2 \cdot ... \cdot r_{\varphi(m)} \pmod{m} \implies
   $$

   $$
   \implies r^{\varphi(m)} \equiv 1 \pmod{m}.
   $$

   $$
   \begin{rcases}
   a \equiv r \pmod{m} \\
   r^{\varphi(m)} \equiv 1 \pmod{m}
   \end{rcases} \implies a^{\varphi(m)} \equiv 1 \pmod{m}.
   $$
:::
::::

::::: info ТЕОРЕМА 3 (ТЕОРЕМА ВИЛЬСОНА)
Пусть $p \in \mathbb{N}$, $p \ne 1$. Тогда число $p$ является простым тогда и только тогда, когда

$$
(p - 1)! + 1 \equiv 0 \pmod{p}.
$$

Для доказательства теоремы потребуется лемма.

:::: info ЛЕММА
Если $p$ — простое, то

$$
a^2 \equiv 1 \pmod{p} \iff \left[
    \begin{array}{l}
    a \equiv 1 \pmod{p}, \\
    a \equiv p - 1 \pmod{p}.
    \end{array}
\right.
$$

::: info Доказательство (леммы)
![](/media/images/number%20theory%208.jpg)
:::
::::

Приступим к доказательству теоремы.

:::: info Доказательство (теоремы)
1. Пусть $p$ — простое. Тогда в $p$-арифметике возможно деление на любой остаток, не равный нулю. Значит, для любого остатка $x$, не равного нулю:
   $$
   \exists y \ne 0 : ~ ~ ~ (x \otimes y = 1).
   $$

   Из леммы следует, что если $x \ne 1$ и $x \ne p - 1$, то $y \ne x$.

   Значит, остатки от $2$ до $p - 2$ разбиваются на пары, произведение каждой из которых равно 1.

   $$
   (p - 1)! + 1 = 1 \cdot 2 \cdot ... \cdot (p - 1) + 1 =
   $$

   $$
   = 1 \cdot \left( 2 \cdot ... \cdot (p-2) \right) (p-1) + 1 \equiv
   $$
   
   $$
   \equiv 1 \cdot 1 \cdot (p - 1) + 1 \pmod{p} \equiv p \pmod{p} \equiv 0 \pmod{p}.
   $$

   Следовательно,

   $$
   (p - 1)! + 1 \equiv 0 \pmod{p}.
   $$

2. Пусть $(p - 1)! + 1 \equiv 0 \pmod{p}$. Следовательно, $(p-1)! + 1 ~ \small \vdots \normalsize ~ p$.

   Так как $p \ne 0$, то $p$ может быть либо простым либо составным.

   Если $p$ — составное, то среди чисел от $2$ до $p - 1$ найдётся такое число $d$, что $p ~ \small \vdots \normalsize ~ d$. Тогда $(p - 1)! ~ \small \vdots \normalsize ~ d$ и, следовательно, $(p - 1)! + 1 ~ \!\!\not\small\vdots\normalsize ~ d$.

   Поскольку $(p - 1)! + 1 ~ \small \vdots \normalsize ~ p$ и мы предположили, что $p ~ \small \vdots \normalsize ~ d$, то $(p - 1)! + 1 ~ \small \vdots \normalsize ~ d$.

   Полученное противоречие доказывает, что $p$ не может быть составным, и $p \ne 1$, следовательно, оно простое.

Теорема доказана полностью.
::::
:::::