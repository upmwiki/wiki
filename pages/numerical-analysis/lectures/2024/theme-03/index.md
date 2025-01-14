---
prev:
    link: ../theme-02
    text: Тема 2. Приближённые методы решения СЛАУ
next:
    link: ../theme-04
    text: Тема 4. Методы ортогонализации решения СЛАУ
---

**Тема 3**

# Точные методы решения СЛАУ


## § 11. Метод Гаусса. Расчётные формулы количества элементарных операций {#11}

Пусть задана система линейных уравнений вида $A\bar{x}=\bar{b}$, где $A=(a_{ij})_{n\times n}$.

Прямой ход методом Гаусса может быть описан следующим образом: предположим, что элемент $a_{11} \ne 0$. Разделим на него первое уравнение системы. Получим:

$$
x_1 + c_{12}x_2 + \dots + c_{1n}x_n = y_1,
$$
где $c_{ij} = {a_{ij} \over a_{11}}$, $j = \overline{2,n}$, $y_1 = {b_1 \over a_{11}}$.

Умножим данное уравнение на $a_{i1}$ и вычтем из оставшихся уравнений системы ($i = \overline{2,n}$). В результате получим следующую систему:

$$
\begin{cases}
x_1 + c_{12}x_2 + \dots + c_{1n}x_n = y_1, \\
a_{22}^{(1)}x_2 + \dots + a_{2n}^{(1)}x_n = b_2^{(1)}, \\
\dots \\
a_{n2}^{(1)}x_2 + \dots + a_{nn}^{(1)}x_n = b_n^{(1)},
\end{cases}
$$
где $a_{ij}^{(1)} = a_{ij} - c_{1j} \cdot a_{i1}$, $b_i^{(1)} = b_i - y_1 \cdot a_{i1}$, $i,j=\overline{2,n}$.

Если переменная $a_{22}^{(1)} \ne 0$, то шаг можно повторить, и т. д. Повторяем указанные действия $n$ раз, переходим к системе вида

$$
\begin{cases}
    x_1 + c_{12}x_2 + \dots + c_{1n}x_n = y_1, \\
    x_2 + \dots + c_{2n}x_n = y_2, \\
    \dots \\
    x_n = y_n.
\end{cases}
$$

Эта система имеет верхнюю треугольную матрицу вида

$$
\left(\begin{matrix}
    1 & c_{12} & \dots & c_{1,n-1} & c_{1n} \\
    0 & 1 & \dots & c_{2,n-1} & c_{2n} \\
    \vdots & \vdots & \ddots & \vdots & \vdots \\
    0 & 0 & \dots & 0 & 1
\end{matrix}\right).
$$

Далее из неё поочерёдно находятся компоненты решения

$$ x_n = y_n, $$
$$ x_i = y_i - \sum^n_{j = i+1}c_{ij}x_j, ~ ~ ~ ~ i=\overline{n-1,1}. $$

Оценим сложность алгоритма, выраженную в числе простейших операций, необходимых для его реализации. По традиции принято считать число умножений, т. к. сложение (вычитание) требует меньших затрат времени процессора.

Пусть осуществлены первые $k-1$ шагов прямого хода методом Гаусса. Тогда система преобразуется к виду

$$
\begin{cases}
    x_1 + c_{12}x_2 + \dots + c_{1n}x_n = y_1, \\
    x_2 + \dots + c_{2n}x_n = y_2, \\
    \dots \\
    x_{k-1} + c_{k-1,k}x_k + \dots + c_{k-1,n} x_n = y_{k-1},\\
    a_{kk}^{(k-1)}x_k + \dots + a_{kn}^{(k-1)} x_n = b_k^{(k-1)}, \\
    \dots \\
    a_{nk}^{(k-1)}x_k + \dots + a_{nn}^{(k-1)}x_n = b_n^{(k-1)}.
\end{cases}
$$

Таким образом, на прямом ходе метода Гаусса вычисления происходят по формулам:

$$ a_{kj}^{(0)} = a_{kj}, ~ ~ ~ ~ k,j = \overline{1,n} \tag{1} $$

$$
c_{kj} = {a_{kj}^{(k-1)} \over a_{kk}^{(k-1)}}, ~ ~ ~ ~ j=\overline{k+1,n}, k = \overline{1,n} \tag{2}
$$

