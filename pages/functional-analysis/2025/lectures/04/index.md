---
prev:
    text: 3. Метрические пространства
    link: ../03/
next: false
---

**Раздел 4**

# Линейные пространства

## Линейные пространства

Пусть $L$ — множество элементов произвольной природы, для которых каким-то образом определены операции
1. *сложения* и
2. *умножения на числа из некоторого поля $\mathbb{F}$*, например, $\mathbb{F} = \mathbb{R}$ или $\mathbb{F} = \mathbb{C}$.

::: info Определение
Множество $L$ называется **линейным пространством (векторым пространством) над полем $\boldsymbol{\mathbb{F}}$ (чаще всего это $\boldsymbol{\mathbb{R}}$ или $\boldsymbol{\mathbb{C}}$)**, если для любых элементов $u$, $v$, $w$ из $L$ и любых $\lambda, \mu \in \mathbb{F}$ выполнены условия:

1. $u + v = v + u$;
2. $u + (v + w) = (u + v) + w$;
3. $\exists \boldsymbol{0} \in L: ~ ~ u + \boldsymbol{0} = u$;
4. $\forall u \in L ~ ~ \exists (-u) \in L: ~ ~ u + (-u) = 0$;
5. $\lambda \cdot (\mu u) = (\lambda \mu) \cdot u$;
6. $1 \cdot u = u$;
7. $\lambda \cdot (u + v) = \lambda \cdot u + \lambda \cdot v$;
8. $(\lambda + \mu) \cdot u = \lambda \cdot u + \mu \cdot u$.

Элементы произвольного линейного пространства часто называют *векторами*.
:::

Если какое-то подмножество $V$ линейного пространства $L$ само является линейным пространством, то говорят, что $V$ является **подпространством $\boldsymbol{L}$**.

**Линейное многообразие** — подмножество линейного пространства $L$, полученное сдвигом заданного подпространства $V$ на некоторый вектор $a \in L$:

$$
a + V = \set{ a + x : x \in V }
$$

### Примеры

1. Множество $\mathbb{R}^n$ $n$-мерных векторов $x = (x_1, ..., x_n)$ с вещественными координатами $x_j$ является **вещественным линейным пространством** (ВЛП).
2. Множество $\mathbb{C}^n$ — **комплексное линейное пространство** (КЛП).
3. Пусть $G = \set{g_1, g_2, ...}$ — некоторый набор векторов из линейного пространства $X$. Множество всевозможных линейных комбинаций

   $$
   \lambda_1 g_1 + \lambda_2 g_2 + ..., ~ ~ ~ ~ \lambda_i \in \mathbb{F}
   $$

   является подпространством линейного пространства $X$. Оно называется **линейной оболочкой векторов из $\boldsymbol{G}$** и обозначается $\text{Sp}(G)$.
4. Множество $M_{m \times n}$ всех матриц $m \times n$ — линейное пространство.
5. Множество $P_n$ многочленов степени не выше $n$ — линейное пространство:
   $$
   P_n = \text{Sp} \left(\set{ 1, x, ..., x^n }\right).
   $$
6. Множество $c$ всех стремящихся к 0 числовых последовательностей с почленным сложением и умножением на число — линейное пространство.
7. Множество $C(X)$ всех непрерывных функций на метрическом пространстве $X$ — линейное пространство.
8. Множество решений линейного уравнения
   $$
   f(x) = \intop_a^b K(x,s) f(s) ~ \text{d}s
   $$
   — линейное пространство.

## Прямая сумма

::: info Определение
Говорят, что линейное пространство $L$ есть прямая сумма своих подпространств $V_1, V_2, ..., V_m$:

$$
L = V_1 \oplus V_2 \oplus \cdots \oplus V_m,
$$

если каждый вектор $x \in L$ представляется в виде суммы

$$
x = v_1 + v_2 + \cdots + v_m, ~ ~ ~ ~ v_i \in V_i
$$

и притом единственным образом.
:::

* **Пример.** $\mathbb{R}^n = \mathbb{R} \oplus \mathbb{R} \oplus \cdots \oplus \mathbb{R}$ ($n$ слагаемых).
* **Пример.** $P_n = L_0 \oplus L_1 \oplus L_2$, где $L_i = \text{Sp}(\set{x^i})$.

