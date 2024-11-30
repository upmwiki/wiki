#include <iostream>

// Базовый класс Train
class Train {
protected:
    int speed;
    int capacity;
public:
    Train(int spd, int cap) : speed(spd), capacity(cap) {}
    virtual void setSpeed(int spd) {
        speed = spd;
    }
    virtual int getSpeed() const {
        return speed;
    }
    virtual void setCapacity(int cap) {
        capacity = cap;
    }
    virtual int getCapacity() const {
        return capacity;
    }
    virtual ~Train() = default;
};

// Интерфейс для грузоперевозок
class FreightCarrier {
public:
    virtual void loadCargo(int cargo) = 0;
    virtual ~FreightCarrier() = default;
};

// Интерфейс для перевозки пассажиров
class PassengerCarrier {
public:
    virtual void boardPassengers(int passengers) = 0;
    virtual ~PassengerCarrier() = default;
};

// Класс FreightTrain, наследует от Train и реализует FreightCarrier
class FreightTrain : virtual public Train, public FreightCarrier {
public:
    FreightTrain(int spd, int cap) : Train(spd, cap) {}
    void loadCargo(int cargo) override {
        std::cout << "Loading " << cargo << " tons of cargo." << std::endl;
    }
    void printInfo() const {
        std::cout << "Freight Train with speed: " << speed << " km/h, capacity for " << capacity << " tons of cargo." << std::endl;
    }
};

// Класс PassengerTrain, наследует от Train и реализует PassengerCarrier
class PassengerTrain : virtual public Train, public PassengerCarrier {
public:
    PassengerTrain(int spd, int cap) : Train(spd, cap) {}
    void boardPassengers(int passengers) override {
        std::cout << "Boarding " << passengers << " passengers." << std::endl;
    }
    void printInfo() const {
        std::cout << "Passenger Train with speed: " << speed << " km/h, capacity for " << capacity << " passengers." << std::endl;
    }
};

// Класс MixedTrain, наследует как от FreightTrain, так и от PassengerTrain
class MixedTrain : public FreightTrain, public PassengerTrain {
public:
    MixedTrain(int spd, int cap) : Train(spd, cap), FreightTrain(spd, cap), 
    PassengerTrain(spd, cap) {}
    void printInfo() const {
        std::cout << "Mixed Train with speed: " << getSpeed() << " km/h, capacity for " << getCapacity() << " passengers and cargo." << std::endl;
    }
};

// Основная функция
int main() {
    MixedTrain mt(120, 300);
    mt.printInfo();
    mt.loadCargo(50);
    mt.boardPassengers(200);
    return 0;
}
