---
prev:
    text: § 5. Простые и составные числа
    link: ../05/
next:
    text: § 7. Сравнимость по модулю
    link: ../07/
---

**Лекция**

# § 6. Основная теорема арифметики и её следствия

:::: info ТЕОРЕМА (ОСНОВНАЯ ТЕОРЕМА АРИФМЕТИКИ)
Всякое натуральное число, большее 1, либо простое либо может быть представлено в виде простых чисел, причём это представление единственно с точностью до порядка множителей.

::: info Доказательство
Пусть $n$ — составное число.

1. Возможность представления. Требуется представить $n$ в виде $p_1 \cdot p_2 \cdot ... \cdot p_k$, где все множители простые.

   В качестве $p_1$ выбираем наименьший отличный от единицы делитель числа $n$. Тогда $n = p_1 \cdot n_1$, причём $n_1 \ge p_1$.

   В качестве $p_2$ берём первый отличный от единицы делитель числа $n_1$. Тогда $n = p_1 \cdot p_2 \cdot n_2$, причём $n_2 < n_1$.

   Если $n_2 = 1$, то $n = p_1 \cdot p_2$ — требуемое представление. Если $n_2 \ne 1$, то продолжаем процесс, выбирая в качестве $p_3$ первый отличный от единицы делитель числа $n_2$.

   Продолжая процесс, получаем, что $n_1, n_2, ...$ — убывающая последовательность натуральных чисел, а значит, не может быть бесконечной. На каком-то шаге получим $n_k = 1$. Тогда $n = p_1 \cdot p_2 \cdot ... \cdot p_k$. Мы представили число $n$ в виде простых чисел.

2. Докажем единственность представления. Пусть некоторое число $n$ можно представить как

   $$
   n = p_1 \cdot p_2 \cdot ... \cdot p_k = q_1 \cdot q_2 \cdot ... \cdot q_m,
   $$

   где $m \ge k$, а $p_i$ и $q_i$ — простые.

   Так как $n$ делится на $q_1$, то среди множества множителей $p_1, ..., p_k$ найдётся такой, который делится на $q_1$.

   Если надо, перенумеруем множители так, что если $p_1$ делится на $q_1$, то $p_1 = q_1$. Следовательно, $p_2; ...; p_k = q_2; ...; q_m$.

   Аналогично (при необходимости перенумеровывания) получим, что $p_2 = q_2$, ..., $p_k = q_k$.

   После сокращения останется

   $$
   1 = q_{k+1} \cdot ... \cdot q_m.
   $$

   Этого не может быть, следовательно, $m = k$. Таким образом, представления числа $n$ в виде простых множителей отличаются только порядком множителей.

Теорема доказана.
:::
::::

Если заменить произведение одинаковых простых множителей степени и расположить множители так, что $p_1 < p_2 < \cdots < p_k$, то получится представление

$$
n = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdot ... \cdot p_k^{\alpha_k}.
$$

Это представление единственно и называется **каноническим**.

## Следствия основной теоремы арифметики

:::: info СЛЕДСТВИЕ 1
**Представление делителей данного числа.** Пусть $n = p_1^{\alpha_1} \cdot ... \cdot p_k^{\alpha_k}$ — каноническое представление $n$. Тогда

$$
n ~ \small \vdots \normalsize ~ a \iff a = p_1^{\beta_1} \cdot p_2^{\beta_2} \cdot ... \cdot p_k^{\beta_k},
$$

где $0 \le \beta_i \le \alpha_i$.

::: info Доказательство
1. Пусть $n ~ \small \vdots \normalsize ~ a$, тогда в каноническое представление $a$ могут быть только простые множители $p_1, ..., p_k$, следовательно, $a = p_1^{\beta_1} \cdot ... \cdot p_k^{\alpha_k}$.

   При этом множитель $p_i$ либо совсем отсутствует (входит в нулевой степени), либо присутствует с показателем степени, не превосходящей $\alpha_i$.

2. *Доказать самостоятельно, что если $a = p_1^{\alpha_1} \cdot ... \cdot p_k^{\alpha_k}$, то $n ~ \small \vdots \normalsize ~ a$.*
:::

::::

:::: info СЛЕДСТВИЕ 2
**Число делителей натурального числа.** Если $n$ имеет каноническое представление $n = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdot ... \cdot p_k^{\alpha_k}$, то число $n$ имеет ровно $(\alpha_1+1)(\alpha_2 + 1)\cdots(\alpha_n+1)$ делителей.

::: info Доказательство
Всякий делитель $a$ числа $n$, согласно первому следствию, имеет вид $a = p_1^{\beta_1} \cdot p_2^{\beta_2} \cdot ... \cdot p_k^{\beta_k}$, где $0 \le \beta_i \le \alpha_i$, то есть $\beta_i$ может принимать $\alpha_i + 1$ значений. Тогда, по комбинаторному правилу произведения, число $a$ можно получить $(\alpha_1 + 1)(\alpha_2 + 1) \cdots (\alpha_k + 1)$ способами. $~~\blacksquare$
:::
::::

:::: info СЛЕДСТВИЕ 3
**Сумма делителей данного числа.** Пусть $n = p_1^{\alpha_1} \cdot ... \cdot p_k^{\alpha_k}$. Тогда сумма делителей числа $n$ равна

$$
{p_1^{\alpha_1 + 1} - 1 \over p_1 - 1} \cdot 
{p_2^{\alpha_2 + 1} - 1 \over p_2 - 1} \cdot 
... \cdot \\\
{p_k^{\alpha_k + 1} - 1 \over p_k - 1}.
$$

::: info Доказательство
Поскольку всякий делитель числа $n$ имеет вид $a = p_1^{\beta_1} \cdot ... \cdot p_k^{\beta_k}$, то сумма всевозможных чисел такого вида может быть записана так:

$$
(1 + p_1 + p_1^2 + \cdots + p_1^{\alpha_1}) \cdot 
(1 + p_2 + p_2^2 + \cdots + p_k^{\alpha_2}) \cdot 
... \cdot
(1 + p_k + p_k^2 + \cdots + p_k^{\alpha_k}).
$$

Заменяя каждый множитель по формуле суммы членов геометрической прогрессии, получим требуемое выражение. $~~\blacksquare$
:::
::::


:::: info СЛЕДСТСТВИЕ 4
**Каноническое представление НОД.** Каноническое предствление НОД чисел $a$ и $b$ содержит те и только те простые множители, которые входят и в разложение $a$ и в разложение $b$, причём каждый множитель входит в представление НОД с наименьшим из его показателей в разложении $a$ и $b$.

::: info Доказательство
*Доказать самостоятельно.*
:::
::::


:::: info СЛЕДСТСТВИЕ 5
**Каноническое представление НОК.** Каноническое предствление НОК чисел $a$ и $b$ содержит те и только те простые множители, которые входят хотя бы в одно из разложений $a$ и $b$, причём каждый такой множитель входит в представление НОК с наибольшим из показателей в разложении $a$ и $b$.

::: info Доказательство
*Доказать самостоятельно.*
:::
::::