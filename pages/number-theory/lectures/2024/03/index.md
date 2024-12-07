---
prev:
    text: § 2. Делимость в кольце целых чисел
    link: ../02/
next: false
    #text: § 3. Наибольший общий делитель целых чисел
    #link: ../03/
---

# § 3. Наибольший общий делитель целых чисел

::: info ОПРЕДЕЛЕНИЕ
Число $d$ называется **наибольшим общим делителем** (**НОД**) целых чисел $a$ и $b$, если выполнены два условия:
1. $a ~ \small \vdots \normalsize ~ d$ и $b ~ \small \vdots \normalsize ~ d$;
2. если $a ~ \small \vdots \normalsize ~ c$ и $b ~ \small \vdots \normalsize ~ c$, то $d ~ \small \vdots \normalsize ~ c$.

*Замечание.* Аналогично определяется НОД любого количества целых чисел.
:::

::: info ПРИМЕР 1
Какие из чисел $1$, $-1$, $2$, $-2$, $3$, $-3$, $4$, $-4$, $5$, $-5$ являются НОД чисел $-16$ и $60$?

*Решение.* НОД чисел -16 и 60 являются числа 4 и -4:
$$ -16 = -4 \cdot 4 = (-1) \cdot 4 \cdot 4; $$
$$ 60 = 15 \cdot 4 = 3 \cdot 5 \cdot 4. $$
:::

::: info ПРИМЕР 2
Проверить, что если $d$ — это НОД чисел $a$ и $b$, то $-d$ — тоже их НОД.

*Доказательство.*
1. $$
   a ~ \small \vdots \normalsize ~ d, ~ b ~ \small \vdots \normalsize ~ d \underset{\text{Д5}}{\implies} a ~ \small \vdots \normalsize ~ (-d), ~ b ~ \small \vdots \normalsize ~ (-d);
   $$
2. $$
   a ~ \small \vdots \normalsize ~ c, ~ b ~ \small \vdots \normalsize ~ c \underset{\text{опр. НОД}}{\implies} d ~ \small \vdots \normalsize ~ c \underset{\text{Д5}}{\implies} (-d) ~ \small \vdots \normalsize ~ c.
   $$

Таким образом, оба свойства НОД выполнены для числа $-d$. $~ ~ ~ \blacksquare$
:::

:::: info ТЕОРЕМА (О СУЩЕСТВОВАНИИ НОД)
Если $a$ и $b$ — целые числа, не равные нулю, то существует их НОД.

::: info Доказательство
Докажем, что наименьшее положительное число вида $ax + by$, где $x, y \in \mathbb{Z}$, является НОД. Для этого надо проверить, что:
1. среди положительных чисел вида $ax + by$, где $x, y \in \mathbb{Z}$, существует наименьшее число $d$;
2. проверить, что $a ~ \small \vdots \normalsize ~ d$ и $b ~ \small \vdots \normalsize ~ d$;
3. проверить, что если $a ~ \small \vdots \normalsize ~ c$, $b ~ \small \vdots \normalsize ~ c$, то $d ~ \small \vdots \normalsize ~ c$.

Приступим:
1. В любом наборе целых положительных чисел имеется наименьшее. Все числа вида $ax + by$ целые, значит, среди них имеется наименьшее положительное число $d = ax_0 + by_0$, $x_0, y_0 \in \mathbb{Z}$ *(наименьшая линейная комбинация чисел)*.

2. $d > 0$, значит, при делении $a$ на $d$ получается остаток, меньший $d$:

   $$
   a = dq + r = (ax_0 + by_0)q + r, ~ ~ 0 \le r < d.
   $$

   Следовательно,
   
   $$
   r = a - ax_0q - by_0q \implies
   $$
   $$
   \implies 0 \le r = a(1-x_0q) + b(-y_0q) < d.
   $$

   Отсюда получаем две возможности: либо $r = 0$, либо $r$ — положительная линейная комбинация чисел $a$ и $b$, которая меньше $d$.

   Однако второй случай невозможен: $d$ — это наименьшее положительное число такого вида, значит, $r = 0$ и, следовательно, $a ~ \small \vdots \normalsize ~ d$.

   Проверим, что и $b$ делится на $d$. Разделим $b$ на $d$ с остатком:

   $$
   b = dq + r = (ax_0 + by_0)q + r, ~ ~ 0 \le r < d \implies
   $$

   $$
   \implies r = b - ax_0q - by_0q.
   $$

   $$
   0 \le r < a(-x_0q) + b(1-y_0q) < d.
   $$

   Возможные два случая: $r = 0$ либо $r > 0$. Во втором случае получаем, что $r$ — положительная линейная комбинация чисел $a$ и $b$, которая меньше $d$. Это невозможно, т. к. $d$ — наименьшее из таких чисел. Остаётся первый случай: $r = 0$, а значит, $b ~ \small \vdots \normalsize ~ d$.

   Итак, получили, что $a ~ \small \vdots \normalsize ~ d$ и $b ~ \small \vdots \normalsize ~ d$.

3. Пусть $a ~ \small \vdots \normalsize ~ c$, $b ~ \small \vdots \normalsize ~ c$. Следовательно, 

   $$ax_0 ~ \small \vdots \normalsize ~ c, ~ by_0 ~ \small \vdots \normalsize ~ c \implies
   (ax_0 + by_0) ~ \small \vdots \normalsize ~ c \implies
   $$
   $$
   \implies d ~ \small \vdots \normalsize ~ c.
   $$

Теорема доказана полностью.
:::

::::

:::: info ТЕОРЕМА (О ЕДИНСТВЕННОСТИ НОД)
Если $d_1$ и $d_2$ — НОДы данных чисел ($a$ и $b$), то $|d_1| = |d_2|$.

::: info Доказательство
Т. к. $d_1$ — НОД данных чисел, то оба этих числа делятся на $d_1$.

Т. к. $d_2$ — НОД данных чисел, то оба этих числа делятся на $d_2$.

Значит, по второму следствию свойства Д8 $|d_1| = |d_2|$. $~~~\blacksquare$
:::

::::