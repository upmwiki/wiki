---
prev: false
next: false
---

**Практическое занятие**

# Метод Гаусса с выбором главного элемента

Данный метод отличается от обычного метода Гаусса тем, что на каждом шаге в оставшейся подматрице выбирается наибольший по модулю элемент. Затем с помощью перестановки двух строк и двух столбцов этот элмент перемещается на место ведущего. В результате деления на ведущий элемент все числа строки оказываются по модулю меньше 1.

Результат — погрешность округления минимальная.

Как известно. перестановка строк (уравнений) не меняет решение, но перестановка столбцов меняет порядок его компонентов, поэтому в этом случае надо использовать **вектор перенумерации**, начальный вид которого:

$$
\bar{p} = \left(\begin{matrix}
1 \\ 2 \\ 3 \\ \vdots \\ n
\end{matrix}\right).
$$

При каждой перестановке столбцов производится перестановка компонент этого вектора, а по окончанию решения производится обратная перестановка.

::: info ПРИМЕР
Решить систему уравнений $A\bar{x} = \bar{b}$ методом Гаусса с выбором главного элемента, где
$$
A = \left(\begin{matrix}
2 & 1 & -3 \\ 3 & 1 & -2 \\ 1 & 5 & 3
\end{matrix}\right), ~ ~ ~
\bar{b} = \left(\begin{matrix}
-1 \\ 5 \\ -5
\end{matrix}\right).
$$

*Решение.*

![](/media/gauss-with-p-1.jpg)
![](/media/gauss-with-p-2.jpg)
:::