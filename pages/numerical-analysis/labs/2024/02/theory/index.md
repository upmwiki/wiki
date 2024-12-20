---
prev: false
next: false
---

# Теоретический материал по лабораторной работе №2

**3. Линейный одношаговый стационарный метод решения СЛАУ** — приближенный метод. Он состоит в построении последовательностей значений неизвестных, сходящихся к точному решению, причем каждый последующий набор значений неизвестных выражается линейно через предыдущий с коэффициентами, которые не зависят от номера члена последовательности. При изложении основ метода ограничимся системой уравнений вида

$$
A\bar{X} = \bar{B}, \tag{4}
$$

где
* $A$ — матрица системы размерности $n \times n$,
* $\bar{B}$ — вектор-столбец свободных членов,
* $\bar{X}$ — вектор-столбец неизвестных.

Пусть система $(4)$ приведена к эквивалентному виду

$$
\bar{X} = G\bar{X} + \bar{F}. \tag{5}
$$

Построим последовательность вектор-столбцов $\bar{X}^{(n)}$ по формуле

$$
\bar{X}^{(n+1)} = G\bar{X}^{(n)} + \bar{F}, \tag{6}
$$

положив, например, $\bar{X}^{(0)} = \bar{F}$.

Если $\bar{X}^{(n)} \xrightarrow[n\to\infty]{} \bar{X}^*$, где $\bar{X}^*$ — точное решение системы $(4)$, то говорят, что метод итераций сходится.

Необходимым и достаточным условием сходимости метода итераций является условие

$$
\lambda^* < 1, ~ ~ ~ \lambda^* = \max_{\forall k} \set{ |\lambda_k| },
$$

где $\lambda_k$ — собственное значение матрицы $G$, то есть корень уравнения $\det(G - \lambda E) = 0$.

Это условие оказывается выполненным, если система уравнений $(4)$ приводится к виду $(5)$ следующим образом.

Умножив левую и правую часть на ${1 \over \delta} A^T$, где $A^T$ — транспонированная матрица $A$, а

$$
\delta = \min \left\{
    \max_{\forall i} \left\{ \sum_{\forall j} |c_{ij}| \right\},
    \max_{\forall j} \left\{ \sum_{\forall i} |c_{ij}| \right\},
    \sqrt{ \sum_{\forall i} \sum_{\forall j} c_{ij}^2 }
\right\},
$$

при этом $C = A^T A$, получим:

$$
{ A^T A \over \delta } \bar{X} = { A^T \bar{B} \over \delta }. \tag{7}
$$

Перенеся ${ A^T A \over \delta } \bar{X}$ в правую часть выражения и сложив обе части равенства с $E\bar{X}$, где $E$ — единичная матрица, получим

$$
E\bar{X} = \left( E - { A^T A \over \delta } \right) \bar{X} + { A^T \bar{B} \over \delta }.
$$

Отсюда

$$
\bar{X} = G\bar{X} + \bar{F}, \tag{8}
$$

где

$$
G = E - { A^T A \over \delta }, ~ ~ ~ \bar{F} = { A^T \bar{B} \over \delta }.
$$

В качестве приближенного решения системы принимается вектор-столбец $\bar{X}^{(n+1)}$, удовлетворяющий неравенству

$$
\left|\left| A\bar{X}^{(n+1)} - \bar{B} \right|\right| \le \varepsilon,
$$

где $\varepsilon$ — требуемая точность решения.

Достоинством данного способа приведения к виду, удобному для итераций, является то, что построенная этим способом последовательность векторов всегда сходится к точному решению. Поэтому данный способ можно назвать универсальным.

Метод итераций с ускоряющим коэффициентом отличается тем, что обе части формулы $(7)$ умножаются на коэффициент $\alpha$, и в результате система $(4)$ приводится к виду

$$
\bar{X} = \left( E - \alpha { A^T A \over \delta } \right) \bar{X} + \alpha { A^T \bar{B} \over \delta }. \tag{9}
$$

Решая такую систему уравнений с небольшой точностью можно выбрать оптимальное значение величины $\alpha$, $0 < \alpha < 2$, а затем с высокой точностью решить ту же систему с оптимальным значением ускоряющего коэффициента.

