"use strict";

/* =====================================================
   GET HTML ELEMENTS
   ===================================================== */

const welcomeScreen =
    document.getElementById("welcome-screen");

const startButton =
    document.getElementById("start-btn");

const nameInput =
    document.getElementById("name");

const senderInput =
    document.getElementById("sender");

const relationshipInput =
    document.getElementById("relationship");

const photoInput =
    document.getElementById("photo-input");

const photoPreview =
    document.getElementById("photo-preview");

const photoStatus =
    document.getElementById("photo-status");

const customMessage =
    document.getElementById("custom-message");

const characterCount =
    document.getElementById("character-count");

const generateButton =
    document.getElementById("generate-btn");

const loadingMessage =
    document.getElementById("loading-message");

const previewName =
    document.getElementById("preview-name");

const wishText =
    document.getElementById("wish-text");

const cardRelationship =
    document.getElementById("card-relationship");

const cardSender =
    document.getElementById("card-sender");

const birthdayPhoto =
    document.getElementById("birthday-photo");

const photoPlaceholder =
    document.querySelector(".photo-placeholder");

const birthdayCard =
    document.getElementById("birthday-card");

const copyButton =
    document.getElementById("copy-btn");

const shareButton =
    document.getElementById("share-btn");

const downloadButton =
    document.getElementById("download-btn");

const resetButton =
    document.getElementById("reset-btn");

const toast =
    document.getElementById("toast");

const styleButtons =
    document.querySelectorAll(".style-btn");

const themeButtons =
    document.querySelectorAll(".theme-btn");

const musicButton =
    document.getElementById("music-btn");

const pauseButton =
    document.getElementById("music-pause-btn");

const stopButton =
    document.getElementById("music-stop-btn");

const volumeControl =
    document.getElementById("music-volume");


/* =====================================================
   APP VARIABLES
   ===================================================== */

let selectedStyle = "Sweet";

let selectedTheme = "pink";

let birthdayPhotoData = "";

let typingTimer = null;


/* =====================================================
   START APP
   ===================================================== */

function startApp() {

    if (welcomeScreen) {

        welcomeScreen.classList.add("hide");

    }

}


/* =====================================================
   WELCOME BUTTON
   ===================================================== */

startButton.addEventListener(
    "click",
    function () {

        startApp();

        createCelebration();

    }
);


/* =====================================================
   LIVE NAME PREVIEW
   ===================================================== */

nameInput.addEventListener(
    "input",
    function () {

        const name =
            nameInput.value.trim();

        if (name === "") {

            previewName.textContent =
                "Your Name 💖";

        } else {

            previewName.textContent =
                name + " 💖";

        }

    }
);


/* =====================================================
   PHOTO UPLOAD
   ===================================================== */

photoInput.addEventListener(
    "change",
    function () {

        const file =
            photoInput.files[0];

        if (!file) {

            birthdayPhotoData = "";

            photoPreview.style.display =
                "none";

            birthdayPhoto.classList.remove(
                "visible"
            );

            photoPlaceholder.style.display =
                "flex";

            photoStatus.textContent =
                "📷 No photo selected";

            return;

        }


        /* Check image */

        if (!file.type.startsWith("image/")) {

            alert(
                "Please choose an image file. 📷"
            );

            photoInput.value = "";

            return;

        }


        /* Read image */

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                birthdayPhotoData =
                    event.target.result;


                /* Form preview */

                photoPreview.src =
                    birthdayPhotoData;

                photoPreview.style.display =
                    "block";


                /* Card photo */

                birthdayPhoto.src =
                    birthdayPhotoData;

                birthdayPhoto.classList.add(
                    "visible"
                );


                photoPlaceholder.style.display =
                    "none";


                photoStatus.textContent =
                    "✅ Photo added successfully!";

            };


        reader.readAsDataURL(file);

    }
);


/* =====================================================
   STYLE SELECTION
   ===================================================== */

styleButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                styleButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                selectedStyle =
                    button.dataset.style;

            }
        );

    }
);


/* =====================================================
   THEME SELECTION
   ===================================================== */

themeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                themeButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                selectedTheme =
                    button.dataset.theme;


                birthdayCard.classList.remove(
                    "theme-pink",
                    "theme-blue",
                    "theme-purple",
                    "theme-gold"
                );


                birthdayCard.classList.add(
                    "theme-" + selectedTheme
                );

            }
        );

    }
);


/* =====================================================
   CUSTOM MESSAGE COUNTER
   ===================================================== */

customMessage.addEventListener(
    "input",
    function () {

        const length =
            customMessage.value.length;


        characterCount.textContent =
            length + " / 300";


        characterCount.classList.remove(
            "warning",
            "limit"
        );


        if (
            length >= 250 &&
            length < 300
        ) {

            characterCount.classList.add(
                "warning"
            );

        }


        if (length >= 300) {

            characterCount.classList.add(
                "limit"
            );

        }

    }
);


/* =====================================================
   BIRTHDAY WISH COLLECTIONS
   ===================================================== */

function getWishCollection(
    style,
    name,
    relationship
) {

    const sweetWishes = [

        `Happy Birthday, ${name}! 🎂💕\n\nMay your special day be filled with happiness, love, laughter, and beautiful memories. You deserve all the wonderful things life has to offer! ✨`,

        `Wishing you the happiest birthday, ${name}! 🥳💖\n\nMay your day be full of smiles, sweet surprises, wonderful people, and unforgettable moments. Have an amazing birthday! 🎂✨`,

        `Happy Birthday, ${name}! 🌸🎂\n\nMay every moment of your special day bring you joy, peace, and happiness. Keep smiling and keep shining! 💕`,

        `Many many happy returns of the day, ${name}! 🎉💗\n\nMay this new chapter of your life bring you countless reasons to smile and many beautiful memories to cherish. ✨`,

        `Happy Birthday, ${name}! 🎈💕\n\nI hope your birthday is as wonderful, kind, and beautiful as you are. Wishing you happiness today and always! 🎂`

    ];


    const funnyWishes = [

        `Happy Birthday, ${name}! 😂🎂\n\nAnother year older, but don't worry... you're still young enough to blame everything on your ${relationship}! Have an amazing day! 🎉`,

        `Happy Birthday, ${name}! 🤣🎈\n\nDon't count the candles... just count the cake! 🍰 May your birthday be full of food, fun, and absolutely no embarrassing photos! 😂`,

        `Happy Birthday, ${name}! 🎂😂\n\nCongratulations! You've officially leveled up again. Unfortunately, there is still no cheat code for getting younger! 😜`,

        `Happy Birthday, ${name}! 🎉🤣\n\nAge is just a number... although your number is getting surprisingly large! Have an unforgettable birthday! 🎂`,

        `Happy Birthday, ${name}! 😎🎂\n\nMay your cake be huge, your gifts be expensive, and your responsibilities disappear for at least one day! 😂🎁`

    ];


    const emotionalWishes = [

        `Happy Birthday, ${name}! 🥰🎂\n\nYou are such a special person in my life. I hope this new year brings you endless happiness, success, peace, and unforgettable moments. Stay amazing! ❤️`,

        `Happy Birthday, ${name}! 💖🌸\n\nI feel truly grateful to have someone as wonderful as you in my life. May every dream in your heart slowly become a beautiful reality. 🎂✨`,

        `Wishing you a beautiful birthday, ${name}! 🥹💕\n\nMay life always give you reasons to smile, people who truly care about you, and memories that stay in your heart forever. 🎂`,

        `Happy Birthday, ${name}! 🌷❤️\n\nMay your journey ahead be filled with love, peace, success, and countless beautiful moments. Never forget how special you are. ✨`,

        `On your special day, ${name}, I wish you happiness that never fades, dreams that come true, and a heart that is always full of hope. Happy Birthday! 🎂💖`

    ];


    const romanticWishes = [

        `Happy Birthday, ${name}! ✨❤️\n\nYou make life more beautiful just by being in it. May your birthday be as wonderful and special as you are. Wishing you love, happiness, and countless beautiful moments together. 💕`,

        `Happy Birthday, ${name}! 💕🎂\n\nEvery moment with you is a beautiful memory. May your special day be filled with love, laughter, and everything that makes your heart happy. ❤️`,

        `Wishing the most special birthday to ${name}! 🥰💖\n\nYou bring so much happiness into my world. I hope today reminds you just how loved and appreciated you truly are. 🎂✨`,

        `Happy Birthday, ${name}! 🌹❤️\n\nIf I could give you one gift, it would be a lifetime filled with happiness, beautiful memories, and all the love your heart can hold. 🎂💕`,

        `Happy Birthday, ${name}! 💗🎉\n\nYou are one of the most beautiful parts of my life. May this birthday be the beginning of another amazing chapter filled with love and happiness. ✨`

    ];


    if (style === "Funny") {
        return funnyWishes;
    }

    if (style === "Emotional") {
        return emotionalWishes;
    }

    if (style === "Romantic") {
        return romanticWishes;
    }

    return sweetWishes;

}