$$
a_{ij}^{(k)} = a_{ij}^{(k-1)} - a_{ik}^{(k-1)} \cdot c_{kj}, ~ ~ ~ ~ i=\overline{1,n}, k=\overline{1,n-1} \tag{3}
$$

Кроме того, преобразуются правые части:

$$ b_k^{(0)} = b_k $$

$$
y_k = { b_k^{(k-1)} \over a_{kk}^{(k-1)} }, ~ ~ ~ ~ k=\overline{1,n} \tag{4}
$$

$$
b_i^{(k)} = b_i^{(k-1)} - a_{ik}^{(k-1)} \cdot y_k, ~ ~ ~ ~ i=\overline{k+1,n} \tag{5}
$$

Отметим, что число $a_{kk}^{(k-1)}$ называется **ведущим элементом** на $k$-ом шаге исключения.

Предполагается, что на каждом шаге ведущий элемент отличен от нуля. В результате получим следующее число сложений и умножений по следующим формулам:

$$ (1)-(2): ~ ~ ~ ~ (n-1)+(n-2)+\dots+2+1 = {n(n-1) \over 2}; $$
$$ (3): ~ ~ ~ ~ (n-1)^2 + (n-2)^2 + \dots + 2^2 + 1^2 = {(n-1)n(2n-1) \over 6}; $$

Формулы вычисления правых частей:

$$ (4)-(5): ~ ~ ~ ~ n + (n-1) + (n-2) + \dots + 2 + 1 = n + {n(n-1) \over 2} = {n(n+1) \over 2}. $$

Для осуществления обратного хода методом Гаусса требуется также ${n(n-1) \over 2}$ умножений.

Окончательно всё пронумеровав, получим ${n\left( n^2 + 3n - 1 \right) \over 3}$ операций. Таким образом, сложность алгоритма составляет $O\left({n^3 \over 3}\right)$ элементарных операций.


## § 12. Связь метода Гаусса с разложением матрицы на множители {#12}

В предыдущем параграфе было показано, что метод Гаусса преобразует исходную систему уравнений $A\bar{x} = \bar{b}$ в эквивалентную систему $C\bar{x} = \bar{y}$, где $C$ — верхняя треугольная матрица с единицами на главной диагонали.

Выясним теперь, как связаны между собой векторы $\bar{x}$ и $\bar{y}$. Для этого воспользуемся формулами из предыдущего параграфа:

$$\begin{cases}
b_1 = a_{11}y_1, \\
b_2 = a_{21}y_1 + a_{22}^{(1)}y_2, \\
\dots \\
b_j = a_{j1}y_1 + a_{j2}^{(1)}y_2 + \dots + a_{jj}^{(j-1)}y_j,
\end{cases}$$
где $j = \overline{1,n}$.

Данное соотношение можно записать в матричном виде:

$$ \bar{b} = \tilde{C}\bar{y}, $$

где $\tilde{C}$ — нижняя треугольная матрица с элементами $a_{jj}^{(j-1)}$, $j = \overline{1,m}$, $a_{11}^{(0)} = a_{11}$.

Отметим, что было сделано допущение, что все $a_{jj}^{(j-1)} \ne 0$, а это значит, что матрица $\tilde{C}$ имеет обратную. Тогда $\bar{y} = \tilde{C}^{-1}\bar{b}$, и исходная система преобразуется к виду

$$ \tilde{C}C\bar{x} = \bar{b}. $$

Это означает, что матрица $A$ раскладывается в произведение двух матриц, где $\tilde{C}$ — нижняя треугольная с ненулевыми элементами на главной диагонали, а $C$ — верхняя треугольная с единичной главной диагональю. Первую из них принято обозначать $L$ (от англ. *upper* — «верхний»), а вторую — $U$ (от англ. *lower* — «нижний»), а данное разложение матрицы — **LU-разложением**.

Справедлива следующая теорема.

::: info ТЕОРЕМА (ОБ LU-РАЗЛОЖЕНИИ)
Пусть все угловые миноры матрицы $A$ отличны от нуля:
$$ \Delta_1 = |a_{11}| = a_{11} \ne 0, ~ ~ \Delta_2 = \left|\begin{matrix}
    a_{11} & a_{12} \\ a_{21} & a_{22}
\end{matrix}\right| \ne 0, ~ ~ \dots, ~ ~ \Delta_n \ne 0, ~ ~ ... $$
Тогда матрицу $A$ можно представить, причём единственным образом, в виде произведения
$$ A = LU, $$
где $L$ — нижняя треугольная матрица с ненулевыми диагональными элементами, $U$ — верхняя треугольная матрица с единичной диагональю.
:::


