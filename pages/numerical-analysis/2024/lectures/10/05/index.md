---
prev:
    text: § 56. Метод сеток решения уравнений в частных производных гиперболического типа
    link: ../04
next: false
    #text: § 51. Методы Рунге-Кутта
    #link: ../02
---

**Тема 10. Метод сеток решения краевых задач**

# § 57. Метод сеток решения уравнений в частных производных параболического типа

Рассмотрим краевую задачу для следующего уравнения:

$$
Lu = {\partial u \over \partial t} - a(x,t) \cdot {\partial^2 u \over \partial t^2} - b(x,t) \cdot {\partial u \over \partial x} - c(x,t) \cdot u = F(x,t),
$$

где $(x,t) \in G$, $\bar{G} = G \cup \Gamma$, $a(x,t) > 0$.

Будем считать, что $\bar{G}$ — прямоугольник:

$$
\bar{G} = \set{ a \le x \le b, 0 \le t \le T}.
$$

Дополнительные условия:

* начальные условия:
  $$
  u(x,0) = f(x).
  $$

* граничные условия:
  $$
  \alpha_1 (x,t) \cdot {\partial u \over \partial x} + \left. \beta_1 (x,t) \cdot u \right|_{x=a} = \varphi(t),
  $$

  $$
  \alpha_2 (x,t) \cdot {\partial u \over \partial x} + \left. \beta_2 (x,t) \cdot u \right|_{x=b} = \varphi(t).
  $$

Вводим сетку:

$$
\begin{cases}
    x_i = a + i \cdot h, \\
    t = t_j = j \cdot \tau,
\end{cases}
$$

где $h = {b - a \over N}$, $i = \overline{0,N}$, $\tau = {T \over M}$, $j = \overline{0,M}$.

В этом случае возможны три варианта аппроксимации исходного уравнения конечно-разностным. Все они связаны с аппроксимацией ${\partial u \over \partial t}$.

1. Рассмотрим схему

   $$
   ~ L^+_h u_{ij} = {u_{i,j+1} - u_{ij} \over \tau} - a_{ij} \cdot {u_{i+1,j} - 2u_{ij} + u_{i-1,j} \over h^2} - ~
   $$

   $$
   ~ - b_{ij} \cdot {u_{i+1,j} - u_{i-1,j} \over 2h} - c_{ij} \cdot u_{ij} = F_{ij}. ~
   $$

   Здесь $u_{ij} \approx u(x_i, t_j)$, $a_{ij} = a(x_i, t_j)$, ..., $F_{ij} = F(x_i, t_j)$.

   Эта схема имеет порядок аппроксимации $O(h^2 + \tau)$ и называется **явной схемой «треугольник»**.

<figure>
    <img src="/media/images/IMG_20251008_050934_871.png" width="50%" />
</figure>

   Введём обозначение ${\tau \over h^2} = \alpha$. Тогда уравнение преобразуется к виду

   $$
   ~ u_{i,j+1} = u_{ij} \cdot \left(1 - 2 \cdot a_{ij} \cdot \alpha + \tau \cdot c_{ij}\right) + u_{i+1,j} \cdot \left(a_{ij} \cdot \alpha + b_{ij} \cdot {h \over 2} \cdot \alpha\right) + ~
   $$

   $$
   ~ + u_{i-1,j} \cdot \left(a_{ij} \cdot \alpha - b_{ij} \cdot {h \over 2} \cdot \alpha\right) + \tau \cdot F_{ij},
   $$

   где $j = \overline{1, M-1}$, $i = \overline{1, N-1}$.

   Для вычисления схема удобная, она считается по слоям (см. [§56](../04/)). Первый слой задаётся начальными условиями

   $$
   u_{i,0} = f_i, ~~~~ i = \overline{0,N},
   $$

   а последующие слои — уравнением и граничными условиями

   $$
   \alpha_{ij} \cdot {u_{1,j} - u_{0,j} \over h} + \beta_{1j} \cdot u_{0,j} = \varphi_j,
   $$

   $$
   \alpha_{2j} \cdot {u_{N,j} - u_{N-1,j} \over h} + \beta_{2,j} \cdot u_{N,j} = \Psi_h,
   $$

   где $j = \overline{1,M}$.

   Недостатком схемы является её устойчивость. Можно доказать, что схема будет устойчива, если ${\tau \over h^2} \le \mu$, где $\mu$ — некоторая константа, определяемая параметрами уравнения. В результате возникает необходимость строить неравномерную сетку для двух переменных.

   В результате такая схема применяется нечастно.

