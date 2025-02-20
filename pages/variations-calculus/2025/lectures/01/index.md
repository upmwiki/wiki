---
prev: false
next: false
---

**Лекция**

# Основные понятия, связанные с экстремальными задачами. Принцип Лагранжа исследования задач с ограничениями

::: info Задача 1
Найти на данной прямой такую точку, чтобы сумма расстояний от неё до двух заданных точек была минимальна.

Формализуем данную задачу.

![](/media/images/var_1_1.jpg)

Нужно найти такую точку $C(x,0)$, чтобы

$$
l = \sqrt{x^2 + a^2} + \sqrt{b^2 + (d-x)^2} \to \min, ~ ~ ~ x \in \mathbb{R}. \tag{1}
$$
:::

::: info Задача 2
Вписать в круг прямоугольник наибольшей площади.

![](/media/images/var_1_2.jpg)

Формализуем данную задачу.

$$
\begin{cases}
S = 4xy \to \max, \\
x^2 + y^2 = r^2, \\
x \ge 0, ~ ~ y \ge 0.
\end{cases} \tag{2}
$$

Пока что разберём более простой случай.

$$
\begin{cases}
S = 4xy \to \max, \\
x^2 + y^2 = r^2.
\end{cases} \tag{2a}
$$
:::

Любая формализованная задача устроена аналогично. Она включает в себя следующие элементы: **функционал** (или функция) $f: x \to \bar{\mathbb{R}}$ и **ограничение** $C \subset X$.

> **Примечание.** $\bar{\mathbb{R}} = \mathbb{R} \cup \set{\pm\infty}$.

Формализовать экстремальную задачу — значит точно описать её элементы (функционал $f$, область определения $X$ и ограничение $C$).

Формализованная задача имеет вид

$$
\begin{cases}
f(x) \to \min ~ (\max), \\
x \in C.
\end{cases} \tag{3}
$$

Точки $x \in C$ называются **допустимыми**.

Если $C = X$, то задача называется **задачей без ограничений**.

Если $f(x) \to \max ~\! (\min)$, то это эквивалентно $-f(x) \to \min ~\! (\max)$.

* В задаче $(1)$: $X = C = \mathbb{R}$;
* В задаче $(2)$: $C = \set{(x,y) \in \mathbb{R} ~ | ~ x^2 + y^2 = r^2, ~ x \ge 0, ~ y \ge 0}$.

Введём обозначение $\bar{x} = (x_1, x_2, ..., x_n) \in \mathbb{R}^n$.

::: info Определение 1
Допустимая точка $\hat{x}$ называется **абсолютным минимумом** (**абсолютным максимумом**) задачи $(3)$, если $f(\hat{x}) \le f(x)$ ($f(\hat{x}) \ge f(x)$) для всех $x \in C$.

В этом случае пишем, что $\hat{x} \in \text{abs min}$ ($\hat{x} \in \text{abs max}$).
:::

Величину $f(\hat{x})$ будем обозначать $S_\min$ ($S_\max$).

::: info Определение 2
Допустимая точка $\hat{x}$ называется **локальным минимумом** (**локальным максимумом**), если $\forall x \in C: ~ \rho(\hat{x}, x) < \varepsilon$ выполняется $f(\hat{x}) \le f(x)$ ($f(\hat{x}) \ge f(x)$).
:::

## Принцип Лагранжа иследования задач с ограничениями

Решим задачу $(1)$:

$$
l = \sqrt{x^2 + a^2} + \sqrt{b^2 + (d-x)^2} \to \min;
$$

$$
l'(x) = {x \over \sqrt{x^2 + a^2}} - {d-x \over \sqrt{b^2 + (d-x)^2}} = {x \over \cos \varphi_1} - {d-x \over \cos \varphi_2} = 0 \implies
$$

$$
\implies \cos \varphi_1 = \cos \varphi_2 \implies \varphi_1 = \varphi_2.
$$

