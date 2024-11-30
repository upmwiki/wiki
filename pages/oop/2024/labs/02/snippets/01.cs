using System;

abstract class Shape {
    public abstract double GetArea();
    public abstract void PrintInfo();
}

class Rectangle : Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        SetWidth(width);
        SetHeight(height);
    }

    public double GetWidth() { return width; }
    public double GetHeight() { return height; }

    public void SetWidth(double width) {
        if (width > 0)
            this.width = width;
        else
            Console.WriteLine("Invalid width!");
    }
    
    public void SetHeight(double height) {
        if (height > 0)
            this.height = height;
        else
            Console.WriteLine("Invalid height!");
    }

    public override double GetArea() {
        return width * height;
    }

    public override void PrintInfo() {
        Console.WriteLine($"Rectangle: Width = {width}, Height = {height}, Area = {GetArea()}");
    }
}

class Circle : Shape {
    private double radius;
    public Circle(double radius) {
        SetRadius(radius);
    }
    public double GetRadius() { return radius; }
    public void SetRadius(double radius) {
        if (radius > 0)
            this.radius = radius;
        else
            Console.WriteLine("Invalid radius!");
    }
    public override double GetArea() {
        return Math.PI * radius * radius;
    }
    public override void PrintInfo() {
        Console.WriteLine($"Circle: Radius = {radius}, Area = {GetArea()}");
    }
}

class Triangle : Shape {
    private double @base, height;
    public Triangle(double @base, double height) {
        SetBase(@base);
        SetHeight(height);
    }
    public double GetBase() { return @base; }
    public double GetHeight() { return height; }
    public void SetBase(double @base) {
        if (@base > 0)
            this.@base = @base;
        else
            Console.WriteLine("Invalid base!");
    }
    public void SetHeight(double height) {
        if (height > 0)
            this.height = height;
        else
            Console.WriteLine("Invalid height!");
    }
    public override double GetArea() {
        return 0.5 * @base * height;
    }
    public override void PrintInfo() {
        Console.WriteLine($"Triangle: Base = {@base}, Height = {height}, Area = {GetArea()}");
    }
}

class Program {
    static void Main(string[] args) {
        Rectangle rect = new Rectangle(5, 10);
        rect.PrintInfo();
        Circle circ = new Circle(7);
        circ.PrintInfo();
        Triangle tri = new Triangle(6, 8);
        11
        tri.PrintInfo();
    }
}