---
prev:
    text: § 3. Наибольший общий делитель целых чисел
    link: ../03/
next: false
    #text: § 4. Взаимно простые числа. Наименьшее общее кратное
    #link: ../04/
---

**Лекция**

# § 4. Взаимно простые числа. Наименьшее общее кратное

::: info ОПРЕДЕЛЕНИЕ
Два целых числа называются **взаимно простыми**, если их НОД равен 1.
:::

Свойства взаимно-простых чисел:

1. Если $a$ и $b$ — взаимно простые, т. е. $(a; b) = 1$, то
   $$
   \exists x \in \mathbb{Z} ~ ~ \exists y \in \mathbb{Z} ~ ~ ~ (ax + by = 1).
   $$

   Это утверждение следует из линейного представления НОД.

2. Если $(a; b) = 1$, $a ~ \small \vdots \normalsize ~ a_1$, $b ~ \small \vdots \normalsize ~ b_1$, то $(a_1; b_1) = 1$.

   ::: info Доказательство
   $$
   \exists x, y \in \mathbb{Z}: ~ ~ (ax + by = 1).
   $$

   $$
   \begin{matrix}
   a ~ \small \vdots \normalsize ~ a_1 \implies a = a_1 q, \\
   b ~ \small \vdots \normalsize ~ b_1 \implies b = b_1 q;
   \end{matrix}
   $$

   $$
   (a_1 q) x + (b_1 k) y = 1;
   $$

   $$
   a_1 \cdot \underbrace{(qx)}_{x_1} +
   a_2 \cdot \underbrace{(qy)}_{y_1} = 1;
   $$

   $$
   a_1 x_1 + b_1 y_1 = 1 \implies (a_1; b_1) = 1. ~ ~ ~ ~ \blacksquare
   $$
   :::

3. Если $(a; b) ~ \small \vdots \normalsize ~ c$, где $(a; c) = 1$, то $b ~ \small \vdots \normalsize ~ c$.

   ::: info Доказательство
   $$ \exists x, y \in \mathbb{Z} ~ ~ ~ (ax + cy = 1) $$
   $$ 1 = ax + cy ~ ~ ~ ~ | \cdot b $$
   $$
   b = \underbrace{(ab)x}_{\small \vdots \normalsize ~ c} +
   \underbrace{c(yb)}_{\small \vdots \normalsize ~ c}
   \implies b ~ \small \vdots \normalsize ~ c. ~ ~ ~ ~ \blacksquare
   $$
   :::

*Предостережение.* Требование взаимной простоты $a$ и $b$ существенно: без него может оказаться, что $(ab) ~ \small \vdots \normalsize ~ c$, но $a ~ \small \vdots \normalsize ~ c$ и $b ~ \small \vdots \normalsize ~ c$.