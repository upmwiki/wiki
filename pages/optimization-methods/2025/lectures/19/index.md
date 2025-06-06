---
prev:
    text: § 18. Классические методы оптимизации
    link: ../18/
next:
    text: § 20. Теорема Куна-Таккера о седловой точке
    link: ../20/
---

**Тема 3. Задачи нелинейного программирования**

# § 19. Выпуклые функции и их свойства

Рассмотрим более узкий класс целевых функций и ограничений, для которых можно сформулировать условие существования и единственности решения.

В разделах, где рассматривались выпуклые множества точек, говорилось, что множество называется выпуклым, если оно вместе с любыми своими точками содержит весь отрезок, их соединяющий.

* Если $x \in [a; b]$, то $x = \alpha_1 a + \alpha_2 b$, где $\alpha_1 + \alpha_2 = 1$, $\alpha_1, \alpha_2 \ge 0$.
* Или можно сказать так: $x = \alpha a + (1 - \alpha) \beta$ при условии, что $0 \le \alpha \le 1$.

Данные два утверждения равносильны.

Применим определение отрезка и выпуклого множества для случая, когда $a$ и $b$ — точки $n$-мерного пространства. Если $X = (x_1, ..., x_n) \in D$, где $D$ выпукло, то это равносильно тому, что

$$
\sum_{i=1}^n \alpha_i x_i \in D,
$$

если $\forall i ~ \alpha_i \ge 0$ и $\sum\limits_{i=1}^n \alpha_i = 1$.

Функция $f(X) = f(x_1, ..., x_n)$, определённая на выпуклом множестве $D$ $n$-мерного пространства, называется **выпуклой**, если

$$
f(\alpha X^{(1)} + (1 - \alpha) X^{(2)}) \le
\alpha f(X^{(1)}) + (1 - \alpha) f(X^{(2)})
$$

$\forall X^{(1)}, X^{(2)} \in D$ и $\forall \alpha \in [0; 1]$.

Если в неравенстве заменить знак $\le$ на $\ge$, то функция называется **вогнутой**. Если же знаки неравенства поменять на строгие ($<$ и $>$), то функция называется **строго выпуклой** или **строго вогнутой** соответственно.

[image]

То есть для выпуклой функции отрезок, соединяющий точки $(X^{(1)}, f(X^{(1)}))$ и $(X^{(2)}, f(X^{(2)}))$, лежит не ниже графика $f(X)$. Для строго выпуклой функции он лежит выше графика.

## Свойства выпуклых функций

1. Если $f(X)$ выпуклая, то $-f(X)$ — вогнутая.

2. Функции $f(X) = aX + b$ являюся всюду выпуклыми и всюду вогнутыми; $a,b = \text{const}$.

3. Если функции $f_i(X)$, $i = \overline{1,m}$ выпуклы, то их сумма $\sum\limits_{i=1}^m \alpha_i f_i(X)$, $\forall i ~ \alpha_i \ge 0$ — также выпуклая функция.

4. Если функция $f(X)$ выпукла, то для любого $\alpha$ область решений неравенства $f(X) \le \alpha$ является либо выпуклым множеством либо пустым.

   [image]

5. Если функции $\varphi_i(X)$, $i = \overline{1,m}$ выпуклы, то область решения системы неравенств

   $$
   \begin{cases}
   \varphi_1 (X) \le \beta_1, \\
   \cdots \\
   \varphi_m (X) \le \beta_m
   \end{cases}
   $$

   является либо выпуклым множеством либо пустым.

   [image]

6. Выпуклая (вогнутая) функция, определённая на выпуклом множестве $D$, непрерывна в каждой внутренней точке этого множества.

7. Всякая дифференцируемая строго выпуклая (вогнутая) функция имеет не более одной стационарной точки.

   *(Точки, в которой обращаются в нуль все её производные.)*

8. Дважды дифференцируемая функция $f(X) = f(x_1, ..., x_n)$ является выпуклой в том и только том случае, когда её второй дифференциал не отрицателен:
   
   $$
   \text{d}^2f = \sum_{i=1}^n \sum_{j=1}^n f''_{x_i x_j} (X) \Delta x_i \Delta x_j \ge 0
   $$

   для любых $X \in D$ и таких $\Delta x_i$ и $\Delta x_j$, что $\sum\limits_{i=1}^n \Delta x_i^2 \ne 0$.

::: info Замечание
Выпуклость функции может быть определена с помощью *критерия Сильвестра:* функция выпукла тогда и только тогда, когда все угловые миноры матрицы Гессе нетрицательны:

