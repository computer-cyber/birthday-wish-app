// Get elements from HTML
// =========================
// START APP
// =========================

function startApp() {

    const welcomeScreen =
        document.getElementById("welcome-screen");

    if (welcomeScreen) {

        welcomeScreen.classList.add("hide");

    }

}
const nameInput = document.getElementById("name");
const previewName = document.getElementById("preview-name");
const customMessage =
    document.getElementById("custom-message");
const characterCount =
    document.getElementById("character-count");
// Live birthday name preview

nameInput.addEventListener("input", function() {

    const name = nameInput.value.trim();

    if (name === "") {

        previewName.textContent = "Your Name 💖";

    } else {

        previewName.textContent = name + " 💖";

        previewName.classList.remove("show-name");

        void previewName.offsetWidth;

        previewName.classList.add("show-name");

    }

});
const relationshipInput = document.getElementById("relationship");
const generateButton = document.getElementById("generate-btn");
const wishText = document.getElementById("wish-text");


const styleButtons = document.querySelectorAll(".style-btn");


// Store the selected wish style
let selectedStyle = "Sweet";


// Select a wish style
styleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove selection from all buttons
        styleButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        // Select clicked button
        button.classList.add("selected");

        // Get the style name
        selectedStyle = button.textContent.trim();
// Change app theme

document.body.classList.remove(
    "theme-sweet",
    "theme-funny",
    "theme-emotional",
    "theme-romantic"
);

if (selectedStyle.includes("Sweet")) {

    document.body.classList.add("theme-sweet");

} else if (selectedStyle.includes("Funny")) {

    document.body.classList.add("theme-funny");

} else if (selectedStyle.includes("Emotional")) {

    document.body.classList.add("theme-emotional");

} else if (selectedStyle.includes("Romantic")) {

    document.body.classList.add("theme-romantic");}



    });

});


