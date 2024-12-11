---
prev:
    text: 2. Седловые точки в антагонистических играх
    link: ../02
next: false
---

**Лекция 3**

# Существование равновесия в чистых стратегиях. Смешанное расширение игры

## Существование равновесия в чистых стратегиях

:::: info ЛЕММА (ОБ ОСНОВНОМ НЕРАВЕНСТВЕ МИНИМАКСА)
В любой антагонистической игре $\underline{v} \le \overline{v}$ или, что то же самое,

$$
\underbrace{ \sup_{x \in X} \inf_{y \in Y} H(x, y) }_{\underline{v}} \le \underbrace{ \inf_{y \in Y} \sup_{x \in X} H(x, y) }_{\overline{v}}.
$$

::: info Доказательство
Пусть $x \in X$ — стратегия игрока 1. Тогда $H(x, y) \le \sup_{x \in X} H(x, y)$.

$$
\inf_{y \in Y} H(x, y) \le \inf_{y \in Y} \underbrace{ \sup_{x \in X} H(x, y) }_{\text{const}} = \overline{v}
$$

$$
\implies \underbrace{ \sup_{x \in X} \inf_{y \in Y} H(x, y) }_{\underline{v}} \le \underbrace{ \inf_{y \in Y} \sup_{x \in X} H(x, y) }_{\overline{v}}. ~ ~ ~ \blacksquare
$$
:::
::::

Пусть $Z(\Gamma) \subset X \times Y$ — множество ситуаций равновесия. Для матричной игры $Z$ — множество седловых точек.

:::: info ЛЕММА (О МАСШТАБЕ)
Пусть $\Gamma = \langle X, ~ Y, ~ H \rangle$ и $\Gamma' = \langle X, ~ Y, ~ H' \rangle$ — две антагонистические игры, причём $H' = \beta \cdot H + \alpha$, где $\alpha, \beta = \text{const}$, $\beta > 0$. Тогда $Z(\Gamma') = Z(\Gamma)$, $v_{\Gamma'} = \beta v_\Gamma + \alpha$.

::: info Доказательство
1. Пусть $(x^*, y^*) \in Z(\Gamma)$. Тогда $H(x, y^*) \le H(x^*, y^*) \le H(x^*, y)$.

   $$
   H(x^*, y^*) = {1 \over b} \cdot H'(x^*, y^*) - {\alpha \over \beta}.
   $$

   $$
   {1 \over \beta} H(x, y^*) \le {1 \over \beta} H(x^*, y^*) \le {1 \over \beta} H(x^*, y).
   $$

   Вычтем из неравенства ${\alpha \over \beta}$:

   $$
   {1 \over \beta} H(x, y^*) - {\alpha \over \beta} \le {1 \over \beta} H(x^*, y^*) - {\alpha \over \beta} \le {1 \over \beta} H(x^*, y) - {\alpha \over \beta}.
   $$

   Это эквивалентно тому, что

   $$
   H'(x, y^*) \le H'(x^*, y^*) \le H'(x^*, y). ~ ~ ~ \blacksquare
   $$

2. Требуется доказательство в обратную сторону.
:::
::::

:::: info ТЕОРЕМА (О СУЩЕСТВОВАНИИ РАВНОВЕСИЯ В ЧИСТЫХ СТРАТЕГИЯХ)
Для того, чтобы в игре $\Gamma = \langle X, ~ Y, ~ H \rangle$ существовала ситуация равновесия, необходимо и достаточно, чтобы существовали минимакс и максимин, и нижняя цена игры $\underline{v} = \sup\limits_{x \in X} \inf\limits_{y \in Y} H(x, y)$ была рвна

$$
\underline{v} = \sup_{x \in X} \inf_{y \in Y} H(x, y) = \inf_{y \in Y} \sup_{x \in X} H(x, y) = \overline{v}.
$$

::: info Доказательство
1. $(\implies)$ Пусть $(x^*, y^*) \in Z(\Gamma)$. Тогда, по определению,
   $$
   H(x, y^*) \le H(x^*, y^*) \le H(x^*, y).
   $$

   $$
   m \le \sup_{x \in X} H(x, y^*) = H(x^*, y^*)
   $$

   $$
   \overline{v} = \inf_{y \in Y} \sup_{x \in X} H(x, y) \le m
   $$

   С другой стороны,

   $$
   H(x^*, y^*) = \inf_{y \in Y} H(x^*, y) \le \sup_{x \in X} \inf_{y \in Y} H(x, y) = \underline{v}
   $$

   $$
   \implies \overline{v} \le \underline{v} \xRightarrow[\overline{v} \ge \underline{v}]{\text{лемма}} \overline{v} = \underline{v}.
   $$

2. $(\impliedby)$ Некая точка $(x^*, y^*)$.

   $$
   H(x^*, y) \ge \inf_{y \in Y} H(x, y^*) = \sup_{x \in X} \inf_{y \in Y} H(x, y).
   $$

   $y^*$ - минимаксная стратегия.

   $$
   H(x, y^*) \le \sup_{x \in X} H(x, y^*) = \inf_{y \in Y} \sup_{x \in X} H(x, y).
   $$

   $$
   H(x, y^*) \le H(x^*, y^*) \le H(x^*, y)
   $$

   $$
   \implies (x^*, y^*) \in Z(\Gamma).
   $$

Теорема полностью доказана.
:::

::::

## Смешанное расширение игры

$$
\underline{v} = \inf_y \sup_x H(x, y) < \sup_x \inf_y H(x, y) = \overline{v} \implies \overline{v} - \underline{v} > 0.
$$

::: info ПРИМЕР
Рассмотрим матрицу
$$
H = \begin{bmatrix}
7 & 3 \\ 2 & 5
\end{bmatrix}.
$$

Для неё $\underline{v} = 3$, $\overline{v} = 5$, то есть седловая точка отсутствует.
:::

::: info ОПРЕДЕЛЕНИЕ
Случайная величина, значениями которой являются (чистые) стратегии игрока, называется его **смешанной стратегией**.
:::

$$
\vec{X}_m = [p_1, p_2, ..., p_n],
$$

если $|X| = n$.

$$
\forall y: ~ E[H(x, y)] = p_1 \cdot H(x_1, y) + p_2 \cdot H(x_2, y) + \dots + p_n \cdot H(x_n, y).
$$