#include <iostream>
using namespace std;

class Device {
public:
    Device() {
        cout << "Device constructor called" << endl;
    }
};

class Computer : public Device {
public:
    Computer() {
        cout << "Computer constructor called" << endl;
    }
};

class Monitor : public Device {
public:
    Monitor() {
        cout << "Monitor constructor called" << endl;
    }
}

class Laptop : public Computer, public Monitor {};

int main() {
    Laptop Laptop_instance;
    return 0;
}