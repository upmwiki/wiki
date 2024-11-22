---
prev:
    text: § 1. Кольцо целых чисел
    link: ../01/
next: false
    #text: § 3. Наибольший общий делитель целых чисел
    #link: ../03/
---

# § 2. Делимость в кольце целых чисел

::: info ОПРЕДЕЛЕНИЕ 1
Пусть $a$ и $b$ — целые числа ($b \ne 0$). Говорят, что число $a$ **делится** на число $b$ (обозначение: $a ~ \small \vdots \normalsize ~ b$), если существует такое $c \in \mathbb{Z}$, что $a = b \cdot c$:

$$
\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} \backslash \set{0} ~ ~ ~ ( (a ~ \small \vdots \normalsize ~ b) \iff \exists c \in \mathbb{Z} ~ ~ (a = b \cdot c) ).
$$
:::

## Свойства отношения делимости

::: info СВОЙСТВО 1 (Д1)
$$ \forall a \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ 1. $$
:::

::: info СВОЙСТВО 2 (Д2)
$$ \forall a \in \mathbb{Z} ~ ~ ~ a \ne 0 \implies a ~ \small \vdots \normalsize ~ a. $$
:::

::: info СВОЙСТВО 3 (Д3)
$$ \forall a \in \mathbb{Z} ~ ~ ~ a \ne 0 \implies 0 ~ \small \vdots \normalsize ~ a. $$
:::

::: info СВОЙСТВО 4 (Д4)
Транзитивность делимости:
$$ \forall a, b, c \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ b, ~ b ~ \small \vdots \normalsize ~ c \implies a ~ \small \vdots \normalsize ~ c. $$
:::

::: info СВОЙСТВО 5 (Д5)
$$ \forall a, b \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ b \implies -a ~ \small \vdots \normalsize ~ b, ~ a ~ \small \vdots \normalsize ~ -b, ~ -a ~ \small \vdots \normalsize ~ -b. $$
:::

::: info СВОЙСТВО 6 (Д6)
$$ \forall a, b, c \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ c, ~ b ~ \small \vdots \normalsize ~ c \implies (a+b) ~ \small \vdots \normalsize ~ c, ~ (a-b) ~ \small \vdots \normalsize ~ c. $$
:::

::: info СВОЙСТВО 7 (Д7)
$$ \forall a, b, c \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ c, ~ b \in \mathbb{Z} \implies a \cdot b ~ \small \vdots \normalsize ~ c. $$
:::

:::: info СВОЙСТВО 8 (Д8)
$$ \forall a, b, c \in \mathbb{Z} ~ ~ ~ a ~ \small \vdots \normalsize ~ b \implies \left[\begin{matrix}
a = 0, \\
|a| \ge |b|.
\end{matrix}\right. $$

::: info СЛЕДСТВИЕ 1
$$
1 ~ \small \vdots \normalsize ~ a \implies a = \pm 1.
$$
:::

::: info СЛЕДСТВИЕ 2
$$
a ~ \small \vdots \normalsize ~ b, ~ b ~ \small \vdots \normalsize ~ a \implies |a| = |b|.
$$
:::

::::

## Деление с остатком

::: info ОПРЕДЕЛЕНИЕ
Пусть $a \in \mathbb{Z}$, $b \in \mathbb{Z}$. **Разделить $a$ на $b$ с остатком** — значит найти такие целые числа $q$ и $r$, что:
1. $a = bq + r$,
2. $0 \le r < |b|$,

где $q$ называется *неполным частным*, а $r$ — *остатком*.
:::

Заметим, что никакое число нельзя разделить с остатком на ноль: если $b = 0$, то $0 \le r < 0$, т. е. $r \ge 0$ меньше нуля не может быть.

:::: info ТЕОРЕМА (О ДЕЛЕНИИ С ОСТАТКОМ)
Пусть $a \in \mathbb{Z}$, $b \in \mathbb{Z}$, $b \ne 0$. Тогда можно разделить $a$ на $b$ с остатком, причём единственным образом.

---

Это означает, что
$$
\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} \backslash \set{0} ~ ~ ~ \exists! (q,r), ~ q \in \mathbb{Z}, ~ r \in \mathbb{Z}: ~ ~ \begin{cases}
a = bq + r, \\
0 \le r < |b|.
\end{cases}
$$

::: info Доказательство
**Докажем возможность деления с остатком.** Пусть $a$, $b$ — целые, $b \ne 0$. Рассмотрим бесконечный в обе стороны ряд чисел, делящихся на $b > 0$.

<br>

![](/media/images/num%20theory%202%201.svg){.light-only}
![](/media/images/num%20theory%202%201%20dark.svg){.dark-only}

<br>

Возможны два случая:
1. Если $a$ совпала с какой-то из точек этого ряда, то есть $a = bq$, то $a = bq + 0$, значит $q$ — неполное частное, $r$ — остаток.
2. Если $a \ne bq$, то $a$ попадёт в один из интервалов $[bq; ~ b(q+1)]$:
   $$ bq < a < b(q+1). $$
   Вычтем $bq$, получим:
   $$ 0 < a - bq < b. $$
   При этом $a = bq + (a - bq)$, где $(a - bq)$ — остаток.
   
   Таким образом, положив $a - bq = r$, получаем, что $a = bq + r$, $0 \le r < |b|$. Значит, $q$ — неполное частное, $r$ — остаток.

Итак, любое целое $a$ можно разделить с остатком на любое положительное целое число.

Пусть теперь $b < 0$. Тогда $-b>0$, значит $a \in \mathbb{Z}$ можно разделить с остатком на $-b$:

$$
\begin{cases}
a = (-b)q_1 + r_1, \\
q_1, r_1 \in \mathbb{Z}, \\
0 \le r_1 < -b.
\end{cases}
$$

Положим $q = (-q_1)$, $r = r_1$. Тогда

$$
\begin{cases}
a = bq + r, & \\
0 \le r < -b = |b|, & b < 0.
\end{cases}
$$

**Докажем единственность деления с остатком.** Предположим, что
$$
\begin{cases}
a = bq_1 + r_1, \\
0 \le r_1 < |b|
\end{cases} ~ \text{и} ~
\begin{cases}
a = bq_2 + r_2, \\
0 \le r_2 < |b|.
\end{cases}
$$

Из этих равенств следует:

$$
r_1 = r_2 = b\underbrace{(q_2 - q_1)}_{\in \mathbb{Z}} \implies (r_1 - r_2) ~ \small \vdots \normalsize ~ b.
$$

По свойству Д8 отсюда следует, что

$$
\left[\begin{matrix}
r_1 - r_2 = 0, \\
|r_1 - r_2| \ge |b|.
\end{matrix}\right.
$$

<br>

![](/media/images/num%20theory%202%202.svg){.light-only}
![](/media/images/num%20theory%202%202%20dark.svg){.dark-only}

<br>

Из рисунка видно, что $r_1, r_2 \in [0, b]$, т. е. $|r_1 - r_2| < |b|$.

$$
\begin{cases}
\left[\begin{matrix}
r_1 - r_2 = 0, \\
|r_1 - r_2| \ge |b|,
\end{matrix}\right. \\
|r_1 - r_2| < |b|
\end{cases} \implies r_1 - r_2 = 0 \implies
$$

$$
\implies r_1 = r_2 \implies q_1 = q_2.
$$

Таким образом, деление о остатком осуществляется единственным образом.

Теорема доказана полностью.
:::

::::