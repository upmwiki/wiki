---
prev: false
next: false
---

# № 2.10

## Условие

Решить задачи 2.1—2.20.

$$
e^{xy} \to \text{extr}; ~ ~ x + y = 1.
$$

## Ответ

::: details Ответ из задачника
$(1/2, 1/2) \in \text{abs max}$, $S_\max = e^{1/4}$, $S_\min = 0$ не достигается.
:::

## Решения

### Решение №1

Имеем задачу следующего вида:

$$
\begin{cases}
z = e^{xy} \to \text{extr} \\
\varphi = x + y - 1 = 0
\end{cases}
$$

Составим лагранжиан:

$$
L
= z + \lambda \varphi
= e^{xy} + \lambda(x + y - 1).
$$

**Проверим необходимое условие экстремума.** Для этого составим следующую систему и найдём её реешние:

$$
\begin{cases}
L'_x = y e^{xy} + \lambda, \\
L'_y = x e^{xy} + \lambda, \\
\varphi = x + y - 1 = 0.
\end{cases}
$$

Из первого и второго уравнений выразим $\lambda$:

$$
\lambda = -ye^{xy} = -xe^{xy}.
$$

Экспонента всегда неотрицательная, поэтому можно сделать вывод, что $x = y$. Тогда из третьего уравнения следует, что

$$
x = y = {1 \over 2}.
$$

Таким образом, получаем точку $M\left( {1 \over 2}, {1 \over 2} \right)$, подозрительную на экстремум.

**Проверим достаточное условие экстремума.** Для этого нужно вычислить $\text{d}^2 L$ в найденной точке $M$.

$$
\text{d}^2 L
= L''_{xx} ~ (\text{d}x)^2 + 2 L''_{xy} ~ \text{d}x \text{d}y + L''_{yy} ~ (\text{d}y)^2.
$$

Вычислим $L''_{xx}$, $L''_{xy}$, $L''_{yy}$:

$$
L''_{xx} = (L'_x)'_x = (ye^{xy} + \lambda)'_x = y^2 e^{xy};
$$

$$
L''_{xy} = (L'_x)'_y = (ye^{xy} + \lambda)'_y = e^{xy} + xye^{xy};
$$

$$
L''_{yy} = (L'_y)'_y = (xe^{xy} + \lambda)'_y = x^2 e^{xy}.
$$

Подставим в $\text{d}^2 L$:

$$
\text{d}^2 L = y^2 e^{xy} ~ (\text{d}x)^2 + 2 \left(
    e^{xy} + xy e^{xy}
\right) ~ \text{d}x \text{d}y + x^2 e^{xy} ~ (\text{d}y)^2.
$$

Постараемся как-то выразить $\text{d}y$ через $\text{d}x$, чтобы в дифференциале $\text{d}^2 L$ было приращение только по одной переменной $x$.

Известно, что $\varphi = 0$, следовательно, $\text{d} \varphi = 0$. Найдём $\text{d} \varphi$:

$$
\begin{rcases}
\text{d} \varphi = \varphi'_x ~ \text{d}x + \varphi'_y ~ \text{d}y = 0 \\
\varphi'_x = \varphi'_y = 1
\end{rcases} \implies
\text{d} \varphi = \text{d}x + \text{d}y = 0 \implies
$$

$$
\implies \text{d}y = - \text{d}x.
$$

Подставим в $\text{d}^2 L$:

$$
\text{d}^2 L = y^2 e^{xy} ~ (\text{d}x)^2
- 2e^{xy} (1 + xy) ~ (\text{d}x)^2 + x^2 e^{xy} ~ (\text{d}x)^2;
$$

$$
\text{d}^2 L = e^{xy} \left(
    y^2 - 2 (1 + xy) + x^2
\right) ~ (\text{d}x)^2.
$$

Вычислим значение данного дифференциала в точке $M$:

$$
\left. \text{d}^2 L \right|_M
= e^{{1 \over 2} \cdot {1 \over 2}} \left(
    \left({1 \over 2}\right)^2 - 2 \cdot \left(
        1 + {1 \over 2} \cdot {1 \over 2}
    \right) + \left({1 \over 2}\right)^2
\right) ~ (\text{d}x)^2;
$$

$$
\left. \text{d}^2 L \right|_M
= e^{1/4} \cdot \left(
    {1 \over 4} - 2 \cdot {5 \over 4} + {1 \over 4}
\right) ~ (\text{d}x)^2;
$$

$$
\left. \text{d}^2 L \right|_M
= -{8 \over 4} e^{1/4} ~ (\text{d}x)^2;
$$

$$
\left. \text{d}^2 L \right|_M
= -2 e^{1/4} ~ (\text{d}x)^2.
$$

Поскольку $-2 e^{1/4} < 0$, то точка $M$ доставляет условный максимум.

В данной точке значение функционала равно

$$
S_\max = z(1/2, 1/2)
= e^{{1 \over 2} \cdot {1 \over 2}} = e^{1/4}.
$$

Условный минимум не достигается.

**Ответ:** $M\left( {1 \over 2}, {1 \over 2} \right)$ — условный максимум, $S_\max = e^{1/4}$; условный минимум не достигается.