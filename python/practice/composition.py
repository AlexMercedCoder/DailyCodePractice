class Fire:

    def __init__(self):
        self.fire = "fire"

    def get_fire(self):
        return self.fire

class Wind:

    def __init__(self):
        self.wind = "wind"
    def get_wind(self):
        return self.wind

class Wizard(Fire, Wind):
    
    def __init__(self):
        Fire.__init__(self)
        Wind.__init__(self)
    

merlin = Wizard()
print(merlin)
print(merlin.get_wind())
print(merlin.get_fire())