/* =====================================================
   RANDOM WISH
   ===================================================== */

function getRandomWish(wishes) {

    const randomIndex =
        Math.floor(
            Math.random() * wishes.length
        );

    return wishes[randomIndex];

}


/* =====================================================
   GENERATE WISH
   ===================================================== */

generateButton.addEventListener(
    "click",
    function () {

        const name =
            nameInput.value.trim();

        const sender =
            senderInput.value.trim();

        const relationship =
            relationshipInput.value;


        /* Validate name */

        if (name === "") {

            alert(
                "Please enter the birthday person's name! 🎂"
            );

            nameInput.focus();

            return;

        }


        /* Validate relationship */

        if (relationship === "") {

            alert(
                "Please select a relationship! 💕"
            );

            relationshipInput.focus();

            return;

        }


        /* Loading */

        loadingMessage.classList.add(
            "show"
        );


        generateButton.disabled =
            true;


        setTimeout(
            function () {

                let wish;


                /* Custom message */

                const custom =
                    customMessage.value.trim();


                if (custom !== "") {

                    wish =
                        `Happy Birthday, ${name}! 🎂💖\n\n${custom}`;

                } else {

                    const wishes =
                        getWishCollection(
                            selectedStyle,
                            name,
                            relationship
                        );

                    wish =
                        getRandomWish(
                            wishes
                        );

                }


                /* Update card */

                previewName.textContent =
                    name + " 💖";


                cardRelationship.textContent =
                    relationship;


                cardSender.textContent =
                    sender !== ""
                        ? sender
                        : "Someone Special";


                /* Typing animation */

                typeBirthdayMessage(
                    wishText,
                    wish
                );


                /* Card animation */

                birthdayCard.classList.remove(
                    "celebrate"
                );

                void birthdayCard.offsetWidth;

                birthdayCard.classList.add(
                    "celebrate"
                );


                /* Celebration */

                createCelebration();


                /* Save */

                saveBirthdayData(
                    name,
                    sender,
                    relationship,
                    wish
                );


                /* Finish loading */

                loadingMessage.classList.remove(
                    "show"
                );

                generateButton.disabled =
                    false;


                /* Scroll to card */

                setTimeout(
                    function () {

                        birthdayCard.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    300
                );

            },
            700
        );

    }
);


/* =====================================================
   TYPING EFFECT
   ===================================================== */

function typeBirthdayMessage(
    element,
    text
) {

    if (!element) {
        return;
    }


    if (typingTimer) {

        clearTimeout(
            typingTimer
        );

    }


    element.textContent =
        "";


    let index = 0;

    const speed = 18;


    function typeNext() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            typingTimer =
                setTimeout(
                    typeNext,
                    speed
                );

        }

    }


    typeNext();

}


/* =====================================================
   COPY WISH
   ===================================================== */

