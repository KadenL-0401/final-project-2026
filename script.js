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
    story.innerHTML = `<p>${text.replace(/\n/g, "</p><p>")}</p>`;
    choices.innerHTML = "";
    if (image) image.src = "";

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
`Cold air hits your lungs as you wake up on wet forest ground. Your clothes are damp. The dirt is cold against your hands.

You look up.

The sky splits.

There is no sound at first. No warning. A dark crack opens across the clouds like someone tore the sky with a knife. For a second, everything is still.

Then things start falling out.

Shapes drop from the rift at impossible speed. Some are small, no bigger than garden gnomes, twisted knots of flesh and limbs. Others are huge, as tall as buildings, shaped roughly like people but stretched and wrong.

They hit the ground hard.

The forest explodes with noise. Trees snap. The ground shakes. People around you scream and start running in every direction. The small creatures scramble up and move fast. The huge ones rise slowly, their heads almost lost in the smoke.

No one understands what is happening. No one has time to react.

You have to move.`,
        [
            { text: "Run with the crowd", next: path1 },
            { text: "Run deeper into the forest", next: path2 }
        ]
    );
}

function path1() {
    show(
`You push yourself to your feet and join the nearest group of people. Everyone is running without looking where they are going. Branches whip your face. Someone slams into your shoulder and nearly knocks you over.

Behind you, one of the smaller creatures lands on a man and tears into him. Another drops onto a tree trunk and scuttles along it like a spider made of meat. A much larger shape crashes down farther away, flattening a cluster of trees in a single impact.

You do not look back again.

Ahead, the forest thins slightly. You can see a rough path where others have already trampled the undergrowth. The group is starting to split. Some people veer left toward a faint glow. Others keep following the path straight ahead.

You hear another impact somewhere to your right. The ground jumps under your feet.`,
        [
            { text: "Stay with the largest group", next: path1A },
            { text: "Break away and cut through the trees", next: path1B }
        ]
    );
}

function path1A() {
    show(
`You stay with the largest group. There is some comfort in numbers, even if it is false. People are shouting over each other. No one is in charge. You hear fragments of sentences. Questions. Prayers.

The path opens onto an old service road, cracked and half buried in dirt and roots. Abandoned cars sit at odd angles, some with doors hanging open. The group slows down for the first time, breathing hard, trying to decide which way to go.

Far behind you, one of the giant shapes moves. You can see it through the trees. It takes a step and the forest bends around its weight. Smaller creatures swarm around its feet like insects.

Someone points down the road. There is a sound of engines in the distance. Maybe vehicles. Maybe something else.

People look at each other, waiting for someone to decide.`,
        [
            { text: "Follow the road toward the sound", next: path1A1 },
            { text: "Leave the road and cut into the ditch to hide", next: path1A2 }
        ]
    );
}

function path1A1() {
    show(
`You move with the group down the cracked road. The sound ahead grows clearer. It is engines. Several of them. The group starts to run again, hope pushing them forward.

You round a bend and see a line of military trucks blocking the road. Soldiers are there, weapons raised, shouting orders. They look shocked and exhausted, but they are organized.

They wave you forward and start pulling people behind the vehicles, using them as cover. You hear gunfire farther down the road. Something roars in response.

A soldier grabs your arm and pulls you behind a truck as a small creature leaps from the treeline. It lands on the hood and claws at the metal. The soldiers open fire and tear it apart.

One of them looks at you and nods once.

You made it to people who are at least trying to fight back.`,
        [
            { text: "Stay with the soldiers and help where you can", next: endGood1 },
            { text: "Slip away and try to find a quieter place", next: endBad1 }
        ]
    );
}

function path1A2() {
    show(
`You leave the road and slide down into the ditch. The ground is wet and cold. You press yourself against the dirt wall and try to stay below the line of sight.

Above you, the group argues. Some want to follow the road. Some want to go back. Voices rise. No one notices you drop out of sight.

You crawl along the ditch, moving away from the noise. The sounds of engines fade. The forest closes in again. For a moment, it is almost quiet.

Then something heavy lands nearby.

Mud splashes over you. You freeze. A small creature, no bigger than a child, drags itself along the edge of the ditch. Its body is a tangled mess of limbs and eyes. It sniffs the air with something that might be a mouth.

It stops.

It turns toward you.`,
        [
            { text: "Stay completely still", next: endBad2 },
            { text: "Scramble out of the ditch and run", next: endBad1 }
        ]
    );
}

function path1B() {
    show(
`You cut away from the main group and push through the trees. Branches claw at your arms. The noise of the crowd fades behind you, replaced by scattered screams and the distant thud of more impacts.

You trip over a root and catch yourself on a mossy trunk. Your hands are shaking. You force yourself to breathe slower.

Through a gap in the trees, you see one of the giant creatures more clearly. It is shaped roughly like a person, but stretched far too tall. Its skin looks like wet stone. Smaller shapes cling to its sides and drop off as it moves.

You duck down before it can turn your way.

Ahead, you spot a narrow ravine cutting through the forest. It might offer cover. To your left, there is a rocky slope that leads up to higher ground where you could see more of what is happening.`,
        [
            { text: "Climb up to higher ground", next: path1B1 },
            { text: "Drop into the ravine and move along it", next: path1B2 }
        ]
    );
}