// Generate birthday wish
generateButton.addEventListener("click", function() {

const loadingMessage = document.getElementById("loading-message");

if (loadingMessage) {
    loadingMessage.classList.add("show");
}
    const name = nameInput.value.trim();
    const relationship = relationshipInput.value;


    // Check if name is empty
    if (name === "") {
        alert("Please enter the birthday person's name! 🎂");
        return;
    }


    // Check if relationship is empty
    if (relationship === "") {
        alert("Please select a relationship! 💕");
        return;
    }
setTimeout(function() {
    if (loadingMessage) {
        loadingMessage.classList.remove("show");
    }
}, 1000);


    let wish;

// =========================
// Multiple Birthday Wishes
// =========================

const sweetWishes = [

    `Happy Birthday, ${name}! 🎂💕
    
May your special day be filled with happiness, love, laughter, and beautiful memories. You deserve all the wonderful things life has to offer! ✨`,

    `Wishing you the happiest birthday, ${name}! 🥳💖
    
May your day be full of smiles, sweet surprises, wonderful people, and unforgettable moments. Have an amazing birthday! 🎂✨`,

    `Happy Birthday, ${name}! 🌸🎂
    
May every moment of your special day bring you joy, peace, and happiness. Keep smiling and keep shining! 💕`,

    `Many many happy returns of the day, ${name}! 🎉💗
    
May this new chapter of your life bring you countless reasons to smile and many beautiful memories to cherish. ✨`,

    `Happy Birthday, ${name}! 🎈💕
    
I hope your birthday is as wonderful, kind, and beautiful as you are. Wishing you happiness today and always! 🎂`
];


const funnyWishes = [

    `Happy Birthday, ${name}! 😂🎂
    
Another year older, but don't worry... you're still young enough to blame everything on your ${relationship}! Have an amazing day! 🎉`,

    `Happy Birthday, ${name}! 🤣🎈
    
Don't count the candles... just count the cake! 🍰 May your birthday be full of food, fun, and absolutely no embarrassing photos! 😂`,

    `Happy Birthday, ${name}! 🎂😂
    
Congratulations! You've officially leveled up again. Unfortunately, there is still no cheat code for getting younger! 😜`,

    `Happy Birthday, ${name}! 🎉🤣
    
Age is just a number... although your number is getting surprisingly large! Have an unforgettable birthday! 🎂`,

    `Happy Birthday, ${name}! 😎🎂
    
May your cake be huge, your gifts be expensive, and your responsibilities disappear for at least one day! 😂🎁`
];


const emotionalWishes = [

    `Happy Birthday, ${name}! 🥰🎂
    
You are such a special person in my life. I hope this new year brings you endless happiness, success, peace, and unforgettable moments. Stay amazing! ❤️`,

    `Happy Birthday, ${name}! 💖🌸
    
I feel truly grateful to have someone as wonderful as you in my life. May every dream in your heart slowly become a beautiful reality. 🎂✨`,

    `Wishing you a beautiful birthday, ${name}! 🥹💕
    
May life always give you reasons to smile, people who truly care about you, and memories that stay in your heart forever. 🎂`,

    `Happy Birthday, ${name}! 🌷❤️
    
May your journey ahead be filled with love, peace, success, and countless beautiful moments. Never forget how special you are. ✨`,

    `On your special day, ${name}, I wish you happiness that never fades, dreams that come true, and a heart that is always full of hope. Happy Birthday! 🎂💖`
];


const romanticWishes = [

    `Happy Birthday, ${name}! ✨❤️
    
You make life more beautiful just by being in it. May your birthday be as wonderful and special as you are. Wishing you love, happiness, and countless beautiful moments together. 💕`,

    `Happy Birthday, ${name}! 💕🎂
    
Every moment with you is a beautiful memory. May your special day be filled with love, laughter, and everything that makes your heart happy. ❤️`,

    `Wishing the most special birthday to ${name}! 🥰💖
    
You bring so much happiness into my world. I hope today reminds you just how loved and appreciated you truly are. 🎂✨`,

    `Happy Birthday, ${name}! 🌹❤️
    
If I could give you one gift, it would be a lifetime filled with happiness, beautiful memories, and all the love your heart can hold. 🎂💕`,

    `Happy Birthday, ${name}! 💗🎉
    
You are one of the most beautiful parts of my life. May this birthday be the beginning of another amazing chapter filled with love and happiness. ✨`
];


// =========================
// Select Random Wish
// =========================

function getRandomWish(wishes) {

    const randomIndex =
        Math.floor(Math.random() * wishes.length);

    return wishes[randomIndex];

}


// Choose the correct collection

if (selectedStyle.includes("Sweet")) {

    wish = getRandomWish(sweetWishes);

}
else if (selectedStyle.includes("Funny")) {

    wish = getRandomWish(funnyWishes);

}
else if (selectedStyle.includes("Emotional")) {

    wish = getRandomWish(emotionalWishes);

}
else if (selectedStyle.includes("Romantic")) {

    wish = getRandomWish(romanticWishes);

}
// =========================
// Custom Message
// =========================

const userMessage = customMessage.value.trim();

if (userMessage !== "") {

    wish = `Happy Birthday, ${name}! 🎂💖

${userMessage}`;

}
    

    // Display the wish with typing effect
typeBirthdayMessage(wishText, wish);
startCelebration();

// Save birthday information
saveBirthdayData();
});
// =========================
// Copy Birthday Wish
// =========================

const copyButton = document.getElementById("copy-btn");

copyButton.addEventListener("click", function() {

    const wish = wishText.textContent;

    navigator.clipboard.writeText(wish);

    alert("Birthday wish copied! 📋🎂");



});


// =========================
// Share Birthday Wish
// =========================

const shareButton = document.getElementById("share-btn");

shareButton.addEventListener("click", async function() {

    const wish = wishText.textContent;

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Birthday Wish 🎂",
                text: wish
            });

        } catch (error) {

            console.log("Sharing cancelled.");

        }

    } else {

        alert("Sharing is not supported in this browser. Please use the Copy button instead. 📋");

    }

});
// =========================
// Birthday Animation System
// =========================

// Create animation container

const animationContainer = document.createElement("div");

animationContainer.id = "animation-container";

document.body.appendChild(animationContainer);


// =========================
// Create Floating Balloons
// =========================

function createBalloons() {

    const balloonColors = [
        "#ff5c8a",
        "#ff9f43",
        "#ffd166",
        "#06d6a0",
        "#4dabf7",
        "#9b5de5"
    ];


    for (let i = 0; i < 8; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.background =
            balloonColors[
                Math.floor(Math.random() * balloonColors.length)
            ];

        balloon.style.animationDuration =
            (6 + Math.random() * 5) + "s";

        balloon.style.animationDelay =
            Math.random() * 2 + "s";


        animationContainer.appendChild(balloon);


        setTimeout(function() {
            balloon.remove();
        }, 12000);

    }

}


