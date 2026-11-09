// =====================================
// AN ANTHOLOGY FOR ISHMAM
// Main website script
// =====================================


// -------------------------------------
// SETTINGS
// -------------------------------------

// DEMO ONLY: This passcode is visible
// to anyone who inspects the website code.
// Do not use it as real security.

const PASSCODE = "ISHMAM";

const PROGRESS_KEY = "ishmam_anthology_progress";


// -------------------------------------
// SCREEN NAVIGATION
// -------------------------------------

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    selectedScreen.classList.add("active");

    // Restart the entrance animation
    selectedScreen.style.animation = "none";
    selectedScreen.offsetHeight;
    selectedScreen.style.animation = "";
}


// -------------------------------------
// PIKO'S INTRODUCTION
// -------------------------------------

const dialogues = [

    "I've been entrusted with something rather unusual.",

    "There are a few things in this archive. Some are memories, some are thoughts, and some are simply words.",

    "Every entry has its own date.",

    "I'll guide you through them, one at a time.",

    "Once you move on from a letter, it will not return.",

    "Well then... shall we begin?"

];

let dialogueIndex = 0;

const enterButton = document.getElementById("enterButton");
const dialogueButton = document.getElementById("dialogueButton");

enterButton.addEventListener("click", () => {
    showScreen("introduction");
});

dialogueButton.addEventListener("click", () => {

    dialogueIndex++;

    if (dialogueIndex < dialogues.length) {

        document.getElementById("pikoDialogue").textContent =
            dialogues[dialogueIndex];

    } else {

        showScreen("access");

    }

});


// -------------------------------------
// PASSCODE
// -------------------------------------

const accessForm = document.getElementById("accessForm");

accessForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredPasscode =
        document.getElementById("passcode").value.trim();

    const message =
        document.getElementById("accessMessage");

    if (enteredPasscode === PASSCODE) {

        message.textContent = "The door is opening...";

        setTimeout(() => {

            openArchive();

        }, 800);

    } else {

        message.textContent =
            "That doesn't seem to be the right key. Try again.";

    }

});


// -------------------------------------
// THE 18 ANTHOLOGY ENTRIES
// -------------------------------------

