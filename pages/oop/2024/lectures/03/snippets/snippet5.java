public class Car {
    private int speed;

    public void setSpeed(int s) {
        if (s >= 0 && s <= 200) {
            speed = s;
        }
    }

    public int getSpeed() {
        return speed;
    }
}