::: info ПРИМЕР
Решить методом итераций с точностью до $0,01$ систему уравнений, приведенную к виду $(5)$ универсальным способом.

$$
\begin{cases}
x_1 = 0,2x_2 - 0,1x_3 + 0,4 \\
x_2 = 0,1x_1 + 0,1x_3 + 0,8 \\
x_3 = 0,3x_1 - 0,2x_2 + 0,2
\end{cases} \tag{10}
$$

Здесь

$$
G = \left(\begin{matrix}
0 & 0,2 & -0,1 \\
0,1 & 0 & 0,1 \\
0,3 & -0,2 & 0
\end{matrix}\right), ~ ~ 
\bar{F} = \left(\begin{matrix}
0,4 \\ 0,8 \\ 0,2
\end{matrix}\right),
$$

$$
\bar{X}^{(0)} = \bar{F} = \left(\begin{matrix}
0,4 \\ 0,8 \\ 0,2
\end{matrix}\right),
$$

тогда

$$
\bar{X}^{(1)} = G\bar{X}^{(0)} + \bar{F} = \left(\begin{matrix}
0,54 \\ 0,86 \\ 0,16
\end{matrix}\right).
$$

Вычислим невязку $|| A\bar{X}^{(1)} - \bar{B} ||$. Из формулы $(6)$ следует, что она в данном случае равна $|| \bar{X}^{(1)} - \bar{X}^{(0)} || = 0,14$.

Выполним вторую итерацию.

$$
\bar{X}^{(2)} = G\bar{X}^{(1)} + \bar{F} = \left(\begin{matrix}
0,556 \\ 0,87 \\ 0,19
\end{matrix}\right).
$$

Вычислим невязку. Она равна $||\bar{X}^{(2)} - \bar{X}^{(1)}|| = 0,03$. Точность $0,01$ пока не достигнута, продолжаем вычисления.

$$
\bar{X}^{(3)} = G\bar{X}^{(2)} + \bar{F} = \left(\begin{matrix}
0,555 \\ 0,8746 \\ 0,1928
\end{matrix}\right),
$$

$$
|| \bar{X}^{(3)} - \bar{X}^{(2)} || = 0,0004.
$$

Теперь точность $0,01$, как требуется в задании, достигнута — вычисления прекращаются.

**Ответ:** $x_1 = 0,56$, $x_2 = 0,87$, $x_3 = 0,19$.
:::

**4. Метод Зейделя** также является линейным одношаговым стационарным методом итераций, и разница с изложенным на предыдущей странице методом состоит в способе приведения к виду, удобному для итераций.

Представим матрицу системы $A$ в виде суммы трех матриц:

$$ A = C + D + H, $$

где матрица $D$ — диагональная, ее ненулевые элементы совпадают с соответствующими элементами матрицы $A$. У матрицы $C$ все элементы равны нулю за исключением стоящих над главной диагональю, они равны соответствующим элементам матрицы $A$. Аналогично $H$ имеет ненулевые элементы под главной диагональю, совпадающие с соответствующими элементами матрицы $A$.

Приведем СЛАУ к виду, удобному для итераций методом Зейделя.

$$
A\bar{X} = \bar{B};
$$

$$
(C + D + H) \bar{X} = \bar{B};
$$

$$
(D + H) \bar{X} = -C \bar{X} + \bar{B};
$$

$$
\bar{X} = -(D + H)^{-1} C \bar{X} + (D + H)^{-1} \bar{B}. \tag{11}
$$

Таким образом, в методе Зейделя

$$
G = -(D + H)^{-1} C, ~ ~ \bar{F} = (D + H)^{-1} \bar{B}.
$$

Необходимым и достаточным условием сходимости метода Зейделя является условие

$$
\lambda^* < 1, ~ ~ ~ \lambda^* = \max_{\forall k} \set{ |\lambda_k| },
$$

где $\lambda_k$ — корни уравнения

$$
\left|\begin{matrix}
\lambda g_{11} & \dots & \dots & g_{1n} \\
\lambda g_{21} & \lambda g_{22} & \dots & g_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
\lambda g_{n1} & \lambda g_{n2} & \dots & \lambda g_{nn}
\end{matrix}\right| = 0,
$$

