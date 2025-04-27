---
prev: false
next: false
---

**Практическое занятие**

# Задача Больца

$$
B(x) = \int_{t_0}^{t_1} L(t,x,\dot{x}) ~ \text{d}t + l(x(t_0), x(t_1))
$$

* Уравнение Эйлера-Лагранжа:
  $$
  {\text{d} \over \text{d}t} \hat{L}_\dot{x} = \hat{L}_x.
  $$
* Условия трансверсальности:
  $$
  \begin{array}{c}
  \hat{L}_\dot{x}(t_0) = \hat{l}_{x(t_0)}, \\
  \hat{L}_\dot{x}(t_1) = -\hat{l}_{x(t_1)}
  \end{array}
  $$

## № 5.2

$$
\int_0^1 (\dot{x}^2 + x^2) ~ \text{d}t - 2x(1) ~ \text{sh} ~\! 1 \to \text{extr}
$$

*Решение.* $L = \dot{x}^2 + x^2$, $l = 2x(1) ~ \text{sh}~\! 1$.

Уравнение Эйлера-Лагранжа:

$$
{d \over dt} \hat{L}_\dot{x} = \hat{L}_x
$$

$$
2\ddot{x} = 2x
$$

$$
\ddot{x} - x = 0
$$

Характеристическое уравнение: $\lambda^2 - 1 = 0$, его решения: $\lambda_{1,2} = \pm 1$.

Тогда решение уравнения имеет вид

$$
x = C_1 ~ \text{ch} ~\! t + C_2 ~ \text{sh} ~\! t,
$$

а его производная:

$$
\dot{x} = C_1 ~ \text{sh}~\! t + C_2 ~ \text{ch}~\! t.
$$

Условие трансверсальности:

$$
\begin{cases}
2\dot{x}(0) = 2x(1) ~ \text{sh}~\! 1, \\
2\dot{x}(1) = 2x(1) ~ \text{sh}~\! 1.
\end{cases}
$$

$$
\begin{array}{c}
\dot{x}(0) = 0, \\
\dot{x}(1) = \text{sh}~\! 1.
\end{array}
$$

$$
\begin{array}{rl}
\dot{x}(0) = 0: & C_1  ~ \text{sh}~\! 0 + C_2  ~ \text{ch}~\! 0 = 0 \implies C_2 = 0 \\
\dot{x}(1) =  \text{sh}~\! 1: & C_1  ~ \text{sh}~\! 1 =  \text{sh}~\! 1 \implies C_1 = 1
\end{array}
$$

Таким образом, найдена экстремаль вида

$$
\hat{x} =  \text{ch}~\! t.
$$

Проверим на экстремальность:

$$
B(\hat{x} + h) - B(\hat{x}) = \int_0^1 (\dot{\hat{x}}^2 + 2\dot{\hat{x}}\dot{h} + \dot{h}^2 + \hat{x}^2 + 2\hat{x}h + h^2) ~ \text{d}t -
$$

$$
- 2(\hat{x}(1) + h(1)) ~ \text{sh}~\! 1 - \int_0^1 (\dot{\hat{x}}^2 + \hat{x}^2) ~ \text{d}t + 2\hat{x}(1) ~ \text{sh}~\! 1 =
$$

$$
\int_0^1 (2\dot{\hat{x}}\dot{h} + \dot{h}^2 + 2\hat{x}h + h^2) ~ \text{d}t - 2h(1) ~ \text{sh}~\! 1 = (*)
$$

Все слагаемые с $h$ или $\dot{h}$ составляют производную $B'(x)[h] = 0$, поэтому можем убрать их.

$$
(*) = \int_0^1 (\dot{h}^2 + h^2) ~ \text{d}t \ge 0 \implies B(\hat{x} + h) \ge B(\hat{x}) \implies
$$

$\implies$ $\hat{x}$ $-$ слабый минимум.

## №5.4

$$
\int_0^{\pi/2} (\dot{x}^2 - x^2) ~ \text{d}t + x^2(0) - x^2\left({\pi \over 2}\right) + 4x \left({\pi \over 2}\right) \to \text{extr}
$$

*Решение.* $L = \dot{x}^2 - x^2$, $l = x^2(0) - x^2\left({\pi \over 2}\right) + 4x \left({\pi \over 2}\right)$.

$$
{d \over dt} L_\dot{x} = L_x.
$$

$$
2\ddot{x} = -2x
$$

$$
\ddot{x} + x = 0
$$

$$
\lambda^2 + 1 = 0 \implies \lambda_{1,2} = \pm i \implies
$$

$$
\implies x = C_1 \cos t + C_2 \sin t,
$$

$$
\dot{x} = -C_1 \sin t + C_2 \cos t.
$$

Условия трансверсальности:

$$
2\dot{x}(0) = 2x(0) \implies \dot{x}(0) = x(0) \implies C_2 = C_1
$$

$$
2\dot({\pi \over 2}) = 2x({pi \over 2}) - 4 \implies \dot{x}({\pi \over 2}) = x({\pi \over 2}) - 2 \implies -C_1 = C_2 - 2
$$

$$
\begin{cases}
C_1 = C_2, \\
C_1 + C_2 = 2
\end{cases} \implies C_1 = C_2 = 1.
$$

