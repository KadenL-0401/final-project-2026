let story = document.getElementById("story")
let choices = document.getElementById("choices")

function show(text, options) {
    story.textContent = text
    choices.innerHTML = ""
    options.forEach(o => {
        let b = document.createElement("button")
        b.textContent = o.text
        b.onclick = o.next
        choices.appendChild(b)
    })
}

function start() {
    show("You wake up in a forest.", [
        { text: "Walk forward", next: path1 },
        { text: "Look around", next: path2 }
    ])
}

function path1() {
    show("You find a small cabin.", [
        { text: "Go inside", next: end1 },
        { text: "Walk past it", next: end2 }
    ])
}

function path2() {
    show("You see footprints in the dirt.", [
        { text: "Follow them", next: end3 },
        { text: "Ignore them", next: end4 }
    ])
}

function end1() {
    show("The cabin is safe. You rest.", [])
}

function end2() {
    show("You get lost but find a river.", [])
}

function end3() {
    show("The footprints lead to a friend.", [])
}

function end4() {
    show("You stay where you are until help arrives.", [])
}

start()
