# Базовый класс Train
class Train:
 def __init__(self, speed=0, capacity=0):
    self._speed = speed
    self._capacity = capacity
    def set_speed(self, speed):
        if speed >= 0:
            self._speed = speed
    def get_speed(self):
        return self._speed
    def set_capacity(self, capacity):
        if capacity >= 0:
            self._capacity = capacity
    def get_capacity(self):
        return self._capacity
    def print_info(self):
        print(f"Train with speed: {self._speed} km/h and capacity: {self._capacity} units.")

# Класс для перевозки грузов
class FreightCarrier:
    def load_cargo(self, cargo_weight):
        raise NotImplementedError("This method should be overridden")

# Класс для перевозки пассажиров
class PassengerCarrier:
    def board_passengers(self, passengers):
        raise NotImplementedError("This method should be overridden")

# Класс грузового поезда
class FreightTrain(Train, FreightCarrier):
    def load_cargo(self, cargo_weight):
        print(f"Loaded {cargo_weight} tons of cargo.")
    def print_info(self):
        print(f"Freight Train with speed: {self._speed} km/h and capacity: {self._capacity} tons.")

# Класс пассажирского поезда
class PassengerTrain(Train, PassengerCarrier):
    def board_passengers(self, passengers):
        print(f"Boarded {passengers} passengers.")
    def print_info(self):
        print(f"Passenger Train with speed: {self._speed} km/h and capacity: {self._capacity} passengers.")

# Класс смешанного поезда
class MixedTrain(FreightTrain, PassengerTrain):
    def print_info(self):
        print(f"Mixed Train with speed: {self._speed} km/h, capacity for {self._capacity} tons of cargo and passengers.")

# Тестирование программы
mixed_train = MixedTrain()
mixed_train.set_speed(80)
mixed_train.set_capacity(300)
mixed_train.print_info()
mixed_train.load_cargo(100)
mixed_train.board_passengers(150)