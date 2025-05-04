---
prev:
    text: 5. Интеграл уравнения Эйлера
    link: ../05/
next:
    text: 7. Примеры исследования классических задач на слабый минимум
    link: ../07/
---

**Лекция 6**

# Условие экстремума второго порядка

Простейшая задача имеет вид

$$
\begin{cases}
J(x) = \int_{t_0}^{t_1} L(t, x(t), \dot{x}(t)) ~ \text{d}t \to \text{extr} \\
x(t_0) = x_0; ~ x(t_1) = x_1
\end{cases}
$$

где $L$ — дважды непрерывно дифференцирема по совокупности аргументов.

Пусть $\hat{x}$ — функция, которая даёт минимум функционала $J$, а $h$ — допустимая вариация аргумента функционала $J$.

[image]

$$
h(t_0) = h(t_1) = 0.
$$

$h \in H_0$ (непрерывно дифференцируемых функций на отрезке $[t_0; t_1]$ с нулевыми граничными условиями.)

$$
\varphi(\lambda) = J(\hat{x} + \lambda h)
$$

$$
\varphi'(0) = \int_{t_0}^{t_1} \left(
    \hat{L}_x h + \hat{L}_\dot{x} \dot{h}
\right) ~ \text{d}t
$$

$$
\varphi''(0) = \int_{t_0}^{t_1} \left(
    \hat{L}_{xx} h^2 + 2 \hat{L}_{x\dot{x}} h \dot{h} + \hat{L}_{\dot{x}\dot{x}} \dot{h}^2
\right)
$$

Обозначим $W(t, h, \dot{h}) = \hat{L}_{xx} h^2 + 2 \hat{L}_{x\dot{x}} h \dot{h} + \hat{L}_{\dot{x}\dot{x}} \dot{h}^2$.

$J(x)$ имеет слабый минимум (максимум) тогда и только тогда, когда $\varphi''(0) \ge (\le) ~ 0$.

::: info Определение
Будем говорить, что интегрант $L$ удовлетворяет (усиленному) условию Лежандра тогда и только тогда, когда $\hat{L}_{\dot{x}\dot{x}} \ge (>) ~ 0$ для всех $t\in[t_0; t_1]$.
:::

:::: info Утверждение 1
Если $\hat{x}$ — слабый минимум, то на нём выполнено условие Лежандра.

::: details Доказательство {open}
Предположим, что заключение теоремы неверно. Это значит, что есть какая-то точка $\tau$, такая, что $\hat{L}_{\dot{x}\dot{x}} \le d < 0$ в интервале $\Delta_\varepsilon = (\tau - \varepsilon, \tau + \varepsilon)$.

$$
\tilde{h} = \begin{cases}
\sin^2 { \pi (t - \tau + \varepsilon) \over 2 \varepsilon }, & t \in \Delta_\varepsilon, \\ 
0, & t \notin \Delta_\varepsilon.
\end{cases}
$$

$$
\tilde{h}'' = \begin{cases}
{\pi \over 2 \varepsilon} \sin^2 { \pi (t - \tau + \varepsilon) \over 2 \varepsilon }, & t \in \Delta_\varepsilon, \\ 
0, & t \notin \Delta_\varepsilon.
\end{cases}
$$

Должно быть выполнено $\varphi''(0) \ge 0$.

$$
\varphi''(0) = \int_{\tau - \varepsilon}^{\tau + \varepsilon}
\left( \hat{L}_{xx} \tilde{h}^2 + 2 \hat{L}_{x\dot{x}} \tilde{h} \dot{\tilde{h}} + \hat{L}_{\dot{x}\dot{x}} \dot{\tilde{h}}^2 \right) \le
$$

$$
\le 2\varepsilon \max_{\Delta_\varepsilon} \hat{L}_{xx} + 2 \cdot {2\varepsilon} \cdot {\pi \over 2\varepsilon} \max_{\Delta_\varepsilon} \hat{L}_{x\dot{x}} + 2\varepsilon {\pi^2 \over 4\varepsilon^2} \max_{\Delta_\varepsilon} \hat{L}_{\dot{x}\dot{x}} \xrightarrow[\varepsilon \to 0]{} -\infty.
$$

Получилось противоречие. $~~\blacksquare$
:::
::::

::: info Определение 2
**Сопряжённой задачей вариационного исчисления** называется задача минимизации функционала

$$
\begin{cases}
\int_{t_0}^{t_1} W(t, h, \dot{h}) ~ \text{d}t \to \min \\
h(t_0) = h(t_1) = 0
\end{cases}
$$

в классе $H_0$.
:::

Уравнение Эйлера-Лагранжа для интегранта $W$ называется **уравнением Якоби**:

$$
{\text{d} \over \text{d}t} W_\dot{h} = W_h.
$$

$$
W = \hat{L}_{xx} h^2 + 2 \hat{L}_{x\dot{x}} h \dot{h} + \hat{L}_{\dot{x}\dot{x}} \dot{h}^2.
$$