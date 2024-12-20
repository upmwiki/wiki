---
prev:
    text: 6. Редукция игры
    link: ../06
next: false
---

**Лекция 7**

# Решение матричных игр 2×2, 2×n, m×2

::: info ТЕОРЕМА
Для матричной игры $\Gamma_A$

$$
\max_x \min_j H(x, j) = v_A = \min_y \max_i H(i, y).
$$
:::

Их экстремумы по смешанным стратегиям достигаются на оптимальных стратегиях игроков.

## Игры 2×2

Рассмотрим игру 2×2:

$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}.
$$

Как найти смешанную стратегию?

У первого игрока: $x = [\xi, 1 - \xi]$, у второго игрока: $y = [\eta, 1 - \eta]$.

То есть $\xi_1$ и $\xi_2$ (т. к. по условию $\xi_1 + \xi_2 = 1$) сводятся к одной единственной переменной $\xi$. А что будет, если оба выбрали по смешанной стратегии 2×2 — какой ожидаемый выигрыш?

$$
H(\xi, \eta) = \xi \left( \eta \cdot a_{11} + (1 - \eta) \cdot a_{12} \right) +
(1 - \eta) \left( \eta \cdot a_{21} + (1 - \eta) \cdot a_{22} \right).
$$

Если первый игрок играет оптимальную стратегию, то тогда он имеет свой максимальный выигрыш, и это не зависит от того, какую максимальную (?) стратегию играет второй — на то она и оптимальная (т. е. у второго игрока есть такая стратегия, которая ему, в свою очередь, тоже приносит наибольшую выгоду). То есть если играть оптимальную стратегию, то ничего с игроком не случится худшего, чем то, на что он рассчитывал. При этом второй игрок тоже можем что-то своё играть, и тут два варианта: либо он играет свою оптимальную стратегию (тогда наш выигрыш равен цене игры и его, и моей), либо он играет какую-то свою неоптимальную стратегию (тогда он терпит неудачу, а первый игрок выиграл больше).

Давайте скажем, что нам не важно, кто что играет, и найдём

$$
{ \partial H \over \partial \eta } = \xi \cdot (a_{11} - a_{12}) + (1 - \xi) (a_{21} - a_{22}) = 0.
$$

Мы хотим так, потому что это не зависит от того, что происходит, и наши игрока все это играют.

Отсюда получаем, что будет

$$
\xi (a_{11} - a_{12} - a_{21} + a_{22}) = a_{22} - a_{21}
$$

$$
\implies \xi = { a_{22} - a_{21} \over a_{11} + a_{22} - (a_{12} + a_{21}) }
$$

$$
\implies \eta = { a_{22} - a_{12} \over a_{11} + a_{22} - (a_{12} + a_{21}) }
$$

$$
\implies v = { a_{22} a_{11} - a_{21} a_{12} \over a_{11} + a_{22} - (a_{12} + a_{21}) }
$$

Применим здесь теорему. Она говорит нам о том, что наша оптимальная стратегия настолько оптимальная, что её можно найти, и если противник применяет и чистую стратегию. Иначе говоря, это минимум по чистым стратегиям второго игрока. Потом мы от этого минимума по чистым стратегиям второго игрока берём максимум по смешанным стратегиям первого игрока. И это всё должно быть равно, если мы делаем всё и наоборот.

То есть сначала мы берём максимум по чистым стратегиям первого игрока:

* $H(x,1)$ — цена игры, которую мы получим, если второй игрок играет первую стратегию;
* $H(x,2)$ — цена игры, которую мы получим, если второй игрок играет вторую стратегию.

Каждую стратегию мы можем изобразить в виде прямых:

![](/media/images/game%20theory%207%201.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%201%20dark.png){.dark-only  style="width: 65%"}

![](/media/images/game%20theory%207%202.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%202%20dark.png){.dark-only  style="width: 65%"}


## Игры 2×n

Рассмотрим игру 2×n:

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n}
\end{bmatrix}.
$$

Тогда

$$
\begin{matrix}
H(\xi, 1) = \xi a_{11} + (1 - \xi) a_{21}, \\
H(\xi, 2) = \xi a_{12} + (1 - \xi) a_{22}, \\
\cdots \\
H(\xi, n) = \xi a_{1n} + (1 - \xi) a_{2n}.
\end{matrix}
$$

Получаем, что

$$
H(\xi, i) = \xi \cdot a_{1i} + (1 - \xi) \cdot a_{2i} = 0
$$

— это прямая в координатах $H$, $\xi$. Этих прямых столько, сколько стратегий у второго игрока, потому что по числу $i$-ых стратегий. Поэтому мы можем использовать аналогичный подход. То есть если бы у первого игрока было не две стратегии, а больше, то так бы не получилось:

![](/media/images/game%20theory%207%203.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%203%20dark.png){.dark-only  style="width: 65%"}