const entries = [

    {
        number: "001",
        date: "30 January 2026",
        title: "The Beginning",

        content: `
            <p>I entered RS on this day. I had no idea that something about this place would eventually change the course of my life.</p>

            <p>At the time, it was just another beginning. Another semester, another set of people, another unfamiliar environment.</p>

            <p>I didn't know you yet.</p>
        `,

        piko: "Let's start at the beginning, shall we?"
    },


    {
        number: "002",
        date: "31 January 2026",
        title: "A Rather Strange Coincidence",

        content: `
            <p>RS71 orientation day.</p>

            <p>I found an old photograph of mine taken near Anondopur. You were there in the background, somewhere in the frame, almost unnoticed.</p>

            <p>It is funny how a photograph can hold something you wouldn't understand until much later.</p>

            <p>Perhaps the universe had already put us in the same frame before either of us knew it.</p>
        `,

        piko: "A rather interesting coincidence, don't you think?"
    },


    {
        number: "003",
        date: "1 February 2026",
        title: "The First Class",

        content: `
            <p>Our first class together.</p>

            <p>I don't remember noticing you. I vaguely remember the introductions, the faces, and the usual first-day awkwardness.</p>

            <p>It's strange to think that someone can be present in a room and still remain completely outside your attention.</p>
        `,

        piko: "Sometimes people enter the same room before they enter our thoughts."
    },


    {
        number: "004",
        date: "2 February 2026",
        title: "CGPA 4",

        content: `
            <p>The EMB introduction.</p>

            <p>You said your goal was to get CGPA 4. This was the first time I actually noticed you.</p>

            <p>I remember thinking: </p>

            <p><em>This dude really has some ambitions. I could never. >.<</em></p>

            <p>That was about it. Nothing particularly extraordinary. At least, not yet.</p>
        `,

        piko: "Ah. The legendary CGPA 4 incident."
    },


    {
        number: "005",
        date: "14 February 2026",
        title: "The Group",

        content: `
            <p>I was put in same HUM group with Saad.</p>

            <p>That was when I found out Saad was your roommate.</p>

            <p>Funny how we had four courses together at the same time, yet somehow never ended up in the same group.</p>

            <p>Some things really do have their own timing.</p>
        `,

        piko: "Funny how the groups never quite aligned."
    },


    {
        number: "006",
        date: " Some day in February 2026",
        title: "The Basketball Court",

        content: `
            <p>I noticed you playing basketball.</p>

            <p>You looked pretty cool, I won't lie.</p>

            <p>Although, I must admit, the Dirai female team played better later. LMAO. >w<</p>

            <p>Anyway, that was one of the first times I remember actually paying attention to you.</p>
        `,

        piko: "I shall refrain from commenting on the basketball rivalry."
    },


    {
        number: "007",
        date: "March 2026",
        title: "Something Was Changing",

        content: `
            <p>Somewhere around this time, things started feeling a little strange.</p>

            <p>I began wondering who you were. What you liked. What you were like when you weren't surrounded by other people.</p>

            <p>I wanted to know you, but I was also afraid of what my classmates might think.</p>

            <p>So I did what I was best at:  absolutely nothing.</p>
        `,

        piko: "Something was beginning to change, apparently."
    },


    {
        number: "008",
        date: "4 April 2026",
        title: "The Long Hair",

        content: `
            <p>I noticed you playing volleyball.</p>

            <p>I wanted to talk to you. Instead, I managed to do practically everything except talk to you.</p>

            <p>I also liked your long hair. I thought it suited you.</p>

            <p>And then, in a moment of questionable judgement, I accidentally told a classmate you were cute in front of Saad.</p>

            <p>I hope he didn't hear that. ToT</p>
        `,

        piko: "Oh. Someone was finding someone rather cute."
    },


    {
        number: "009",
        date: "9 April 2026",
        title: "Fifty Stages of Denial",

        content: `
            <p>I started worrying that you would disappear from my life before I ever got the chance to know you.</p>

            <p>I wondered whether you already had someone in mind.</p>

            <p>Sometimes I saw you talking to girls. It was ordinary. Completely normal. And yet, for reasons I couldn't explain, it made me feel a little strange.</p>

            <p>I think I went through about fifty stages of denial that month.</p>
        `,

        piko: "I think this one was a little difficult to write."
    },


    {
        number: "010",
        date: "2 May 2026",
        title: "Eight Days",

        content: `
            <p>TARC was ending.</p>

            <p>Eight days. That was all.</p>

            <p>I kept thinking about all the things I hadn't said, all the conversations I hadn't started, and all the chances I had let pass.</p>

            <p>TARC is ending in 8 days.</p>

            <p>I couldn't say it.</p>

            <p>I would never be able to say it.</p>
        `,

        piko: "Eight days. That's all she thought she had left."
    },


    {
        number: "011",
        date: "10 May 2026",
        title: "After TARC",

        content: `
            <p>I left TARC.</p>

            <p>And with it, most of the little opportunities I had imagined for myself.</p>

            <p>There wasn't much left to hope for. I tried convincing myself that perhaps I had simply imagined everything.</p>

            <p>Maybe it was nothing. Maybe it would pass.</p>
        `,

        piko: "And then everyone went their separate ways."
    },


    {
        number: "012",
        date: "June – August 2026",
        title: "The Unfinished Website",

        content: `
            <p>During July, I tried building a secret website for you.</p>

            <p>I wanted to put everything somewhere. Somewhere you might find it, someday.</p>

            <p>But I got scared. I kept thinking about what would happen if you actually saw it.</p>

            <p>So I abandoned the project. Would this actually finally reach you?</p>

            <p>August passed, too.</p>
        `,

        piko: "The first attempt at this archive. It seems I wasn't built yet."
    },


    {
        number: "013",
        date: "September 2026",
        title: "An Unexpected Return",

        content: `
            <p>After months, I saw you again in 9D-17C.</p>

            <p>I thought I had moved on. Maybe.</p>

            <p>But seeing you again brought back feelings I thought I had already put away.</p>

            <p>Your long hair was gone. The curls were gone, too.</p>

            <p> You still were cute, though. >.<</p>
        `,

        piko: "Well, look who appeared again."
    },


    {
        number: "014",
        date: "7 October 2026",
        title: "The Friend Request",

        content: `
            <p>I finally sent you a Facebook friend request.</p>

            <p>I wasn't even sure how would you take it.</p>

            <p>But I did.</p>

            <p>It was a very small thing, really. Still, I remember feeling strangely happy about it.</p>
        `,

        piko: "A little courage goes a long way."
    },


    {
        number: "015",
        date: "18 October 2026",
        title: "Hello",

        content: `
            <p>I finally messaged you.</p>

            <p>I was nervous, but I did it anyway.</p>

            <p>Your replies felt a little uninterested, and I didn't want to pressure you by continuing the conversation.</p>

            <p>So I stopped.</p>

            <p>I think I have already gone further than I should have with these feelings. I don't want to make you uncomfortable.</p>
        `,

        piko: "I believe this is where things got rather strange."
    },


    {
        number: "016",
        date: "28 October 2026",
        title: "He Knows",

        content: `
            <p>I asked Saad whether you had a girlfriend.</p>

            <p>Yes. I actually did that.</p>

            <p>My weird Kormo kando.</p>

            <p>I don't think I have anything else to add to this particular incident, I am embarrassed enough.</p>
        `,

        piko: "Saad might have some interesting stories to tell."
    },


    {
        number: "017",
        date: "9 November 2026",
        title: "The Last Entry",

        content: `
            <p>And here we are.</p>

            <p>I have written letters, deleted them, rewritten them, and abandoned them. I have spent more time thinking about what to say than actually saying anything.</p>

            <p>Thank you for reading this far.</p>

            <p>I hope you have been doing well. I hope things work out for you, whatever it is that you're working towards.</p>

            <p>And please be careful. Do not share this with other hooman beans, else Evil Larry shall haunt you. >.<</p>
        `,

        piko: "We're almost there. Take your time."
    }

];


