class Car {
    #speed = 0;     // private field

    setSpeed(s) {
        if (s >= 0 && s <= 200) {
            this.#speed = s;
        }
    }
    
    getSpeed() {
        return this.#speed;
    }
}