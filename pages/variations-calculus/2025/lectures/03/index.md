---
prev:
    text: 2. Задача с равенствами и неравенствами
    link: ../02/
next: false
---

**Лекция 3**

# Нормированные пространства. Дифференцирование в нормированных пространствах

::: info Определение 1
Линейное пространство $X$ называется **нормированным**, если на $X$ определён функционал $||\cdot||: X \to \mathbb{R}$, называемый *нормой* и удовлетворяющий условиям:

1. $\forall x \in X ~ ~ ||x|| > 0$; $~~||x|| = 0 \iff x = 0$;
2. $\forall \alpha \in \mathbb{R} ~ ~ \forall x \in X ~ ~ ~ ||\alpha x|| = |\alpha| \cdot ||x||$;
3. неравенство треугольника: $\forall x_1, x_2 \in \mathbb{R} ~ ~ ||x_1 + x_2|| \le ||x_1|| + ||x_2||$.
:::

Расстояние между объектами можно считать как норму разницы:

$$
\rho(x_1, x_2) = || x_2 - x_1 ||,
$$

и тогда пространство становится метрическим.

Полное относительно введённого расстояния пространство называется **банаховым пространством**.

Примеры банаховых пространств:

1. **Пространство $\boldsymbol{\mathbb{R}^n}$.**

   * Элементы данного пространства: векторы $x = (x_1, x_2, ..., x_n)$.
   * Норма:
     $$
     ||x|| = \left( \sum_{i=1}^n x_i^2 \right)^{1/2}.
     $$

2. **Пространство $\boldsymbol{C[a;b]}$ непрерывных функций на отрезке $\boldsymbol{[a;b]}$.**

   $$
   ||x||_0 = \max_{t \in [a;b]} |x(t)|.
   $$

3. **Пространство $\boldsymbol{C_n[a;b]}$ $\boldsymbol{r}$-раз непрерывно-дифференцируемых функций.**

   $$
   ||x||_r = \max \left( ||x||_0, ||x'||_0, ..., ||x^{(r)}||_0 \right).
   $$

4. **Пространство $\boldsymbol{C_p[a;b]}$ непрерывных функций** с интегральной нормой

   $$
   ||x||_p = \left( \int_a^b \left|x^p(t)\right| ~ \text{d}t \right)^{1/p},
   $$

   где $p \ge 1$.

::: info Пример
Для функции $x(t) = t^2$ на отрезке $t \in [0; 1]$ сосчитаем различные нормы.

$$
||x||_0 = 1.
$$

$$
x'(t) = 2t, ~ ~ ~ ||x'||_0 = 2; ~ ~ ~ ||x||_1 = \max \set{1, 2} = 2.
$$

$$
x''(t) = 2, ~ ~ ~ ||x||_2 = \max\set{1, 2, 2} = 2.
$$

$$
L_2[0;1]: ~ ||x||_2 = \left( \int_a^b |x^p(t)| ~ \text{d}t \right)^{1/2} = {1 \over \sqrt{5}}.
$$
:::

::: info Определение 2
Отображение $A$ из нормированного пространства $X$ в нормированное пространство $Y$ называется **линейным оператором:**

1. *свойство линейности:*
   
   $$
   A(\alpha x_1 + \beta x_2) = \alpha A x_1 + \beta A x_2,
   $$

   где $\alpha, \beta \in \mathbb{R}$, $x_1, x_2 \in X$.

2. *свойство непрерывности:*
   
   Если последовательность $x_n$ сходится к $x$ в пространстве $X$:

   $$
   ||x_n - x||_X \to 0,
   $$

   то образы $A x_n$ будут стремиться к $Ax$ в $Y$:

   $$
   ||Ax_n - Ax||_Y \to 0.
   $$
:::

::: info Пример
Оператор $A: C[0;1] \to \mathbb{R}$, $Ax(t) = x(0)$ — линейный оператор (функции ставит в соответствие точку).
:::

<br />

---

<br />