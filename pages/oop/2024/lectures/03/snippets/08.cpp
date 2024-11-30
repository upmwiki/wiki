#include <iostream>
using namespace std;

class Vehicle {
public:
  void start() {
    cout << "Vehicle started" << endl;
  }
}

class Car : public Vehicle {
public:
  void honk() {
    cout << "Car is honking" << endl;
  }
}

int main() {
  Car myCar;
  myCar.start();    // наследованный метод
  myCar.honk();     // метод класса Car
  return 0;
}