а $g_{ij}$ — элементы матрицы $G$. Однако вычисление корней алгебраического многочлена само по себе является, как правило, серьезной задачей. На практике для проверки сходимости метода Зейделя используются достаточные условия сходимости:

$$
\sum_{\substack{j = 1 \\ j \ne i}}^n |a_{ij}| < |a_{ii}|
$$

для $i = 1, 2, ..., n$ или

$$
\sum_{\substack{i = 1 \\ i \ne j}}^n { |a_{ij}| \over |a_{ii}| } < 1
$$

для $j = 1, 2, ..., n$ или

$$
\sum_{i=1}^n {1 \over a_{ii}^2} \sum_{\substack{j = 1 \\ j \ne i}}^n a_{ij}^2 < 1.
$$

Из формулы $(11)$ следует формула для вычисления компонент вектор-столбца $x_i^{(n+1)}$, $i = 1, 2, ..., n$ по методу Зейделя:

$$
x_i^{(k+1)} = {
    b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^n a_{ij} x_j^{(k)}
 \over a_{ii} }. \tag{12}
$$

В лабораторной работе предполагается использовать модифицированную формулу, содержащую ускоряющий параметр $p$:

$$
x_i^{(k+1)} = (1 + p) \cdot {
    b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^n a_{ij} x_j^{(k)}
\over a_{ii} - px_i^{(k)},
} \tag{13}
$$

где $0 \le p \le 1$, $a_{ij}$ — элементы матрицы $A$ системы $(4)$.

Подробнее к методам приведения систем линейных уравнений к виду, удобному для итераций, можно ознакомиться по литературе [ 1 ], [ 2 ].

::: info ПРИМЕР
Решить методом Зейделя при $p = 0$ с точностью до $0,01$ систему уравнений

$$
\begin{cases}
x_1 - 0,2x_2 + 0,1x_3 = 0,4 \\
-0,1x_1 + x_2 - 0,1x_3 = 0,8 \\
-0,3x_1 + 0,2x_2 + x_3 = 0,2
\end{cases}
$$

Задаем

$$
\bar{X}^{(0)} = \bar{B} = \left(\begin{matrix}
0,4 \\ 0,8 \\ 0,2
\end{matrix}\right).
$$

Первое приближение вычисляем по формуле $(12)$:

$$
\begin{cases}
x_1^{(1)} = 0,2x_2^{(0)} - 0,1x_3^{(0)} + 0,4 & = 0,54 \\
x_2^{(1)} = 0,1x_1^{(1)} + 0,1x_3^{(0)} + 0,8 & = -0,874 \\
x_3^{(1)} = 0,3x_1^{(1)} - 0,2x_2^{(1)} + 0,2 & = 0,1872
\end{cases}
$$

Невязка $||A\bar{X}^{(1)} - \bar{B}|| = 0,68$, при этом $|| \bar{X}^{(1)} - \bar{X}^{(0)} || = 0,14$.

$$
\begin{cases}
x_1^{(2)} = 0,2x_2^{(1)} - 0,1x_3^{(1)} + 0,4 & = 0,55608 \\
x_2^{(2)} = 0,1 x_1^{(2)} + 0,1 x_3^{(1)} + 0,8 & = 0,874328 \\
x_3^{(2)} = 0,3 x_1^{(2)} - 0,2 x_2^{(2)} + 0,2 & = 0,1919584
\end{cases}
$$

Невязка $|| A\bar{X}^{(2)} - \bar{B} || = 0,03$, при этом $|| \bar{X}^{(2)} - \bar{X}^{(1)} || = 0,016$.

Аналогично,

$$
\begin{cases}
x_1^{(3)} = 0,2 x_2^{(2)} - 0,1 x_3^{(2)} + 0,4 & = 0,5567 \\
x_2^{(3)} = 0,1 x_1^{(3)} + 0,1 x_3^{(2)} + 0,8 & = 0,8748 \\
x_3^{(3)} = 0,3 x_1^{(3)} - 0,2 x_2^{(3)} + 0,2 & = 0,1917
\end{cases}
$$

$$|| A\bar{X}^{(3)} - \bar{B} || = || \bar{X}^{(3)} - \bar{X}^{(2)} || = 0,004.$$

Точность достигнута.

**Ответ:** $x_1 = 0,56$, $x_2 = 0,87$, $x_3 = 0,19$.
:::