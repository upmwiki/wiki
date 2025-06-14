---
prev: false
next: false
---

**Лекция**

# Комплексные числа. Операции над комплексными числами

**Комплексные числа** — это числа вида $z = x + iy$, где $x, y \in \mathbb{R}$, $i^2 = -1$.

Множество компексных чисел обозначается буквой $\mathbb{C}$.

Запись $z = x + iy$ называется *алгебраической формой* комплексного числа.

<figure>
    <img width="50%" src="/media/images/IMG_20250611_181806_710.jpg" />
</figure>

Ось абсцисс называется *действительной осью*, а ось ординат — *мнимой осью*.

* $x = \text{Re} ~ z$ (вещественная часть);
* $y = \text{Im} ~ z$ (мнимая часть).

Число $\bar{z} = x - iy$ называется **сопряжённым комплексным числом**.

<figure>
    <img width="50%" src="/media/images/IMG_20250611_181806_707.jpg" />
</figure>

::: info Определение
Комплексные числа $z_1 = x_1 + iy_1$ и $z_2 = x_2 + iy_2$ равны тогда и только тогда, когда равны их вещественные ($x_1 = x_2$) и мнимые ($y_1 = y_2$) части:

$$
z_1 = z_2 \iff \begin{cases}
x_1 = x_2, \\
y_1 = y_2.
\end{cases}
$$
:::

Выразим комплексные числа в полярных координатах.

<figure>
    <img width="50%" src="/media/images/IMG_20250611_181807_099.jpg" />
</figure>

Комплексное число можно рассматривать как вектор с длиной $r$ и углом $\varphi$. Значения $x$ и $y$ можно выразить следующим образом:

$$
\begin{cases}
x = r \cos \varphi, \\
y = r \sin \varphi.
\end{cases}
$$

Тогда запись вида

$$
z
= r \cos \varphi + ir \sin \varphi
= r \left( \cos \varphi + i \sin \varphi \right)
$$

называется *тригонометрической записью* комплексного числа, где

* $r$ — длина вектора $\vec{z}$; $r = |\vec{z}| = \sqrt{x^2 + y^2}$ (модуль комплексного числа).
* $\text{tg} ~ \varphi = {y \over x}$; $\varphi$ — аргумент комплексного числа (обозначается $\varphi = \arg z$).

Можно показать, что

