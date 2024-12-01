---
prev:
    link: ../04
    text: 4. SQL (PL/SQL)
next:
    link: ../06
    text: 6. Работа с бинарными и сильноветвящимися деревьями
---

**Лабораторная работа 5**

# XML

## Варианты

::: warning ВАЖНО
При выполнении данной лабораторной работы нужно обращаться к схеме ``ED_SALES``. Её можно найти в SQL Developer в разделе "Other Users".
:::

### Вариант 1

Сформировать XML-документ со следующей структурой.

```xml
<Заказы>
    <Заказ номер="ИД ЗАКАЗА" клиент="ИМЯ ИЛИ НОМЕР КЛИЕНТА">
        <Позиция номер="НОМЕР ПОЗИЦИИ ЗАКАЗА" количество="КОЛИЧЕСТВО КУПЛЕННОГО ТОВАРА" цена="ЦЕНА ТОВАРА">НАИМЕНОВАНИЕ ИЛИ ИД ТОВАРА</Позиция>
        ...
        ...
    </Заказ>
    ...
    ...
</Заказы>
```

### Вариант 2

Сформировать XML-документ со следующей структурой.

```xml
<Отделы>
    <Отдел номер="НОМЕР ОТДЕЛА" название="НАИМЕНОВАНИЕ">
        <Сотрудник номер="НОМЕР СОТРУДНИКА" уровень_оплаты="УРОВЕНЬ ЗАРПЛАТЫ">ИМЯ СОТРУДНИКА</Сотрудник >
        ...
        ...
    </Отдел>
    ...
    ...
</Отделы>
```

### Вариант 3

Сформировать XML-документ со следующей структурой.

```xml
<Продукты>
    <Продукт номер="НОМЕР ПРОДУКТА" название="НАИМЕНОВАНИЕ">
        <Цена дата_начала="ДАТА НАЧАЛА ДЕЙСТВИЯ ЦЕНЫ" дата_окончания="ДАТА ОКОНЧАНИЯ ДЕЙСТВИЯ ЦЕНЫ">РОЗНИЧНАЯ ЦЕНА</Цена>
        ...
        ...
    </Продукт>
    ...
    ...
</Продукты>
```

### Вариант 4

Сформировать XML-документ со следующей структурой.

```xml
<Клиенты>
    <Клиент номер="ИМЯ ИЛИ НОМЕР КЛИЕНТА">
        <Заказ номер="НОМЕР ЗАКАЗА" дата_заказа="ДАТА ЗАКАЗА" дата_доставки="ДАТА ДОСТАВКИ">НОМЕР СЧЕТА</Заказ>
        ...
        ...
        </Клиент>
    ...
    ...
</Клиенты>
```


### Вариант 5

Сформировать XML-документ со следующей структурой.

```xml
<Уровни зарплаты>
    <Уровень нижний_предел="НИЖНИЙ ПРЕДЕЛ" верхний_предел="ВЕРХНИЙ ПРЕДЕЛ">
        <Сотрудник номер="НОМЕР СОТРУДНИКА" должность="ДОЛЖНОСТЬ">ИМЯ СОТРУДНИКА</Сотрудник>
        ...
        ...
    </Уровень зарплаты>
    ...
    ...
</Уровни зарплаты>
```


### Вариант 6

Сформировать XML-документ со следующей структурой.

```xml
<Должности>
    <Должность название="ДОЛЖНОСТЬ">
        <Сотрудник номер="НОМЕР СОТРУДНИКА" номер_отдела="НОМЕР ОТДЕЛА" >ИМЯ СОТРУДНИКА</Сотрудник>
        ...
        ...
    </Должность>
    ...
    ...
</Должности>
```

## Методические указания
* https://docs.oracle.com/cd/E11882_01/appdev.112/e23094/xdb13gen.htm#ADXDB4994 — подробная офф. документация по работе с XML с примерами
* http://citforum.ru/database/oracle/xml-oracle/ — пункт "Преобразование из табличной формы в XMLTYPE" с примерами

## Защита

::: details В чем разница между атрибутами и элементами?
:::

::: details Как работает конструкция ``XMLAGG`` и нужно использовать группировку?
:::

::: details Что такое ``XMLFOREST`` и ``XMLELEMENT`` и в чём разница между ними?
:::

::: details Что такое ``XMLATTRIBUTES`` и ``XMLELEMENT`` и в чём разница между ними, куда записываются их данные?
:::

::: details Как проверить, пустой ли ``XMLELEMENT``? Какие функции для этого нужны?
:::

::: details Что такое ``XMLTYPE``?
:::