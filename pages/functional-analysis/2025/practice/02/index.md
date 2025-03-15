---
prev: false
next: false
---

**Практическое занятие**

# Алгебры множеств. Сигма-алгебра. Метрики

## Алгебры множеств

Система подмножеств $\mathcal{F} \subset 2^\Omega$ некоторого множества $\Omega$ называется **алгеброй множеств**, если она

* содержит $\varnothing$, $\Omega$

и

* замкнута относительно взятия *дополнения*, *объединения* и *пересечения*:

  $$
  A \in \mathcal{F} \implies \Omega \backslash A \in \mathcal{F}
  $$

  $$
  A, B \in \mathcal{F} \implies A \cup B \in \mathcal{F}, ~ A \cap B \in \mathcal{F}
  $$

**Сигма-алгебра $\boldsymbol{\mathcal{F}}$** — это коллекция подмножеств некоторого множества $\Omega$, которая удовлетворяет условиям

1. $\Omega \in \mathcal{F}$
2. $A \in \mathcal{F} \implies \Omega \backslash A \in \mathcal{F}$
3. $A_i \in \mathcal{F}, ~ i = 1,2,... \implies \cup_i A_i \in \mathcal{F}$

Эти три условия обеспечивают замкнутость $\sigma$-алгебры по отношению к другим операциям, например:

4. $\varnothing \in \mathcal{F}$
5. $A,B \in \mathcal{F} \implies A \cup B, ~ A \cap B, ~ A \backslash B \in \mathcal{F}$
6. $A_i \in \mathcal{F}, ~ i = 1,2,... \implies \cap_i A_i \in \mathcal{F}$

::: info Задача
Опишите все алгебры множеств для $\Omega = \set{1,2,3}$.

**Ответ:**
* $\set{ \varnothing, \set{ 1,2,3 } }$
* $\set{ \varnothing, \set{1}, \set{2}, \set{3}, \set{1,2}, \set{1,3}, \set{2,3}, \set{1,2,3} }$
* $\set{ \varnothing, \set{1}, \set{2,3}, \set{1,2,3} }$
* $\set{ \varnothing, \set{2}, \set{1,3}, \set{1,2,3} }$
* $\set{ \varnothing, \set{3}, \set{1,2}, \set{1,2,3} }$
:::

Для всякого класса $F$ подмножеств $X$ существует **наименьшая $\boldsymbol{\sigma}$-алгебра, содержащая $\boldsymbol{F}$**. Она обозначается символом $\boldsymbol{\sigma(F)}$ и задаётся формулой

$$
\sigma(F) = \style{font-family:Times}{\text{пересечение всех }}\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\! \sigma \style{font-family:Times}{\text{-алгебр, содержащих }}\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\! F.
$$

Эта $\sigma$-алгебра называется **порождённой классом $\boldsymbol{F}$**.

::: info Задача
Опишите $\sigma$-алгебру подмножеств отрезка $[0;1]$, порождённую интервалами $[0; 0,1)$ и $(0,5; 1]$.
:::

## Метрики

**Метрическое пространство $\boldsymbol{(X, d)}$** — это множество $X$ с функцией $d: X \times X \to [0, \infty)$, которая называется **метрикой** и удовлетворяет следующим аксиомам:

![](/media/images/funcanalysis_3_5.png)

* *неотрицательность:* $d(x,y) \ge 0$ для всех $x,y \in X$, и $d(x,y) = 0$ тогда и только тогда, когда $x=y$.
* *симметричность:* $d(x,y) = d(y,x)$.
* *неравенство треугольника:* $d(x,z) \le d(x,y) + d(y,z)$ для всех $x,y,z \in X$.

::: info Задача
Является ли метрикой на $\mathbb{R}$ функция $d(x,y) = |\text{arctg} ~ x - \text{arctg} ~ y|$?
:::

::: info Задача
Является ли метрикой на $\mathbb{R}$ функция $d(x,y) = \text{arctg} ~ |x-y|$?
:::

::: info Задача
Является ли метрикой на $\mathbb{R}$ функция $d(x,y) = \left| x^3 - y^3 \right|$?
:::

::: info Задача
Является ли метрикой на $\mathbb{R}$ функция $d(x,y) = \left| e^x - e^y \right|$?
:::

::: info Задача
Является ли метрикой на $\mathbb{N}$ функция

$$
d(m, n) =
\begin{cases}
0, & m = n, \\
1 + {1 \over m} + {1 \over n}, & m \ne n
\end{cases}?
$$
:::

::: info Задача
Является ли метрикой на $\mathbb{N}$ функция

$$
d(m, n) =
\begin{cases}
0, & m = n, \\
2^{-k}, & m \ne n
\end{cases},
$$

где $k$ -- количество нулей, на которые оканчивается разность $m-n$?
:::

::: info Задача
Пространство ограниченных последовательностей $x = (x_1, x_2, ...)$. Является ли метрикой функция $\displaystyle d(x,y) = \sup {1 \over n} \sum_{i=1}^n |x_i - y_i|$?
:::