function path1B1() {
    show(
`You climb the rocky slope, using roots and stones as handholds. Your fingers slip more than once, but you keep going. When you reach the top, you pull yourself onto a flat ledge and look out over the forest.

The view is worse than you expected.

The sky is still torn open above you, the crack pulsing faintly like a wound. Creatures continue to fall, though less often now. Some hit the ground and do not move. Others rise and start tearing through the trees.

You see fires spreading where the impacts were strongest. Smoke rises in thick columns. The forest is no longer a single place. It is a patchwork of chaos.

You also see movement on a distant ridge. A cluster of lights. Maybe a camp. Maybe vehicles. Maybe something else.

You have a choice. Stay up here and watch, or try to reach that distant movement.`,
        [
            { text: "Head toward the distant lights", next: endGood2 },
            { text: "Stay and keep watching from the ledge", next: endBad2 }
        ]
    );
}

function path1B2() {
    show(
`You slide down into the ravine. The walls rise on both sides, giving you cover from most directions. A thin trickle of water runs along the bottom, soaking your shoes.

The sounds above are muffled here. You can still hear impacts and screams, but they are distant. For a few minutes, you move in a strange bubble of quiet.

You pass under a fallen tree that forms a low arch. As you duck, something drops into the ravine behind you with a wet thud.

You do not turn around right away.

When you finally look back, you see one of the small creatures pulling itself upright. It is tangled and wrong, but its movements are fast. It spots you and lets out a sound that is halfway between a hiss and a gurgle.

More shapes start to appear at the edge of the ravine, looking down.`,
        [
            { text: "Run along the ravine as fast as you can", next: endBad1 },
            { text: "Climb the wall and try to escape to the side", next: endBad2 }
        ]
    );
}

function path2() {
    show(
`You turn away from the crowd and run deeper into the forest. The trees grow thicker, branches weaving together overhead. The light from the torn sky becomes patchy and strange.

Behind you, you hear people screaming as more creatures hit the ground. You do not look back. You focus on your breathing and your footing.

A small shape falls through the branches ahead of you and slams into the ground. It twitches, then goes still. You circle wide around it.

Farther in, the forest opens into a small hollow. The ground here is churned up, as if something large passed through recently. You see deep footprints, some human, some not.

The air smells like metal and smoke.`,
        [
            { text: "Follow the human footprints", next: path2A },
            { text: "Avoid the tracks and move quietly around the hollow", next: path2B }
        ]
    );
}

function path2A() {
    show(
`You follow the human footprints. They are uneven, like the person was running and stumbling. In some places, they overlap with strange marks that look like something was dragged.

You find a torn backpack lying half buried in the dirt. One strap is ripped. The fabric is stained. The contents are scattered. A flashlight. A water bottle. A photo folded in half.

As you reach for the flashlight, the ground trembles. A shadow passes over you.

You look up.

One of the medium sized creatures has landed nearby. It is taller than a person but not as huge as the skyscraper shapes. Its body is a twisted column of muscle and bone. It turns its head slowly, as if listening.

You are exposed.`,
        [
            { text: "Grab the flashlight and run", next: path2A1 },
            { text: "Drop flat and hope it does not see you", next: path2A2 }
        ]
    );
}

function path2A1() {
    show(
`You snatch the flashlight and sprint toward the thicker trees. The creature reacts instantly. It lets out a harsh, broken sound and lunges in your direction.

Branches whip your face as you run. You do not look back. You hear the creature crashing through the forest behind you, heavy and fast.

Ahead, the ground drops away into a steep slope. At the bottom, you see a narrow stream and a fallen log that could serve as a bridge.

You do not have time to slow down.`,
        [
            { text: "Slide down the slope and try to cross the log", next: endGood1 },
            { text: "Veer sideways and hope the creature overshoots", next: endBad1 }
        ]
    );
}

function path2A2() {
    show(
`You drop flat to the ground and press yourself into the dirt. Your heart is pounding so hard you are sure the creature can hear it.

The creature steps closer. You can see its feet now, twisted and uneven, each step leaving a deep print in the soil. It pauses near the backpack. Something like a hand reaches down and crushes the photo without noticing.

It stands there for a long moment.

Then another impact sounds in the distance. The creature jerks its head toward the noise and moves away, crashing through the trees.

You wait until you can no longer hear it.

When you finally get up, your muscles ache from staying still. The forest feels even more unstable now. You know these things are moving everywhere.`,
        [
            { text: "Head toward higher ground to get a better view", next: endGood2 },
            { text: "Stay low and move from cover to cover", next: endBad2 }
        ]
    );
}

