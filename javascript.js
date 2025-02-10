let songs = ["media/spotifydown.com - Me voglio fa' 'na casa - MUJI BGM.mp3", "media/aishiteitanoni.mp3"]; // Two songs
let currentSongIndex = 0;
let isOriginalText = true; // Flag to track which text is currently displayed


function playSound() {
    const audio = new Audio("media/squeak.mp3");
    audio.play();
}

function playHonk() {
    const audio = new Audio("media/Fnaf Nose honk [RfejhLuaszw].mp3");
    audio.play();
}


function generator() {
    const sharkyLines = [
        "HI SEALIE!!!",
        "I hope you're doing well!!",
        "Johndave should've been canon",
        "Brainblast should fuck nasty. Like if you agree.",
        "I love you!",
        "OMOMOMOMOMOMOMOMOMOMOMOM",
        "Azalea got naked for that THING.",
        "Saranghamnida",
        "I'm so happy to see you!!!",
        "Grown ass men. Don't you have the freedom?",
        "Click that little seal if you haven't already!",
        "I love dababies.",
        "We should do like Meredith and Oswald",
        "<3!",
        "<3<!",
        "Perestroika! PERESTROIKA!!!",
        "There's just no way",
        "dont even joke lad",
        "I LOVE YOU!!!",
        ":SEALIE: :tbh:",
        "TRA LA LA LA LA LA LA LA LA LAAAA!",
        "Wanna go on a date?",
        "Pinkcap and Nazbol must be really happy rn",
        "CRANKIN' MY HOOOGGG!!",
        "my STONKS!!1!1",
        "Nah, I'd win.",
        "GOOD MORNING～♥︎♪",
        "Pitch text is only for the theme. I love sealie.",
        "Aiiishiteeiitaanonii",
        "It's real shitter hours",
        "Gonna hit that YOINKY SPLOINKY.",
        "Chat, are we cooked?",
        "glub glub",
        "Frere Jacques, Frere Jacques...",
        "Your smile is the flag of the ship!",
        "My creation! Is it real?!",
        "i feel like usopp writing",
        "bogos binted?",
        "Caro mio!",
        "Nel blu di pinto di blu...",
        "Come off your battlefield!",
        "WHERE IS SHE?!",
        "epy",
        "I'm a little distracted",
        "honk",
        "Nice legs daisy dukes makes a man go",
        "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues",
        "Nah, but thanks for the offer!",
        "GYAATTT ZAAAYUMM!!!",
        "Fuck, that is DEFINITELY Ayn Rand!",
        "OW!!!",
        "Oi oi oi...! Baaaka.",
        "Click me if you're gay",
        "Sponsored by His Venerable Ascendancy",
        "https://www.youtube.com/watch?v=VBVFUZJmfCY",
        "Hello my baby, hello my honey!",
        "i lov sealie",
        "(shark noises)",
        "If I chopped you up in a meat grinder...",
        "Oh the misery, every single person is my enemy.",
        "My name's Egoiiize?"
    ];
    var x = Math.floor(Math.random() * sharkyLines.length);
    const demo = document.getElementById("demo");

    // Remove and re-add the class to restart animation
    demo.classList.remove("scroll");
    void demo.offsetWidth; // Force reflow
    demo.innerText = sharkyLines[x];
    demo.classList.add("scroll");
}


function darkmode() {
    var element = document.body;
    var image = document.getElementById("changeImg");
    element.classList.toggle("dark");

    if (image.getAttribute('src') == "media/stratagem.png") {
        image.src = "media/brainblast.png";
    }
    else {
        image.src = "media/stratagem.png";
    }

    if (document.documentElement.style.colorScheme != "dark") {
        document.documentElement.style.colorScheme = "dark";
    } else {
        document.documentElement.style.colorScheme = "light"
    }

    document.querySelectorAll("p").forEach(p => p.classList.toggle("dark"));


    let audioPlayer = document.getElementById("audioPlayer");
    let audioSource = document.getElementById("audioSource");

    // Switch between 0 and 1
    currentSongIndex = (currentSongIndex === 0) ? 1 : 0;

    // Change the audio source
    audioSource.src = songs[currentSongIndex];

    // Force reload and play
    audioPlayer.pause();
    audioPlayer.load();
    audioPlayer.play();
    let headerElement = document.getElementById("toggleHead");
    let textElement = document.getElementById("toggleText");
    let originalText = `You might be wondering, hey, what's with all this???
    Well, seeing as Valentine's is just around the corner, I thought I'd make something special to
    commemorate the occasion. I was going to make a card - like, a real, physical card - but I
    kind of realized how hard it would be to inconspicuously give that to you. So, I have made this
    site in an attempt to make a DIGITAL card!!
    <br><br>But anyway, here it is in all its glory! I hope you like the little knickknacks I put around
    the site.
    I'm glad we've had each other in our lives for so long (ALMOST 9 YEARS!! Although, only 3 spent
    properly talking to each other - WOW! It's kind of like the dream entities), and I hope
    there will be many more years for us to spend together.
    <br><br>Never forget that you're not alone. I am always here for you,
    the server is always here. And until the end, I hope we never run out of ways to be happy with one another.
    Thank you for always being there for me. I wish for you to always be a happy sealie.
    <br><br>I love you!!`;

    let newText = `You might be wondering, hey, what's with all this???
    Well, seeing as Valentine's is just around the corner, I thought I'd make something AWFUL to
    commemorate the occasion. I was going to make a card - like, a real, physical card - but I
    kind of realized how EASY it would be to inconspicuously give that to you. So, I have made this
    site in an attempt to make a DIGITAL card!!
    <br><br>But anyway, here it is in all its glory! I hope you HATE the little knickknacks I put around
    the site.
    I'm MAD we've had each other in our lives for so long (ALMOST 9 YEARS!! Although, only 3 spent
    properly talking to each other - WOW! It's kind of like the dream entities), and I hope
    there WON'T be many more years for us to spend together.
    <br><br>Never forget that you're ALWAYS alone. I am NOT here for you,
    the server is NOT here. And until the end, I hope we never run out of ways to be ANGRY with one another.
    Thank you for NOT being there for me. I wish for you to NOT be a happy sealie.
    <br><br>I HATE you!!`;

    let originalHead = `Hello there!`;
    let newHead = `HEY YOU!!!`;

    textElement.innerHTML = isOriginalText ? newText : originalText;
    headerElement.innerHTML = isOriginalText ? newHead : originalHead;
    isOriginalText = !isOriginalText; // Flip the flag

    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(favicon);
    }
    favicon.href = isOriginalText ? "media/favicon-light.ico" : "media/favicon-dark.ico";
    
}


document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('audioPlayer').play();
    document.removeEventListener('click', musicPlay);
}