**Вывод:** в результате прямого хода метода Гаусса матрица системы раскладывается в произведение двух треугольных, а сама система преобразуется к двум:

$$ L\bar{y} = \bar{b}, $$
$$ U\bar{x} = \bar{y}. $$

Данные системы легко решаются, т. к. имеют треугольные матрицы.


## § 13. Метод Гаусса с выбором главного элемента. NPU-разложение {#13}

Как известно, при делении на достаточно малую величину возникает сколь угодно высокая относительная погрешность, поэтому классический метод Гаусса может при вычислениях с фиксированным числом знаков приводить к высокой вычислительной погрешности.

Каждую проблему позволяет преодолеть **метод Гаусса с выбором главного элемента**. Он основан на LU-разложении, но при этом предусматривает на каждом шаге прямого хода перенос наибольшего по модулю элемента на место ведущего. Это достигается перестановкой строк (уравнений) либо столбцов (компонент решения) в расширенной матрице.

Перестановка стобцов учитывается введением вектора перенумерации, а перестановка строк соответствует умножению системы на матрицу элементарной перестановки. Таким образом, можно представить данный алгоритм в виде

$$ A\bar{x} = \bar{b}; $$
$$ N_1^{-1}P_{1,j_1}A\bar{x} = N_1^{-1}P_{1,j_1}\bar{b}; $$
$$ N_2^{-1} P_{2,j_2} N_1^{-1} P_{1,j_1}A\bar{x} = N_2^{-1}P_{2,j_2}N_1^{-1}P_{1,j_1}\bar{b}; $$
$$ \vdots $$
$$ \underbrace{N_n^{-1}N_{n-1}^{-1}P_{n-1,j_{n-1}} \dots N_1^{-1}P_{1,j_1}A\bar{x} }_{U} = N_n^{-1}N_{n-1}^{-1}P_{n-1,j_{n-1}} \dots N_1^{-1}P_{1,j_1}\bar{b}. $$

Можно показать, что произведение перестановочных и N-матриц обладает следующим свойством:
$$ N_i P_{i,j_i} = P_{i,j_i}\tilde{N}_i, $$
где $\tilde{N}_i$ — матрица той же структуры, что и $N_i$.

Таким образом, матрицы элементарных перестановок можно сгруппировать в начале произведения (перед матрицей $A$) в виде

$$ P = P_{1,j_1} \cdot P_{2,j_2} \cdot ... \cdot P_{n-1,j_{n-1}}, $$

где $P$ — перестановочная матрица.

Оставшаяся часть составит нижнюю треугольную матрицу с ненулевой главной диагональю:

$$ L = \tilde{N}_n \cdot \tilde{N}_{n-1} \cdot ... \cdot \tilde{N}_1. $$

Оставшаяся в результате перестановок матрица $U$ будет верхней треугольной с единичной главной диагональю. Это позволяет прийти к равенству

$$ PA = LU. $$

Такое разложение матрицы $A$ называется **NPU-разложением**, и для него справедлива следующая теорема.

::: info ТЕОРЕМА
Если $|A| \ne 0$, то существует перестановочная матрица $P$ такая, что

$$ PA=LU, $$
где $L$ — нижняя треугольная с ненулевой главной диагональю, $U$ — верхняя треугольная с единичной главной диагональю.
:::


## § 14. Обращение матрицы методом Гаусса {#14}

Как известно из курса алгебры, обратную матрицу можно найти, вычислив $n^2$ алгебраических дополнений, каждое из которых есть определитель размерности $n \times n$. Такой подход требует огромных вычислительных затрат, поэтому предлагается использовать метод Гаусса для решения матричного уравнения

$$ AX = E, $$

где $X = (x_{ij})_{n \times n} = A^{-1}$.

Данная система может быть представлена в развернутом виде

$$
\sum_{k=1}^n c_{ik} x_{kj} = \delta_{ij},
$$

где $\delta_{ij} = \begin{cases} 1, & i = j, \\ 0, & i \ne j. \end{cases}$

Другими словами, эта задача эквивалентна решению $n$ СЛАУ следующего вида:

$$
A\bar{x}^{(j)} = \bar{\delta}^{(j)},
$$

