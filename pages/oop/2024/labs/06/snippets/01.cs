using System;

// Интерфейс стратегии
interface IPricingStrategy {
    double CalculatePrice(double basePrice, int days);
}

// Реализация стратегии фиксированной стоимости
class FixedPricing : IPricingStrategy {
    public double CalculatePrice(double basePrice, int days) {
        return basePrice * days;
    }
}

// Реализация стратегии со скидкой
class DiscountedPricing : IPricingStrategy {
    public double CalculatePrice(double basePrice, int days) {
        if (days > 7) {
            return basePrice * days * 0.9; // 10% скидка
        }
        return basePrice * days;
    }
}

// Класс для управления стратегиями
class RentalCalculator {
    private IPricingStrategy _strategy;
    public void SetStrategy(IPricingStrategy strategy) {
        _strategy = strategy;
    }
    public double Calculate(double basePrice, int days) {
        return _strategy.CalculatePrice(basePrice, days);
    }
}

class Program {
    static void Main() {
        var calculator = new RentalCalculator();
        double basePrice = 50.0;
        int days = 10;
        
        // Стратегия фиксированной цены
        calculator.SetStrategy(new FixedPricing());
        Console.WriteLine($"Fixed Pricing: {calculator.Calculate(basePrice, days)}");

        // Стратегия со скидкой
        calculator.SetStrategy(new DiscountedPricing());
        Console.WriteLine($"Discounted Pricing: {calculator.Calculate(basePrice, days)}");
    }
}
