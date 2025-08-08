---
prev:
    text: Тема 4. Методы ортогонализации решения СЛАУ
    link: ../intro/
next:
    text: § 17. Метод вращений (Гивенса)
    link: ../02/
---

**Тема 4. Методы ортогонализации решения СЛАУ**

# § 16. Метод ортогонализации Грамма-Шмидта

Рассмотрим матрицу $A$ системы $A\bar{x} = \bar{b}$ как множество вектор-столбцов:
$$ A = \left( \bar{a}^{(1)}, \bar{a}^{(2)}, ..., \bar{a}^{(n)} \right), $$
где $\bar{a}^{(j)} = \left(\begin{matrix} a_{1j} \\ a_{2j} \\ \vdots \\ a_{nj} \end{matrix}\right)$.

Построим теперь последовательность ортогональных векторов $\bar{q}^{(1)}, \bar{q}^{(2)}, ..., \bar{q}^{(n)}$ по правилу:

$\bar{q}^{(1)} = \bar{a}^{(1)}$;<br>
$\bar{q}^{(2)} = \bar{a}^{(2)} - r_{12}\bar{q}^{(1)}$;<br>
$\bar{q}^{(3)} = \bar{a}^{(3)} - r_{13}\bar{q}^{(1)} - r_{23}\bar{q}^{(2)}$;<br>
$\dots$<br>
$\bar{q}^{(n)} = \bar{a}^{(n)} - r_{1n}\bar{q}^{(1)} - \dots - r_{n-1,n}\bar{q}^{(n-1)}$.

Коэффициенты $r_{ij}$ будем рассматривать как элементы матрицы $R$ вида
$$
R = \left(\begin{matrix}
1 & r_{12} & r_{13} & \dots & r_{1,n-1} & r_{1n}, \\
0 & 1 & r_{23} & \dots & r_{2,n-1} & r_{2n}, \\
0 & 0  & 1 & \dots & r_{3,n-1} & r_{3n}, \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & 0 & \dots & 1 & r_{n-1,n} \\
0 & 0 & 0 & \dots & 0 & 1
\end{matrix}\right)
$$
и определять из условия ортогональности векторов $\bar{q}^{(1)}, \bar{q}^{(2)}, ..., \bar{q}^{(n)}$.

Вспомним определения скалярного произведения и ортогональности:
* скалярное произведение: $\left(\bar{q}^{(i)}, \bar{q}^{(j)}\right) = \sum_{k=1}^n q_k^{(i)} \cdot q_k^{(j)}$;
* ортогональность: $\left(\bar{q}^{(i)}, \bar{q}^{(j)}\right) = 0 ~ ~ ~ \forall i \ne j$.

Тогда $\left(\bar{q}^{(i)}, \bar{q}^{(j)}\right) = 0$, откуда следует, что
$$
r_{12} = { \left(\bar{a}^{(2)}, \bar{q}^{(1)}\right) \over \left(\bar{q}^{(1)}, \bar{q}^{(1)}\right) }.
$$

Аналогично можно потребовать, чтобы $\left(\bar{q}^{(3)}, \bar{q}^{(1)}\right) = 0$ и $\left(\bar{q}^{(3)}, \bar{q}^{(2)}\right) = 0$. Отсюда получим

$$
r_{13} = { \left(\bar{a}^{(3)}, \bar{q}^{(1)}\right) \over \left(\bar{q}^{(1)}, \bar{q}^{(1)}\right) }, ~ ~ ~ ~
r_{23} = { \left(\bar{a}^{(3)}, \bar{q}^{(2)}\right) \over \left(\bar{q}^{(2)}, \bar{q}^{(2)}\right) },
$$
и т. д.

$$
(\bar{q}^{(1)}, \bar{q}^{(n)}) = 0, ~ ~ (\bar{q}^{(n-1)}, \bar{q}^{(n)}) = 0, ... \implies
$$

$$
\implies r_{1n} = { (\bar{a}^{(n)}, \bar{q}^{(1)}) \over (\bar{q}^{(1)}, \bar{q}^{(1)}) }, ~ ~ ..., ~ ~ r_{n-1,n} = { (\bar{a}^{(n)}, \bar{q}^{(n-1)}) \over (\bar{q}^{(n-1)}, \bar{q}^{(n-1)}) }.
$$

Тогда между векторами $\bar{a}^{(j)}$ и $\bar{q}^{(j)}$ выполняются соотношения:

$$
\bar{a}^{(j)} = \bar{q}^{(j)} + \sum_{k=1}^{j-1} r_{kj}\bar{q}^{(k)}.
$$

Если теперь рассмотреть систему векторов $(\bar{q}^{(1)}, \bar{q}^{(2)}, ..., \bar{q}^{(n)})$ как столбцы матрицы $Q$, то это выражение примет вид

$$
a_{ij} = q_{ij} \cdot 1 + \sum_{j=1}^{j-1} q_{ik}r_{kj},
$$

что, по правилам умножения матриц, соответствует равенству

$$
A = QR,
$$

где $Q$ — ортогональная матрица, $R$ — верхняя треугольная матрица.


