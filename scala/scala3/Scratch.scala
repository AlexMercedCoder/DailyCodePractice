@main def MyApp() = {
    val hello = 1 match
    case 1 => 2
    case 2 => 3
    case 3 => 4
    case _ => 5
    println(hello)

}