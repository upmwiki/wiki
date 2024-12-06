---
prev:
    link: ../04
    text: 4. UML-диаграммы
next:
    link: ../06
    text: 6. Шаблоны проектирования
---

**Лабораторная работа 5**

# Сериализация

## Задание

Для набора объектов из классов лабораторной работы 4 реализовать сериализацию и десериализацию в текстовый файл в формате JSON (для удобства запуска на https://onecompiler.com/python/ пусть файл создаётся в памяти). Язык Python.

### Пример

::: code-group

<<< ./snippets/01.py {py} [Python]

``` :no-line-numbers [Результат выполнения]
Сериализованный JSON:
 {
    "family_name": "Smith",
    "members": [
        {
            "person_id": 1,
            "name": "Alice",
            "age": 30
        },
        {
            "person_id": 2,
            "name": "Bob",
            "age": 35
        }
    ],
    "address": {
        "street": "123 Main St",
        "city": "Metropolis",
        "zip_code": "12345"
    }
}

Десериализованные данные:
Family Name: Smith
Members:
 - ID: 1, Name: Alice, Age: 30
 - ID: 2, Name: Bob, Age: 35
Address: 123 Main St, Metropolis, 12345
```

:::