// =========================
// Create Floating Hearts
// =========================

function createHearts() {

    const hearts = ["❤️", "💕", "💖", "💗", "💓"];

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";


        animationContainer.appendChild(heart);


        setTimeout(function() {
            heart.remove();
        }, 10000);

    }

}


// =========================
// Create Confetti
// =========================

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.background =
            getRandomColor();

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        animationContainer.appendChild(confetti);


        setTimeout(function() {
            confetti.remove();
        }, 6000);

    }

}


// =========================
// Random Confetti Color
// =========================

function getRandomColor() {

    const colors = [
        "#ff4d6d",
        "#ff9f1c",
        "#ffd166",
        "#06d6a0",
        "#4dabf7",
        "#9b5de5",
        "#f72585"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


// =========================
// Start Celebration
// =========================

function startCelebration() {

    createBalloons();

    createHearts();

    createConfetti();


    // Animate wish card

    const wishCard = document.querySelector(".wish-card");

    wishCard.classList.remove("celebrate");

    void wishCard.offsetWidth;

    wishCard.classList.add("celebrate");

}
// =========================
// Download Birthday Card
// =========================

const downloadButton = document.getElementById("download-btn");
downloadButton.addEventListener("click", function () {

    const name = nameInput.value.trim();

    const message = wishText.textContent.trim();

    const relationship =
        relationshipInput.options[
            relationshipInput.selectedIndex
        ].text;

    const style = selectedStyle || "Sweet";


    // Check name
    if (name === "") {

        alert(
            "Please enter the birthday person's name first! 🎂"
        );

        return;
    }


    // Create a temporary card

    const downloadCard =
        document.createElement("div");


    downloadCard.style.width = "700px";

    downloadCard.style.padding = "50px";

    downloadCard.style.boxSizing = "border-box";

    downloadCard.style.textAlign = "center";

    downloadCard.style.fontFamily =
        "Arial, sans-serif";

    downloadCard.style.background =
        "linear-gradient(135deg, #ffd6e8, #e4d7ff, #d8f3ff)";

    downloadCard.style.borderRadius = "25px";

    downloadCard.style.border =
        "5px solid rgba(255,255,255,0.8)";

    downloadCard.style.color = "#444";


    // Decorative balloons

    const decorations =
        document.createElement("div");

    decorations.textContent =
        "🎈 💕 🎈 ✨ 🎈";

    decorations.style.fontSize =
        "45px";

    decorations.style.marginBottom =
        "20px";

    downloadCard.appendChild(
        decorations
    );


    // Birthday heading

    const heading =
        document.createElement("h1");

    heading.textContent =
        "🎂 Happy Birthday! 🎂";

    heading.style.color =
        "#d63384";

    heading.style.fontSize =
        "38px";

    heading.style.marginBottom =
        "15px";

    downloadCard.appendChild(
        heading
    );


    // Person's name

    const personName =
        document.createElement("h2");

    personName.textContent =
        name + " 💖";

    personName.style.color =
        "#8e44ad";

    personName.style.fontSize =
        "32px";

    personName.style.margin =
        "10px 0 20px";

    downloadCard.appendChild(
        personName
    );


    // Relationship

    const relationText =
        document.createElement("p");

    relationText.textContent =
        "For my " + relationship + " 💕";

    relationText.style.fontSize =
        "18px";

    relationText.style.color =
        "#777";

    downloadCard.appendChild(
        relationText
    );


    // Birthday message

    const messageText =
        document.createElement("p");

    messageText.textContent =
        message;

    messageText.style.fontSize =
        "20px";

    messageText.style.lineHeight =
        "1.7";

    messageText.style.margin =
        "25px auto";

    messageText.style.maxWidth =
        "580px";

    messageText.style.whiteSpace =
        "pre-line";

    downloadCard.appendChild(
        messageText
    );


    // Style label

    const styleText =
        document.createElement("p");

    styleText.textContent =
        "✨ " + style + " Birthday Wish ✨";

    styleText.style.fontSize =
        "16px";

    styleText.style.fontWeight =
        "bold";

    styleText.style.color =
        "#d63384";

    downloadCard.appendChild(
        styleText
    );


    // Bottom decoration

    const bottomDecoration =
        document.createElement("div");

    bottomDecoration.textContent =
        "🎉 🎁 🎂 🎁 🎉";

    bottomDecoration.style.fontSize =
        "35px";

    bottomDecoration.style.marginTop =
        "25px";

    downloadCard.appendChild(
        bottomDecoration
    );


    // Add card temporarily

    document.body.appendChild(
        downloadCard
    );


    // Download using html2canvas

    html2canvas(downloadCard, {

        scale: 2,

        backgroundColor: null

    }).then(function (canvas) {

        const link =
            document.createElement("a");

        link.download =
            "birthday-card-" +
            name.replace(/\s+/g, "-") +
            ".png";

        link.href =
            canvas.toDataURL("image/png");

        link.click();


        // Remove temporary card

        downloadCard.remove();

    });

});



// =========================
// Rounded Rectangle
// =========================

function roundRect(
    ctx,
    x,
    y,
    width,
    height,
    radius
) {

    ctx.beginPath();

    ctx.moveTo(x + radius, y);

    ctx.lineTo(x + width - radius, y);

    ctx.quadraticCurveTo(
        x + width,
        y,
        x + width,
        y + radius
    );

    ctx.lineTo(
        x + width,
        y + height - radius
    );

    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
    );

    ctx.lineTo(
        x + radius,
        y + height
    );

    ctx.quadraticCurveTo(
        x,
        y + height,
        x,
        y + height - radius
    );

    ctx.lineTo(
        x,
        y + radius
    );

    ctx.quadraticCurveTo(
        x,
        y,
        x + radius,
        y
    );

    ctx.closePath();

}


// =========================
// Wrapped Text
// =========================

function drawWrappedText(
    ctx,
    text,
    x,
    y,
    maxWidth,
    lineHeight
) {

    const words = text.split(" ");

    let line = "";

    for (let i = 0; i < words.length; i++) {

        const testLine =
            line + words[i] + " ";

        const width =
            ctx.measureText(testLine).width;


        if (
            width > maxWidth &&
            i > 0
        ) {

            ctx.fillText(
                line,
                x,
                y
            );

            line = words[i] + " ";

            y += lineHeight;

        } else {

            line = testLine;

        }

    }

    ctx.fillText(
        line,
        x,
        y
    );

}
// =========================
// Create Another Wish
// =========================

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
const confirmReset = confirm(
    "🎂 Are you sure you want to create another birthday wish?"
);

if (!confirmReset) {
    return;
}

    // Clear name
    nameInput.value = "";

    // Reset relationship
    relationshipInput.value = "";

    // Reset selected style
    selectedStyle = "Sweet";

    styleButtons.forEach(function(button) {
        button.classList.remove("selected");
    });


    // Reset preview name
    previewName.textContent = "Your Name 💖";

    previewName.classList.remove("show-name");


    // Reset wish
    wishText.textContent =
        "Your birthday wish will appear here...";


    // Remove theme
    document.body.classList.remove(
        "theme-sweet",
        "theme-funny",
        "theme-emotional",
        "theme-romantic"
    );


    // Remove card animation
    const wishCard =
        document.querySelector(".wish-card");

    wishCard.classList.remove("celebrate");


    // Clear animations
    animationContainer.innerHTML = "";
localStorage.removeItem("birthdayData");
// Scroll back to the beginning of the form
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

// Put cursor back in the name field
setTimeout(function () {
    nameInput.focus();
}, 500);


});
// =========================
// Welcome Screen
// =========================

