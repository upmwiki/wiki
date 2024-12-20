---
prev: false
next:
    link: ../02
    text: 2. Одно- и многоуровневое наследование
---

**Лабораторная работа 1**

# Проектирование классов

## Задание 1

* Код пишется на языке C++.
* Отчёт должен содержать текст задания, код программы и результаты выполнения.
* Поля ``private`` или ``protected``, по смыслу, присутствуют get- и set-методы для чтения значений полей и установки значений.
* set-методы для установки значений полей объектов должны проверять корректность присваиваемых значений.
* должен присутствовать метод вывода на печать информации об объекте.
* выполнение состоит в создании нескольких экземпляров класса и проверки работоспособности всех его методов.

### Варианты {#1}

1. **Класс «Survey»:** спроектируйте класс для представления опроса. Определите поля (не менее четырёх) и методы (например, добавление вопроса и т.п.).

2. **Класс «E-learningPlatform»:** спроектируйте класс для онлайн-платформы обучения. Подумайте о полях (например, курсы, пользователи, преподаватели, сертификаты, что-то ещё) и необходимых методах (например, регистрация на курс, прохождение уроков, сдача экзаменов, выдача сертификатов).

3. **Класс «Order»:** разработайте класс для представления заказа в интернет-магазине. Подумайте, какие поля могут понадобиться (например, номер заказа, список товаров, статус заказа) и какие методы следует реализовать (например, изменение статуса, расчет общей стоимости).

4. **Класс «Car»:** спроектируйте класс, представляющий автомобиль. Определите его поля (например, марка, модель, год выпуска, не менее 5) и необходимые методы.

5. **Класс «Student»:** напишите класс «Student», с осмысленными полями по Вашему разумению (не менее 5 полей). Добавьте необходимые методы для работы.

6. **Класс «JobPortal»:** спроектируйте класс для платформы по поиску работы. Подумайте о необходимых полях (например, вакансии, резюме, работодатели, соискатели, ещё что-то...) и необходимых методах (например, публикация вакансий, поиск работы, отправка резюме, назначение собеседований).

7. **Класс «Book»:** реализуйте класс «Book» с осмысленными полями по Вашему разумению (не менее 5 полей). Добавьте необходимые методы для работы с книгой.

8. **Класс «BankAccount»:** напишите класс «BankAccount», осмысленными полями по Вашему разумению (не менее 3 полей). Добавьте необходимые методы для работы.

9. **Класс «WeatherStation»:** создайте класс, представляющий метеостанцию. Определите поля (например, текущая температура, влажность, не менее 5) и методы (например, получение прогноза, запись данных, ...).

10. **Класс «DeliveryService»:** создайте класс для управления службой доставки. Определите поля (например, список заказов, список курьеров, ещё какие необходимы... .) и необходимые для работы методы (например, назначение курьера на заказ, отслеживание статуса доставки).

11. **Класс «Zoo»:** разработайте класс для представления зоопарка. Создайте поля (например, название, список животных, список сотрудников, и т.п.) и методы (например, добавление животного, кормление животного, организация экскурсии, ...).

12. **Класс «TravelAgency»:** создайте класс для работы с туристическим агентством. Определите поля (например, туристические направления, туры, клиенты, бронирования, что ещё требуется...) и необходимые методы (например, подбор тура, бронирование билетов, оформление страховки).

13. **Класс «Task»:** разработайте класс для задачи в системе управления проектами. Определите поля (например, описание, дедлайн, статус, ещё парочка) и методы (например, изменение статуса, назначение исполнителя).

14. **Класс «ProjectManagementTool»:** разработайте класс для системы управления проектами. Определите необходимые поля (например, список проектов, задачи, участники) и методы (например, добавление проекта, назначение задач, отслеживание прогресса, управление сроками).

15. **Класс «Restaurant»:** спроектируйте класс, представляющий ресторан. Подумайте о полях (например, название, меню, список заказов, ещё несколько) и методах (например, добавление блюда в меню, принятие заказа, формирование счета).

16. **Класс «SupplyChainManagement»:** разработайте класс для управления цепочками поставок. Определите необходимые поля (например, поставщики, товары, заказы, складские запасы, ...) и методы (например, управление поставками, обработка заказов).

17. **Класс «EventManagement»:** создайте класс для системы управления мероприятиями. Подумайте о полях (например, мероприятия, участники, билеты, площадки) и методах (например, организация мероприятия, продажа билетов, управление списком участников).

