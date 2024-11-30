#include <iostream>
#include <cmath>
using namespace std;

// базовый класс Shape
class Shape {
public:
    // виртуальный метод для расчёта площади
    virtual double getArea() const = 0;
    // виртуальный метод для вывода информации об объекте
};

// класс Rectangle
class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double getWidth() const { return width; }
    double getHeight() const { return height; }
    
    void setWidth(double w) {
        if (w > 0) width = w;
        else cout << "Invalid width!\n";
    }

    void setHeight(double h) {
        if (h > 0) height = h;
        else cout << "Invalid height!\n";
    }

    double getArea() const override {
        return width * height;
    }

    void printInfo() const override {
        cout << "Rectangle: Width = " << width << ", Height = " << height << ", Area = " << getArea() << endl;
    }
};

// класс Circle
class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}

    double getRadius() const { return radius; }

    void setRadius (double r) {
        if (r > 0) radius = r;
        else cout << "Invalid radius!\n";
    }

    double getArea() const override {
        return M_PI * radius * radius;
    }

    void printInfo() const override {
        cout << "Circle: Radius = " << radius << ", Area = " << getArea() << endl;
    }
};

// класс Triangle
class Triangle : public Shape {
private:
    double base, height;
public:
    Triangle(double b, double h) : base(b), height(h) {}

    double getBase() const { return base; }
    double getHeight() const { return height; }

    void setBase(double b) {
        if (b > 0) base = b;
        else cout << "Invalid base!\n";
    }

    void setHeight(double h) {
        if (h > 0) height = h;
        else cout << "Invalid height!\n";
    }

    double getArea() const override {
        return 0.5 * base * height;
    }

    void printInfo() const override {
        cout << "Triangle: Base = " << base << ", Height = " << height << ", Area = " << getArea() << endl;
    }
};

// основная программа
int main() {
    Rectangle rect(5, 10);
    rect.printInfo();
    
    Circle circ(7);
    circ.printInfo();
    
    Triangle tri(6, 8);
    tri.printInfo();

    return 0;
}