function path2B() {
    show(
`You avoid the tracks and move around the hollow, placing each step carefully. You keep low, using bushes and fallen logs as cover.

The sounds of the sky rift are softer here. You can still see the torn sky through gaps in the canopy, but fewer creatures seem to be falling in this part of the forest now. Most of the damage has already been done.

Ahead, you see a faint, flickering light between the trees. It is not the harsh light from the sky. It looks more like fire. Controlled. Maybe a campfire. Maybe a signal.

You also hear a different sound. A low, steady hum. It could be a generator. It could be something else entirely.`,
        [
            { text: "Approach the light and investigate", next: path2B1 },
            { text: "Avoid the light and move toward the humming sound", next: path2B2 }
        ]
    );
}

function path2B1() {
    show(
`You move toward the flickering light, staying as quiet as you can. As you get closer, you see a small camp set up in a natural depression in the ground.

There are a few tents, a fire ring, and makeshift barricades made from logs and scrap metal. Several people are there. Some are armed. All of them look tired and scared.

They spot you and raise their weapons for a moment, then lower them when they see you are alone and unarmed.

One of them waves you over and hands you a bottle of water. Another keeps watch on the treeline, eyes scanning for movement.

They tell you they saw the sky tear open. They saw the creatures fall. They have no idea if anyone outside the forest knows what is happening.

For now, they are just trying to survive.`,
        [
            { text: "Stay with the camp and help defend it", next: endGood2 },
            { text: "Leave the camp and try to reach a road or town", next: endBad1 }
        ]
    );
}

function path2B2() {
    show(
`You move toward the humming sound. It grows louder as you walk, a low mechanical vibration that does not match the natural noises of the forest.

You push through a line of bushes and find a strange device half buried in the ground. It looks like a metal crate with cables running out of it and into the soil. Lights blink along its surface in a pattern you do not recognize.

The hum is coming from inside it.

As you step closer, one of the lights changes color. The hum shifts pitch. The air around the device feels warmer now, like it is building up energy.

You have no idea who put this here or why. It does not look like something that belongs in a normal forest.

You also notice fresh claw marks on a nearby tree. Something else has been here recently.`,
        [
            { text: "Back away from the device and leave it alone", next: endBad2 },
            { text: "Touch the device and see what happens", next: endBad1 }
        ]
    );
}

function endGood1() {
    show(
`You slide down the slope, half running, half falling. You hit the bottom hard, but you stay on your feet. The creature behind you misjudges the drop and slams into the slope, sending dirt and rocks flying.

You sprint across the fallen log. It shifts under your weight but holds. On the other side, you dive behind a thick tree and collapse, gasping for air.

The creature roars in frustration on the far side of the stream. It paces back and forth, then finally turns away, drawn by some other noise in the distance.

You stay where you are for a long time, listening to the forest tear itself apart.

Eventually, the sounds of engines and helicopters reach you. Rescue teams, or something like them, are moving through the area. You fire a flare you found in the backpack earlier.

They see it.

You are pulled out of the forest hours later. No one can tell you what happened to the sky or the creatures. No one knows if it was local or global.

You survived. For now.`,
        [
            { text: "Restart", next: restart }
        ]
    );
}

function endGood2() {
    show(
`You choose a direction that feels slightly less deadly and commit to it.

Whether it is the soldiers on the road, the distant lights on the ridge, or the small camp hidden in the trees, you find people who are still alive and still thinking.

They do not have answers. They do not know why the sky tore open or why those things fell out of it. They do not know if anyone outside the forest saw what happened.

But they have plans. They have supplies. They have watch rotations and escape routes and signals.

You are no longer alone.

The forest behind you is still full of movement and noise. The torn sky above still looks wrong. The creatures are still out there, moving, hunting, changing the shape of the world.

You do not know what comes next.

You only know that you have a chance to see it.`,
        [
            { text: "Restart", next: restart }
        ]
    );
}

function endBad1() {
    show(
`You make the wrong move at the wrong time.

Maybe you run when you should have stayed still. Maybe you touch something you should have left alone. Maybe you trust the wrong sound or follow the wrong path.

One of the creatures reaches you before you can correct your mistake.

The last thing you feel is impact. The last thing you see is a shape that does not make sense up close.

There is no time to understand what is happening. No time to ask why the sky tore open or why anything fell out of it at all.

For you, the story ends here.`,
        [
            { text: "Restart", next: restart }
        ]
    );
}

function endBad2() {
    show(
`You try to disappear.

You stay still in the ditch. You stay quiet on the ledge. You back away from the device. You hide whenever you hear movement.

For a while, it works. The creatures are busy with louder, easier targets. The forest is full of noise and motion that does not involve you.

But hiding is not the same as escaping.

Eventually, one of the smaller creatures finds you. Maybe it follows your scent. Maybe it just gets lucky. It stares at you with too many eyes and tilts its head in a way that almost looks curious.

Then it moves.

You do not have time to run. You do not have time to fight.

The forest swallows the sound.`,
        [
            { text: "Restart", next: restart }
        ]
    );
}

start();
