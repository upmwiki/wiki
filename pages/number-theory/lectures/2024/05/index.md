---
prev:
    text: § 4. Взаимно простые числа. Наименьшее общее кратное
    link: ../04/
next:
    text: § 6. Основная теорема арифметики и её следствия
    link: ../06/
---

**Лекция**

# § 5. Простые и составные числа

::: info ОПРЕДЕЛЕНИЕ
Натуральное число называется **простым**, если оно имеет ровно два натуральных делителя.
:::

::: info ОПРЕДЕЛЕНИЕ
Натуральное число называется **составным**, если оно имеет более двух натуральных делителей.
:::

Примеры:

1. Число 17 простое, т. к. имеет два натуральных делителя: 1 и 17.
2. Число 1000 составное, т. к. имеет дболее двух натуральных делителей: 1, 2, 500 и т. д.
3. Число 1 не является ни простым ни составным, т. к. имеет только один натуральный делитель.
4. Простое число $p$ имеет натуральные делители $1$ и $p$.

## Свойства простых чисел

::: info СВОЙСТВО 1 (P1)
Если $p$ — простое, а $n \ne 1 \in \mathbb{N}$ и $p ~ \small \vdots \normalsize ~ n$, то $p = n$.
:::

::: info СВОЙСТВО 2 (P2)
Если $p_1 \ne p_2$ — простые числа, то $(p_1; p_2) = 1$.
:::

::: info СВОЙСТВО 3 (P3)
Если $p$ — простое число, $n \in \mathbb{N}$, то либо $n ~ \small \vdots \normalsize ~ p$ либо $(n; p) = 1$.
:::

:::: info СВОЙСТВО 4 (P4)
Если $n_1 \cdot n_2 ~ \small \vdots \normalsize ~ p$, то либо $n_1 ~ \small \vdots \normalsize ~ p$ либо $p_2 ~ \small \vdots \normalsize ~ p$.

::: info Доказательство
Известно, что $n_1 \cdot n_2 ~ \small \vdots \normalsize ~ p$. Достаточно доказать, что если один из множителей не делится на $p$, то второй делится на $p$.

Пусть $n_1 \!\!\not\small \vdots \normalsize ~ p$. Тогда, по свойству P3, $(n_1; p) = 1$.

Поскольку $n_1 \cdot n_2 ~ \small \vdots \normalsize ~ p$ и $(n_1; p) = 1$, то, по свойству 3 взаимно простых чисел, $n_2 ~ \small \vdots \normalsize ~ p$. Свойство доказано.
:::

*Замечание.* С помощью метода математической индукции можно доказать свойство P4 для любого числа множителей.
::::

::::: info СВОЙСТВО 5 (P5)
Для любого натурального числа $n$, не равного 1, его наименьший отличный от нуля натуральный делитель $p$ является простым числом, причём если $n$ — простое, то $n = p$, а если $n$ — составное, то $p \le \sqrt{n}$.

:::: info Доказательство
1. $n ~ \small \vdots \normalsize ~ p$. Если $p$ — составное, то $p = km$, где $1 < m < p$, $p ~ \small \vdots \normalsize ~ m$.

   $$
   \begin{rcases}
   n ~ \small \vdots \normalsize ~ p \\
   p ~ \small \vdots \normalsize ~ m
   \end{rcases} \implies n ~ \small \vdots \normalsize ~ m, m < p,
   $$

   чего не может быть.

2. Если $n$ — простое, то $n ~ \small \vdots \normalsize ~ n$ и $n ~ \small \vdots \normalsize ~ 1$ — у числа $n$ только два делителя. Так как $p \ne 1$ (по условию), то $p = n$.

   Пусть $n$ — составное. Т. к. $n ~ \small \vdots \normalsize ~ p$, то $n = mp$, причём $m \ge p$ (т. к. $p$ — наименьший делитель). Тогда

   $$
   p^2 \le pm ~ ~ ~ ~ (=n)
   $$

   $$
   \implies p^2 \le n \implies p \le \sqrt{n}.
   $$