## Прямое произведение

::: info Определение
Пусть $X$, $Y$ — линейные пространства. Тогда их прямое произведение:

$$
X \times Y = \set{ (x,y) : x \in X, ~ y \in Y }
$$

тоже является линейным пространством:

$$
\begin{array}{c}
(x_1, y_1) + (x_2, y_2) = (x_1 + x_2, y_1 + y_2), \\
\lambda(x,y) = (\lambda x, \lambda y).
\end{array}
$$
:::

## Фактор-пространство

::: info Определение
Пусть $V \subset X$ — подпространство линейного пространства $X$. Определим отношение эквивалентности

$$
x \sim y \iff x - y \in V
$$

и обозначим через $\boldsymbol{[x]}$ **класс эквивалентности** вектора $x$.

Множество классов образует линейное **фактор-пространство**

$$
X / V = \set{ [x]: x \in X }
$$
:::

**Вопрос.** Пусть $X = P_2$, $V = \set{ f \in P_2: f(1) = 0 }$. Что такое $P_2 / V$?

## Линейная зависимость

::: info Определение
Подмножество $\set{a,b,c,...}$ линейного пространства называется **линейно зависимым**, если существуют такие числа $\lambda_1, \lambda_2, \lambda_3, ...$, не все равные нулю, что

$$
\lambda_1 a + \lambda_2 b + \lambda_3 c + \cdots = 0.
$$
:::

:::: info Задача
Является ли линейно зависимым множество многочленов

$$
\begin{array}{c}
m = 5x^2 + x + 3, ~ ~ ~ ~ n = x^2 + 6x + 4, \\
p = x^2 - 5x + 2,
\end{array}
$$

в пространстве многочленов степени не выше 2?

::: info Решение
Составим систему уравнений

$$
\lambda_1 m + \lambda_2 n + \lambda_3 p = 0,
$$

то есть

$$
\begin{matrix}
x^2 \\ x \\ 1
\end{matrix}
\begin{cases}
5\lambda_1 & + 2 \lambda_2 & + \lambda_3 & = 0, \\
\lambda_1 & + 6 \lambda_2 & -5 \lambda_3 & = 0, \\
3\lambda_1 & + 4 \lambda_2 & + 2 \lambda_3 & = 0.
\end{cases}
$$

У этой системы всегда есть нулевое решение. *Если другого решения нет, то множество независимо*. Поэтому достаточно решить эту систему уравнений методом Гаусса и если нет свободных переменных, то векторы независимы, иначе зависимы.
:::
::::

## Базис в множестве векторов

::: info Определение
Пусть $M$ — некоторое подмножество линейного пространства $L$. Говорят, что *набор векторов* $\set{\vec{e}_1, \vec{e}_2, ..., \vec{e}_n}$ **образует базис в $\boldsymbol{M}$**, если

1. векторы $\vec{e}_1, \vec{e}_2, ..., \vec{e}_n$ *линейно независимы*;
2. *любой* вектор из $L$ *является линейной комбинацией этих векторов*, т. е. может быть (единственным образом) представлен в виде *суммы этих векторов с некоторыми коэффициентами из $\mathbb{F}$*.
:::

::: info Теорема
Пусть для множества $M$ есть два различных базиса. Тогда количество векторов в этих базисах одинаковое.

*Это число называют **размерностью** или **рангом** $M$.*
:::

Количество векторов в базисе линейного пространства называется **размерностью** линейного пространства.

### Примеры базисов

1. В $\mathbb{R}^4$ базис образуют, например, векторы

   $$
   \begin{array}{c}
   \vec{e}_1 = (1; 0; 0; 0), ~ ~ ~ ~ \vec{e}_2 = (0; 1; 0; 0), \\
   \vec{e}_3 = (0; 0; 1; 0), ~ ~ ~ ~ \vec{e}_4 = (0; 0; 0; 1).
   \end{array}
   $$

   *Любой* вектор $\vec{x} = (x_1; x_2; x_3; x_4)$ *единственным образом раскладывается по этим векторам:*

   $$
   \begin{array}{c}
   \vec{x} = x_1 \cdot (1; 0; 0; 0) + x_2 \cdot (0; 1; 0; 0) + \\
   + x_3 \cdot (0; 0; 1; 0) + x_4 \cdot (0; 0; 0; 1).
   \end{array}
   $$

   Размерность $\mathbb{R}^4$ равна 4.