$$
\varphi = \left[
\begin{array}{l}
\text{arctg} ~ {y \over x}, ~ z \in \style{font-family:Times}{\text{I или IV четверть}}\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!, \\
\text{arctg} ~ {y \over x} + \pi, ~ z \in \style{font-family:Times}{\text{II или III четверть}}\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!\!.
\end{array}
\right.
$$

Тогда данное ранее определение можно переформулировать следующим образом.

::: info Определение
Комплексные числа $z_1$ и $z_2$ равны в тригонометрической форме равны тогда и только тогда, когда равны их модули ($|z_1| = |z_2|$), а аргументы равны с точностью до $2\pi n, ~ n \in \mathbb{Z}$ ($\varphi_1 = \varphi_2 + 2\pi n$):

$$
z_1 = z_2 \iff \begin{cases}
|z_1| = |z_2|, \\
\varphi_1 = \varphi_2 + 2\pi n, ~ n \in \mathbb{Z}.
\end{cases}
$$
:::

## Операции над комплексными числами

1. $$
   z_1 \pm z_2 = (x_1 + x_2) \pm i(y_1 + y_2).
   $$

2. $$
   z_1 \cdot z_2 = (x_1 + i y_1) \cdot (x_2 + i y_2) = 
   $$

   $$
   = x_1 x_2 + i x_1 y_2 + i x_2 y_1 - y_1 y_2 = 
   $$

   $$
   = (x_1 x_2 - y_1 y_2) + i (x_1 y_2 + x_2 y_1).
   $$

3. $$
   z \cdot \bar{z} = (x + iy) \cdot (x - iy) =
   $$

   $$
   = x^2 - i^2 y^2 = x^2 + y^2 = |z|^2.
   $$

4. $$
   {z_1 \over z_2} = {z_1 \cdot \bar{z}_2 \over z_2 \cdot \bar{z}_2}
   = {(x_1 + i y_1) (x_2 - i y_2) \over (x_2 + i y_2) (x_2 - i y_2)} =
   $$

   $$
   = {(x_1 + x_2) + i(y_1 - y_2) \over x_2^2 + y_2^2}.
   $$

5. Поскольку $z = x + iy$, $\bar{z} = x - iy$, то

   $$
   \begin{array}{l}
   \displaystyle x = {z + \bar{z} \over 2} = \text{Re} ~ z, \\
   \displaystyle y = {z - \bar{z} \over 2} = \text{Im} ~ z.
   \end{array}
   $$

::: info Пример (доказательство)
Доказать следующее утверждение: $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$.

*Доказательство:*

$$
\overline{z_1 + z_2} = \overline{(x_1 + x_2) + i (y_1 + y_2)}
= (x_1 + x_2) - i (y_1 + y_2) =
$$

$$
= (x_1 - iy_1) + (x_2 - iy_2)
= \bar{z}_1 + \bar{z}_2. ~ ~ \blacksquare
$$
:::

::: info Пример
Решить систему уравнений

$$
\begin{cases}
(1 + i) z_1 + (2 - i) z_2 = 2, \\
2i z_1 + (1 + i) z_2 = i.
\end{cases}
$$

*Решение.* Решим данную систему правилом Крамера:

$$
\Delta = \begin{vmatrix}
1 + i & 2 - i \\
2i & 1 + i
\end{vmatrix} =
(1 + i)^2 - 2i (2 - i) =
$$

$$
= \left(1 + 2i + i^2\right) - \left(4i - 2i^2\right) = (1 + 2i - 1) - (4i + 2) =
$$

$$
= 1 + 2i - 1 - 4i - 2 = -2i - 2.
$$

Поскольку $\Delta \ne 0$, то по теореме Кронекера-Капелли существует единственное решение данной системы.

$$
\Delta_1 = \begin{vmatrix}
2 & 2 - i \\
i & 1 + i
\end{vmatrix}
= 2 (1 + i) - i (2 - i) =
$$

$$
= 2 + 2i - 2i + i^2 = 1;
$$

$$
\Delta_2 = \begin{vmatrix}
1 + i & 2 \\
2i & i
\end{vmatrix}
= i (1 + i) - 2 \cdot 2i =
$$

$$
= i + i^2 - 4i = -1 - 3i.
$$

Тогда решение системы имеет вид

$$
z_1 = {\Delta_1 \over \Delta} = {1 \over -2i - 2} = -{1 \over 2 + 2i} =
$$

$$
= - {2-2i \over (2+2i)(2-2i)} = -{2-2i \over 4 - 4i^2} = -{2 - 2i \over 4 + 4} =
$$

$$
= -{2 - 2i \over 8} = -{1 - i \over 4} = -{1 \over 4} + {i \over 4};
$$

$$
z_2 = {\Delta_2 \over \Delta} = {-1 - 3i \over -2 - 2i} = {1 + 3i \over 2 + 2i} =
$$

$$
= {(1 + 3i)(2 - 2i) \over (2 + 2i)(2 - 2i)}
= {2 - 2i + 6i - 6i^2 \over 4 - 4i^2} =
$$

$$
= {2 - 2i + 6i + 6 \over 4 + 4}
= {8 + 4i \over 8}
= {2 + i \over 2} = 1 + {i \over 2}.
$$

Проверим правильность решения. Подставим полученные значения $z_1$ и $z_2$ в каждое из уравнений исходной системы:

1. $$
   (1 + i) \cdot \left(-{1 - i \over 4}\right) + (2 - i) \cdot {2 + i \over 2} = 2;
   $$

   $$
   -{1 \over 4} (1 + i)(1 - i) + {1 \over 2} (2 - i)(2 + i) = 2;
   $$

   $$
   -{1 \over 4} (1 - i^2) + {1 \over 2} (2^2 - i^2) = 2;
   $$

   $$
   -{1 \over 4} (1 + 1) + {1 \over 2} (4 + 1) = 2;
   $$

   $$
   -{2 \over 4} + {5 \over 2} = 2
   \implies
   {10 - 2 \over 4} = 2
   \implies
   2 = 2. ~ ~ ~ ~ \text{✓}
   $$

2. $$
   2i \cdot \left(-{1 - i \over 4}\right) + (1 + i) \cdot {2 + i \over 2} = i;
   $$

   $$
   -{1 \over 2} i (1 - i) + {1 \over 2} (1+i)(2+i) = i;
   $$

   $$
   -{1 \over 2} (i - i^2) + {1 \over 2} (2 + i + 2i + i^2) = i;
   $$

   $$
   -{1 \over 2} (1 + i) + {1 \over 2} (1 + 3i) = i;
   $$

   $$
   1 + 3i - (1 + i) = 2i
   \implies
   2i = 2i. ~ ~ ~ ~ \text{✓}
   $$

Таким образом мы показали, что полученное решение найдено верно.

**Ответ:** $z_1 = -{1 \over 4} + {i \over 4}$, $z_2 = 1 + {i \over 2}$.
:::

::: info Задача
Записать число $z = -1 - i\sqrt{3}$ в тригонометрической форме.

*Решение.* Поскольку $x = -1 < 0$, $y = -\sqrt{3} < 0$, то число лежит в третьей (III) четверти.

Вычислим модуль комплексного числа:

$$
r = |z| = \sqrt{x^2 + y^2}
= \sqrt{ (-1)^2 + (-\sqrt{3})^2 }
= \sqrt{ 1 + 3 } = \sqrt{4} = 2.
$$

Вычислим аргумент комплексного числа:

$$
\text{tg} ~ \varphi = {y \over x} = \sqrt{3} \implies
\varphi = \text{arctg} ~ \sqrt{3} + \pi = {\pi \over 3} + \pi = {4 \pi \over 3}.
$$

> К значению аргумента прибавляем $\pi$, поскольку точка лежит в третьей четверти.

Таким образом, если подставить полученные значения $r$ и $\varphi$ в формулу тригонометрической записи комплексного числа:

$$
z = r \left(\cos \varphi + i \sin \varphi \right),
$$

то получим

$$
z = 2 \left( \cos {4\pi \over 3} + i \sin {4 \pi \over 3} \right).
$$

**Ответ:** $z = 2 \left( \cos {4\pi \over 3} + i \sin {4 \pi \over 3} \right)$.
:::

## Показательная форма комплексного числа

Разложим функции $\sin \varphi$ и $\cos \varphi$ в ряд Тейлора:

$$
\begin{array}{l}
\displaystyle \sin \varphi = \varphi - {\varphi^3 \over 3!} + \cdots \\
\displaystyle \cos \varphi = 1 - {\varphi^2 \over 2!} + {\varphi^4 \over 4!} + \cdots
\end{array}
$$

Тогда выражение $\cos \varphi + i \sin \varphi$ равно:

$$
\cos \varphi + i \sin \varphi
= 1 + i\varphi + {(i \varphi)^2 \over 2!} + {(i\varphi)^3 \over 3!} + \cdots = e^{i\varphi}.
$$

Тогда запись вида

$$
z = r(\cos \varphi + i \sin \varphi) = re^{i\varphi}
$$

называется *показательной формой* комплексного числа.

## Свойства комплексных чисел в тригонометрической и показательной формах

1. $$
   z_1 \cdot z_2 = r_1 e^{i \varphi_1} \cdot r_2 e^{i \varphi_2}
   = r_1 r_2 e^{i(\varphi_1 + \varphi_2)} =
   $$

   $$
   = r_1 r_2 \left(
    \cos(\varphi_1 + \varphi_2) + i \sin(\varphi_1 + \varphi_2)
   \right) \implies
   $$

   $$
   \implies
   |z_1 \cdot z_2| = |z_1| \cdot |z_2|; ~ ~ ~
   \arg (z_1 \cdot z_2) = \arg z_1 + \arg z_2 + 2\pi k, ~ k \in \mathbb{Z}.
   $$

2. $$
   {z_1 \over z_2} = {r_1 e^{i\varphi_1} \over r_2 e^{i \varphi_2}}
   = {r_1 \over r_2} e^{i(\varphi_1 - \varphi_2)} \implies
   $$

   $$
   \implies \left|{z_1 \over z_2}\right| = {|r_1| \over |r_2|}; ~ ~ ~
   \arg\left({z_1 \over z_2}\right) = \arg z_1 - \arg z_2 + 2 \pi k, ~ k \in \mathbb{Z}.
   $$

3. $$
   z^n = \left( r e^{i\varphi} \right)^n = r^n \cdot e^{i \varphi n}
   = r^n \left( \cos{n \varphi} + i \sin{n \varphi} \right);
   $$

   $$
   \left|z^n\right| = |z|^n; ~ ~ ~
   \arg z^n = n \cdot \arg z + 2 \pi k, ~ k \in \mathbb{Z}.
   $$

## Свойства модуля комплексного числа

1. $|\bar{z}| = |z|$.

2. $z \cdot \bar{z} = |z|^2$.

3. $|z_1 \cdot z_2| = |z_1| \cdot |z_2|$.

4. $\displaystyle \left|{z_1 \over z_2}\right| = {|z_1| \over |z_2|}$.

5. $\left|z^n\right| = |z|^n$.

6. $|\text{Re} ~ z| \le |z|, ~ ~ ~ ~ |\text{Im} ~ z| \le |z|$.

   ::: details Доказательство
   Известно, что $|\text{Re} ~ z| = |x|$. Модуль комплексного числа $z = x + iy$ вычисляется по формуле

   $$
   |z| = \sqrt{x^2 + y^2}.
   $$
   
   Подставим в исследуемое неравенство:
   
   $$
   |x| \overset{?}{\le} \sqrt{x^2 + y^2}.
   $$
   
   Возведём обе части в квадрат:
   
   $$
   x^2 \overset{?}{\le} x^2 + y^2.
   $$
   
   Упростим:
   
   $$
   0 \overset{?}{\le} y^2.
   $$

   Поскольку $y \ge 0$, то данное выражение верно, следовательно, исходное неравенство является верным. $\blacksquare$
   :::

7. Неравенство треугольника: $|z_1 + z_2| \le |z_1| + |z_2|$.

   ::: details Доказательство
   Известно, что
   
   $$
   \begin{array}{l}
   |z_1 + z_2| = \sqrt{ (x_1 + x_2)^2 + (y_1 + y_2)^2 }; \\
   |z_1| + |z_2| = \sqrt{x_1^2 + y_1^2} + \sqrt{x_2^2 + y_2^2}.
   \end{array}
   $$
   
   Подставим в исследуемое неравенство:
   
   $$
   \sqrt{(x_1 + x_2)^2 + (y_1 + y_2)^2} \overset{?}{\le} \sqrt{x_1^2 + y_1^2} + \sqrt{x_2^2 + y_2^2}.
   $$

   Возведём обе части в квадрат:

   $$
   (x_1 + x_2)^2 + (y_1 + y_2)^2 \overset{?}{\le} (x_1^2 + y_1^2) + (x_2^2 + y_2^2) + 2 \sqrt{ (x_1^2 + y_1^2)(x_2^2 + y_2^2) }.
   $$

   В правой части оставим только корень, всё остальное перенесём в левую часть и упростим:

   $$
   x_1 x_2 + y_1 y_2 \overset{?}{\le} \sqrt{ (x_1^2 + y_1^2) (x_2^2 + y_2^2) }.
   $$

   Возведём обе части в квадрат:

   $$
   x_1^2 x_2^2 + 2 x_1 x_2 y_1 y_2 + y_1^2 y_2^2 \overset{?}{\le} (x_1^2 + y_1^2) (x_2^2 + y_2^2).
   $$

   Вычислим произведение в правой части:

   $$
   x_1^2 x_2^2 + 2 x_1 x_2 y_1 y_2 + y_1^2 y_2^2 \overset{?}{\le}
   x_1^2 x_2^2 + x_1^2 y_2^2 + x_2^2 y_1^2 + y_1^2 y_2^2.
   $$

   Упростим неравенство, вычтя из обеих его частей $x_1^2 x_2^2 + y_1^2 y_2^2$:

   $$
   2 x_1 x_2 y_1 y_2 \overset{?}{\le} x_1^2 y_2^2 + x_2^2 y_1^2.
   $$

   Перенесём всё в одну сторону:

   $$
   x_1^2 y_2^2 - 2x_1 x_2 y_1 y_2 + x_2^2 y_1^2 \overset{?}{\ge} 0.
   $$

   Перегруппируем:

   $$
   \left( x_1^2 y_2^2 - x_1 x_2 y_1 y_2 \right) +
   \left( x_2^2 y_1^2 - x_1 x_2 y_1 y_2 \right) \overset{?}{\ge} 0;
   $$

   $$
   x_1 y_2 \left( x_1 y_2 - x_2 y_1 \right) +
   x_2 y_1 \left( x_2 y_1 - x_1 y_2 \right) \overset{?}{\ge} 0;
   $$

   $$
   x_1 y_2 \left( x_1 y_2 - x_2 y_1 \right) -
   x_2 y_1 \left( x_1 y_2 - x_2 y_1 \right) \overset{?}{\ge} 0;
   $$

   $$
   \left( x_1 y_2 - x_2 y_1 \right) \left( x_1 y_2 - x_2 y_1 \right) \overset{?}{\ge} 0;
   $$

   $$
   \left( x_1 y_2 - x_2 y_1 \right)^2 \overset{?}{\ge} 0.
   $$

   Данное неравенство всегда выполняется, следовательно, верно исходное неравенство. $\blacksquare$
   :::

8. $\left| |z_1| - |z_2| \right| \le |z_1 - z_2|$.

::: info Пример
Возвести $-1 + i \sqrt{3}$ в 60-ю степень.

*Решение.* Поскольку $z = -1 + i \sqrt{3}$, то $x = -1$, $y = \sqrt{3}$, следовательно, $z$ лежит во второй (II) четверти.

Вычислим модуль данного числа:

$$
r = |z| = \sqrt{x^2 + y^2} = \sqrt{1^2 + \left(\sqrt{3}\right)^2}
= \sqrt{1 + 3} = \sqrt{4} = 2.
$$

Вычислим аргумент данного числа:

$$
\text{tg} ~ \varphi = {y \over x} = -\sqrt{3} \implies
\varphi = \text{arctg} ~ \left(-\sqrt{3}\right) + \pi =
$$

$$
= -\text{arctg} ~ \sqrt{3} + \pi = -{\pi \over 3} + \pi = {2 \pi \over 3}.
$$

> К значению аргумента прибавляем $\pi$, поскольку точка лежит во второй четверти.

Запишем $z$ в показательной и тригонометрической формах:

$$
z = 2 e^{{2 \pi \over 3} i}
= 2 \left( \cos {2 \pi \over 3} + i \sin {2 \pi \over 3} \right).
$$

Возведём в степень:

$$
z^{60} = 2^{60} e^{{2 \pi i \over 3} \cdot 60} = 2^{60} e^{40 \pi i}
= 2^{60} \left( \cos 40 \pi + i \sin 40 \pi \right) =
$$

$$
= 2^{60} \left( 1 + i \cdot 0 \right) = 2^{60}.
$$

**Ответ:** $z^{60} = 2^{60}$.
:::