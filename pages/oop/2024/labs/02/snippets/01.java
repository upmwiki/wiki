abstract class Shape {
    public abstract double getArea();
    public abstract void printInfo();
}

class Rectangle extends Shape {
    private double width, height;
    public Rectangle(double width, double height) {
        setWidth(width);
        setHeight(height);
    }
    public double getWidth() { return width; }
    public double getHeight() { return height; }
    public void setWidth(double width) {
        if (width > 0) this.width = width;
        else System.out.println("Invalid width!");
    }
    public void setHeight(double height) {
        if (height > 0) this.height = height;
        else System.out.println("Invalid height!");
    }
    @Override
    public double getArea() {
        return width * height;
    }
    @Override
    public void printInfo() {
        System.out.println("Rectangle: Width = " + width + ", Height = " + height + ", Area = " + getArea());
    }
}

class Circle extends Shape {
    private double radius;
    public Circle(double radius) {
        setRadius(radius);
    }
    public double getRadius() { return radius; }
    public void setRadius(double radius) {
        if (radius > 0) this.radius = radius;
        else System.out.println("Invalid radius!");
    }
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    @Override
    public void printInfo() {
        System.out.println("Circle: Radius = " + radius + ", Area = " + getArea());
    }
}

class Triangle extends Shape {
    private double base, height;
    public Triangle(double base, double height) {
        setBase(base);
        setHeight(height);
    }
    public double getBase() { return base; }
    public double getHeight() { return height; }
    public void setBase(double base) {
        if (base > 0) this.base = base;
        else System.out.println("Invalid base!");
    }
    public void setHeight(double height) {
        if (height > 0) this.height = height;
        else System.out.println("Invalid height!");
    }
    @Override
    public double getArea() {
        return 0.5 * base * height;
    }
    @Override
    public void printInfo() {
        System.out.println("Triangle: Base = " + base + ", Height = " + height + ", Area = " + getArea());
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5, 10);
        rect.printInfo();
        Circle circ = new Circle(7);
        circ.printInfo();
        Triangle tri = new Triangle(6, 8);
        tri.printInfo();
    }
}