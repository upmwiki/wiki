class Car:
    def __init__(self):
        self._speed = 0     # protected
        
    def set_speed(self, s):
        if 0 <= s <= 200:
            self._speed = s
    
    def get_speed(self):
        return self._speed