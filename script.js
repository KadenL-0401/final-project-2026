let story = document.getElementById("story");
let choices = document.getElementById("choices");
let visual = document.getElementById("visual");
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

function show(text, options, art) {
    story.innerHTML = `<p>${text}</p>`;
    choices.innerHTML = "";
    visual.textContent = art;

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
`You wake up on cold, damp ground in a dense forest. The air smells like smoke.

People are running past you. Something is behind them.

It’s getting closer.`,
[
    { text: "Follow the crowd", next: path1 },
    { text: "Head deeper into the forest", next: path2 }
],
`🌲🌲🌲
( -_- )
🌲🔥🌲`
    );
}

function path1() {
    show(
`You move with the crowd. No one is explaining anything.

Something heavy crashes through the trees behind you.

The group starts to split.`,
[
    { text: "Stay with the group", next: path1A },
    { text: "Hide", next: path1B }
],
`🏃🏃🏃
(>_<)
🌲🌲`
    );
}

function path1A() {
    show(
`You reach an abandoned bus. It’s damaged.

There’s a noise inside.`,
[
    { text: "Enter the bus", next: endBad1 },
    { text: "Keep moving", next: endGood1 }
],
`🚌
[     ]
( ._. )`
    );
}

function path1B() {
    show(
`You hide behind a fallen tree.

Something is moving nearby.`,
[
    { text: "Climb the tree", next: endGood2 },
    { text: "Stay still", next: endBad2 }
],
`🌲
( -_- )
====`
    );
}

function path2() {
    show(
`You move deeper into the forest.

You hear a clicking sound ahead.`,
[
    { text: "Follow footprints", next: path2A },
    { text: "Avoid the area", next: path2B }
],
`🌲🌲🌲
... ... ...
( ? )`
    );
}

function path2A() {
    show(
`You find a torn backpack.

Something moves nearby.`,
[
    { text: "Call out", next: endBad1 },
    { text: "Back away", next: endGood1 }
],
`🎒
( o_o )
...`
    );
}

function path2B() {
    show(
`You move carefully.

A small light appears ahead.`,
[
    { text: "Approach", next: endGood2 },
    { text: "Avoid it", next: endBad2 }
],
`✨
( -_- )
🌲`
    );
}

function endGood1() {
    show(
`You reach open ground.

A rescue team sees you.

You make it out.`,
[
    { text: "Restart", next: restart }
],
`🚁
\\( ^_^ )/`
    );
}

function endGood2() {
    show(
`You find a group of survivors.

They let you stay.`,
[
    { text: "Restart", next: restart }
],
`( ^_^ )
🏕️🔥`
    );
}

function endBad1() {
    show(
`You hear something behind you.

Too late.`,
[
    { text: "Restart", next: restart }
],
`( 0_0 )
💀`
    );
}

function endBad2() {
    show(
`You stay still.

It finds you anyway.`,
[
    { text: "Restart", next: restart }
],
`( -_- )
...👁`
    );
}

start();