где $\bar{\delta}^{(j)} = (0, 0, ..., 1, ..., 0, 0)$ ($j$-ая компонента), $j = \overline{1,n}$.

Для программной реализации удобно использовать расширенную матрицу вида $(A|E)$, в которой прямой и обратный ходы метода Гаусса применяются не к одному столбцу свободных членов, а сразу к $n$ столбцам.

Как обычно, LU-разложение потребует ${n(n^2 - 1) \over 3}$ элементарных преобразований, а обратный ход можно представить в виде

$$ L\bar{y} = \bar{\delta}^{(j)}, \tag{∗} $$
$$ U\bar{x} = \bar{y}^{(j)}, \tag{∗∗} $$

где $j = \overline{1,n}$.

Отметим, что в первой системе первое $j-1$ уравнение решать не надо, т. к. его компоненты равны нулю.

В результате можно показать, что решение системы $(∗)$ потребует ${n(n+1)(n+2)\over 6}$ элементарных операций, а для системы $(∗∗)$ — ${n^2(n-1) \over 2}$ элементарных операций. В результате получим

$$
{n(n^2 - 1) \over 3} + {n^2 (n-1) \over 2} + {n(n+1)(n+2) \over 6} = n^3
$$

операций.


## § 15. Метод квадратного корня (Холéцкого) {#15}

Рассмотрим СЛАУ с симметричной матрицей:

$$ A\bar{x} = \bar{b}, ~ ~ ~ A^T = A. $$

Можно доказать следующее утверждение.

::: info УТВЕРЖДЕНИЕ
Если матрица $A$ симметричная, то она раскладывается в произведение
$$ A = LDL^T, \tag{∗} $$
где $L$ — нижняя треугольная матрица с положительными элементами на главной диагонали, $D$ — диагональная матрица, в которой диагональные элементы равны +1 или -1.
:::

Доказательство этого утверждения следует из алгоритма решения данной задачи.

Расммотрим произведение $DL^T$ и его элементы $(DL^T)_{ij}$. По правилу умножения матриц это будет

$$
(DL^T)_{ij} = \sum_{k=1}^n d_{ij} l_{jk} = d_{ii} l_{ji}.
$$

Тогда элемент произведения

$$
(LDL^T)_{ij} = \sum_{k=1}^n l_{ik} d_{kk} l_{jk}.
$$

Согласно $(∗)$, получаем $a_{ij}$.

Учитывая, что $A$ симметрическая, рассмотрим эту систему для $i \ge j$:

$$
\sum_{k=1}^{i-1} l_{ik} d_{kk} l_{jk} + l_{ii} d_{ii} l_{ji} + \sum_{k=i+1}^n l_{ik} d_{kk} l_{jk} = a_{ij} ~ ~ ~ ~ \forall j \le i.
$$

Сумма $\sum_{k=i+1}^n l_{ik} d_{kk} l_{jk}$ равна нулю, поскольку матрица $L$ является нижней треугольной.

Данная система может быть решена следующим образом.

Для $i=j$:

$$
l^2_{ii} \cdot d_{ii} = a_{ii} - \sum_{k=1}^{i-1} l^2_{ik} d_{kk}.
$$

Возьмём $d_{ii} = \text{sgn} \left( a_{ii} - \sum_{k=1}^{i-1} l^2_{ik} d_{kk} \right)$, $l_{ii} = \sqrt{a_{ii} - \sum_{k=1}^{i-1} l^2_{ik} d_{kk}}$.

Далее для $j < i$:

$$
l_{ji} = { a_{ii} - \sum_{k=1}^{i-1} l_{ik} d_{kk} l_{jk} \over l_{ii} d_{ii} }.
$$

Можно показать, что число операций данного алгоритма имеет порядок $O\left({n^3 \over 6}\right)$ (т. е. вдвое меньше, чем у метода Гаусса).

Обычно систему симметричной матрицы $A\bar{x} = \bar{b}$ приводят к виду
$$
LD\bar{y} = \bar{b}, \\
L^T\bar{x} = \bar{y},
$$
после чего обратный ход метода производят по формулам

$$
y_1 = {b_1 \over l_{11} d_{11}}, ~ ~ ~ ~ y_i = { b_i - \sum_{j=1}^{i-1} l_{ij} y_j \over l_{ii} d_{ii} }, ~ ~ i=\overline{2,n};
$$

