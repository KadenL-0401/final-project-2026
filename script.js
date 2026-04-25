let story = document.getElementById("story");
let choices = document.getElementById("choices");
let image = document.getElementById("image");
let music = document.getElementById("bg-music");

let soundOn = false;

function toggleMusic() {
    if (soundOn) {
        music.pause();
    } else {
        music.play();
    }
    soundOn = !soundOn;
}

function show(text, options) {
    story.innerHTML = `<p>${text}</p>`;
    choices.innerHTML = "";
    image.src = ""; // no images

    options.forEach(o => {
        let b = document.createElement("button");
        b.textContent = o.text;
        b.onclick = o.next;
        choices.appendChild(b);
    });
}

function restart() {
    start();
}

function start() {
    show(
`Cold air fills your lungs as you jolt awake on damp forest ground. The scent of ash and burning wood clings to everything. A distant orange glow flickers between the trees, and thick smoke drifts lazily through the branches above.

Then you hear it.

A long, unnatural screech—too deep, too distorted to belong to anything human.

People rush past you in blind panic, crashing through brush, shouting warnings you can't fully understand. Something massive moves somewhere behind them... something fast.

Your heart pounds. Whatever is coming, it's close.`,
        [
            { text: "Follow the crowd", next: path1 },
            { text: "Run deeper into the forest", next: path2 }
        ]
    );
}

function path1() {
    show(
`You force yourself into the surge of terrified people. Bodies slam into you from every direction. Someone falls. No one stops.

Behind you, the forest erupts with a thunderous crash—trees shaking, branches snapping like twigs. A roar follows, low and guttural, vibrating through your chest.

You risk a glance back.

You shouldn't have.

Something enormous shifts between the trees, its silhouette wrong in ways your brain refuses to process.

The crowd begins to split apart in chaos.`,
        [
            { text: "Stay with the group", next: path1A },
            { text: "Break away and hide", next: path1B }
        ]
    );
}

function path1A() {
    show(
`The group stumbles into a clearing where an old, abandoned bus sits crooked in the mud. Its windows are shattered, its metal sides clawed and dented.

People hesitate.

Inside the bus, something shifts.

A faint scratching. Then silence.

The doors creak slightly open, as if inviting you in.`,
        [
            { text: "Enter the bus", next: endBad1 },
            { text: "Keep running past it", next: endGood1 }
        ]
    );
}

function path1B() {
    show(
`You veer away from the chaos and dive behind a fallen tree, pressing yourself into the dirt.

The sounds of panic fade.

For a moment, everything is still.

Then... slow footsteps. Heavy. Deliberate.

Something is searching.

Your breathing feels deafening.`,
        [
            { text: "Climb the tree to scout", next: endGood2 },
            { text: "Stay hidden and wait", next: endBad2 }
        ]
    );
}

function path2() {
    show(
`You sprint into the darker forest, away from the noise. The trees grow denser, their branches choking out what little light remains.

The screams fade behind you.

Now there's only silence.

...and a clicking sound.

Sharp. Irregular. Getting closer.`,
        [
            { text: "Follow footprints", next: path2A },
            { text: "Move quietly and avoid everything", next: path2B }
        ]
    );
}

function path2A() {
    show(
`You notice footprints pressed deep into the mud—human, but erratic. They lead toward a torn backpack lying in the dirt.

The zipper twitches slightly.

A low growl vibrates through the ground beneath your feet.`,
        [
            { text: "Call out", next: endBad1 },
            { text: "Back away slowly", next: endGood1 }
        ]
    );
}

function path2B() {
    show(
`You move slowly, placing each step with care.

Ahead, a faint lantern flickers between the trees.

Warm light.

Safety... maybe.

Or a trap.`,
        [
            { text: "Approach the light", next: endGood2 },
            { text: "Avoid it and keep moving", next: endBad2 }
        ]
    );
}

function endGood1() {
    show(
`You push past exhaustion and keep moving.

Eventually, the trees thin.

You emerge onto a ridge overlooking the burning forest below. A rescue helicopter cuts through the smoke-filled sky.

You fire a flare.

Moments later, you're pulled to safety.

You made it... but whatever was in that forest is still out there.`,
        [{ text: "Restart", next: restart }]
    );
}

function endGood2() {
    show(
`You approach carefully.

Figures step out of the shadows—armed, cautious, human.

They lower their weapons when they see you.

You're led to a hidden camp, fortified and alive with survivors.

For now... you're safe.

But they warn you: the forest is changing.`,
        [{ text: "Restart", next: restart }]
    );
}

function endBad1() {
    show(
`The sound comes from behind you.

Too late.

A massive shape lunges from the darkness—teeth, claws, and something far worse.

You don't even have time to scream.`,
        [{ text: "Restart", next: restart }]
    );
}

function endBad2() {
    show(
`You stay perfectly still.

Seconds pass.

Then minutes.

Then—

A breath on your neck.

It found you.`,
        [{ text: "Restart", next: restart }]
    );
}

start();
