---
prev:
    text: § 11. Виды алгебраических операций
    link: ../11/
next:
    text: § 14. Группа преобразований
    link: ../14/
---

# § 13. Понятие группы

::: info ОПРЕДЕЛЕНИЕ
Множество $G$ с операцией $∗$ называется **группой относительно этой операции**, если
1. операция $∗$ ассоциативна;
2. операция $∗$ имеет нейтральный элемент $e \in G$;
3. любой элемент множества $G$ обратим относительно операции $∗$.
:::

:::: info ОСНОВНАЯ ТЕОРЕМА
Множество $G$ с операцией $∗$ является группой тогда и только тогда, когда эта операция ассоциативна и обратима.

::: info Доказательство
1. Пусть множество $G$ — группа относительно операции $∗$. Тогда эта операция ассоциативна *(из опр. группы)*.

   Проверим, что эта операция обратима. Рассмотрим уравнение $a ∗ x = b$. Положим $x = a^{-1} ∗ b$.

   Так как $G$ - группа, то $a^{-1}$ существует, а значит, существует и $x$.

   Подставим $x$ в данное уравнение:

   $$
   a ∗ x = a ∗ (a^{-1} ∗ b) = \underbrace{(a ∗ a^{-1})}_{e} ∗ b = e ∗ b = b.
   $$

   Проверим, что корень единственный. Пусть $x_1$ и $x_2$ удовлетворяют уравнению, т. е. $a ∗ x_1 = b$ и $a ∗ x_2 = b$. Тогда $a ∗ x_1 = a ∗ x_2$.

   Слева умножим на $a^{-1}$:
   
   $$
   a^{-1} ∗ (a ∗ x_1) = a^{-1} ∗ (a ∗ x_2) \overset{\text{acc.}}{\implies}
   $$
   $$
   \implies (a^{-1} ∗ a) ∗ x_1 = (a^{-1} ∗ a) ∗ x_2 \implies
   $$
   $$
   \implies e ∗ x_1 = e ∗ x_2 \implies x_1 = x_2.
   $$

   Аналогично доказывается, что уравнение $y ∗ a = b$ тоже имеет единственный корень y = b ∗ a^{-1}$.<sup>[сделать самостоятельно]</sup>

   Итак, если $G$ — группа, то операция $∗$ ассоциативна и обратима.

2. Пусть операция $∗$ на множестве $G$ ассоциативна и обратима.

   Чтобы утверждать, что $G$ — группа, надо найти нейтральный элемент и доказать, что любой элемент обратим.

   * Докажем существование нейтрального элемента.
     
     Пусть $a \in G$. Тогда существует единственное решение уравнения $a ∗ x = a$ (т. к. операция $∗$ обратима).

     Обозначим $x$ как $e_a$. Тогда $a ∗ e_a = a$.

     Пусть $b \in G$. $\exists ! y \in G : ~ (y ∗ a = b)$. Тогда
     $$ b ∗ e_a = (y ∗ a) ∗ e_a = y ∗ (a ∗ e_a) = y ∗ a = b. $$

     Итак, элемент $e_a$ является «правым» нейтральным элементом: $\forall x \in M ~ ~ ~ (x ∗ e_a = x)$, поэтому обозначим $e_a = e_\text{пр}$.

     Аналогично можно найти такой элемент $e_\text{л} \in G : ~ \forall x \in G ~ ~ ~ (e_\text{л} ∗ x = x)$.<sup>[проверить самостоятельно]</sup>

     Применим операцию $∗$ к $e_\text{л}$ и $e_\text{пр}$:
     
     $$
     \begin{rcases}
     e_\text{л} ∗ e_\text{пр} = \set{ e_\text{л} ∗ x = x } = e_\text{пр}, \\
     e_\text{л} ∗ e_\text{пр} = \set{ x ∗ e_\text{пр} = x } = e_\text{л}
     \end{rcases} \implies e_\text{л} = e_\text{пр}.
     $$

     Обозначим $e_\text{л} = e_\text{пр} = e$ и получим, что
     $$ \forall a \in G ~ ~ ~ a ∗ e = e ∗ a = a, $$
     т. е. $a$ — нейтральный элемент.

   * Докажем, что всякий элемент $a \in G$ обратим. Так как операция $∗$ обратима, то $\exists ! a_\text{л} \in G : ~ ~ (a_\text{л} ∗ a = e)$ и $\exists ! a_\text{пр} \in G : ~ ~ (a ∗ a_\text{пр} = e)$.

   $$
   a_\text{пр} = e ∗ a_\text{пр} = (a_\text{л} ∗ a) ∗ a_\text{пр} = a_\text{л} ∗ (a ∗ a_\text{пр}) =
   $$
   $$
   = a_\text{л} ∗ e = a_\text{л} \implies a_\text{пр} = a_\text{л}.
   $$

   Обозначим $a_\text{л} = a_\text{пр} = a^{-1}$. Тогда
   $$ a^{-1} ∗ a = a ∗ a^{-1} = e, $$
   т. е. $a^{-1}$ — обратный элемент.

   Таким образом, если $a \in G$ ассоциативна с $∗$ и в $G$ существует обратный элемент, то $G$ — группа.

Теорема доказана полностью.
:::

::::