Таким образом, сумма расстояний будет минимальна, если углы $\varphi_1$ и $\varphi_2$ равны.

Решим задачу $(2a)$:

$$
\begin{cases}
S = 4xy \to \max, \\
x^2 + y^2 = r^2.
\end{cases}
$$

Составим лагранжиан:

$$
L = 4xy + \lambda (x^2 + y^2 - r^2).
$$

$$
\begin{cases}
L'_x = 4y + 2\lambda x = 0, \\
L'y = 4x + 2\lambda y = 0, \\
x^2 + y^2 = r^2.
\end{cases}
$$

$$
\begin{cases}
\lambda x = -2y, \\
\lambda y = -2x
\end{cases}
\implies
\begin{cases}
x = -{2y \over \lambda}, \\
y = -{2x \over \lambda}.
\end{cases}
$$

$$
\lambda \left( {\lambda x \over -2} \right) = -2x;
$$

$$
\lambda = \pm 2.
$$

Рассмотрим случай, когда $\lambda = 2$. Тогда

$$
\begin{cases}
y = -x, \\
x^2 + y^2 = r^2.
\end{cases}
$$

Данная точка не лежит в первой четверти, следовательно, не подходит.

Рассмотрим случай, когда $\lambda = -2$. Тогда

$$
\begin{cases}
y = x, \\
x^2 + y^2 = r^2;
\end{cases}
$$

$$
\begin{cases}
x = {r \over \sqrt{2}}, \\
y = {r \over \sqrt{2}}.
\end{cases}
$$

Таким образом, получили точку $M \left( {r \over \sqrt{2}}, {r \over \sqrt{2}} \right)$, подозрительную на экстремум.

Проверим достаточное условие:

$$
\text{d}^2 L = 2\lambda ~ (\text{d}x)^2 + 2 \cdot 4 ~ \text{d}x \text{d}y + 2\lambda ~ (\text{d}y)^2;
$$

$$
\text{d}^2 L \bigg\vert_M = -4 ~ (\text{d}x)^2 + 8 ~ \text{d}x \text{d}y - 4 ~ (\text{d}y)^2;
$$

$$
2x ~ \text{d}x + 2y ~ \text{d}y = 0;
$$

$$
\text{d}y = -{x ~ \text{d}x \over y} \overset{x=y}{=} -\text{d}x.
$$

Подставим $\text{d}y$ в $\text{d}^2 L \bigg\vert_M$:

$$
\text{d}^2 L \bigg\vert_M = -4 ~ (\text{d}x)^2 - 8 ~ (\text{d}x)^2 - 4 ~ (\text{d}x)^2 =
$$

$$
= -16 ~ (\text{d}x)^2.
$$

$-16 < 0$, следовательно, $M$ является условным максимумом.

$$
S_\max = 2r^2.
$$

## Задача с ограничением в виде равенств

$\bar{x} = (x_1, ..., x_n) \in \mathbb{R}^n$.

$$
\begin{cases}
u(\bar{x}) \to \text{extr}, & \\
\varphi_i(\bar{x}) = 0, & i = \overline{1,m}.
\end{cases}
$$

$$
L = u + \lambda_1 \varphi_1 + \lambda_2 \varphi_2 + \cdots + \lambda_m \varphi_m,
$$

где $L$ - лагранжиан, $\lambda_1, ..., \lambda_m$ - множители Лагранжа.

Необходимое условие экстремума:

$$
\begin{cases}
L'_{x_1} = 0, \\
\cdots, \\
L'_{x_n} = 0, \\
\varphi_i(\bar{x}) = 0.
\end{cases}
$$

В данной системе $(m+n)$ уравнений, неизвестных тоже $(m+n)$, а именно не известно $n$ координат точки $M$ и $m$ множителей.

Таким образом, находим стационарные точки экстремума (подозрительные на экстремум).

Достаточное условие экстремума:

$$
\text{d}^2 L \bigg\vert_M
$$