18. **Класс «SmartHomeSystem»:** спроектируйте класс для управления умным домом. Подумайте о полях, которые должны описывать компоненты системы (например, устройства, сценарии автоматизации, пользователи, ещё что-то), и методах для управления устройствами (например, включение/выключение света, настройка температуры, мониторинг безопасности).

19. **Класс «RealEstateAgency»:** спроектируйте класс для управления агентством недвижимости. Определите поля (например, объекты недвижимости, агенты, клиенты) и методы (например, добавление объектов недвижимости, поиск недвижимости, заключение сделок).

20. **Класс «OnlineBookingSystem»:** спроектируйте класс для системы онлайн-бронирования (например, отелей, билетов). Определите поля (например, объекты для бронирования, клиенты, доступные даты) и методы (например, бронирование, отмена бронирования, изменение бронирования, оплата).

21. **Класс «OnlineStore»:** создайте класс для управления онлайн-магазином. Определите необходимые поля (например, каталог товаров, список клиентов, заказы, ещё какие-то) и необходимые методы (например, добавление товара в корзину, оформление заказа, обработка оплаты).

22. **Класс «Schedule»:** спроектируйте класс для управления расписанием. Подумайте о полях (например, список событий, даты, что ещё нужно) и необходимые методы (например, добавление события, удаление события, проверка занятости времени, что там ещё).

23. **Класс «TransportationSystem»:** разработайте класс для системы общественного транспорта. Определите поля (например, маршруты, транспортные средства, пассажиры) и методы (например, продажа билетов, управление расписанием, отслеживание транспорта, расчет стоимости поездки).

24. **Класс «Movie»:** реализуйте класс «Movie», который содержит название фильма, режиссера, год выпуска и т.п. Добавьте необходимые методы.

25. **Класс «SocialNetwork»:** разработайте класс для представления социальной сети. Подумайте, какие данные нужно хранить (например, пользователи, сообщения, группы, лента новостей) и какие методы могут понадобиться (например, регистрация пользователя, отправка сообщения, создание группы, добавление друзей).

26. **Класс «DigitalLibrary»:** создайте класс для цифровой библиотеки. Подумайте о полях (например, книги, пользователи, права доступа) и методах (например, поиск книг, выдача электронных книг, управление подписками).

27. **Класс «InvestmentPortfolio»:** создайте класс для управления инвестиционным портфелем. Подумайте о полях (например, активы, транзакции, доходность) и методах (например, покупка и продажа активов, расчет доходности, управление рисками).

28. **Класс «Course»:** разработайте класс для учебного курса. Определите необходимые поля (например, название, преподаватель, список студентов, ещё что-то) и необходимые методы (например, добавление студента, выставление оценки, и т.п.)

29. **Класс «JobPortal»:** спроектируйте класс для платформы по поиску работы. Подумайте о необходимых полях (например, вакансии, резюме, работодатели, соискатели) и методах (например, публикация вакансий, поиск работы, отправка резюме, назначение собеседований).

30. **Класс «TravelAgency»:** создайте класс для работы с туристическим агентством. Определите поля (например, туристические направления, туры, клиенты, бронирования) и методы (например, подбор тура, бронирование билетов, оформление страховки, организация экскурсий).

### Пример
Класс Train. Язык C++.

::: code-group

```cpp [main.cpp]
#include <iostream>
#include <string>

class Train {
private:
    std::string name;
    int number;
    int capacity;

public:
    // Конструктор
    Train(const std::string& name, int number, int capacity) {
        setName(name);
        setNumber(number);
        setCapacity(capacity);
    }

    // Get-методы
    std::string getName() const {
        return name;
    }
    
    int getNumber() const {
        return number;
    }

    int getCapacity() const {
        return capacity;
    }

    // Set-методы с проверкой корректности данных
    void setName(const std::string& name) {
        if (name.empty()) {
            std::cerr << "Error: Name cannot be empty!" << std::endl;
            return;
        }
        this->name = name;
    }

    void setNumber(int number) {
        if (number <= 0) {
            std::cerr << "Error: Number must be positive!" << std::endl;
            return;
        }
        this->number = number;
    }

    void setCapacity(int capacity) {
        if (capacity < 0) {
            std::cerr << "Error: Capacity cannot be negative!" << std::endl;
            return;
        }
        this->capacity = capacity;
    }

    // Метод вывода информации
    void printInfo() const {
        std::cout << "Trin Name: " << name
            << "\n Train Number: " << number
            << "\n Capacity: " << capacity << " passengers\n"
            << std::endl;
    }
}

int main() {
    // Создание объектов
    Train train1("Express", 101, 250);
    Train train2("Local", 102, 150);

    // Проверка методов
    train1.printInfo();
    train2.printInfo();

    train1.setCapacity(300);     // Изменение вместимости
    train1.printInfo();

    train2.setName("");          // Некорректное имя
    train2.setNumber(-5);        // Некорректный номер

    return 0;
}
```

