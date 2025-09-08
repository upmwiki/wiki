---
prev: false
next: false
---

**Практическое занятие**

# Задачи со старшими производными

## № 7.3

Решить задачу со старшими производными

$$
\begin{cases}
\displaystyle \intop_0^1 (\ddot{x}^2 - 48x) ~ \text{d}t \to \text{extr} \\
x(1) = \dot{x}(1) = 0, ~ ~ x(0) = 1, ~ ~ \dot{x}(0) = -4.
\end{cases}
$$

::: info Решение
$$
L_x - {\text{d} \over \text{d}t} L_{\dot{x}} + {\text{d}^2 \over \text{d}t^2} L_{\ddot{x}} = 0;
$$

$$
-48 + 2x^{IV} = 0;
$$

$$
x^{IV} - 24 = 0;
$$

$$
\dddot{x} = 24t + C_1;
$$

$$
\ddot{x} = 12t^2 + C_1 t + C_2;
$$

$$
\dot{x} = 4t^3 + {1 \over 2} C_1 t^2 + C_2 t + C_3;
$$

$$
x = t^4 + {1 \over 6} C_1 t^3 + {1 \over 2} C_2 t^2 + C_3 t + C_4.
$$

Подставим краевые условия:

$$
\begin{array}{r}
x(1) = 0: \\
\dot{x}(1) = 0: \\
x(0) = 1: \\
\dot{x}(0) = -4:
\end{array}
~~
\begin{cases}
1 + {1 \over 6} C_1 + {1 \over 2} C_2 + C_3 + C_4 = 0, \\
4 + {1 \over 2} C_1 + C_2 + C_3 = 0, \\
C_4 = 1, \\
C_3 = -4;
\end{cases}
$$

$$
\begin{cases}
1 + {1 \over 6} C_1 + {1 \over 2} C_2 - 3 = 0, \\
4 + {1 \over 2} C_1 + C_2 - 4 = 0;
\end{cases}
$$

$$
\begin{cases}
{1 \over 6} C_1 + {1 \over 2} C_2 = 2, \\
{1 \over 2} C_1 + C_2 = 0;
\end{cases}
$$

$$
\begin{cases}
C_1 + 3C_2 = 12, \\
C_1 + 2C_2 = 0;
\end{cases}
$$

$$
\begin{cases}
C_1 = -24, \\
C_2 = 12.
\end{cases}
$$

Таким образом,

$$
C_1 = -24, ~ ~ C_2 = 12, ~ ~ C_3 = -4, ~ ~ C_4 = 1,
$$

и допустимые экстремали имеют вид

$$
\hat{x} = t^4 - 4t^3 + 6t^2 - 4t + 1.
$$

Докажем слабый минимум. Рассмотрим приращение:

$$
J(\hat{x} + h) - J(\hat{x}) =
$$

$$
= \intop_0^1 \left(
    \ddot{\hat{x}}^2 + 2 \ddot{\hat{x}} \ddot{h} + \ddot{h}^2 - 48 (\hat{x} + h)
\right) ~ \text{d}t - \intop_0^1 \left(
    \ddot{\hat{x}}^2 - 48 \hat{x}
\right) ~ \text{d}t =
$$

$$
= \intop_0^1 \left(
    2 \ddot{\hat{x}} \ddot{h} + \ddot{h}^2 - 48 h
\right) ~ \text{d}t.
$$

Поскольку $J'(\hat{x})[h] = 0$, то

$$
J(\hat{x} + h) - J(\hat{x}) = \intop_0^1 \ddot{h}^2 ~ \text{d}t \ge 0 \implies
$$

$$
\implies J(\hat{x} + h) \ge J(\hat{x}),
$$

следовательно, $\hat{x}$ - слабый минимум.
:::

## № 7.8

Решить задачу со старшими производными

$$
\begin{cases}
\displaystyle \intop_0^\pi (\ddot{x}^2 - x^2) ~ \text{d}t \to \text{extr} \\
x(0) = \dot{x}(0) = 0, ~ ~ x(\pi) = \text{ch} ~ \pi + 1, ~ ~ \dot{x}(\pi) = \text{sh} ~ \pi.
\end{cases}
$$

::: info Решение
$$
L_{\ddot{x}} = 2 \ddot{x}, ~ ~ L_{\dot{x}} = 0, ~ ~ L_x = -2x.
$$

$$
-2x + 2x^{IV} = 0;
$$

$$
x^{IV} - x = 0;
$$