Получаем, что при $\xi = 0: ~ H = a_{2i}$, $\xi = 1: ~ H = a_{1i}$, а $\xi^*$ — максимум.

Если прямая параллельна, то максимум достигается на всей прямой.

::: info ПРИМЕР
Матрица

$$
A = \begin{bmatrix}
1 & 3 & 1 & 4 \\
2 & 1 & 4 & 0
\end{bmatrix}.
$$

Будет четыре прямые:

* $H(\xi, 1) = \xi + (1 - \xi) \cdot 2 = -\xi + 2$;
* $H(\xi, 2) = 3\xi + (1 - \xi) = 2\xi + 1$;
* $H(\xi, 3) = \xi + (1 - \xi) \cdot 4 = -3\xi + 4$;
* $H(\xi, 4) = 4\xi$.

Построим все эти прямые:

![](/media/images/game%20theory%207%204.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%204%20dark.png){.dark-only  style="width: 65%"}

Нас интересует пересечение прямых $H(\xi, 1)$ и $H(\xi, 4)$, поэтому вычислим

$$H(\xi, 1) = H(\xi, 4),$$

т. е.

$$-\xi + 2 = 4\xi,$$

откуда получим, что $\xi^* = 0,4$ (нижняя огибающая).

Чтобы найти оптимальную стратегию второго игрока, надо рассмотреть матрицу $A$, исключая столбцы 2 и 3, то есть:

$$
A' = \begin{bmatrix}
1 & 4 \\
2 & 0
\end{bmatrix}.
$$

Будет две прямые:

* $H(1, \eta) = \eta + (1 - \eta) \cdot 4 = 4 - 3\eta$;
* $H(2, \eta) = 2 \eta$.

Построим эти прямые:

![](/media/images/game%20theory%207%205.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%205%20dark.png){.dark-only  style="width: 65%"}

Приравняем $H(1, \eta)$ и $H(2, \eta)$ и получим, что $\eta^* = {4 \over 5}$.
:::

## Игры m×2

Рассмотрим игру m×2:

$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\vdots & \vdots \\
a_{m1} & a_{m2}
\end{bmatrix}.
$$

$y = [\eta, 1 - \eta]$.

В данном случае действуем с точки зрения второго игрока:

$$
H(1, \eta) = a_{11} \cdot \eta + (1 - \eta) \cdot a_{12}.
$$

И на этот раз нас интересует верхнее семейство огибающих, и мы ищем минимум:

![](/media/images/game%20theory%207%206.png){.light-only style="width: 65%"}
![](/media/images/game%20theory%207%206%20dark.png){.dark-only  style="width: 65%"}

:::: info ТЕОРЕМА (ОБ АКТИВНЫХ СТРАТЕГИЯХ)
Пусть $x^* = \left[ \xi_1^*, ..., \xi_n^* \right]$ и $y^* = \left[ \eta_1^*, ..., \eta_n^* \right]$ — оптимальные стратегии и $v_A$ — цена игры. Тогда $\forall i : H(i, y^*) < v_A$ имеет место равенство $\xi_i^* = 0$, а $\forall j : H(x^*, j) > v_A$ имеет место $\eta_j^* = 0$. Наоборот, если $\xi_i^* > 0$, то $H(i, y^*) = v_A$ и если $\eta_j^* > 0$, то $H(x^*, j) = v_A$.

*Пояснение:* если для какой-то чистой стратегии получается, что выигрыш меньше, чем цена игры при использовании противником оптимальной стратегии, то эта стратегия в наш набор выбранный стратегий вообще не входит. То есть вероятность использования этой стратегии равна 0. И наоборот, если вероятность использования какой-то стратегии в составе смешанной стратегии первого игрока — не 0, то функция выигрыша при использовании соответствующей чистой стратегии равна цене игры. Это важно.

::: info Доказательство
Пусть $\exists i_0: ~ H(i_0, y^*) < v_A$ и $\xi_{i_0}^* \ne 0$. Тогда, домножив это всё на $\xi_{i_0}^*$, получим

$$
H(i_0, y^*) \cdot \xi_{i_0}^* < v_A \cdot \xi_{i_0}^*.
$$

С другой стороны, $\forall i ~ ~ H(i, y^*) \le v_A$, тогда

$$
\underbrace{\sum H(i, y^*) \cdot \xi_i^*}_{H(x^*, y^*)} < v_A.
$$

Получили противоречие. $~~\blacksquare$
:::

::::

::: info ОПРЕДЕЛЕНИЕ
Чистая стратегия $i \in M$ ($j \in N$) игрока 1 (2) называется **активной** (или **существенной**), если существует такая оптимальная стратегия $x^* = \left[ \xi_1^*, ..., \xi_m^* \right]$ ($y^* = \left[ \eta_1^*, ..., \eta_n^* \right]$) этого игрока, для которой $\xi_i^* > 0$ ($\eta_j^* > 0$).
:::

Набор активных стратегий называется **спектром стратегий**.