const welcomeScreen =
    document.getElementById("welcome-screen");

const startButton =
    document.getElementById("start-btn");


startButton.addEventListener("click", function() {

    welcomeScreen.classList.add("hide");

    // Start a small celebration
    createBalloons();
    createHearts();
    createConfetti();

});
// =========================
// Save Birthday Information
// =========================

function saveBirthdayData() {

    const birthdayData = {

        name: nameInput.value,

        relationship: relationshipInput.value,

        style: selectedStyle,

        wish: wishText.textContent

    };

    localStorage.setItem(
        "birthdayData",
        JSON.stringify(birthdayData)
    );

}


// =========================
// Load Birthday Information
// =========================

function loadBirthdayData() {

    const savedData =
        localStorage.getItem("birthdayData");


    if (!savedData) {
        return;
    }


    const birthdayData =
        JSON.parse(savedData);


    // Restore name
    if (birthdayData.name) {

        nameInput.value =
            birthdayData.name;

        previewName.textContent =
            birthdayData.name + " 💖";

    }


    // Restore relationship
    if (birthdayData.relationship) {

        relationshipInput.value =
            birthdayData.relationship;

    }


    // Restore wish
    if (birthdayData.wish) {

        typeBirthdayMessage(wishText, birthdayData.wish);

    }


    // Restore style
    if (birthdayData.style) {

        selectedStyle =
            birthdayData.style;

        styleButtons.forEach(function(button) {

            button.classList.remove("selected");


            if (
                button.textContent
                    .trim()
                    .includes(birthdayData.style)
            ) {

                button.classList.add("selected");

            }

        });

    }

}


