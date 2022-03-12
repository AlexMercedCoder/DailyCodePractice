const log = (title, ...message) => {
    console.log(`*********${title}**********`)
    console.log(...message)
    console.log("***********************")
}

// Selected an element and changed the color
const plain = document.querySelector("#plain")
// plain.style.color = "pink"
// plain.classList.add("green")

const $jquery = $("#jquery")
// $jquery.css("color", "pink")
// $jquery.addClass("green")

// add a button with some text

const button = document.createElement("button")
button.innerText = "Cheese"
plain.append(button)

const $button = $("<button>")
$button.text("Cheese")
$jquery.append($button)


// adding events
button.addEventListener("click", () => {
    button.style.backgroundColor = "brown"
})

$button.on("click", () => {
    $button.css("background-color", "red")
})