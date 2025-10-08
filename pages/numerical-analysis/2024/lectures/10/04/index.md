---
prev:
    text: § 55. Метод конечных разностей решения ОДУ второго порядка
    link: ../03
next:
    text: § 57. Метод сеток решения уравнений в частных производных параболического типа
    link: ../05
---

**Тема 10. Метод сеток решения краевых задач**

# § 56. Метод сеток решения уравнений в частных производных гиперболического типа

Рассмотрим уравнение вида

$$
\begin{matrix}
\displaystyle ~ Lu = a(x,t) \cdot {\partial^2 u \over \partial x^2} - b(x,t) \cdot {\partial^2 u \over \partial t^2} + ~ \\
\displaystyle ~ + c(x,t) \cdot {\partial u \over \partial x} + d(x,t) \cdot {\partial u \over \partial t} + g(x,t) \cdot u = F(x,t). ~
\end{matrix}
\tag{∗}
$$

При этом будем считать, что $a(x, t) > 0$, $b(x, t) > 0$, $x, t \in G$, $\bar{G} = G \cup \Gamma$.

Будем считать, что $\bar{G}$ — прямоугольник, соответственно,

$$
\bar{G} = \set{ \alpha \le x \le \beta, 0 \le t \le T }.
$$

Введём двумерную сетку:

$$
\begin{cases}
x_i = \alpha + i \cdot h, \\
t_j = j \cdot \tau,
\end{cases}
$$

где $h = {\beta - \alpha \over N}$ — шаг по $x$, $i = \overline{0,N}$, $\tau = {T \over M}$ — шаг по $t$, $j = \overline{0, M}$.

В результате перейдём к конечно-разностному уравнению: заменим $u(x_i, t_j) \approx u_{ij}$, и само уравнение превращается в следующее:

$$
\begin{matrix}
\displaystyle ~ L_h u_{ij} = a_{ij} \cdot {u_{i+1,j} - 2u_{ij} + u_{i-1,j} \over h^2} - b_{ij} \cdot {u_{i,j+1} - 2u_{ij} + u_{i,j-1} \over \tau^2} + ~ \\
\displaystyle ~ + c_{ij} \cdot {u_{i+1,j} - u_{i-1,j} \over 2h} + d_{ij} \cdot {u_{i,j+1} - u_{i,j-1} \over 2\tau} + g_{ij} \cdot u_{ij} = F_{ij}.
\end{matrix}
\tag{∗∗}
$$

Узлы $(i, j) \in G_h$ — внутренние узлы области.

Уравнение $(∗)$ задаётся вместе с начальными и граничными условиями:

* начальные условия:
  $$
  \begin{cases}
    u(x,0) = f(x), \\
    \displaystyle {\partial \over \partial t} u(x,0) = \Phi(x).
  \end{cases}
  $$

* граничные условия:
  $$
  \begin{cases}
    \displaystyle \beta_1 (x,t) \cdot {\partial u \over \partial x} + \left. \alpha_1 (x,t) \cdot u \right|_{x=a} = \varphi(t), \\
    \displaystyle \beta_2 (x,t) \cdot {\partial u \over \partial x} + \left. \alpha_2 (x,t) \cdot u \right|_{x=b} = \Psi(t).
  \end{cases}
  $$

Дополнительные условия также заменяются на сеточные по следующим правилам:

$$
\begin{cases}
    u_{i,0} = f_i, \\
    \displaystyle {u_{i,1} - u_{i,0} \over \tau} = \Phi_i;
\end{cases}
$$

$$
\begin{cases}
\displaystyle \alpha_{1,j} u_{0,j} + \beta_{1,j} \cdot {u_{1,j} - u_{0,j} \over h} = \varphi_j, \\
\displaystyle \alpha_{2,j} u_{N,j} + \beta_{2,j} \cdot {u_{N,j} - u_{N-1, j} \over h} = \Psi_j.
\end{cases}
$$

