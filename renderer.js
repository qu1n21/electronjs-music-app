// console.log("renderer loaded")
// const info = document.getElementById('info')
// info.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response)

// }

// func()

const songs = [
    { name: "Lover Girl", link: "./music/lover-girl-laufey.mp3", cover: "./music/lover-girl-cover.jpg", artist: "Laufey" },
    { name: "Kekka Orai", link: "./music/kekka-orai.mp3", cover: "./music/kekka-orai-cover.png", artist: "Kocchi no Kento" },
    { name: "96000", link: "./music/96000.mp3", cover: "./music/96000.jpg", artist: "In the Heights" },
    { name: "Alexander Hamilton", link: "./music/hamilton/1-alexander-hamilton.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Aaron Burr, Sir", link: "./music/hamilton/2-aaron-Burr-sir.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "My Shot", link: "./music/hamilton/3-my-shot.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Story of Tonight", link: "./music/hamilton/4-the-story-of-tonight.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Schuyler Sisters", link: "./music/hamilton/5-the-schuyler-sisters.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Farmer Refuted", link: "./music/hamilton/6-farmer-refuted.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "You'll Be Back", link: "./music/hamilton/7-youll-be-back.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Right Hand Man", link: "./music/hamilton/8-right-hand-man.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "A Winter's Ball", link: "./music/hamilton/9-a-winters-ball.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Helpless", link: "./music/hamilton/10-helpless.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Satisfied", link: "./music/hamilton/11-satisfied.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Story of Tonight (Reprise)", link: "./music/hamilton/12-the-story-of-tonight(reprise).mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Wait For It", link: "./music/hamilton/13-wait-for-It.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Stay Alive", link: "./music/hamilton/14-stay-alive.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Ten Duel Commandments", link: "./music/hamilton/15-ten-duel-commandments.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Meet Me Inside", link: "./music/hamilton/16-meet-me-inside.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "That Would Be Enough", link: "./music/hamilton/17-that-would-be-enough.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Guns and Ships", link: "./music/hamilton/18-guns-and-ships.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "History Has Its Eyes on You", link: "./music/hamilton/19-history-has-its-eyes-on-you.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Yorktown (The World Turned Upside Down)", link: "./music/hamilton/20-yorktown(the-world-turned-upside-down).mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "What Comes Next?", link: "./music/hamilton/21-what-comes-next.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Dear Theodosia", link: "./music/hamilton/22-dear-theodosia.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Non-Stop", link: "./music/hamilton/23-non-stop.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "What'd I Miss", link: "./music/hamilton/24-whatd-i-miss.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Cabinet Battle #1", link: "./music/hamilton/25-cabinet-battle-1.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Take a Break", link: "./music/hamilton/26-take-a-break.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Say No To This", link: "./music/hamilton/27-say-no-to-this.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Room Where it Happens", link: "./music/hamilton/28-the-room-where-it-happens.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Schuyler Defeated", link: "./music/hamilton/29-schuyler-defeated.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Cabinet Battle #2", link: "./music/hamilton/30-cabinet-battle-2.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Washington On Your Side", link: "./music/hamilton/31-washington-on-your-side.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "One Last Time", link: "./music/hamilton/32-one-last-time.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "I Know Him", link: "./music/hamilton/33-i-know-him.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Adams Administration", link: "./music/hamilton/34-the-adams-administration.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "We Know", link: "./music/hamilton/35-we-know.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Hurricane", link: "./music/hamilton/36-hurricane.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Reynolds Pamphlet", link: "./music/hamilton/37-the-reynolds-pamphlet.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Burn", link: "./music/hamilton/38-burn.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Blow Us All Away", link: "./music/hamilton/39-blow-us-all-away.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Stay Alive (Reprise)", link: "./music/hamilton/40-stay-alive(reprise).mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "It's Quiet Uptown", link: "./music/hamilton/41-its-quiet-uptown.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The Election of 1800", link: "./music/hamilton/42-the-election-of-1800.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Your Obedient Servant", link: "./music/hamilton/43-your-obedient-servant.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Best of Wives and Best of Women", link: "./music/hamilton/44-best-of-wives-and-best-of-women.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "The World Was Wide Enough", link: "./music/hamilton/45-the-world-was-wide-enough.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Who Lives, Who Dies, Who Tells Your Story", link: "./music/hamilton/46-who-lives-who-dies-who-tells-your-story.mp3", cover: "./music/hamilton/hamilton-cover.jpg", artist: "Hamilton" },
    { name: "Voyaging Star's Farewell", link: "./music/voyaging-stars-farewell.mp3", cover: "./music/voyaging-stars-farewell-cover.png", artist: "Wuthering Waves" }
]

let currentSong = "";
let currentTimeValue = null;
const songAudio = document.querySelector("#song-audio")
document.addEventListener("DOMContentLoaded", () => {
    const cover = document.querySelector("#song-cover")
    const search = document.querySelector('#song-input')
    // console.log(cover)
    // let coverImg = document.createElement("img")
    const coverImg = document.querySelector('#cover')
    const songName = document.querySelector('#song-name')
    const artistName = document.querySelector('#artist-name')
    const smallCover = document.querySelector('#small-song-cover')
    const smallCoverImg = document.querySelector('#smallCover')
    const smallSongName = document.querySelector('#small-song-name')
    const smallArtistName = document.querySelector('#small-artist-name')
    const bottomContainer = document.querySelector('#bottomContainer')
    const container = document.querySelector(".container")
    const playImg = document.querySelector('#play-img')
    // coverImg.src = "./music/lover-girl-cover.jpg";
    // coverImg.alt = "loverGirlCover"
    // cover.append(coverImg)
    // songAudio.src = "./music/lover-girl-laufey.mp3"
    // songName.textContent = "lover girl"

    const suggestions = document.querySelector('#suggestions');
    for (let song of songs) {
        // console.log(song)
        // console.log(songs)
        const list = document.createElement("a")
        const listCover = document.createElement("img")
        list.classList.add("search-names")
        list.href = "#"
        listCover.src = song.cover
        listCover.alt = song.name
        list.appendChild(listCover)
        // console.log("coverImg:", cover)
        // console.log("coverList:", list)
        list.append(song.name)
        suggestions.append(list)
        list.addEventListener('click', () => {
            coverImg.src = song.cover;
            smallCoverImg.src = song.cover
            songName.textContent = song.name;
            smallSongName.textContent = song.name;
            artistName.textContent = song.artist;
            smallArtistName.textContent = song.artist
            cover.append(coverImg)
            currentSong = song;
            // console.log(cover)
            songAudio.src = song.link;
            songAudio.currentTime = 0;
            search.value = "";
            suggestions.style.display = 'none'
            bottomContainer.style.display = 'none'
            container.style.display = 'block';
            songAudio.play();
            playImg.src = 'images/pauseButton.png'
            playImg2.src = 'images/pauseButton.png'
        })
        search.addEventListener('click', () => {
            if (songName.textContent) {
                bottomContainer.style.display = 'flex';
            }
            container.style.display = 'none';

        })
        search.addEventListener('input', function () {
            container.style.display = 'none';
            const inputValue = this.value.trim().toLowerCase();
            if (inputValue.length === 0) {
                suggestions.style.display = 'none'
                return;
            }

            const suggestionItems = suggestions.querySelectorAll('a');

            let hasMatches = false;

            suggestionItems.forEach(function (listItem) {
                const textValue = listItem.textContent.toLowerCase();
                let displayStyle;
                if (textValue.includes(inputValue)) {
                    // displayStyle = 'block';
                    listItem.style.display = 'block';
                    hasMatches = true;
                } else {
                    // displayStyle = 'none';
                    listItem.style.display = 'none';
                }
                // listItem.style.display = displayStyle;
                // hasMatches = hasMatches || displayStyle === 'block';
            });

            suggestions.style.display = hasMatches ? 'block' : 'none';

        })
    }

    //suggestions grid vs list since there are so many

    const progress = document.querySelector('#song-progress')
    const progress2 = document.querySelector('#song-progress2')

    progress.min = 0;
    progress2.min = 0;
    // progress.max = songAudio.duration
    // progress.value = songAudio.currentTime;
    // const songDurationSection = document.querySelector('#duration');
    const currentSongTime = document.querySelector('#currentTime');
    const totalSongTime = document.querySelector('#totalTime');
    setInterval(() => {
        // console.log(totalSongTime)
        // if(totalSongTime.textContent.includes(NaN)) {
        //     totalSongTime.textContent = "00:00";

        // }
        if (songAudio) {
            progress.max = songAudio.duration;
            progress.value = songAudio.currentTime;
            progress.setAttribute('value', songAudio.currentTime)
            // console.log(progress.value)
            progress2.max = songAudio.duration;
            progress2.value = songAudio.currentTime;
            progress2.setAttribute('value', songAudio.currentTime)
            // console.log(progress)
            // console.log(progress.value, songAudio.currentTime)
            // currentSongTime.textContent = secsToMins(songAudio.currentTime);  
            secsToMins(currentSongTime, songAudio.currentTime)
            secsToMins(totalSongTime, songAudio.duration)
            // totalSongTime.textContent = songAudio.duration.toFixed(2);
        }

        // console.log(progress.value, songAudio.currentTime)
        if (progress.max === progress.value || currentSongTime.textContent === totalSongTime.textContent) {
            nextSongFunc();
            // progress.addEventListener('input', function() {
            //     console.log("x:", this.value)
            // })
            //implement fast-forward and rewind on each song
        }
        // console.log(document.activeElement.tagName)


    }, 1000)

    // if(songName.textContent) {
    progress.oninput = function () {
        songAudio.currentTime = this.value
        console.log(songAudio.currentTime, this.value)
    }
    progress2.oninput = function () {
        songAudio.currentTime = this.value
        console.log(songAudio.currentTime, this.value)
    }
    // }
})

function secsToMins(element, seconds) {
    const mins = Math.floor(seconds / 60);
    // const paddedMins = String(mins).padStart(2, '0')
    const remainingSeconds = (seconds % 60).toFixed(0);
    const paddedSecs = String(remainingSeconds).padStart(2, '0')
    element.textContent = `${mins}:${paddedSecs}`
    if (element.textContent.includes(NaN)) {
        element.textContent = "--:--"
        //set up state. let no song = true;
        //if no song, currentsongtime.textConetet = "--:--"
    }
}

const playButton = document.querySelector('#pause-play');
const smallPlayButton = document.querySelector('#pause-play2');
const playImg = document.querySelector('#play-img')
const pauseImg = document.querySelector('#pause-img')
const playImg2 = document.querySelector('#play-img2')
const pauseImg2 = document.querySelector('#pause-img2')

function playMusic() {
    if (songAudio.paused && songName.textContent) {
        playImg.src = 'images/pauseButton.png'
        playImg2.src = 'images/pauseButton.png'
        // playImg.id = 'pause-img'
        // playImg.alt = 'pause'
        songAudio.play();
        // console.log(songAudio.currentTime)
        // console.log(songAudio.duration)

    } else {
        playImg.src = 'images/playButton.png'
        playImg2.src = 'images/playButton.png'
        songAudio.pause();
        // pauseImg.id = 'play-img'
        // pauseImg.alt = 'play'
    }
}

playButton.addEventListener('click', playMusic);
smallPlayButton.addEventListener('click', playMusic);

const songName = document.querySelector('#song-name')
const artistName = document.querySelector('#artist-name')
const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#previous')
const coverImg = document.querySelector('#cover')
const smallCoverImg = document.querySelector('#smallCover')
const smallSongName = document.querySelector('#small-song-name')
const smallArtistName = document.querySelector('#small-artist-name')
const hideBottomBtn = document.querySelector('#hideBottom')
const container = document.querySelector(".container")
const search = document.querySelector('#song-input')
const suggestions = document.querySelector('#suggestions');
nextButton.addEventListener('click', nextSongFunc)

hideBottomBtn.addEventListener('click', () => {
    bottomContainer.style.display = 'none'
    container.style.display = 'block';
    search.value = "";
    suggestions.style.display = 'none'
})

// document.addEventListener('keypress', function (e) {
//     if (search.value === "" && (songName.textContent !== "" || smallSongName.textContent !== "")) {
//         console.log("v:", search.value, "c: ", songName.textContent)
//         console.log(e.key)
//         if (e.key === " ") {
//             console.log("pause/play")
//             if(search.value)
//             playButton.click();
//             // playMusic;
//         }
//     }
// })

document.addEventListener('keydown', function (e) {
    // console.log(document.activeElement === search)
    if (songName.textContent) {
        if (e.key === " ") {
            if (document.activeElement !== search) {
                // console.log(search.focus())
                console.log("pause/play")
                playButton.click();
            }
        }
    }
})


function nextSongFunc() {
    // songAudio.pause()
    const found = songs.indexOf(currentSong)
    let nextSong;
    if ((found + 1) < songs.length) {
        nextSong = songs[found + 1]
    } else {
        nextSong = songs[0]
    }
    songAudio.src = nextSong.link;
    songAudio.currentTime = 0;
    songName.textContent = nextSong.name;
    smallSongName.textContent = nextSong.name;
    coverImg.src = nextSong.cover;
    smallCoverImg.src = nextSong.cover;
    artistName.textContent = nextSong.artist;
    smallArtistName.textContent = nextSong.artist;
    currentSong = nextSong;
    songAudio.play();
    playImg.src = 'images/pauseButton.png'
    playImg2.src = 'images/pauseButton.png'
}

prevButton.addEventListener('click', () => {
    songAudio.pause();
    const found = songs.indexOf(currentSong);
    let prevSong;
    if ((found - 1) < 0) {
        prevSong = songs[0]
    } else {
        prevSong = songs[found - 1]
    }
    songAudio.src = prevSong.link;
    songAudio.currentTime = 0;
    songName.textContent = prevSong.name;
    coverImg.src = prevSong.cover
    artistName.textContent = prevSong.artist;
    currentSong = prevSong;
    songAudio.play();
    playImg.src = 'images/pauseButton.png'
    playImg2.src = 'images/pauseButton.png'
})


//suggestions grid vs list since there are so many and they take up the page -139 basically
//implement fast-forward and rewind on each song - 166 DONE
//set up state. let no song = true;
//if no song, currentSongTime.textContent = "--:--" -line 231 DONE

//set up event listeners- space for pause/play IF there is a song currently DONE
//add volume button