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
    show("You wake up in a forest, vision blurry, smoke all around you. People are running and screaming.", [
        { text: "Follow the crowd", next: path1 },
        { text: "Run into the forest", next: path2 }
    ])
}

function path1() {
    show("You push into the crowd. Everyone is panicked and moving fast.", [
        { text: "Stay with them", next: endA },
        { text: "Break away", next: endB }
    ])
}

function path2() {
    show("You sprint into the trees. The noise fades behind you.", [
        { text: "Follow a trail of footprints", next: endC },
        { text: "Hide behind a fallen log", next: endA }
    ])
}

function endA() {
    show("You find shelter and wait until the danger passes.", [])
}

function endB() {
    show("You get separated and wander until rescuers find you.", [])
}

function endC() {
    show("The footprints lead you to someone who helps you escape.", [])
}

function endD() {
    show("You stay hidden until morning and walk to safety.", [])
}

start()
