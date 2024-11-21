---
prev: false
next: false
    #text: § 8. --
    #link: ../08/
---

# § 1. Кольцо целых чисел

Множество целых чисел обозначается $\mathbb{Z}$.

Сложение и умножение целых чисел обладают следующими свойствами:

1. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ (a + b) \in \mathbb{Z}$.<br>
   *(сложение в множестве $\mathbb{Z}$ является бинарной операцией)*

2. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ (a \cdot b) \in \mathbb{Z}$.<br>
   *(умножение в множестве $\mathbb{Z}$ является бинарной операцией)*

3. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ (a + b = b + a) \in \mathbb{Z}$.<br>
   *(коммутативность сложения)*

4. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ \forall c \in \mathbb{Z} ~ ~ ~ (a + (b + c) = (a + b) + c) \in \mathbb{Z}$.<br>
   *(ассоциативность сложения)*

5. $(0 \in \mathbb{Z}) ~ \text{и} ~ (\forall a \in \mathbb{Z} ~ ~ ~ (a + 0 = a))$.<br>
   *(сложение на множестве $\mathbb{Z}$ имеет нейтральный элемент)*

6. $\forall a \in \mathbb{Z} ~ ~ \exists -a \in \mathbb{Z} ~ ~ ~ (a + (-a) = 0)$.<br>
   *(всякое целое число имеет целый противоположный элемент)*

7. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ \forall c \in \mathbb{Z} ~ ~ ~ (a \cdot (b \cdot c) = (a \cdot b) \cdot c)$.<br>
   *(ассоциативность умножения)*

8. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ \forall c \in \mathbb{Z} ~ ~ ~ (a \cdot (b + c) = a \cdot b + a \cdot c)$.<br>
   *(дистрибутивность умножения относительно сложения)*

Всякое множество, обладающее свойствами 1-8, называется в алгебре **кольцом**.

Следствия из свойств 1-8:

:::: info СЛЕДСТВИЕ 1
Операция сложения целых чисел обратима:
$$
\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ \exists ! x \in \mathbb{Z} ~ ~ ~ (a + x = b).
$$

::: info Доказательство
1. Докажем существование $x$.

   Пусть $x = (-a) + b$. Тогда, по свойствам 1 и 6, $x \in \mathbb{Z}$.

   $$
   a + x = a + ( (-a) + b ) \underset{4}{=} (a + (-a)) + b \underset{6}{=}
   $$
   $$
   \underset{6}{=} 0 + b \underset{3}{=} b + 0 \underset{5}{=} b.
   $$
   
   Таким образом, мы доказали, что $x = (-a) + b$ удовлетворяет условию.

2. Докажем единственность.

   Пусть $a + x_1 = b$, $a + x_2 = b$. Тогда
   $$a + x_1 = a + x_2.$$
   Прибавим к обеим частям $(-a)$:
   $$
   (-a) + (a + x_1) = (-a) + (a + x_2) \underset{4}{\implies}
   $$
   $$
   \underset{4}{\implies} ((-a) + a) + x_1 = ((-a) + a) + x_2 \underset{6,3}{\implies}
   $$
   $$
   \underset{6,3}{\implies} 0 + x_1 = 0 + x_2 \underset{3,5}{\implies} x_1 = x_2. ~ ~ \blacksquare
   $$
:::

::::

Сложение в $\mathbb{Z}$ обратимо, и можно определить операцию *вычитания*.

Пусть $x = -a + b$. Обозначим $(-a) + b = b - a$. Это число называется **разностью** чисел $b$ и $a$.

Вычитание — операция, обратная сложению.

:::: info СЛЕДСТВИЕ 2
Дистрибутивность умножения относительно вычитания:
1. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ \forall c \in \mathbb{Z} ~ ~ ~ (a \cdot (b - c) = a \cdot b - a \cdot c)$;
2. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ \forall c \in \mathbb{Z} ~ ~ ~ ((a-b) \cdot c = a \cdot c - b \cdot c)$.

::: info Доказательство
1. Достаточно проверить, что $a(b-c) + ac = ab$.

   $$
   a \cdot (b - c) + a \cdot c = a \cdot (b + (-c)) + a \cdot c \underset{8}{=}
   $$
   $$
   \underset{8}{=} (a \cdot b + a \cdot (-c)) + a \cdot c \underset{4}{=}
   $$
   $$
   \underset{4}{=} a \cdot b + ( a \cdot (-c) + a \cdot c ) \underset{8}{=}
   $$
   $$
   \underset{8}{=} a \cdot b + a \cdot ((-c) + c) \underset{8}{=} a \cdot (b + (-c) + c) \underset{3,6}{=}
   $$
   $$
   \underset{3,6}{=} a \cdot (b + 0) \underset{5}{=} a \cdot b. ~ ~ ~ \blacksquare
   $$

*Пункт 2 доказать самостоятельно.*
:::

::::

:::: info СЛЕДСТВИЕ 3
Свойства нуля:
1. $\forall a \in \mathbb{Z} ~ ~ ~ (a - a = 0)$;
2. $\forall a \in \mathbb{Z} ~ ~ ~ (a \cdot 0 = 0)$;
3. $\forall a \in \mathbb{Z} ~ ~ ~ (0 \cdot a = 0)$.

::: info Доказательство
1. $$ a - a \underset{\text{def}}{=} a + (-a) \underset{6}{=} 0. ~ ~ ~ \blacksquare $$
2. $$ a \cdot 0 = \set{ \text{т. к.} ~ a - a = 0 } = a \cdot (a - a) \underset{\text{по сл. 2}}{=} $$
   $$ \underset{\text{по сл. 2}}{=} a \cdot a - a \cdot a \underset{\text{a)}}{=} 0. ~ ~ ~ \blacksquare $$
3. *Доказать самостоятельно.*
:::

::::

:::: info СЛЕДСТВИЕ 4
Правила знаков:
1. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ a \cdot (-b) = -ab$;
2. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ (-a) \cdot b = -ab$;
3. $\forall a \in \mathbb{Z} ~ \forall b \in \mathbb{Z} ~ ~ ~ (-a) \cdot (-b) = ab$.

::: info Доказательство
1. Требуется доказать, что $a \cdot (-b)$ — число, противоположное $ab$, т. е. что $a \cdot (-b) + ab = 0$.

   $$
   a \cdot (-b) + ab \underset{8}{=} a \left( (-b) + b \right) \underset{6}{=} a \cdot 0 \underset{\text{сл. 3.2}}{=} 0. ~ ~ ~ \blacksquare
   $$

2. *Доказать самостоятельно.*

3. 
   $$
   (-a) \cdot (-b) \underset{\text{сл. 4.2}}{=}
   -\left( a \cdot (-b) \right) \underset{\text{сл. 4.1}}{=}
   - \left( -ab \right) \underset{6}{=}
   ab. ~ ~ ~ \blacksquare
   $$
:::

::::