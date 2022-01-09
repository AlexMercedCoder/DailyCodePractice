trait FirePowers:
    def sayName: Unit
    def Fire: Unit = println("Fire")

trait WindPowers:
    def sayName: Unit
    def Wind: Unit = println("Wind")

trait WaterPowers(val name: String):
    def sayName: Unit = println(name)
    def Water: Unit = println("Water")

case class Wizard (name: String) extends FirePowers, WindPowers:
    override def sayName = println(this.name)

@main def MyApp() = {
    val merlin = Wizard("Merlin")
    merlin.Fire
    merlin.Wind
}