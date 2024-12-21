---
prev:
    text: § 3. Наибольший общий делитель целых чисел
    link: ../03/
next: false
    #text: § 5. Простые и составные числа
    #link: ../05/
---

**Лекция**

# § 4. Взаимно простые числа. Наименьшее общее кратное

## Взаимно простые числа

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

4. $(a; b) = 1 \implies (c ~ \small \vdots \normalsize ~ ab \iff c ~ \small \vdots \normalsize ~ a ~ \text{и} ~ c ~ \small \vdots \normalsize ~ b)$

   ::: info Доказательство
   1. Если $c ~ \small \vdots \normalsize ~ ab$, то $c = (ab)x$, где $a, b, x \in \mathbb{Z}$.
      
      $$
      a, x, b \in \mathbb{Z} \implies ax, bx \in \mathbb{Z}.
      $$

      Тогда

      $$
      \begin{matrix}
      c = (ab)x = a(bx) \implies c ~ \small \vdots \normalsize ~ a, \\
      c = (ab)x = b (ax) \implies c ~ \small \vdots \normalsize ~ b.
      \end{matrix}
      $$
   
   2. Пусть $c ~ \small \vdots \normalsize ~ a$, $c ~ \small \vdots \normalsize ~ b$, причём $(a; b) = 1$. Тогда

      $$
      c ~ \small \vdots \normalsize ~ a \implies c = am, m \in \mathbb{Z};
      $$
      
      $$
      \begin{rcases}
      am ~ \small \vdots \normalsize ~ b \\
      (a; b) = 1
      \end{rcases} \overset{\text{CB.} ~ 3}{\implies} m ~ \small \vdots \normalsize ~ b \implies m = bn.
      $$

      $$
      \begin{rcases}
      c = am \\
      m = bn
      \end{rcases} \implies c = abn = (ab) n \implies c ~ \small \vdots \normalsize ~ ab.
      $$

   Свойство доказано.
   :::

5. Если каждое из чисел $a_1, a_2, ..., a_k$ взаимно просты с числом $b$, то произведение $a_1 \cdot a_2 \cdot ... \cdot a_k$ взаимно просто с $b$.
   
   ::: info Доказательство
   *Доказать самостоятельно.*
   :::

   *Следствие.* Если $(a; b) = 1$, то любые их степени с натуральных показателем взаимно просты.
   
   ::: info Доказательство
   *Доказать самостоятельно.*
   :::

*Замечание.* Если $a ~ \small \vdots \normalsize ~ b$, то $b$ называют **делителем** числа $a$, а $a$ называют **кратным** числа $b$.

## Наименьшее общее кратное

::: info ОПРЕДЕЛЕНИЕ
Пусть $a$ и $b$ — целые, $a \ne 0$, $b \ne 0$. Число $m$ называют **наименьшим общим кратным** (или **НОК**) чисел $a$ и $b$, если выполнены два условия:

1. $m ~ \small \vdots \normalsize ~ a$, $m ~ \small \vdots \normalsize ~ b$;
2. если $k ~ \small \vdots \normalsize ~ a$ и $k ~ \small \vdots \normalsize ~ b$, то $k ~ \small \vdots \normalsize ~ m$.
:::

*Замечание.* Т. к. должно быть $k ~ \small \vdots \normalsize ~ m$, то $m$ не может быть нулём.

*Замечание.* Если $m$ — НОК чисел $a$ и $b$, то $-m$ также является НОК чисел $a$ и $b$.

:::: info ТЕОРЕМА (О СУЩЕСТВОВАНИИ НОК)
Любые два целых числа, отличных от нуля, имеют НОК.

::: info Доказательство
Пусть $d$ — НОД чисел $a$ и $b$. Обозначим $m = {ab \over d}$. Докажем, что число $m$ является НОК чисел $a$ и $b$.

Разделим $a$ и $b$ на $d$:

$$
a = da_1, ~ ~ ~ ~ ~ ~ b = db_1.
$$

Тогда $(a_1; b_1) = 1$ (см. свойства взаимно простых чисел).

