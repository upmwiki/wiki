class Product {
    private double price;
    public Product(double price) {
        setPrice(price);
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        } else {
            throw new IllegalArgumentException("Price must be positive.");
        }
    }
    public void displayInfo() {
        System.out.println("Price: $" + price);
    }
}

class ElectronicProduct extends Product {
    private int warrantyInMonths;
    public ElectronicProduct(double price, int warrantyInMonths) {
        super(price);
        setWarrantyInMonths(warrantyInMonths);
    }
    public int getWarrantyInMonths() {
        return warrantyInMonths;
    }
    public void setWarrantyInMonths(int warrantyInMonths) {
        if (warrantyInMonths > 0) {
            this.warrantyInMonths = warrantyInMonths;
        } else {
            throw new IllegalArgumentException("Warranty must be positive.");
        }
    }
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Warranty: " + warrantyInMonths + " months");
    }
}

class Smartphone extends ElectronicProduct {
    private String cameraDetails;
    public Smartphone(double price, int warrantyInMonths, String cameraDetails) {
        super(price, warrantyInMonths);
        setCameraDetails(cameraDetails);
    }
    public String getCameraDetails() {
        return cameraDetails;
    }
    public void setCameraDetails(String cameraDetails) {
        if (cameraDetails != null && !cameraDetails.isEmpty()) {
            this.cameraDetails = cameraDetails;
        } else {
            throw new IllegalArgumentException("Camera details cannot be empty.");
        }
    }
    @Override
    public void displayInfo() {
    super.displayInfo();
        System.out.println("Camera: " + cameraDetails);
    }
}

public class Main {
    public static void main(String[] args) {
        Smartphone smartphone = new Smartphone(799.99, 24, "12 MP Triple Lens");
        smartphone.displayInfo();
    }
}