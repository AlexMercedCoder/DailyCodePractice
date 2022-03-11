import scala.compiletime.ops.string

@main def hello: Unit = 
  val buddies = List("Joe", "Ira", "Arthur", "Alex")

  val children: List[String] = for b <- buddies yield b + " jr."

  for c <- children do println(c)
