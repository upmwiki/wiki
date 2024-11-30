#include <iostream>
using namespace std;

class Device {
public:
    void turn_on() {
        cout << "Device is on." << endl;
    }
}

class Computer : public Device {};
class Monitor : public Device {};
class Laptop : public Computer, public Monitor {
/*
public:
    void turn_on() {
        cout << "Laptop is on." << endl;
    }
    // uncommenting this function will resolve diamond problem
*/
};

int main() {
    Laptop Laptop_instance;

    // Laptop_instance.turn_on();
    // will produce compile time error
    // if Laptop.turn_on function is commented out

    // calling method of specific superclass
    Laptop_instance.Monitor::turn_on();

    // treating Laptop instance as Monitor instance via static cast
    static_cast<Monitor&>(Laptop_instance).turn_on();
    return 0;
}