copyButton.addEventListener(
    "click",
    async function () {

        const wish =
            wishText.textContent.trim();


        if (
            wish === "" ||
            wish ===
            "Your birthday wish will appear here..."
        ) {

            showToast(
                "Please generate a wish first! 🎂"
            );

            return;

        }


        try {

            await navigator.clipboard.writeText(
                wish
            );

            showToast(
                "Birthday wish copied! 📋🎂"
            );

        } catch (error) {

            /* Fallback */

            const textarea =
                document.createElement(
                    "textarea"
                );

            textarea.value =
                wish;

            document.body.appendChild(
                textarea
            );

            textarea.select();

            document.execCommand(
                "copy"
            );

            textarea.remove();

            showToast(
                "Birthday wish copied! 📋"
            );

        }

    }
);


/* =====================================================
   SHARE
   ===================================================== */

shareButton.addEventListener(
    "click",
    async function () {

        const name =
            nameInput.value.trim();

        const wish =
            wishText.textContent.trim();


        if (!name) {

            showToast(
                "Please generate a birthday wish first! 🎂"
            );

            return;

        }


        if (
            navigator.share
        ) {

            try {

                await navigator.share({

                    title:
                        `Happy Birthday ${name}! 🎂`,

                    text:
                        wish

                });

            } catch (error) {

                console.log(
                    "Sharing cancelled."
                );

            }

        } else {

            try {

                await navigator.clipboard.writeText(
                    wish
                );

                showToast(
                    "Sharing unavailable — wish copied instead! 📋"
                );

            } catch (error) {

                showToast(
                    "Please use the Copy button. 📋"
                );

            }

        }

    }
);


/* =====================================================
   DOWNLOAD CARD
   ===================================================== */

downloadButton.addEventListener(
    "click",
    async function () {

        const name =
            nameInput.value.trim();


        if (name === "") {

            showToast(
                "Please enter a name first! 🎂"
            );

            return;

        }


        if (
            typeof html2canvas ===
            "undefined"
        ) {

            alert(
                "Card download library could not load. Please check your internet connection and refresh the page."
            );

            return;

        }


        showToast(
            "Preparing your birthday card... 🖼️"
        );


        /* Temporarily improve card */

        const originalWidth =
            birthdayCard.style.width;


        birthdayCard.style.width =
            "1050px";


        try {

            const canvas =
                await html2canvas(
                    birthdayCard,
                    {
                        scale: 2,

                        useCORS: true,

                        backgroundColor:
                            null,

                        logging: false
                    }
                );


            const link =
                document.createElement(
                    "a"
                );


            link.download =
                "birthday-card-" +
                name
                    .replace(
                        /\s+/g,
                        "-"
                    )
                    .replace(
                        /[^a-zA-Z0-9-_]/g,
                        ""
                    ) +
                ".png";


            link.href =
                canvas.toDataURL(
                    "image/png"
                );


            link.click();


            showToast(
                "Birthday card downloaded! 🎉"
            );

        } catch (error) {

            console.error(
                "Download error:",
                error
            );

            showToast(
                "Could not download the card. Please try again."
            );

        }


        birthdayCard.style.width =
            originalWidth;

    }
);


/* =====================================================
   RESET
   ===================================================== */

