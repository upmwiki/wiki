import java.util.ArrayList;
import java.util.List;

// Класс Train (Поезд)
class Train {
    private String trainNumber;
    private int numberOfWagons;
    public Train(String trainNumber, int numberOfWagons) {
        this.trainNumber = trainNumber;
        this.numberOfWagons = numberOfWagons;
    }
    public String getTrainNumber() {
        return trainNumber;
    }
    public int getNumberOfWagons() {
        return numberOfWagons;
    }
    public void setNumberOfWagons(int numberOfWagons) {
        if (numberOfWagons > 0) {
            this.numberOfWagons = numberOfWagons;
        } else {
            System.out.println("Количество вагонов должно быть положительным!");
        }
    }
    public void printTrainInfo() {
        System.out.println("Поезд номер: " + trainNumber + ", Количество вагонов: " + numberOfWagons);
    }
}

// Класс RailwayStation (Железнодорожная станция)
class RailwayStation {
    private String stationName;
    private List<Train> trains;
    public RailwayStation(String stationName) {
        this.stationName = stationName;
        this.trains = new ArrayList<>();
    }
    public void addTrain(Train train) {
        trains.add(train);
        System.out.println("Поезд добавлен на станцию: " + stationName);
    }
    public void removeTrain(String trainNumber) {
        trains.removeIf(train -> train.getTrainNumber().equals(trainNumber));
        System.out.println("Поезд удален со станции: " + stationName);
    }
    public void printStationInfo() {
        System.out.println("Станция: " + stationName);
        for (Train train : trains) {
            train.printTrainInfo();
        }
    }
}

// Класс RailwaySystem (Железнодорожная система)
class RailwaySystem {
    private List<RailwayStation> stations;
    public RailwaySystem() {
        this.stations = new ArrayList<>();
    }
    public void addStation(RailwayStation station) {
        stations.add(station);
        System.out.println("Станция добавлена в систему.");
    }
    public void printRailwaySystemInfo() {
        for (RailwayStation station : stations) {
            station.printStationInfo();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Создаем поезда
        Train train1 = new Train("T100", 10);
        Train train2 = new Train("T200", 12);
        // Создаем станцию
        RailwayStation station1 = new RailwayStation("Центральная");
        // Добавляем поезда на станцию
        station1.addTrain(train1);
        station1.addTrain(train2);
        // Создаем железнодорожную систему
        RailwaySystem railwaySystem = new RailwaySystem();
        railwaySystem.addStation(station1);
        // Выводим информацию о системе
        railwaySystem.printRailwaySystemInfo();
    }
}