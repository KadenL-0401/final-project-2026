let story = document.getElementById("story")
let choices = document.getElementById("choices")

function show(text, options, img) {
    story.innerHTML = text + "<br><br><img src='" + img + "' width='300'>"
    choices.innerHTML = ""
    options.forEach(o => {
        let b = document.createElement("button")
        b.textContent = o.text
        b.onclick = o.next
        choices.appendChild(b)
    })
}

function restart() {
    start()
}

function start() {
    show(
        "You wake up in a forest, smoke drifting through the trees. Inhuman screeching echoes in the distance. People are running and shouting.",
        img.src = 'data:image/jpeg;base64,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'
        [
            { text: "Follow the crowd", next: path1 },
            { text: "Run deeper into the forest", next: path2 }
        ],
    )
}

function path1() {
    show(
        "You push into the panicked crowd. Something roars behind you, shaking the ground.",
        [
            { text: "Stay with the group", next: path1A },
            { text: "Break away and hide", next: path1B }
        ],
    )
}

function path1A() {
    show(
        "The group reaches an abandoned bus. The windows are shattered. Something is moving inside.",
        [
            { text: "Enter the bus", next: endBad1 },
            { text: "Keep running past it", next: endGood1 }
        ],
    )
}

function path1B() {
    show(
        "You slip away and crouch behind a fallen tree. The forest is quiet except for distant growling.",
        [
            { text: "Climb the tree to scout", next: endGood2 },
            { text: "Stay hidden and wait", next: endBad2 }
        ],
    )
}

function path2() {
    show(
        "You sprint into the darker part of the forest. The screams fade behind you. A strange clicking sound echoes nearby.",
        [
            { text: "Follow a trail of footprints", next: path2A },
            { text: "Avoid the trail and move quietly", next: path2B }
        ],
    )
}

function path2A() {
    show(
        "The footprints lead to a torn backpack. A low growl vibrates through the air.",
        [
            { text: "Call out", next: endBad1 },
            { text: "Back away slowly", next: endGood1 }
        ],
    )
}

function path2B() {
    show(
        "You move silently through the brush. A faint lantern light flickers ahead.",
        [
            { text: "Approach the light", next: endGood2 },
            { text: "Avoid it and keep moving", next: endBad2 }
        ],
    )
}

function endGood1() {
    show(
        "You escape to a ridge overlooking the forest. A rescue team spots your signal flare and pulls you to safety.",
        [
            { text: "Restart", next: restart }
        ],
    )
}

function endGood2() {
    show(
        "The lantern belongs to a survivor group. They take you in and lead you to a fortified shelter.",
        [
            { text: "Restart", next: restart }
        ],
    )
}

function endBad1() {
    show(
        "A mutated creature lunges from the shadows. You don't have time to react.",
        [
            { text: "Restart", next: restart }
        ],
    )
}

function endBad2() {
    show(
        "You stay still, hoping the danger passes. It doesn't. Something finds you in the dark.",
        [
            { text: "Restart", next: restart }
        ],
    )
}

start()
