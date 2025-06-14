---
prev: false
next: false
---

**Лекция**

# Основные элементарные функции комплексного переменного

## Показательная функция

Показательная функция $e^z$, $z \in \mathbb{C}$.

Поскольку $z = x + iy$, то

$$
e^z = e^{x + iy} = e^x (\cos y + i \sin y).
$$

Свойства:
1. $e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}$;
   
   ::: details Доказательство
   Пусть $z_1 = x_1 + i y_1$, $z_2 = x_2 + i y_2$. Выразим $e^{z_1 + z_2}$ и $e^{z_1} \cdot e^{z_2}$:

   $$
   e^{z_1 + z_2} = e^{x_1 + x_2} (\cos(y_1 + y_2) + i \sin(y_1 + y_2));
   $$

   $$
   e^{z_1} \cdot e^{z_2} = e^{x_1} (\cos y_1 + i \sin y_1) \cdot e^{x_2} (\cos y_2 + i \sin y_2) =
   $$

   $$
   = e^{x_1 + x_2} (\cos (y_1 + y_2) + i \sin (y_1 + y_2)). ~ ~ ~ ~ \blacksquare
   $$
   :::

2. функция $e^z$ является периодической с периодом $2 \pi i$:<br />
   $e^{z + 2 \pi i k} = e^z$, $k \in \mathbb{Z}$.

   ::: details Доказательство
   Пусть $z_1 = x_1 + i y_1$, $z_2 = x_2 + i y_2$. Тогда

   $$
   e^{z + 2 \pi i k} = e^{x + iy + 2 \pi i k} =
   $$

   $$
   = e^x (\cos (y + 2\pi k) + i \sin(y + 2\pi k)) =
   $$

   $$
   = e^x(\cos y + i \sin y) = e^z. ~ ~ ~ ~ \blacksquare
   $$
   :::

## Тригонометрические функции