2. В $\mathbb{R}^4$ существует множество других базисов. *Столбцы любой матрицы $4 \times 4$ с ненулевым определителем* (то есть *ранга 4*) образуют базис в $\mathbb{R}^4$.

3. В пространстве $P_n$ многочленов степени не выше $n$ базис образуют, например, многочлены
   
   $$
   \vec{e}_0 = 1, ~ ~ \vec{e}_1 = x, ~ ~ ..., ~ ~ \vec{e}_n = x^n.
   $$

   Разложение по этому базису известно как **формула Маклорена:**

   $$
   p(x) = \sum_{k=0}^n {p^{(k)}(0) \over k!} x^k.
   $$

   Размерность $P_n$ равна $n+1$.

## Линейные операторы

Пусть $L_1$ и $L_2$ — два линейных пространства над полем $\mathbb{F}$.

::: info Определение
Отображение $A: L_1 \to L_2$ называется **линейным оператором**, если выполнены следующие условия:

1. $\forall u, v \in L_1: ~ ~ A(u + v) = Au + Av$;
2. $\forall u \in L_1 ~ ~ \forall \lambda \in \mathbb{F}: ~~ A(\lambda \cdot u) = \lambda \cdot Au$.
:::

Множество таких операторов будем обозначать $\mathcal{L}(L_1, L_2)$.

## Матрица линейного оператора

Пусть в *конечномерных* линейных пространствах $L_1$ и $L_2$ выбраны базисы $\set{e_1, e_2, ..., e_n}$ и $\set{f_1, f_2, ..., f_m}$ соответственно.

**Матрица $\boldsymbol{M_A}$ линейного оператора $\boldsymbol{A: L_1 \to L_2}$ в базисах $\boldsymbol{\set{e_1, e_2, ..., e_n}}$ и $\boldsymbol{\set{f_1, f_2, ..., f_m}}$** — это матрица размера $m \times n$, $j$-й столбец которой состоит из коэффициентов разложения вектора $Ae_j$ по базису $\set{f_1, f_2, ..., f_m}$.

::: info Пример
Рассмотрим оператор $D \in \mathcal{L(P_3, P_2)}$, который каждый многочлен переводит в его производную: $Df = f'$.

* Базис $P_3$: $e_1 = 1, e_2 = x, e_3 = x^2, e_4 = x^3$.
* Базис $P_2$: $f_1 = 1, f_2 = x, f_3 = x^2$.

Составим матрицу:

* ${\text{d} \over \text{d}x} e_1 = 0 \implies$ $0 = 0 \cdot f_1 + 0 \cdot f_2 + 0 \cdot f_3 \implies$
  $
  a^1 = \begin{pmatrix}
  0 \\ 0 \\ 0
  \end{pmatrix}
  $.
* ${\text{d} \over \text{d}x} e_2 = 1 \implies$ $1 = 1 \cdot f_1 + 0 \cdot f_2 + 0 \cdot f_3 \implies$
  $
  a^2 = \begin{pmatrix}
  1 \\ 0 \\ 0
  \end{pmatrix}$.
* ${\text{d} \over \text{d}x} e_3 = 2x \implies$ $2x = 0 \cdot f_1 + 2 \cdot f_2 + 0 \cdot f_3 \implies$
  $
  a^3 = \begin{pmatrix}
  0 \\ 2 \\ 0
  \end{pmatrix}
  $.
* ${\text{d} \over \text{d}x} e_4 = 3x^2 \implies$ $3x^2 = 0 \cdot f_1 + 0 \cdot f_2 + 3 \cdot f_3 \implies$
  $
  a^4 = \begin{pmatrix}
  0 \\ 0 \\ 3
  \end{pmatrix}
  $.

В итоге получим:

$$
A =
\begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3
\end{pmatrix}
$$
— матрица от дифференцирования в этиз базисах.
:::

![](/media/images/funcanalysis_4_1.png)