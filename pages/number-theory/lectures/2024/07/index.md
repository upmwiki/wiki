---
prev: false
    #text: § 6. --
    #link: ../06/
next: false
    #text: § 8. --
    #link: ../08/
---

# § 7. Сравнимость по модулю

## Сравнимость по модулю

::: info ОПРЕДЕЛЕНИЕ
Пусть $m$ — натуральное число, не равное единице, а $a$ и $b$ — целые числа. Тогда числа $a$ и $b$ называются **сравнимыми по модулю $m$**, если при делении на $m$ они дают одинаковые остатки:

$$
a \equiv b ~ ~ (\text{mod} ~ m).
$$
:::

:::: info СЛЕДСТВИЕ 1
Если $m \in \mathbb{N}\backslash\set{1}$, $a,b \in \mathbb{Z}$, то
$$
a \equiv b ~ ~ (\text{mod} ~ m) \iff (a-b) ~ \small \vdots ~ \normalsize m.
$$

::: info Доказательство
1. Пусть $a = p_1m + r$, $b = p_2m + r$. Тогда их разность
   $$
   a - b + (p_1 m + r) - (p_2 m + r) = 
   $$
   $$
   = p_1m - p_2m = m(p_1 - p_2).
   $$
   Поскольку $(p_1 - p_2) \in \mathbb{Z}$, а $m ~ \small \vdots ~ \normalsize m$, то $(a-b) ~ \small \vdots \normalsize ~ m$.