resetButton.addEventListener(
    "click",
    function () {

        const confirmed =
            confirm(
                "🎂 Are you sure you want to create another birthday wish?"
            );


        if (!confirmed) {
            return;
        }


        /* Clear form */

        nameInput.value =
            "";

        senderInput.value =
            "";

        relationshipInput.value =
            "";

        customMessage.value =
            "";

        photoInput.value =
            "";


        /* Reset counter */

        characterCount.textContent =
            "0 / 300";


        characterCount.classList.remove(
            "warning",
            "limit"
        );


        /* Reset photo */

        birthdayPhotoData =
            "";

        photoPreview.src =
            "";

        photoPreview.style.display =
            "none";

        birthdayPhoto.src =
            "";

        birthdayPhoto.classList.remove(
            "visible"
        );

        photoPlaceholder.style.display =
            "flex";

        photoStatus.textContent =
            "📷 No photo selected";


        /* Reset name */

        previewName.textContent =
            "Your Name 💖";


        /* Reset wish */

        wishText.textContent =
            "Your birthday wish will appear here...";


        /* Reset relationship */

        cardRelationship.textContent =
            "Special Person";


        /* Reset sender */

        cardSender.textContent =
            "Someone Special";


        /* Reset style */

        selectedStyle =
            "Sweet";


        styleButtons.forEach(
            function (button) {

                button.classList.remove(
                    "selected"
                );

                if (
                    button.dataset.style ===
                    "Sweet"
                ) {

                    button.classList.add(
                        "selected"
                    );

                }

            }
        );


        /* Reset theme */

        selectedTheme =
            "pink";


        themeButtons.forEach(
            function (button) {

                button.classList.remove(
                    "selected"
                );

                if (
                    button.dataset.theme ===
                    "pink"
                ) {

                    button.classList.add(
                        "selected"
                    );

                }

            }
        );


        birthdayCard.classList.remove(
            "theme-blue",
            "theme-purple",
            "theme-gold"
        );

        birthdayCard.classList.add(
            "theme-pink"
        );


        birthdayCard.classList.remove(
            "celebrate"
        );


        /* Remove saved data */

        localStorage.removeItem(
            "birthdayData"
        );


        /* Back to top */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        setTimeout(
            function () {

                nameInput.focus();

            },
            500
        );


        showToast(
            "Ready to create a new birthday wish! 🎂"
        );

    }
);


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveBirthdayData(
    name,
    sender,
    relationship,
    wish
) {

    const data = {

        name: name,

        sender: sender,

        relationship:
            relationship,

        style:
            selectedStyle,

        theme:
            selectedTheme,

        wish:
            wish

    };


    try {

        localStorage.setItem(
            "birthdayData",
            JSON.stringify(data)
        );

    } catch (error) {

        console.log(
            "Could not save birthday data."
        );

    }

}


/* =====================================================
   LOAD SAVED DATA
   ===================================================== */

function loadBirthdayData() {

    const saved =
        localStorage.getItem(
            "birthdayData"
        );


    if (!saved) {
        return;
    }


    try {

        const data =
            JSON.parse(saved);


        if (data.name) {

            nameInput.value =
                data.name;

            previewName.textContent =
                data.name + " 💖";

        }


        if (data.sender) {

            senderInput.value =
                data.sender;

            cardSender.textContent =
                data.sender;

        }


        if (data.relationship) {

            relationshipInput.value =
                data.relationship;

            cardRelationship.textContent =
                data.relationship;

        }


        if (data.wish) {

            wishText.textContent =
                data.wish;

        }


        if (data.style) {

            selectedStyle =
                data.style;


            styleButtons.forEach(
                function (button) {

                    button.classList.remove(
                        "selected"
                    );


                    if (
                        button.dataset.style ===
                        data.style
                    ) {

                        button.classList.add(
                            "selected"
                        );

                    }

                }
            );

        }


        if (data.theme) {

            selectedTheme =
                data.theme;


            birthdayCard.classList.remove(
                "theme-pink",
                "theme-blue",
                "theme-purple",
                "theme-gold"
            );


            birthdayCard.classList.add(
                "theme-" +
                data.theme
            );


            themeButtons.forEach(
                function (button) {

                    button.classList.remove(
                        "selected"
                    );


                    if (
                        button.dataset.theme ===
                        data.theme
                    ) {

                        button.classList.add(
                            "selected"
                        );

                    }

                }
            );

        }

    } catch (error) {

        console.log(
            "Saved birthday data could not be loaded."
        );

        localStorage.removeItem(
            "birthdayData"
        );

    }

}


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}


/* =====================================================
   CELEBRATION SYSTEM
   ===================================================== */