$$
x_n = {y_n \over l_{nn}}, ~ ~ ~ ~ x_i = { y_i - \sum_{j=i+1}^n l_{ji} x_j \over l_{ii} }, ~ ~ i=\overline{n-1,1}.
$$

::: info ПРИМЕР
Решить систему $A\bar{x} = \bar{b}$, где
$$ A = \left(\begin{matrix}
    1 & -3 & 1 \\
    -3 & -7 & 5 \\
    1 & 5 & -4
\end{matrix}\right), ~ ~ ~ ~ \bar{b} = \left(\begin{matrix}
    -4 \\ 4 \\ -3
\end{matrix}\right). $$


*Решение.*
$$
LD = \left(\begin{matrix}
    l_{11} & 0 & 0 \\
    l_{21} & l_{22} & 0 \\
    l_{31} & l_{32} & l_{33}
\end{matrix}\right) \cdot \left(\begin{matrix}
    d_{11} & 0 & 0 \\
    0 & d_{22} & 0 \\
    0 & 0 & d_{33}
\end{matrix}\right) = \left(\begin{matrix}
    l_{11}d_{11} & 0 & 0 \\
    l_{21}d_{11} & l_{22}d_{22} & 0 \\
    l_{31}d_{11} & l_{32}d_{22} & l_{33}d_{33}
\end{matrix}\right).
$$
$$
LDL^T = \left(\begin{matrix}
    l_{11}d_{11} & 0 & 0 \\
    l_{21}d_{11} & l_{22}d_{22} & 0 \\
    l_{31}d_{11} & l_{32}d_{22} & l_{33}d_{33}
\end{matrix}\right) \cdot \left(\begin{matrix}
    l_{11} & l_{21} & l_{31} \\
    0 & l_{22} & l_{32} \\
    0 & 0 & l_{33}
\end{matrix}\right).
$$
Из $LDL^T$ можно получить, что:

* $l_{11}^2 \cdot d_{11} = a_{11} = 1 \implies d_{11} = 1, l_{11} = 1$;
* $l_{21} \cdot d_{11} \cdot l_{11} = -3 \implies l_{21} = -3$;
* $l_{31} \cdot d_{11} \cdot l_{11} = 1 \implies l_{31} = 1$;
* $l^2_{21} \cdot d_{11} + l^2_{22} \cdot d_{22} = -7 \implies d_{22} = -1, l_{22} = 4$;
* $l_{31} \cdot d_{11} \cdot d_{21} + l_{32} \cdot d_{22} \cdot l_{22} = 5 \implies l_{32} = -2$;
* $l^2_{31} \cdot d_{11} + l^2_{32} \cdot d_{22} + l^2_{33} \cdot d_{33} = -4 \implies l_{33} = 1, d_{33} = -1$.
 
Таким образом, получаем
$$
L = \left(\begin{matrix}
    1 & 0 & 0 \\
    -3 & 4 & 0 \\
    1 & -2 & 1
\end{matrix}\right), ~ ~ ~ ~ D = \left(\begin{matrix}
    1 & 0 & 0 \\
    0 & -1 & 0 \\
    0 & 0 & -1
\end{matrix}\right).
$$

Чтобы найти решение $\bar{x}$, вычислим $LD\bar{y} = \bar{b}$ и $L^T\bar{x} = \bar{y}$. Начнём с $LD\bar{y} = \bar{b}$:

$$
\begin{align}
y_1 = -4; & & \\
-3y_1 - 4y_2 = 4 & & \implies y_2 = 2, \\
y_1 + 2y_2 - y_3 = -3 & & \implies y_3 = 3.
\end{align}
$$

Теперь, пользуясь тем, что $L^T = \left(\begin{matrix}
    1 & -3 & 1 \\ 0 & 4 & -2 \\ 0 & 0 & 1
\end{matrix}\right)$, вычислим $L^T\bar{x} = \bar{y}$

$$
\begin{cases}
          x_1 - 3x_2 + 3 = -4; \\
          4x_2 - 2x_3 = 2; \\
          x_3 = 3.
      \end{cases} \implies \begin{cases}
          x_1 = -1; \\
          x_2 = 2; \\
          x_3 = 3.
      \end{cases} \implies \bar{x} = \left(\begin{matrix}
          -1 \\ 2 \\ 3
      \end{matrix}\right).
$$

**Ответ:** $\bar{x} = \left(\begin{matrix} -1 \\ 2 \\ 3 \end{matrix}\right)$.
:::