#include <iostream>
using namespace std;

class Engine {
public:
    void startEngine() {
        cout << "Engine started" << endl;
    }
}

class Wheels {
public:
    void moveWheels() {
        cout << "Wheels moving" << endl;
    }
}

class Car : public Engine, public Wheels {
public:
    void drive() {
        startEngine();
        moveWheels();
        cout << "Car is moving" << endl;
    }
}

int main() {
    Car myCar;
    myCar.drive();      // использование методов обоих базовых классов
    return 0;
}