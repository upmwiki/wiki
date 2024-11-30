class Building {
    private double width;
    private double length;
    private double height;
    public Building() {
        width = 10;
        length = 10;
        height = 2;
    }
    private double GetVolume() {
        return width * length * height;
    }
    public double Height {
        get => height;
        set => height = value > 0 ? value : throw new Exception("Высота здания не может быть < 0");
    }
    public double Width {
        get => width;
        set => width = value > 0 ? value : throw new Exception("Ширина здания не может быть < 0");
    }
    public double Length {
        get => length;
        set => length = value > 0 ? value : throw new Exception("Длина здания не может быть < 0");
    }
    public double Volume => GetVolume();
}