2. Рассмотрим следующую схему:

   $$
   ~ L^-_h u_{ij} = {u_{ij} - u_{i,j-1} \over \tau} - a_{ij} \cdot {u_{i+1,j} - 2u_{ij} + u_{i-1,j} \over h^2} - ~
   $$

   $$
   ~ - b_{ij} \cdot {u_{i+1,j} - u_{i-1,j} \over 2h} - c_{ij} \cdot u_{ij} = F_{ij}. ~
   $$

   Порядок аппроксимации такой же — $O(h^2 + \tau)$. Схема называется **неявной схемой «треугольник»**.

<figure>
    <img src="/media/images/IMG_20251008_050935_120.png" width="50%" />
</figure>

   Запишем уравнение в следующем виде:

   $$
    ~ u_{i+1,j} \cdot \left(
        -a_{ij} \cdot \alpha - b_{ij} \cdot {h \over 2} \cdot \alpha
    \right) + u_{ij} \cdot \left(
        1 + 2 \cdot a_{ij} \cdot \alpha - \tau \cdot c_{ij}
    \right) + ~
   $$

   $$
    ~ + u_{i-1,j} \cdot \left(
        -a_{ij} \cdot \alpha + b_{ij} \cdot {h \over 2} \cdot \alpha
    \right) = \tau \cdot F_{ij} + u_{i,j-1}. ~
   $$

   Данная схема также считается по слоям, но здесь для вычисления значений на каждом слое необходимо решать линейные конечно-разностное уравнение второго порядка. Это осложняет задачу, но можно доказать, что такая схема будет устойчива при любых $\alpha$, т. е. соотношение шагов можно выбирать произвольно.

   Данная схема используется наиболее часто.

3. Рассмотрим схему

   $$
   ~ L^0_h u_{ij} = {u_{i,j+1} - u_{i,j-1} \over 2\tau} - a_{ij} \cdot {u_{i+1,j} - 2u_{ij} + u_{i-1,j} \over h^2} - ~
   $$

   $$
   ~ - b_{ij} \cdot {u_{i+1,j} - u_{i-1,j} \over 2h} - c_{ij} \cdot u_{ij} = F_{ij}. ~
   $$

   Схема имеет порядок аппроксимации $O(h^2 + \tau^2)$ и называется **явной схемой «крест»**.

<figure>
    <img src="/media/images/IMG_20251008_050935_306.png" width="50%" />
</figure>

   Схема записывается в виде

   $$
    ~ u_{i,j+1} = u_{ij} \cdot (-\alpha_{ij} \cdot 4 \cdot \alpha + 2 \cdot i \cdot c_{ij}) + u_{i+1,j} \cdot (2 \cdot a_{ij} \cdot \alpha + b_{ij} \cdot \alpha \cdot h) + ~
   $$

   $$
    ~ + u_{i-1,j} \cdot (a_{ij} \cdot 2 \cdot \alpha - b_{ij} \cdot \alpha \cdot h) + u_{i,j-1} = 2 \cdot i \cdot F_ij.
   $$

   Схема является явной, позволяет непосредственно вычислять слои через предыдущие и имеет высокий порядок аппроксимации. Однако оказывается, что она не устойчива ни при каком $\alpha$, поэтому её не используют.