При данной аппроксимации используются обозначения:

$$
\begin{matrix}
a_{ij} = a(x_i, t_j), \\
\alpha_{ij} = \alpha(x_i, t_j), \\
F_{ij} = F(x_i, t_j),
\end{matrix}
$$

и т. д.

Отметим, что порядок аппроксимации уравнения есть $O(h^2 + \tau^2)$, а порядок аппроксимации начальных и граничных условий — $O(h + \tau)$.

Чтобы повысить порядок аппроксимации, необходимо начальные и граничные условия аппроксимировать с более высоким порядком, что усложняет задачу.

Преобразуем сеточное уравнение $(∗∗)$:

$$
A_{ij} u_{i,j+1} + B_{ij} u_{i,j-1} + C_{ij} u_{i+1,j} + D_{ij} u_{i-1,j} + E_{ij} u_{ij} = F_{ij},
$$

где

$$
A_{ij} = -{b_{ij} \over \tau^2} + {d_{ij} \over 2\tau},
~~~~
B_{ij} = -{b_{ij} \over \tau^2} - {d_{ij} \over 2\tau},
$$

$$
C_{ij} = {a_{ij} \over h^2} + {c_{ij} \over 2h},
~~~~
D_{ij} = {a_{ij} \over h^2} - {c_{ij} \over 2h},
$$

$$
E_{ij} = -{2a_{ij} \over h^2} + {2 b_{ij} \over \tau^2} + g_{ij}.
$$

Отметим, что при $\tau \ll 1$ значения $A_{ij} \ne 0$.

Поделим уравнение на $A_{ij}$, получим:

$$
u_{i,j+1} = {F_{ij} \over A_{ij}} - {B_{ij} \over A_{ij}} u_{i,j-1} - {C_{ij} \over A_{ij}} u_{i+1,j} - {D_{ij} \over A_{ij}} u_{i-1,j} - {E_{ij} \over A_{ij}} u_{ij}.
\tag{∗∗∗}
$$

Полученное сеточное уравнение представляет собой так называемую **явную схему «крест»**.


<figure>
    <img src="/media/images/IMG_20251008_044829_336.png" width="50%" />
</figure>

Решение этой сеточной задачи производят слоями: сначала заполняются слои для $j = 0$ и $j = 1$ с помощью начальных условий:

$$
\begin{cases}
u_{i,0} = f_i, \\
u_{i,1} = u_{i,0} + \tau \cdot \Phi_i = f_i + \tau \cdot \Phi_i.
\end{cases}
$$

Для $j = 2$ слой заполняется из уравнения $(∗∗∗)$ для $i = \overline{1, N-1}$, а затем из граничных условий определяются $u_{0,2}$ и $u_{N,2}$:

$$
u_{0,2} = {h \cdot \varphi_2 - \beta_{12} \cdot u_{12} \over \alpha_{12} \cdot h - \beta_{12}},
$$

$$
u_{N,2} = {h \cdot \Psi_2 - \beta_{22} \cdot u_{22} \over h \cdot \alpha_{22} + \beta_{22}}.
$$

Аналогично заполняются все оставшиеся слои для $j = \overline{3, M-1}$: $u_{i,j+1}$ вычисляется по формуле $(∗∗∗)$ для $i = \overline{1, N-1}$, а $u_{0,j+1}$ и $u_{N,j+1}$ вычисляются по формулам

$$
u_{0,j+1} = {h \cdot \varphi_{j+1} - \beta_{1,j+1} \cdot u_{1,j+1} \over \alpha_{1,j+1} \cdot h - \beta_{1,j+1}},
$$

$$
u_{N,j+1} = {h \cdot \Psi_{j+1} + \beta_{2,j+1} \cdot u_{N-1,j+1} \over h \cdot \alpha_{2,j+1} + \beta_{2,j+1}}.
$$

(Последующий слой вычисляется через два предыдущих.)