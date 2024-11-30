class Car {
    // Поля, инкапсулированные с помощью private
    private string model
    private int speed;
    
    // Свойства для управления доступом к полям
    public string Model {
        get { return model; }
        set { model = value; }
    }
    public int Speed {
        get { return speed; }
        set {
            if (value >= 0)     // Проверка корректности значения
                speed = value;
        }
    }

    // Конструктор
    public Car(string model, int speed) {
        this.Model = model;
        this.Speed = speed;
    }

    // Метод для вывода информации об автомобиле
    public void ShowInfo() {
        Console.WriteLine($"Model: {model}, Speed: {speed}");
    }
}

class Building {
    double height;

    public double Height {
        get { return height; }
        set {
            if (value < 0)
                throw new Exception("Высота здания не может быть <0");
            else
                height = value;
        }
    }
}