Таким образом, $\hat{x} = \cos t + \sin t$.

$$
W = \hat{L}_{\dot{x}\dot{x}} \dot{h}^2 + 2\hat{L}_{x\dot{x}} h\dot{h} + \hat{L}_{xx}h^2
$$

* $\hat{L}_{\dot{x}\dot{x}} = 2 > 0$, следовательно, усиленное условие Лежандра выполнено.
* $\hat{L}_{x\dot{x}} = 0$
* $\hat{L}_{xx} = -2$

$$
W = 2\dot{h}^2 - 2h^2
$$

Уравнение Якоби:

$$
\begin{cases}
{d \over dt} W_\dot{h} = W_h, \\
h(0) = 0.
\end{cases}
$$

$$
\begin{cases}
4\ddot{h} = -4h, \\
h(0) = 0
\end{cases}
$$

$$
\begin{cases}
\ddot{h} + h = 0, \\
h(0) = 0
\end{cases}
$$

$$
\begin{cases}
h = C_1 \cos t + C_2 \sin t, \\
h(0) = 0 & \implies C_1 = 0
\end{cases}
$$

Таким образом, $h = C_2 \sin t$.

Определим, в каких точках $h$ обращается в $0$ на $(0; \pi/2)$.

Не обращается, следовательно, сопражённых нет, следовательно, усиленное условие Якоби выполнено.

$$
Q = \begin{pmatrix}
l_{x(0)}l_{x(0)} & l_{x(0)} l_{x(\pi/2)} \\
l_{x(0)}l_{x(\pi/2)} & l_{x(\pi/2)} l_{x(\pi/2)}
\end{pmatrix} = \begin{pmatrix}
2 & 0 \\ 0 & -2
\end{pmatrix}
$$

$$
\begin{cases}
\ddot{h}_0 + h_0 = 0, \\
h_0(0) = 1, ~ h_0(\pi/2) = 0.
\end{cases} \implies h_0 = \cos t, ~ ~ h'_0 = -\sin t
$$

$$
\begin{cases}
\ddot{h}_1 + h_1 = 0, \\
h_1(0) = 0, ~ h_1(\pi/2) = 1.
\end{cases} \implies h_1 = \sin t, ~ ~ h'_0 = -\cos t
$$

* $A = -2 \cdot 0 = 0$
* $B = {1 \over 2} (2\cdot(-1) - 2 \cdot 1) = -2$
* $C = 2 \cdot 0 + 0 = 0$

$$
P = \begin{pmatrix}
A & B \\ B & C
\end{pmatrix} = \begin{pmatrix}
0 & -2 \\ -2 & 0
\end{pmatrix}
$$

$$
P + Q = \begin{pmatrix}
2 & -2 \\ -2 & -2
\end{pmatrix}.
$$

$\Delta_1 = 2$, $\Delta_2 = -4 -4 = -8$, следовательно, $P+Q$ неположительно определена, следовательно, слабого минимума нет.

## №5.6

$$
\int_0^1 (\dot{x}_1 \dot{x}_2 + x_1 x_2) ~ \text{d}t + x_1(0) x_2(1) + x_1(1) x_2(0) \to \text{extr}
$$

*Решение.*

$$
\begin{array}{cc}
L_{x_1} = x_2, & L_{x_2} = x_1, \\
L_\dot{x_1} = \dot{x_2}, & L_{\dot{x_2}} = \dot{x_1}.
\end{array}
$$

$$
\begin{cases}
\ddot{x}_2 = x_2, \\
\ddot{x}_1 = x_1.
\end{cases}
$$

$$
\begin{array}{c}
x_2 = C_1 ~ \text{ch} ~\! t + C_2 ~ \text{sh} ~\! t, \\
x_1 = C_3 ~ \text{ch} ~\! t + C_4 ~ \text{sh} ~\! t.
\end{array}
$$

$$
L_{\dot{x}_1} (t_0) = l_{x_1(t_0)}; ~ ~ ~ ~
L_{\dot{x}_1} (t_1) = -l_{x_1(t_1)}.
$$

$$
\dot{x}_2(0) = x_2(1) \implies C_2 = C_1 ~ \text{ch} ~\! 1 + C_2 ~ \text{sh} ~\! 1;
$$

$$
\dot{x}_2(1) = -x_2(0) \implies C_1 ~ \text{sh} ~\! 1 + C_2 ~ \text{ch} ~\! 1 = -C_1.
$$

$$
L_{\dot{x}_2} (t_0) = l_{x_2(t_0)}; ~ ~ ~ ~
L_{\dot{x}_2} (t_1) = -l_{x_2(t_1)}.
$$

$$
\dot{x}_1(0) = x_1(1) \implies C_4 = C_3 ~ \text{ch} ~\! 1 + C_4 ~ \text{sh} ~\! 1;
$$

$$
\dot{x}_1(1) = -x_1(0) \implies C_3 ~ \text{sh} ~\! 1 + C_4 ~ \text{ch} ~\! 1 = -C_3.
$$

Следовательно, $C_1 = C_2 = C_3 = C_4 = 0$.

Таким образом, $\hat{x}_1 = 0$, $\hat{x}_2 = 0$.