function createCelebration() {

    const container =
        document.createElement(
            "div"
        );


    container.style.position =
        "fixed";

    container.style.inset =
        "0";

    container.style.pointerEvents =
        "none";

    container.style.zIndex =
        "9998";

    container.style.overflow =
        "hidden";


    document.body.appendChild(
        container
    );


    const emojis = [
        "🎈",
        "💕",
        "💖",
        "✨",
        "🎉",
        "🎂"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        item.style.position =
            "absolute";


        item.style.left =
            Math.random() * 100 +
            "%";


        item.style.top =
            "-50px";


        item.style.fontSize =
            18 +
            Math.random() * 20 +
            "px";


        item.style.transition =
            "transform 4s linear, opacity 4s linear";


        container.appendChild(
            item
        );


        setTimeout(
            function () {

                item.style.transform =
                    `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;

                item.style.opacity =
                    "0";

            },
            50
        );

    }


    setTimeout(
        function () {

            container.remove();

        },
        4500
    );

}


/* =====================================================
   BIRTHDAY MUSIC
   No MP3 folder is required.
   ===================================================== */

let audioContext =
    null;

let masterGain =
    null;

let musicTimer =
    null;

let musicPlaying =
    false;

let musicPaused =
    false;


/* =====================================================
   SETUP AUDIO
   ===================================================== */

function setupAudio() {

    if (audioContext) {
        return;
    }


    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {

        alert(
            "Your browser does not support birthday music."
        );

        return;

    }


    audioContext =
        new AudioContext();


    masterGain =
        audioContext.createGain();


    masterGain.gain.value =
        Number(
            volumeControl.value
        );


    masterGain.connect(
        audioContext.destination
    );

}


/* =====================================================
   PLAY NOTE
   ===================================================== */

function playNote(
    frequency,
    startTime,
    duration
) {

    if (!audioContext) {
        return;
    }


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0.001,
        startTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.12,
        startTime + 0.03
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        startTime + duration
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        masterGain
    );


    oscillator.start(
        startTime
    );


    oscillator.stop(
        startTime + duration
    );

}


/* =====================================================
   PLAY BIRTHDAY MELODY
   ===================================================== */

function playBirthdayMusic() {

    setupAudio();


    if (!audioContext) {
        return;
    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    const melody = [

        264,
        264,
        297,
        264,
        352,
        330,

        264,
        264,
        297,
        264,
        396,
        352

    ];


    const now =
        audioContext.currentTime;


    melody.forEach(
        function (
            note,
            index
        ) {

            playNote(
                note,
                now +
                    index * 0.35,
                0.3
            );

        }
    );


    musicTimer =
        setTimeout(
            function () {

                if (
                    musicPlaying &&
                    !musicPaused
                ) {

                    playBirthdayMusic();

                }

            },
            melody.length *
            350
        );

}


/* =====================================================
   MUSIC PLAY
   ===================================================== */

musicButton.addEventListener(
    "click",
    function () {

        setupAudio();


        if (!audioContext) {
            return;
        }


        musicPlaying =
            true;

        musicPaused =
            false;


        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume();

        }


        playBirthdayMusic();


        musicButton.textContent =
            "🔊 Playing";


        musicButton.classList.add(
            "playing"
        );

    }
);


/* =====================================================
   MUSIC PAUSE
   ===================================================== */

pauseButton.addEventListener(
    "click",
    function () {

        if (
            !audioContext ||
            !musicPlaying
        ) {

            return;

        }


        audioContext.suspend();


        musicPaused =
            true;


        musicButton.textContent =
            "▶ Resume";

    }
);


/* =====================================================
   MUSIC STOP
   ===================================================== */

stopButton.addEventListener(
    "click",
    function () {

        musicPlaying =
            false;

        musicPaused =
            false;


        clearTimeout(
            musicTimer
        );


        musicTimer =
            null;


        if (audioContext) {

            audioContext.suspend();

        }


        musicButton.textContent =
            "▶ Play";


        musicButton.classList.remove(
            "playing"
        );

    }
);


/* =====================================================
   VOLUME
   ===================================================== */

volumeControl.addEventListener(
    "input",
    function () {

        setupAudio();


        if (masterGain) {

            masterGain.gain.value =
                Number(
                    volumeControl.value
                );

        }

    }
);


/* =====================================================
   LOAD DATA WHEN APP STARTS
   ===================================================== */

loadBirthdayData();