2. Пусть $(a-b) ~ \small \vdots \normalsize ~ m$, $a = p_1m + r_1$, $b = p_2m + r_2$. Надо доказать, что остатки равны ($r_1 = r_2$).

   Рассмотрим разность $a-b$:
   $$
   a - b = (p_1m + r_1) - (p_2m + r_2) =
   $$
   $$
   = m(p_1 - p_2) + (r_1 - r_2).
   $$
   Поскольку $(p_1 - p_2) \in \mathbb{Z}$, $m ~ \small \vdots \normalsize ~ m$ и $(a-b) ~ \small \vdots \normalsize ~ m$, то $(r_1 - r_2) ~ \small \vdots \normalsize ~ m$. Отсюда, по свойству Д8, получаем, что
   $$
   (r_1 - r_2) ~ \small \vdots \normalsize ~ m \implies 
   \left[\begin{matrix} r_1 - r_2 = 0, \\ |r_1| \ge |r_2|. \end{matrix}\right.
   $$
   Графически легко показать, что разность $r_1 - r_2$ всегда находится в промежутке $0 < r_1 - r_2 < m$, т. е. $|r_1 - r_2| < m$.

   Таким образом, получаем, что

   $$
   \begin{rcases}
   \left[\begin{matrix} r_1 - r_2 = 0, \\ |r_1| \ge |r_2|, \end{matrix}\right. \\
   |r_1 - r_2| < m
   \end{rcases} \implies r_1 - r_2 = 0 \implies
   $$
   $$
   \implies r_1 = r_2 \implies a \equiv b ~ ~ (\text{mod} ~ m),
   $$

   что и требовалось доказать.
:::

::::

:::: info СЛЕДСТВИЕ 2
Если $m \in \mathbb{N}\backslash\set{1}$, $a,b \in \mathbb{Z}$, то
$$
a \equiv b ~ ~ (\text{mod} ~ m) \iff \exists t \in \mathbb{Z} : ~ ~ (a = b + mt).
$$

::: info Доказательство
1. Пусть $a \equiv b ~ ~ (\text{mod} ~ m)$. Представим числа $a$ и $b$ следующим образом:
   $$ a = a_1m + r, ~ ~ ~ b = b_1m + r. $$
   Из этих равенств выразим остатки:
   $$ r = a - a_1m, ~ ~ ~ r = b - b_1m. $$

   Поскольку остатки должны быть равны, то приравняем их:
   $$ a - a_1m = b - b_1m; $$
   $$ a = b + (a_1 - b_1) m. $$

   Обозначим $a_1 - b_1$ за $t$. Получим
   $$ a = b + mt. $$
   Таким образом, $\exists t = (a_1-b_1) \in \mathbb{Z}: ~ ~ (a = b + mt)$.

2. Пусть $\exists t \in \mathbb{Z}: ~ ~ (a = b + mt)$. Представим числа $a$ и $b$ следующим образом:
   $$ a = b + mt, ~ ~ ~ a = a_1m + r_1, ~ ~ ~ b = b_1m + r_2. $$
   Разница $a-b$:
   $$
   a - b = (a_1m + r_1) - (b_1m + r_2) =
   $$
   $$
   = (a_1 - b_1) m + (r_1 - r_2).
   $$

   Поскольку $(a_1 - b_1)m ~ \small \vdots \normalsize ~ m$, $(a-b) ~ \small \vdots \normalsize ~ m$ (т. к. $a-b = mt$), то $(r_1 - r_2) ~ \small \vdots \normalsize ~ m$. Аналогично доказательству следствия 1, из свойства Д8 получим, что $r_1 = r_2$, что и требовалось доказать.
:::

::::

### Свойства сравнений по фиксированному модулю

:::: info СВОЙСТВО 1 (С1)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
b \equiv c ~ ~ (\text{mod} ~ m)
\end{rcases} \implies a \equiv c ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a = b + mt = (c + mk) + mt = c + m \underbrace{(k+t)}_{p} = 
$$
$$ = c + mp \implies a \equiv c ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 2 (С2)
$$
\begin{rcases}
a_1 \equiv b_1 ~ ~ (\text{mod} ~ m) \\
a_2 \equiv b_2 ~ ~ (\text{mod} ~ m)
\end{rcases} \implies a_1 + a_2 \equiv b_1 + b_2 ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
\begin{rcases}
a_1 \equiv b_1 ~ ~ (\text{mod} ~ m) \\
a_2 \equiv b_2 ~ ~ (\text{mod} ~ m)
\end{rcases} \implies \begin{rcases}
(a_1 - b_1) ~ \small \vdots \normalsize ~ m \\
(a_2 - b_2) ~ \small \vdots \normalsize ~ m
\end{rcases} \implies
$$
$$ \implies [ (a_1 - b_1) - (a_2 - b_2) ] ~ \small \vdots \normalsize ~ m \implies
$$
$$
\implies [ (a_1 - a_2) - (b_1 - b_2) ] ~ \small \vdots \normalsize ~ m \implies
$$
$$
\implies a_1 + a_2 \equiv b_1 + b_2 ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 3 (С3)
$$
a + b \equiv c ~ ~ (\text{mod} ~ m) \implies a \equiv c - b ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a + b = c + mt, ~ t \in \mathbb{Z} \implies a = c - b + mt \implies
$$
$$
\implies a \equiv c - b ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 4 (С4)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
k \in \mathbb{Z}
\end{rcases} \implies a + mk \equiv b ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a = b + mt \implies a + mk = b + mt + mk \implies
$$
$$
\implies a + mk = b + m\underbrace{(t+k)}_{p} = b + mp \implies
$$
$$
\implies a + mk \equiv b ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 5 (С5)
$$
\begin{rcases}
a_1 \equiv b_1 ~ ~ (\text{mod} ~ m) \\
a_2 \equiv b_2 ~ ~ (\text{mod} ~ m)
\end{rcases} \implies a_1 \cdot a_2 \equiv b_1 \cdot b_2 ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a_1 \cdot a_2 = (b_1 + mk_1)(b_2 + mk_2) = 
$$
$$
= b_1b_2 + b_1mk_2 + b_2mk_1 + m^2k_1k_2 =
$$
$$
= b_1b_2 + m \underbrace{(b_1k_2 + b_2k_1 + mk_1k_2)}_{t} =
$$
$$ = b_1b_2 + mt \implies a_1a_2 \equiv b_1b_2 ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 6 (С6)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
n \in \mathbb{N}
\end{rcases} \implies a^n \equiv b^n ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
Умножим $a \equiv b ~ ~ (\text{mod} ~ m)$ на себя $n$ раз. Получим

$$
\underbrace{a \cdot a \cdot ... \cdot a}_{n ~ \text{раз}} \equiv
\underbrace{b \cdot b \cdot ... \cdot b}_{n ~ \text{раз}} ~ ~ (\text{mod} ~ m),
$$

т. е. $a^n \equiv b^n ~ ~ (\text{mod} ~ m)$. $\blacksquare$
:::

::::

:::: info СВОЙСТВО 7 (С7)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
k \in \mathbb{Z}
\end{rcases} \implies ak \equiv bk ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a \equiv b ~ ~ (\text{mod} ~ m) \implies (a-b) = mt.
$$

Умножим левую и правую части на $k$:

$$
(a-b)k = mtk \implies ak - bk = mtk \implies
$$
$$
\implies ak - bk = m(tk) \implies ak \equiv bk ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 8 (С8)
$$
\begin{rcases}
a = a_1 c \\
b = b_1 c \\
(c, m) = 1
\end{rcases} \implies a_1 \equiv b_1 ~ ~ (\text{mod} ~ m).
$$

::: info Доказательство
$$
a \equiv b ~ ~ (\text{mod} ~ m) \iff (a-b) ~ \small \vdots \normalsize ~ m \implies
$$
$$
\implies (a_1c - b_1c) ~ \small \vdots \normalsize ~ m \implies c(a_1 - b_1) ~ \small \vdots \normalsize ~ m.
$$

$$
\begin{rcases}
c(a_1-b_1) ~ \small \vdots \normalsize ~ m \\
(c, m) = 1
\end{rcases} \implies (a_1 - b_1) ~ \small \vdots \normalsize ~ m \iff
$$
$$
\iff a_1 \equiv b_1 ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

::: info СЛЕДСТВИЕ (ИЗ С8)
Если $m$ — простое, то «сокращать сравнения» можно на любой общий делитель $a$ и $b$, не кратный $m$.
:::

::: info ЗАМЕЧАНИЕ
Для С8 существенно, что $(c, m) = 1$. Например, если $9 \equiv 15 ~ ~ (\text{mod} ~ 6)$, то, разделив обе части на 3, получим $3 \equiv 5 ~ ~ (\text{mod} ~ 6)$, что неверно.
:::

### Свойства сравнений, связанные с изменением модуля

:::: info СВОЙСТВО 1 (СМ1)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
k \in \mathbb{N}
\end{rcases} \implies ak \equiv bk ~ ~ (\text{mod} ~ mk).
$$

::: info Доказательство
$$ a = b + mt, ~ t \in \mathbb{Z} ~ ~ | \cdot k $$
$$ ak = bk + (mk)t \implies ak \equiv bk ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare $$
:::

::::

:::: info СВОЙСТВО 2 (СМ2)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
a = a_1 d \\
b = b_1 d \\
m = m_1 d \\
d \in \mathbb{N}, ~ ~ d > 0
\end{rcases} \implies a_1 \equiv b_1 ~ ~ (\text{mod} ~ m_1).
$$

::: info Доказательство
$$
a = b + mt \implies a_1d = b_1d + m_1dt ~ ~ ~ |: d \implies
$$
$$
\implies a_1 = b_1 + m_1t \iff a_1 \equiv b_1 ~ ~ (\text{mod} ~ m). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 3 (СМ3)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m_1) \\
a \equiv b ~ ~ (\text{mod} ~ m_2)
\end{rcases} \implies a \equiv b ~ ~ (\text{mod} ~ m),
$$
где $m = [m_1; m_2]$.

::: info Доказательство
$$
\begin{rcases}
(a-b) ~ \small \vdots \normalsize ~ m_1 \\
(a-b) ~ \small \vdots \normalsize ~ m_2
\end{rcases} \implies (a-b) ~ \small \vdots \normalsize ~ m \implies
$$
$$
\implies a \equiv b ~ ~ (\text{mod} ~ m).
$$

Т. к. $(a-b)$ — общее кратное $m_1$ и $m_2$, а $m$ — НОК, то $(a-b) ~ \small \vdots \normalsize ~ m$. $~ ~ \blacksquare$
:::

::::

:::: info СВОЙСТВО 4 (СМ4)
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
m ~ \small \vdots \normalsize ~ d \\
d > 0
\end{rcases} \implies a \equiv b ~ ~ (\text{mod} ~ d).
$$

::: info Доказательство
$$
\begin{rcases}
(a-b) ~ \small \vdots \normalsize ~ m \\
m ~ \small \vdots \normalsize ~ d
\end{rcases} \implies (a - b) ~ \small \vdots \normalsize ~ d \implies
$$
$$
\implies a \equiv b ~ ~ (\text{mod} ~ d). ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 5 (СМ5)
$$
\begin{rcases}
a ~ \small \vdots \normalsize ~ d \\
m ~ \small \vdots \normalsize ~ d \\
a \equiv b ~ ~ (\text{mod} ~ m)
\end{rcases} \implies b ~ \small \vdots \normalsize ~ d.
$$

::: info Доказательство
Т. к. $a ~ \small \vdots \normalsize ~ d$, $m ~ \small \vdots \normalsize ~ d$, то тогда $a = a_1d$, $m = m_1d$. Из $a \equiv b ~ ~ (\text{mod} ~ m)$ следует, что $b = a + mt$.

$$
b = a_1 d + m_1 dt \implies b = d(a_1 + m_1t) ~ \small \vdots \normalsize ~ d \implies
$$
$$
\implies b ~ \small \vdots \normalsize ~ d. ~ ~ \blacksquare
$$
:::

::::

:::: info СВОЙСТВО 6 (СМ6)
$$
a \equiv b ~ ~ (\text{mod} ~ m) \implies (a; m) = (b; m).
$$

::: info Доказательство
Обозначим $(a; m) = d_1$, $(b; m) = d_2$. Тогда
$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
a ~ \small \vdots \normalsize ~ d_1 \\
m ~ \small \vdots \normalsize ~ d_1 \\
\end{rcases} \overset{\text{CM5}}{\implies} b ~ \small \vdots \normalsize ~ d_1;
$$

$$
\begin{rcases}
b ~ \small \vdots \normalsize ~ d_1 \\
(b; m) = d_2
\end{rcases} \implies d_2 ~ \small \vdots \normalsize ~ d_1.
$$

$$
\begin{rcases}
a \equiv b ~ ~ (\text{mod} ~ m) \\
b ~ \small \vdots \normalsize ~ d_2 \\
m ~ \small \vdots \normalsize ~ d_2 \\
\end{rcases} \overset{\text{CM5}}{\implies} a ~ \small \vdots \normalsize ~ d_2;
$$

$$
\begin{rcases}
a ~ \small \vdots \normalsize ~ d_2 \\
(a; m) = d_1
\end{rcases} \implies d_1 ~ \small \vdots \normalsize ~ d_2.
$$

$$
\begin{rcases}
d_2 ~ \small \vdots \normalsize ~ d_1 \\
d_1 ~ \small \vdots \normalsize ~ d_2
\end{rcases} \implies d_1 = d_2. ~ ~ \blacksquare
$$
:::

::::

## «Арифметики остатков», или $m$-арифметики

Рассмотрим множество $\set{0, 1, 2, ..., m-1}$ всевозможных остатков от деления целых чисел на натуральное число $m$, $m \ne 1$.

На этом множестве определим **сложение (остатков)**:

$$
r_1 \oplus r_2 = r \iff r_1 + r_2 \equiv r ~ ~ (\text{mod} ~ m),
$$
где $r_1$ и $r_2$ — элементы рассматриваемого множества.

Аналогично можно определить умножение остатков:

$$
r_1 \otimes r_2 \iff r_1 \cdot r_2 \equiv r ~ ~ (\text{mod} ~ m).
$$

Полученную арифметику называют **«$m$-арифметикой»**. Каждую $m$-арифметику можно записать с помощью *таблицы сложения* и *таблицы умножения*.

Рассмотрим 2-арифметику. Для неё таблицы сложения и умножения выглядят следующим образом:

<table>
    <tbody>
        <tr>
            <th>⊕</th>
            <th>0</th>
            <th>1</th>
        </tr>
        <tr>
            <th>0</th>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <th>1</th>
            <td>1</td>
            <td>0</td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr>
            <th>⊗</th>
            <th>0</th>
            <th>1</th>
        </tr>
        <tr>
            <th>0</th>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <th>1</th>
            <td>0</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

:::: info Основное свойство таблицы сложения $m$-арифметики
В каждой строке (и столбце) все числа от $0$ до $m-1$ встречаются ровно по одному разу.

::: info Доказательство
Пусть в строке с номером $r$ какое-то число $x$ встретилось дважды: в столбцах с номерами $r_1$ и $r_2$.

| $\oplus$ | ... | $r_1$ | ... | $r_2$ | ... |
|-|-|-|-|-|-|
| **...** | ... | ... | ... | ... | ... |
| $r$ | ... | $x$ | ... | $x$ | ... |
| **...** | ... | ... | ... | ... | ... |

$$ r \oplus r_1 = r \oplus r_2 $$
$$ r + r_1 \equiv r + r_2 ~ ~ (\text{mod} ~ m) ~ ~ |\cdot r $$
$$ r_1 \equiv r_2 ~ ~ (\text{mod} ~ m) $$

Этого не может быть, т. к. $r_1$ и $r_2$ — разные остатки от деления на $m$. Значит, $r_1 = r_2$, т. е. $x$ встречается в строке только один раз. $~~\blacksquare$
:::

::::

Таблицу умножения обычно записывают без нулевой строки и нулевого столбца (*сокращённая таблицы умножения*).

::: info Основное свойство сокращённой таблицы умножения в $p$-арифметике
В каждой строке (и столбце) каждое число от $1$ до $p-1$ встречается ровно один раз ($p$ — простое).
:::

:::: info Основное свтйство сокращённой таблицы умножения в $m$-арифметике
Существует строка, где встречается нуль (а значит, встречаются не все числа от $1$ до $m-1$).

::: info Доказательство
Т. к. $m$ — составное, то $m = m_1 \cdot m_2$, причём $1 < m_1 < m$, $1 < m_2 < m$, а значит, $m_1$ и $m_2$ входят в множество остатков, причём $m_1 \otimes m_2 \equiv 0 ~ ~ (\text{mod} ~ m)$, откуда следует, что $m_1 \otimes m_2 = 0$. $~~\blacksquare$
:::

::::

---

В $m$-арифметике можно определить **вычитание:** чтобы найти разность $r_1 \ominus r_2$, надо в таблице сложения взять строку с номером $r_2$ и в этой строке найти число $r_1$ (оно там обязательно есть по основному свойству таблицы сложения). Тогда номер столбца $r$ устроен так, что

$$
r_1 \oplus r = r_1 \implies r = r_1 \ominus r_2.
$$