// Load saved information
loadBirthdayData();

// =========================
// Birthday Music
// =========================

const musicButton = document.getElementById("music-btn");

let audioContext = null;
let musicPlaying = false;
let musicTimer = null;
let activeOscillators = [];


// =========================
// Play One Birthday Note
// =========================

function playBirthdayNote(frequency, duration, startTime) {

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(0.001, startTime);

    gain.gain.exponentialRampToValueAtTime(
        0.15,
        startTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        startTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);

    activeOscillators.push(oscillator);

    oscillator.onended = function () {
        activeOscillators =
            activeOscillators.filter(
                function (item) {
                    return item !== oscillator;
                }
            );
    };
}


// =========================
// Play Birthday Melody
// =========================

function playBirthdayMusic() {

    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const now = audioContext.currentTime;

    const melody = [
        264, 264, 297, 264,
        352, 330,

        264, 264, 297, 264,
        396, 352
    ];

    melody.forEach(function (note, index) {

        playBirthdayNote(
            note,
            0.3,
            now + index * 0.35
        );

    });

    musicTimer = setTimeout(
        function () {

            if (musicPlaying) {
                playBirthdayMusic();
            }

        },
        melody.length * 350
    );
}


// =========================
// Stop Birthday Music
// =========================

function stopBirthdayMusic() {

    clearTimeout(musicTimer);

    musicTimer = null;

    activeOscillators.forEach(
        function (oscillator) {

            try {
                oscillator.stop();
            } catch (error) {
                // Already stopped
            }

        }
    );

    activeOscillators = [];
}


// =========================
// Music Button
// =========================

musicButton.addEventListener(
    "click",
    function () {

        if (!musicPlaying) {

            musicPlaying = true;

            playBirthdayMusic();

            musicButton.textContent =
                "🔇 Stop Birthday Music";

            musicButton.classList.add(
                "playing"
            );

        } else {

            musicPlaying = false;

            stopBirthdayMusic();

            musicButton.textContent =
                "🎵 Play Birthday Music";

            musicButton.classList.remove(
                "playing"
            );

        }

    }
);
// =========================
// Custom Message Counter
// =========================

customMessage.addEventListener("input", function() {

    const length =
        customMessage.value.length;


    characterCount.textContent =
        length + " / 300";
// Clear custom message

characterCount.classList.remove(
    "warning",
    "limit"
);


    // Remove old warning classes

    characterCount.classList.remove(
        "warning",
        "limit"
    );


    // Almost full

    if (length >= 250 && length < 300) {

        characterCount.classList.add(
            "warning"
        );

    }


    // Completely full

    if (length >= 300) {

        characterCount.classList.add(
            "limit"
        );

    }

});
// // ========================================
// CARD THEME SELECTION
// ========================================

const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("THEME BUTTON CLICKED:", button.dataset.theme);

        // Remove selected from all buttons
        themeButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        // Select clicked button
        button.classList.add("selected");

        // Get the CURRENT wish card
        const wishCard = document.querySelector(".wish-card");

        // If card doesn't exist yet
        if (!wishCard) {
            console.log("Wish card not found yet.");
            return;
        }

        // Remove old themes
        wishCard.classList.remove(
            "theme-pink",
            "theme-blue",
            "theme-purple",
            "theme-gold"
        );

        // Get selected theme
        const selectedTheme = button.dataset.theme;

        // Add new theme
        wishCard.classList.add("theme-" + selectedTheme);

        console.log("Theme applied:", selectedTheme);
    });

});
// =========================
// Toast Notification
// =========================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);
}
// ================================
// Birthday Wish Typing Effect
// ================================

function typeBirthdayMessage(element, text) {

    if (!element) return;

    element.textContent = "";

    let index = 0;

    const typingSpeed = 25;

    function typeNextCharacter() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(
                typeNextCharacter,
                typingSpeed
            );

        }
    }

    typeNextCharacter();
}