// -------------------------------------
// ARCHIVE PROGRESS
// -------------------------------------

let currentEntry = 5;

function saveProgress() {

    localStorage.setItem(
        PROGRESS_KEY,
        String(currentEntry)
    );

}

function loadProgress() {

    // Always start from the first letter
    currentEntry = 0;

    // Clear previously saved reading progress
    localStorage.removeItem(PROGRESS_KEY);

}


// -------------------------------------
// OPEN THE ARCHIVE
// -------------------------------------

function openArchive() {

    loadProgress();

    if (currentEntry >= entries.length) {

        showEnding();

    } else {

        showEntry();

    }

}


// -------------------------------------
// DISPLAY AN ENTRY
// -------------------------------------

function showEntry() {

    const entry = entries[currentEntry];

    document.getElementById("entryNumber").textContent =
        "ENTRY " + entry.number;

    document.getElementById("entryDate").textContent =
        entry.date;

    document.getElementById("entryTitle").textContent =
        entry.title;

    document.getElementById("entryContent").innerHTML =
        entry.content;

    document.getElementById("entryCounter").textContent =
        String(currentEntry + 1).padStart(2, "0") +
        " / " +
        String(entries.length).padStart(2, "0");

    document.getElementById("pikoNote").textContent =
        entry.piko;

    const nextButton =
        document.getElementById("nextEntryButton");

    if (currentEntry === entries.length - 1) {

        nextButton.textContent = "Close the archive →";

    } else {

        nextButton.textContent = "Next entry →";

    }

    showScreen("archive");

}


// -------------------------------------
// NEXT ENTRY BUTTON
// -------------------------------------

document
    .getElementById("nextEntryButton")
    .addEventListener("click", () => {

        currentEntry++;

        saveProgress();

        if (currentEntry >= entries.length) {

            showEnding();

        } else {

            showEntry();

        }

    });


// -------------------------------------
// THE ENDING
// -------------------------------------

function showEnding() {

    showScreen("ending");

    // After the final page, the screen
    // quietly fades into silence.

    setTimeout(() => {

        showScreen("silence");

    }, 120000);

}
