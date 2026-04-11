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

function restart() {
    start()
}

function start() {
    show("You wake up in a forest, smoke drifting through the trees. Inhuman screeching echoes in the distance. People are running and shouting.", [
        { text: "Follow the crowd", next: path1 },
        { text: "Run deeper into the forest", next: path2 }
    ])
}

function path1() {
    show("You push into the panicked crowd. Something roars behind you, shaking the ground.", [
        { text: "Stay with the group", next: path1A },
        { text: "Break away and hide", next: path1B }
    ])
}

function path1A() {
    show("The group reaches an abandoned bus. The windows are shattered. Something is moving inside.", [
        { text: "Enter the bus", next: endBad1 },
        { text: "Keep running past it", next: endGood1 }
    ])
}

function path1B() {
    show("You slip away and crouch behind a fallen tree. The forest is quiet except for distant growling.", [
        { text: "Climb the tree to scout", next: endGood2 },
        { text: "Stay hidden and wait", next: endBad2 }
    ])
}

function path2() {
    show("You sprint into the darker part of the forest. The screams fade behind you. A strange clicking sound echoes nearby.", [
        { text: "Follow a trail of footprints", next: path2A },
        { text: "Avoid the trail and move quietly", next: path2B }
    ])
}

function path2A() {
    show("The footprints lead to a torn backpack. A low growl vibrates through the air.", [
        { text: "Call out", next: endBad1 },
        { text: "Back away slowly", next: endGood1 }
    ])
}

function path2B() {
    show("You move silently through the brush. A faint lantern light flickers ahead.", [
        { text: "Approach the light", next: endGood2 },
        { text: "Avoid it and keep moving", next: endBad2 }
    ])
}

function endGood1() {
    show("You escape to a ridge overlooking the forest. A rescue team spots your signal flare and pulls you to safety.", [
        { text: "Restart", next: restart }
    ])
}

function endGood2() {
    show("The lantern belongs to a survivor group. They take you in and lead you to a fortified shelter.", [
        { text: "Restart", next: restart }
    ])
}

function endBad1() {
    show("A mutated creature lunges from the shadows. You don't have time to react.", [
        { text: "Restart", next: restart }
    ])
}

function endBad2() {
    show("You stay still, hoping the danger passes. It doesn't. Something finds you in the dark.", [
        { text: "Restart", next: restart }
    ])
}

start()
