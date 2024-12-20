---
prev: false
    #text: § 3. Наибольший общий делитель целых чисел
    #link: ../03/
next: false
    #text: § 4. Взаимно простые числа. Наименьшее общее кратное
    #link: ../04/
---

**Лекция**

# § 9. Решение сравнений

Пусть $P(x)$ — многочлен от $x$. Решить сравнение $P(x) \equiv 0 \pmod{m}$ — значит найти все целые числа $x$, удовлетворяющие этому сравнению.

Замечание:
1. Если $x_0$ — решение, то любое $x \equiv 0 \pmod{m}$ — тоже решение.

   *(Доказать.)*

2. Для решения сравнения достаточно найти все его решения из промежутка от $0$ до $m-1$.

   *(Доказать.)*

Например, согласно лемме к теореме Вильсона, $x^2 - 1 \equiv 0 \pmod{7}$ имеет ровно 2 решения в промежутке от $0$ до $6$, а именно $x = 1$ и $x = p - 1 = 6$. В этом случае решение сравнения записывается так:

$$
\left[
    \begin{array}{l}
    x \equiv 1 \pmod{7}, \\
    x \equiv 6 \pmod{7}.
    \end{array}
\right.
$$

Говоря о числе решений сравнения, имеют в виду решения, не сравнимые по данному модулю.

::: info ПРИМЕР
Решить сравнение $x^2 - 1 \equiv 0 \pmod{11}$.

*Решение.* $(x-1)(x+1) ~ \small \vdots \normalsize ~ 11$.

$$
\left[
    \begin{array}{l}
    (x - 1) ~ \small \vdots \normalsize ~ 11,
    (x + 1) ~ \small \vdots \normalsize ~ 11
    \end{array}
\right.
\implies
\left[
    \begin{array}{l}
    x \equiv 1 \pmod{11}, \\
    x \equiv 10 \pmod{11}.
    \end{array}
\right.
$$
:::

Сравнение $ax \equiv b \pmod{m}$, где $a, b \in \mathbb{Z}$, называется **сравнением первой степени**.

1. Если $(a; m) = 1$, то это сравнение имеет единственное решение.

   *(Доказывали.)*

2. Если $(a; m) = d$, $b \!\not\small\vdots\normalsize ~ d$, то сравнение не имеет решения.

   *(Доказать.)*

3. Если $(a; m) = d$, $b ~ \small \vdots \normalsize ~ d$, то сравнение имеет $d$ решений.

   ::: info Доказательство
   Для любого $x\in \mathbb{Z}$ $ax ~ \small \vdots \normalsize ~ d$, т. к.
   $$
   (a; m) = d \implies
   a ~ \small \vdots \normalsize ~ d \implies
   ax ~ \small \vdots \normalsize ~ d.
   $$

   $$
   \begin{rcases}
   a ~ \small \vdots \normalsize ~ d \\
   m ~ \small \vdots \normalsize ~ d \\
   b ~ \small \vdots \normalsize ~ d
   \end{rcases} \implies
   \begin{rcases}
   a = da_1 \\
   b = db_1 \\
   m = dm_1
   \end{rcases} \implies
   $$

   $$
   \implies \set{ ax \equiv b \pmod{m} } \implies
   $$

   $$
   \implies a_1 dx \equiv b_1 d \pmod{m_1d}.
   $$

   По свойствам СМ1 и СМ2 получается, что $ax \equiv b \pmod{m}$ и $a_1x \equiv b_1 \pmod{m_1}$ равносильны:

   $$
   ax \equiv b \pmod{m} \iff a_1x \equiv b \pmod{m_1}.
   $$

   Т. к. $(a; m) = d$, то $(a_1; m_1) = 1$, следовательно $a_1x \equiv b_1 \pmod{m_1}$ имеет единственное решение (см. п. 1). Обозначим это решение как $x_0$:

   $$
   \begin{matrix}
   x \equiv x_0 \pmod{m_1}, \\
   0 \le x_0 \le m_1 - 1.
   \end{matrix}
   $$

   Выберем из решений $x \equiv x_0 \pmod{m_1}$ те, которые не сравнимы по $\bmod{m}$:

   $$
   x_0, x_0 + m_1, x_0 + 2m_1, ..., x_0 + (d-1)m. \tag{∗}
   $$

   $$
   (x_0 + (d-1) m = x_0 + dm_1 - m_1 = x_0 + m - m_1 \le m - 1.)
   $$

   $(∗)$ — все решения сравнения $a_1x \equiv b_1 \pmod{m_1}$, не сравнимые по $\bmod{m}$. Значит, это все решения исходного сравнения. Их всего $d$.

   Утверждение доказано.
   :::

## Функция Эйлера

Пусть $m \in \mathbb{N}$, $m \ne 1$, тогда $\varphi(m)$ — количество натуральных чисел, меньших $m$ и взаимно простых с $m$.

Функцию $\varphi(m)$ называют **функцией Эйлера**.

Примеры:
* $\varphi(2) = 1$ (1);
* $\varphi(3) = 2$ (1, 2);
* $\varphi(4) = 2$ (1, 3);
* $\varphi(5) = 4$ (1, 2, 3, 4);
* $\varphi(6) = 2$ (1 и 5);
* $\varphi(19) = 18$ (т. к. 19 — простое).

:::: info ТЕОРЕМА
Пусть $m = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdot ... \cdot p_k^{\alpha_k}$ — каноническое разложение числа $m$. Тогда

$$
\varphi(m) = m
\left(1 - {1 \over p_1}\right) \cdot
\left(1 - {1 \over p_2}\right) \cdot
... \cdot
\left(1 - {1 \over p_k}\right).
$$

::: info Доказательство
1. Пусть $m = p$ — простое. Тогда
   $$
   \varphi(m) = p - 1 =
   p\left(1 - {1 \over p}\right) =
   m\left(1 - {1 \over p}\right).
   $$

2. Пусть $m = p^k$ — степень простого числа, где $k > 1$. Среди чисел от $1$ до $p^k - 1$ не взаимно просты с $m$ только числа, кратные с $p$:
   
   $$
   p, 2p, ..., p \cdot p, ..., p^k - p = p\left( p^{k-1} - 1\right),
   $$

   всего таких чисел $p^{k-1} - 1$.

   Значит,

   $$
   \varphi(m) = p^k - 1 - p^{k-1} =
   p^k \left(1 - {1 \over p}\right) =
   m \left(1 - {1 \over p}\right).
   $$

3. Докажем, что если $(m; n) = 1$, то $\varphi(mn) = \varphi(m) \cdot \varphi(n)$.

   Если $(a; m) = (a; n) = (m; n) = 1$, то $(a; mn) = 1$.

   Обратно: если $(a; mn) = 1$, $(m; n) = 1$, то $(a; m) = (a; n) = 1$.

   Если $(m; n) = 1$, то числа, взаимно простые с $mn$ — это числа, которые взаимно просты с $m$ и $n$.

   Для того, чтобы найти числа, взаимно простые с $mn$, надо найти числа, взаимно простые и с $m$ и с $n$.

   Запишем числа от $0$ до $mn - 1$ в виде таблицы из $n$ строк и $m$ столбцов:

   $$
   \begin{array}{cc|cccccc}
   n=1  &&& 0 & 1 & 2 & \cdots & m - 1 \\
   n=2 &&& m & m+1 & m+2 & \cdots & 2m-1 \\
   n=3 &&& 2m & 2m+1 & 2m+2 & \cdots & 3m-1 \\
   \vdots &&& \vdots & \vdots & \vdots & \ddots & \vdots \\
   n &&& (n-1)m & (n-1)m + 1 & (n-1)m + 2 & \cdots & nm - 1
   \end{array}
   $$

   Выберем сначала числа, взаимно простые с $m$: каждое число в таблице имеет вид $km + t$, где $k$ — номер строки ($k = \overline{0, n-1}$), $t$ — номер столбца ($t = \overline{0, m-1}$).

   Число $km + t$ будет взаимно просто с $n$ $\iff$ $(t;m) = 1$ $\implies$ Числа, взаимно простые с $m$, заполняют столбцы, номера которых взаимно просты с $n$ (таких столбцов $\varphi(n)$).

   Итак, мы выделили $\varphi(n)$ столбцов и теперь внутри каждого из них отыщем числа, взаимно простые с $n$.

   Если $t$ — номер столбца, то числа в нём имеют вид $t$, $m+t$, $2m+t$, ..., $(n-1)m+t$. Все эти числа при делении на $n$ дают разные остатки, т. е. остатки от деления на $n$ — это всё числа от $0$ до $n-1$. Среди них взаимно простых с $n$ будет $\varphi(n)$.

   Итак, $\varphi(mn) = \varphi(m) \cdot \varphi(n)$.

4. Пусть теперь дано каноническое разложение числа $m$. Тогда

   $$
   \varphi(m) =
   \varphi(p_1^{\alpha_1}) \cdot 
   \varphi(p_2^{\alpha_2}) \cdot ... \cdot
   \varphi(p_k^{\alpha_k}).
   $$

   Согласно п. 2, каждое из них равняется

   $$
   \varphi(m) =

   p_1^{\alpha_1} \left(1 - {1 \over p_1}\right) \cdot
   p_1^{\alpha_2} \left(1 - {1 \over p_1}\right) \cdot ... \cdot
   p_1^{\alpha_2} \left(1 - {1 \over p_1}\right) =
   $$

   $$
   = m
   \left(1 - {1 \over p_1}\right)
   \left(1 - {1 \over p_2}\right) \cdots
   \left(1 - {1 \over p_k}\right).
   $$

Теорема доказана.
:::
::::