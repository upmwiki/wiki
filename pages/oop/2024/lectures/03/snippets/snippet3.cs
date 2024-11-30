class Building {
    double height;
    public string Name { get; set; } = "Неизвестное здание";
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