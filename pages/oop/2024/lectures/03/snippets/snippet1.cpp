#include <iostream>
#include <cmath>

// абстрактный класс Shape
class Shape {
public:
    // чисто виртуальный метод для вычисления площади
    virtual double area() const = 0;
    // чисто виртуальный метод для вычисления периметра
    virtual double perimeter() const = 0;
    // виртуальный деструктор для правильного удаления объектов производных классов
    virtual ~Shape() {}
}

// класс Circle, наследующий от Shape
class Circle : public Shape {
private:
    double radius;
public:
    Circle (double r) : radius (r) {}

    // реализация метода для вычисления площади круга
    double area() const override {
        return M_PI * radius * radius;
    }

    // реализация метода для вычисления периметра (длины окружности)
    double perimeter() const override {
        return 2 * M_PI * radius;
    }
}

// класс Rectangle, наследующий от Shape
class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    // реализация метода для вычисления площади прямоугольника
    double area() const override {
        return width * height;
    }

    // реализация метода для вычисления периметра прямоугольника
    double perimeter() const override {
        return 2 * (width + height);
    }
}

int main() {
    Shape* shape1 = new Circle(5.0);    // создаём круг с радиусом 5.0
    Shape* shape2 = new Rectangle(4.0, 6.0);    // создаём прямоугольник

    // используем абстракцию: вызываем методы для объектов через базовый класс
    std::cout << "Circle Area: " << shape1->area() << "\n";
    std::cout << "Circle Perimeter: " << shape1->perimeter() << "\n";

    std::cout << "Rectangle Area: " << shape2->area() << "\n";
    std::cout << "Rectangle Perimeter: " << shape2->perimeter() << "\n";

    // удаляем объекты
    delete shape1;
    delete shape2;

    return 0;
}