``` :no-line-numbers [Результат выполнения]
Train Name: Express
Train Number: 101
Capacity: 250 passengers

Train Name: Local
Train Number: 102
Capacity: 150 passengers

Train Name: Express
Train Number: 101
Capacity: 300 passengers

Error: Name cannot be empty!
Error: Number must be positive!
```

:::


## Задание 2

То же реализовать на языке Python. Для компиляции и запуска можно использовать, например, сайт https://onecompiler.com/python

### Варианты

См. [варианты задания 1](#1).

### Пример

Класс Train. Язык Python

::: code-group

```py [main.py]
class Train:
    def __init__(self, name, number, capacity):
        self.set_name(name)
        self.set_number(number)
        self.set_capacity(capacity)
    
    # Get-методы
    def get_name(self):
        return self.name
    
    def get_number(self):
        return self.number

    def get_capacity(self):
        return self.capacity
    
    # Set-методы с проверкой корректности данных
    def set_name(self, name):
        if not name:
            print("Error: Name cannot be empty!")
            return
        self._name = name
    
    def set_number(self, number):
        if number <= 0:
            print("Error: Number must be positive!")
            return
        self._number = number
    
    def set_capacity(self, capacity):
        if capacity < 0:
            print("Error: Capacity cannot be negative!")
            return
        self._capacity = capacity
    
    # Метод вывода информации
    def print_info(self):
        print(f"Train Name: {self._name}")
        print(f"Train Number: {self._number}")
        print(f"Capacity: {self._capacity} passengers")

# Создание объектов
train1 = Train("Express", 101, 250)
train2 = Train("Local", 102, 150)

# Проверка методов
train1.print_info()
train2.print_info()

train1.set_capacity(300)        # Изменение вместимости
train1.print_info()

train2.set_name("")             # Некорректное имя
train2.set_number(-5)           # Некорректный номер
```


``` :no-line-numbers [Результат выполнения]
Train Name: Express
Train Number: 101
Capacity: 250 passengers

Train Name: Local
Train Number: 102
Capacity: 150 passengers

Train Name: Express
Train Number: 101
Capacity: 300 passengers

Error: Name cannot be empty!
Error: Number must be positive!
```

:::


## Задание 3

То же реализовать на языке JavaScript. Для компиляции и запуска можно использовать, например, сайт https://onecompiler.com/javascript/

### Варианты

См. [варианты задания 1](#1).

### Пример

Класс Train. Язык JavaScript.


::: code-group

```js [index.js]
class Train {
    // Приватные поля с использованием символа #
    #name;
    #number;
    #capacity;

    // Конструктор
    constructor(name, number, capacity) {
        this.setName(name);
        this.setNumber(number);
        this.setCapacity(capacity);
    }

    // Get-методы
    getName() {
        return this.#name;
    }
    
    getNumber() {
        return this.#number;
    }

    getCapacity() {
        return this.#capacity;
    }

    // Set-методы с проверкой корректности данных
    setName(name) {
        if (!name) {
            console.error("Error: Name cannot be empty!");
            return;
        }
        this.#name = name;
    }

    setNumber(number) {
        if (number <= 0) {
            console.error("Error: Number must be positive!");
            return;
        }
        this.#number = number;
    }

    setCapacity(capacity) {
        if (capacity < 0) {
            console.error("Error: Capacity cannot be negative!");
            return;
        }
        this.#capacity = capacity;
    }

    // Метод вывода информации
    printInfo() {
        console.log(`Train Name: ${this.#name}\n`);
        console.log(`Train Number: ${this.#number}\n`);
        console.log(`Capacity: ${this.#capacity} passengers\n`);
    }
}
```

``` :no-line-numbers [Результат выполнения]
Train Name: Express
Train Number: 101
Capacity: 250 passengers

Train Name: Local
Train Number: 102
Capacity: 150 passengers

Train Name: Express
Train Number: 101
Capacity: 300 passengers

Error: Name cannot be empty!
Error: Number must be positive!
```

:::