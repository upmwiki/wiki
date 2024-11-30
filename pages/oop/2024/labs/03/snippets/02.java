// Класс Автомобиль 
abstract class Vehicle { 
    private String licensePlate; 
    public Vehicle(String licensePlate) { this.licensePlate = licensePlate; } 
    public String getLicensePlate() { return licensePlate; } 
    public abstract void displayInfo(); 
} 

// Класс Грузовик 
class Truck extends Vehicle { 
    public Truck(String licensePlate) { super(licensePlate); } 
    public void displayInfo() { System.out.println("Truck: " + getLicensePlate()); } 
} 

// Класс Фургон 
class Van extends Vehicle { 
    public Van(String licensePlate) { super(licensePlate); } 
    public void displayInfo() { System.out.println("Van: " + getLicensePlate()); } 
} 

// Класс Водитель
class Driver { 
    private String name; 
    public Driver(String name) { this.name = name; } 
    public String getName() { return name; } 
    public void displayInfo() { System.out.println("Driver: " + name); } 
} 

// Класс Заказ 
class Order { 
    private String orderId; 
    private Driver driver; 
    private Vehicle vehicle; 
    public Order(String orderId, Driver driver, Vehicle vehicle) { 
        this.orderId = orderId; 
        this.driver = driver; this.vehicle = vehicle; 
    } 
    public void displayOrderInfo() { 
        System.out.println("Order ID: " + orderId); 
        driver.displayInfo(); 
        vehicle.displayInfo(); 
    } 
} 

// Основная программа 
public class Main { 
    public static void main(String[] args) { 
        Driver driver = new Driver("John Doe"); 
        Vehicle vehicle = new Truck("ABC-123"); 
        Order order = new Order("ORD-001", driver, vehicle); 
        // Выводим на экран содержание заказа 
        order.displayOrderInfo(); 
    } 
}