1. Докажем, что $m ~ \small \vdots \normalsize ~ a$ и $m ~ \small \vdots \normalsize ~ b$.

   $$
   \begin{rcases}
   a = da_1 \\
   b = db_1
   \end{rcases} \implies
   m = {ab \over d} = {a_1 d \cdot b_1 d \over d} = a_1 b_1 d =
   $$

   $$
   = \underbrace{(a_1d)}_{a} b_1 = \underbrace{b_1 d}_{b} a_1 \implies m ~ \small \vdots \normalsize ~ a, m ~ \small \vdots \normalsize ~ b.
   $$

2. Пусть $k ~ \small \vdots \normalsize ~ a$ и $k ~ \small \vdots \normalsize ~ b$. Докажем, что $k ~ \small \vdots \normalsize ~ m$.

   $$
   \begin{rcases}
   k ~ \small \vdots \normalsize ~ a \implies k = an = a_1 d n \\
   k ~ \small \vdots \normalsize ~ b
   \end{rcases} \implies a_1 dn ~ \small \vdots \normalsize ~ b_1d \implies a_1n ~ \small \vdots \normalsize ~ b_1.
   $$

   Т. к. $(a_1; b_1) = 1$, то, по свойству 3, $n ~ \small \vdots \normalsize ~ b_1$, следовательно, $n = b_1 l$.

   $$
   k = a_1 dn = a_1 d b_1 l = \underbrace{(a_1 b_1 d)}_{m} l = ml \implies
   $$

   $$
   \implies k ~ \small \vdots \normalsize ~ m.
   $$

Теорема доказана.
:::
::::

:::: info ТЕОРЕМА (О ЕДИНСТВЕННОСТИ НОК)
Если $m_1$ и $m_2$— НОК чисел $a$ и $b$, то $|m_1| = |m_2|$.

*(Единственность с точностью до знака.)*

::: info Доказательство
* Если $m_1 ~ \small \vdots \normalsize ~ a$ и $m_1 ~ \small \vdots \normalsize ~ b$, то $m_2 ~ \small \vdots \normalsize ~ m_1$ (т. к. $m_1$ — НОК).
* Если $m_2 ~ \small \vdots \normalsize ~ a$ и $m_2 ~ \small \vdots \normalsize ~ b$, то $m_1 ~ \small \vdots \normalsize ~ m_2$ (т. к. $m_2$ — НОК).

Значит, по свойству делимости,

$$
|m_1| \ge |m_2|, |m_2| \ge |m_1| \implies |m_1| = |m_2|.
$$

Теорема доказана.
:::
::::

Положительное НОК чисел $a$ и $b$ обозначают $[a; b]$.

Мы доказали, что

$$
[a; b] = { a \cdot b \over (a; b) }.
$$

Из этой формулы можно получить два свойства НОК:

1. если $c > 0$, то $[ca; cb] = c \cdot [a; b]$;
2. если $c > 0$, $a ~ \small \vdots \normalsize ~ c$, $b ~ \small \vdots \normalsize ~ c$, то $\left[{a \over c}; {b \over c}\right] = {1 \over c} \cdot [a; b]$.

*(Доказать свойства самостоятельно.)*

:::: info ТЕОРЕМА (ОБ ЭКВИВАЛЕНТНОСТИ ДВУХ ОПРЕДЕЛЕНИЙ НОК)
Положительное число $m$ является НОК чисал $a$ и $b$ тогда и только тогда, когда выполнены два условия:
1. $m ~ \small \vdots \normalsize ~ a$, $m ~ \small \vdots \normalsize ~ b$;
2. если $m_1 ~ \small \vdots \normalsize ~ a$ и $m_1 ~ \small \vdots \normalsize ~ b$ ($m_1$ — любое общее кратное), то $|m_1| \ge m$.

::: info Доказательство
1. Если $m$ — НОК, то первое условие выполнено, а если $m_1 ~ \small \vdots \normalsize ~ a$ и $m_1 ~ \small \vdots \normalsize ~ b$, то $m_1 ~ \small \vdots \normalsize ~ m \implies |m_1| \ge m$. Значит, выполнено и второе условие.

2. Пусть выполнены условия 1 и 2. Тогда $m ~ \small \vdots \normalsize ~ a$ и $m ~ \small \vdots \normalsize ~ b$, а значит, $m ~ \small \vdots \normalsize ~ [a; b]$, т. е. $m \ge [a;b]$.

   Но, по второму условию, $[a; b] \ge m$. Значит, $[a; b] = m$.

Теорема доказана полностью.
:::
::::