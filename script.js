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

function show(text, options, img) {
    story.innerHTML = `<p>${text}</p>`;
    choices.innerHTML = "";
    image.src = img;

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
`You wake up on cold, damp ground in a dense forest. The air smells like smoke. Through the trees, you can see a faint orange glow, like something burning in the distance.

People are running past you, fast and unfocused. Some are shouting, but it’s hard to make out what they’re saying.

Then you hear something behind them.

It’s loud, uneven, and not human.

Whatever it is, it’s getting closer.`,
        [
            { text: "Follow the crowd", next: path1 },
            { text: "Head deeper into the forest", next: path2 }
        ],
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    );
}

function path1() {
    show(
`You move with the crowd, trying not to fall behind. No one is talking clearly—just short warnings and panic.

Something crashes through the trees behind you. The ground shakes slightly with each impact.

You glance back for a second. You can’t fully see it, but it’s big, and it’s moving fast.

The group starts to split.`,
        [
            { text: "Stay with the group", next: path1A },
            { text: "Break away and hide", next: path1B }
        ],
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1"
    );
}

function path1A() {
    show(
`The group reaches an old bus sitting at an angle in a muddy clearing. It looks abandoned. The windows are broken, and the side is damaged.

Some people slow down.

There’s a noise coming from inside. Faint, but steady.

No one wants to check.`,
        [
            { text: "Enter the bus", next: endBad1 },
            { text: "Keep moving", next: endGood1 }
        ],
        "https://images.unsplash.com/photo-1517949908114-71669a64c2a6"
    );
}

function path1B() {
    show(
`You step away from the group and crouch behind a fallen tree. The noise of the crowd fades quickly.

Now it’s quiet.

You can hear something moving in the distance. Slower now. Searching.

You try to stay still.`,
        [
            { text: "Climb the tree to look around", next: endGood2 },
            { text: "Stay hidden", next: endBad2 }
        ],
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    );
}

function path2() {
    show(
`You move deeper into the forest, away from the noise. The trees get thicker, and the light fades.

After a while, the shouting disappears completely.

Then you hear a new sound.

A steady clicking, somewhere ahead.

You can’t tell what’s making it.`,
        [
            { text: "Follow footprints nearby", next: path2A },
            { text: "Avoid the area and move quietly", next: path2B }
        ],
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    );
}

function path2A() {
    show(
`You find a set of footprints in the dirt. They look recent.

They lead to a backpack lying on the ground. It’s torn open.

Something shifts nearby.

A low sound follows.`,
        [
            { text: "Call out", next: endBad1 },
            { text: "Back away slowly", next: endGood1 }
        ],
        "https://images.unsplash.com/photo-1526318472351-bc6b2f1b02c1"
    );
}

function path2B() {
    show(
`You slow your pace and move carefully through the trees.

After a while, you notice a faint light ahead. It flickers slightly, like a lantern.

It could be someone else.

Or not.`,
        [
            { text: "Approach the light", next: endGood2 },
            { text: "Avoid it", next: endBad2 }
        ],
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9"
    );
}

function endGood1() {
    show(
`You keep moving until the forest starts to thin out.

Eventually, you reach higher ground. From there, you spot a rescue team scanning the area.

You signal them.

They see you.

You make it out.`,
        [{ text: "Restart", next: restart }],
        "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
    );
}

function endGood2() {
    show(
`You approach slowly.

A small group steps into view. They’re alert, but not hostile.

After a moment, they let you come closer.

They’ve set up a secure shelter nearby.

For now, you’re safe.`,
        [{ text: "Restart", next: restart }],
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
    );
}

function endBad1() {
    show(
`You hear something move behind you.

You turn—

Too late.`,
        [{ text: "Restart", next: restart }],
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    );
}

function endBad2() {
    show(
`You stay completely still.

At first, nothing happens.

Then you hear it—right behind you.

You didn’t hear it approach.`,
        [{ text: "Restart", next: restart }],
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1"
    );
}

start();