$$
\lambda^4 - 1 = 0 \implies \left[
    \begin{array}{l}
        \lambda_{1,2} = \pm 1, \\
        \lambda_{3,4} = \pm i.
    \end{array}
\right.
$$

$$
x = C_1 ~ \text{ch} ~ t + C_2 ~ \text{sh} ~ t + C_3 \cos t + C_4 \sin t;
$$

$$
\dot{x} = C_1 ~ \text{sh} ~ t + C_2 ~ \text{ch} ~ t - C_3 \sin t + C_4 \cos t.
$$

Подставим граничные условия:

$$
\begin{array}{r}
x(0) = 0: \\
\dot{x}(0) = 0: \\
x(\pi) = \text{ch} ~ \pi + 1: \\
\dot{x}(\pi) = \text{sh} ~ \pi:
\end{array}
~~
\begin{cases}
C_1 ~ \text{ch} ~ 0 + C_2 ~ \text{sh} ~ 0 + C_3 \cos 0 + C_4 \sin 0 = 0, \\
C_1 ~ \text{sh} ~ 0 + C_2 ~ \text{ch} ~ 0 - C_3 \sin 0 + C_4 \cos 0 = 0, \\
C_1 ~ \text{ch} ~ \pi + C_2 ~ \text{sh} ~ \pi + C_2 \cos \pi + C_4 \sin \pi = \text{ch} ~ \pi + 1, \\
C_1 ~ \text{sh} ~ \pi + C_2 ~ \text{ch} ~ \pi - C_3 \sin \pi + C_4 \cos \pi = \text{sh} ~ \pi;
\end{cases}
$$

$$
\begin{cases}
C_1 + C_3 = 0, \\
C_2 + C_4 = 0, \\
C_1 ~ \text{ch} ~ \pi + C_2 ~ \text{sh} ~ \pi - C_3 = \text{ch} ~ \pi + 1, \\
C_1 ~ \text{sh} ~ \pi + C_2 ~ \text{ch} ~ \pi - C_4 = \text{sh} ~ \pi;
\end{cases}
$$

$$
\begin{cases}
C_1 = 1, \\
C_2 = 0, \\
C_3 = -1, \\
C_4 = 0.
\end{cases}
$$

Таким образом, допустимые экстремали имеют вид

$$
\hat{x} = \text{ch} ~ t - \cos t.
$$

Достаточное условие совпадает с примером из лекции.
:::

## № 7.14

Решить задачу со старшими производными

$$
\begin{cases}
\displaystyle \intop_0^{\pi/2} (\ddot{x}^2 - \dot{x}^2) ~ \text{d}t \to \text{extr} \\
x(0) = \dot{x}(0) = 1, ~ ~ x(\pi/2) = \pi/2, ~ ~ \dot{x}(\pi/2) = 0.
\end{cases}
$$

::: info Решение
Составим уравнение Эйлера-Пуассона:

$$
L_{\ddot{x}} = 2\ddot{x}, ~ ~ L_{\dot{x}} = -2\dot{x}, ~ ~ L_x = 0 \implies
$$

$$
\implies 2 \ddot{x} + 2x^{IV} = 0;
$$

$$
\lambda^4 + \lambda^2 = 0;
$$

$$
\lambda^2 (\lambda^2 + 1) = 0;
$$

$$
\left[
    \begin{array}{l}
        \lambda_{1,2} = 0, \\
        \lambda_{3,4} = \pm i.
    \end{array}
\right.
$$

$$
x = C_1 + C_2 t + C_3 \cos t + C_4 \sin t;
$$

$$
\dot{x} = C_2 - C_3 \sin t + C_4 \cos t.
$$

Подставим краевые условия:

$$
\begin{array}{r}
x(0) = 1: \\
\dot{x}(0) = 1: \\
x(\pi/2) = \pi/2: \\
\dot{x}(\pi/2) = 0:
\end{array}
~~
\begin{cases}
C_1 + C_3 = 1, \\
C_2 + C_4 = 1, \\
C_1 + {\pi \over 2} C_2 + C_4 = {\pi \over 2}, \\
C_2 = C_3;
\end{cases}
$$

$$
\begin{cases}
C_1 = 0, \\
C_2 = 1, \\
C_3 = 1, \\
C_4 = 0.
\end{cases}
$$

$$
\hat{x} = t + \cos t.
$$

Исследуем на слабый экстремум.

Проверим выполнение условия Лежандра. Поскольку $L_{\ddot{x}\ddot{x}} = 2 > 0$, то выполняется усиленное условие Лежандра.

Проверим выполнение условия Якоби:

$$
W = 2 \ddot{h}^2 - 2\dot{h}^2.
$$

$$
\begin{rcases}
W_{\ddot{h}} = 4 \ddot{h} \\
W_{\dot{h}} = -4 \dot{h} \\
W_h = 0
\end{rcases}
\implies
\begin{cases}
4 \ddot{h} + 4h^{IV} = 0, \\
h(0) = 0, ~ ~ \dot{h}(0) = 0.
\end{cases}
$$

$$
h = C_1 + C_2 t + C_3 \cos t + C_4 \sin t;
$$

$$
\dot{h} = C_2 - C_3 \sin t + C_4 \cos t.
$$

$$
\begin{array}{r}
h(0) = 0: \\
\dot{h}(0) = 0:
\end{array}
~~
\begin{cases}
C_1 + C_3 = 0, \\
C_2 + C_4 = 0.
\end{cases}
$$

$$
...
$$
:::

## Домашнее задание

7.6, 7.12, 7.17, 7.19, 7.21, 7.25 (экстремум + достаточное условие)