:::: info Пример
С помощью метода ортогонализации Грамма-Шмидта решить СЛАУ $A\bar{x} = \bar{b}$, где

$$
A = \left(\begin{matrix}
3 & 2 & 1 \\
4 & 1 & -2 \\
5 & -2 & -3
\end{matrix}\right), ~ ~ ~ ~
\bar{b} = \left(\begin{matrix}
6 \\ 8 \\ 4
\end{matrix}\right),
$$

и найти обратную матрицу $A^{-1}$.

*Решение.*

$$
\bar{q}^{(1)} = \bar{a}^{(1)} = \left(\begin{matrix} 3 \\ 4 \\ 5 \end{matrix}\right);
$$
$$
r_{12} = { ( \bar{a}^{(2)}, \bar{q}^{(1)} ) \over (\bar{q}^{(1)}, \bar{q}^{(1)}) } = { 2 \cdot 3 + 1 \cdot 4 - 2 \cdot 5 \over 9 \cdot 16 \cdot 25 } = {0 \over 50} = 0;
$$

$$
\implies \bar{q}^{(2)} = \bar{a}^{(2)} - 0 \cdot \bar{q}^{(1)} = \left(\begin{matrix} 2 \\ 1 \\ -2 \end{matrix}\right).
$$

$$
r_{13} = { ( \bar{a}^{(3)}, \bar{q}^{(1)} ) \over (\bar{q}^{(1)}, \bar{q}^{(1)}) } = { 3 - 8 - 15 \over 9 + 16 + 25 } = -{2 \over 5};
$$

$$
r_{23} = { ( \bar{a}^{(3)}, \bar{q}^{(2)} ) \over (\bar{q}^{(2)}, \bar{q}^{(2)}) } = { 2 - 2 + 6 \over 4 + 1 + 4 } = {6 \over 9} = {2 \over 3}.
$$

$$
\bar{q}^{(3)} = \bar{a}^{(3)} - r_{13} \cdot \bar{q}^{(1)} - r_{23} \cdot \bar{q}^{(2)} =
$$
$$ = \left(\begin{matrix} 1 \\ -2 \\ -3 \end{matrix}\right) - \left(-{2 \over 5}\right) \cdot \left(\begin{matrix} 3 \\ 4 \\ 5 \end{matrix}\right) - {2 \over 3} \cdot \left(\begin{matrix} 2 \\ 1 \\ -2 \end{matrix}\right) = \left(\begin{matrix} {13 \over 15} \\ -{16 \over 15} \\ {1 \over 3} \end{matrix}\right).
$$

В итоге получаем матрицу $Q$:

$$
Q = \left(\begin{matrix}
3 & 2 & {13 \over 15} \\
4 & 1 & -{16 \over 15} \\
5 & -2 & {1 \over 3}
\end{matrix}\right)
$$

и матрицу $R$:

$$
R = \left(\begin{matrix}
1 & 0 & -{2 \over 5} \\
0 & 1 & {2 \over 3} \\
0 & 0 & 1
\end{matrix}\right).
$$

Таким образом, мы получили QR-разложение.

Матрица $D$:

$$
D = Q^T Q = \left(\begin{matrix}
50 & 0 & 0 \\
0 & 9 & 0 \\
0 & 0 & 2
\end{matrix}\right)
$$

(по диагонали стоят суммы квадратов элементов столбцов, например $3^2 + 4^2 + 5^2 = 50$).

$$
R\bar{x} = D^{-1}Q^T \bar{b} = \left(\begin{matrix}
{1 \over 50} & 0 & 0 \\
0 & {1 \over 9} & 0 \\
0 & 0 & {1 \over 2}
\end{matrix}\right) \left(\begin{matrix}
3 & 4 & 5 \\
2 & 1 & -2 \\
{13 \over 15} & -{16 \over 15} & {1 \over 3}
\end{matrix}\right) \left(\begin{matrix}
6 \\ 8 \\ 4
\end{matrix}\right) = \left(\begin{matrix}
{7 \over 5} \\ {4 \over 3} \\ -1
\end{matrix}\right).
$$

Таким образом,
$$
\begin{cases}
x_1 - {2 \over 5}x_3 = {7 \over 5}, \\
x_2 + {2 \over 3}x_3 = {4 \over 3}, \\
x_3 = -1,
\end{cases}
$$

откуда получаем

$$
\begin{cases}
x_1 = 1, \\
x_2 = 2, \\
x_3 = -1.
\end{cases}
$$

**Ответ:** $\bar{x} = \left(\begin{matrix} 1 \\ 2 \\ -1 \end{matrix}\right)$.

---

::: info Домашнее задание
Проверить самостоятельно, что
$$
A^{-1} = R^{-1}D^{-1}Q^T = \left(\begin{matrix}
{7 \over 30} & -{2 \over 15} & {1 \over 6} \\
-{1 \over 15} & {7 \over 15} & -{1 \over 3} \\
{13 \over 30} & -{8 \over 15} & {1 \over 6}
\end{matrix}\right).
$$
:::

::::

