using System;

class Product {
    private double price;
    public Product(double price) {
        Price = price;
    }
    public double Price {
    get { return price; }
    set {
        if (value > 0)
            price = value;
        else
            throw new ArgumentException("Price must be positive.");
        }
    }
    public virtual void DisplayInfo() {
        Console.WriteLine($"Price: ${price}");
    }
}

class ElectronicProduct : Product {
    private int warrantyInMonths;
    public ElectronicProduct(double price, int warrantyInMonths) : base(price) {
        WarrantyInMonths = warrantyInMonths;
    }
    public int WarrantyInMonths {
    get { return warrantyInMonths; }
    set {
        if (value > 0)
            warrantyInMonths = value;
        else
            throw new ArgumentException("Warranty must be positive.");
    }
    }
    public override void DisplayInfo() {
    base.DisplayInfo();
        Console.WriteLine($"Warranty: {warrantyInMonths} months");
    }
}

class Smartphone : ElectronicProduct {
    private string cameraDetails;
    public Smartphone(double price, int warrantyInMonths, string cameraDetails) : base(price, warrantyInMonths) {
        CameraDetails = cameraDetails;
    }
    public string CameraDetails
    {
        get { return cameraDetails; }
        set {
            if (!string.IsNullOrEmpty(value))
                cameraDetails = value;
            else
                throw new ArgumentException("Camera details cannot be empty.");
        }
    }
    public override void DisplayInfo() {
    base.DisplayInfo();
        Console.WriteLine($"Camera: {cameraDetails}");
    }
}

class Program {
    static void Main(string[] args) {
        Smartphone smartphone = new Smartphone(799.99, 24, "12 MP Triple Lens");
        smartphone.DisplayInfo();
    }
}