$$
\Delta_k =
\begin{vmatrix}
g_{11} & \cdots & g_{1k} \\
\vdots & \ddots & \vdots \\
g_{k1} & \cdots & g_{kk}
\end{vmatrix}
\ge 0, ~ ~ ~ ~ k = \overline{1,n},
$$

где $g_{ij} = f''_{x_i x_j} (X)$.

Если все $\Delta_k > 0$, то функция $f(X)$ является строго выпуклой.
:::

Учитывая все эти свойства, сформулируем **задачу выпуклого программирования** (ЗВП): пусть дана целевая функция

$$
z = f(x_1, ..., x_n)
$$

при ограничениях

$$
\begin{cases}
\varphi_1 (x_1, ..., x_n) \le 0, \\
\cdots \\
\varphi_m (x_1, ..., x_n) \le 0,
\end{cases}
$$

причём все функции $\varphi_i(X)$ являются выпуклыми на выпуклом множестве $D$, а функция $z$ либо выпуклая либо вогнутая на множестве $D$.

Задача выпуклого программирования состоит в отыскании такого решения системы ограничений, на котором выпуклая функция $z$ достигает минимального значения или вогнутая функция $z$ — максимального значения.

Условие неотрицательности переменных можно считать частью системы неравенств.

Задачи выпуклого программирования являются частным случаем задач нелинейного программирования. Выделение ЗВП в специальный класс объясняется экстремальными свойствами выпуклых функций: всякий локальный экстремум выпуклой или вогнутой функции является одновременно и глобальным. Кроме того, функция, заданная на замкнутом ограниченном множестве, достигает на ней глобального максимума и глобального минимума. Следовательно, если целевая функция $z$ является строго выпуклой (строго вогнутой) и если область решений системы ограничений непуста и ограничена, то ЗВП имеет единственное решение. Это решение достигается в стационарной точке, а если её нет, то на границе области.

Такие задачи в случае двумерного пространства можно также решать графически.

::: info Пример
Решить задачу выпуклого программирования
$$
\begin{cases}
z = (x_1 - 1)^2 + (x_2 - 1)^2 \to \min ~ (\max) \\
x_1^2 + x_2^2 \le 4 \\
x_1 \le 2x_2 \\
x_2 \le 2x_1 \\
x_1 \ge 0, ~ x_2 \ge 0
\end{cases}
$$

*Решение.* Задача решается также, как в линейном программировании: сначала строится область допустимых решений, а затем семейство $z = C_i$ линий уровня целевой функции $z$. На той линии, которая имеет максимальный (минимальный) уровень, и достигается оптимальное решение.

[image]

$⌓ ~\! ~ OAB$ — Область допустимых решений.

[image]

Целевая функция:

$$
(x_1 - 1)^2 + (x_2 - 1)^2 = C^2.
$$

Это окружность с центром в точке $(1;1)$ и радиусом $C$.

[image]

[image]

Очевидно, что с ростом $C$ растёт значение целевой функции, и минимум достигается, когда $C = 0$, т. е. когда $(x_1 - 1)^2 + (x_2 - 1)^2 = 0$ и $\bar{x}_\min = (1;1)$, $z_\min = 0$.

Максимум достигается в точках $A$ и $B$, т. е.

$$
A:
\begin{cases}
x_2 = 2x_1, \\
x_1^2 + x_2^2 = 4
\end{cases} \implies
x_1^2 + 4x_1^2 = 4 \implies
$$

$$
\implies x_1^2 = {4 \over 5} \implies x_1 = {2 \over \sqrt{5}}, ~ x_2 = {4 \over \sqrt{5}}.
$$

$$
B:
\begin{cases}
x_1 = 2x_2, \\
x_1^2 + x_2^2 = 4
\end{cases} \implies
x_1 = {4 \over \sqrt{5}}, ~ x_2 = {2 \over \sqrt{5}}.
$$

Таким образом получается, что

$$
\bar{x}^{(1)}_\max = \left(
    {2 \over \sqrt{5}}, {4 \over \sqrt{5}}
\right), ~ ~ ~ ~
\bar{x}^{(2)}_\max = \left(
    {4 \over \sqrt{5}}, {2 \over \sqrt{5}}
\right).
$$

$$
z^{(1)}_\max = z^{(2)}_\max = z_\max =
\left({2 \over \sqrt{5}} - 1\right)^2 + \left({4 \over \sqrt{5}} - 1\right)^2 =
$$

$$
= {(2 - \sqrt{5})^2 \over 5} + {(4 - \sqrt{5})^2 \over 5}
= {4 - 4 \sqrt{5} + 5 + 16 - 8\sqrt{5} + 5 \over 5} =
$$

$$
= {30 - 12 \sqrt{5} \over 5} = 6 - {12 \over \sqrt{5}}.
$$
:::