Свойство доказано.
::::

:::: info Следствие
Если $n$ не делится ни на одно простое число, которое не превосходит $\sqrt{n}$, то $n$ — простое.

::: info Доказательство
Наименьший не равный единице делитель составного числа $n$ — это простое число, не превосходящее $\sqrt{n}$. Ни на одно из чисел, не превосходящих $\sqrt{n}$, оно не делится, значит, оно простое. $~~~\blacksquare$
:::
::::
:::::

::: info ПРИМЕР
Известно, что число 173 не делится на 2, 3, 5, 7, 11, 13. Следует ли отсюда, что оно — простое?

173 не делится ни на одно простое число, которое меньше или равно $\sqrt{173}$, следовательно, по следствию, 173 — простое.
:::

## Решето Эратосфена

**Решето Эратосфена** — способ отыскания простых чисел на промежутке от $2$ до $n$.

Вначале записывают все натуральные числа от $2$ до $n$.

* 1 шаг: число 2 — простое. Все остальные числа, кратные 2, составные — вычёркиваем их.
* 2 шаг: первое из оставшихся чисел — число 3 — простое. Все числа, кратные 3, составные — вычёркиваем их.

На каждом последующем $k$-ом шаге первое невычеркнутое число $p_k$ простое, т. к. не делится ни на одно из меньших простых чисел (иначе мы его уже бы его вычеркнули). Все остальные числа, кратные $p_k$, вычёркиваем.

На $k$-ом шаге вычёркиваются все числа, для которых $p_k$ — наименьший отличный от нуля натуральный делитель.

Если $p_k \le \sqrt{n}$, а $p_{k+1} > \sqrt{n}$, то все числа, оставшиеся после $k$-го числа, простые, т. к. не делятся ни на одно простое число, которое $\le \sqrt{n}$.

### Схема решета Эратосфена

1. На первом шаге получаем простое число 2 и вычёркиваем все числа, кратные 2.
2. На $k$-м шаге получаем простое число $p_k$ (первое невычеркнутое число), и вычёкиваем все числа, кратные $p_k$.

   $k$-й шаг выполняется, если $p_k \le \sqrt{n}$, иначе процесс заканчивается.
3. Все оставшиеся числа — простые.

## Теорема Евклида, теорема об интервалах

:::: info ТЕОРЕМА (ЕВКЛИДА)
Простых чисел бесконечно много.

::: info Доказательство
Предположим, что множество простых чисел конечно, и выпишем все простые числа: $p_1, p_2, ..., p_k$. Рассмотрим число $n = p_1 \cdot p_2 \cdot ... \cdot p_k + 1$. Тогда $n$ не делится на $p_i$, $1 \le i \le k$.

Пусть $p$ — наименьший отличный от 1 делитель числа $n$. Тогда $p$ — простое число (по свойству P5), не совпадающее ни с одним из чисел $p_1, ..., p_k$. Таким образом, предположив, что множество простых чисел конечно, мы нашли ещё одно простое число, не входящее это множество, то есть мы пришли к противоречию. Теорема доказана.
:::
::::

:::: info ТЕОРЕМА (ОБ ИНТЕРВАЛАХ)
Для любого натурального числа $n$ существует $n$ подряд идущих составных чисел.

::: info Доказательство
Рассмотрим следующие числа:

$$
\begin{matrix}
n ~ \text{штук}
\end{matrix}

\begin{cases}
(n+1)! + 2 & \small \vdots \normalsize ~ 2 \\
(n+1)! + 3 & \small \vdots \normalsize ~ 3 \\
\cdots & \\
(n+1)! + (n+1) & \small \vdots \normalsize ~ (n+1)
\end{cases}
$$

Все эти числа составные. Теорема доказана.
:::
::::