
const songs = [
    { name: "Fur Elise", link: "./music/fur-elise-ludwig-van-beethoven.ogg", cover: "./music/fur-elise-cover.jpg", artist: "Ludwig van Beethoven" },
    { name: "Moonlight Sonata", link: "./music/moonlight-sonata-ludwig-van-beethoven.ogg", cover: "./music/moonlight-sonata-cover.jpg", artist: "Ludwig van Beethoven" },
    { name: "The Entertainer", link: "./music/the-entertainer-scott-joplin.mp3", cover: "./music/the-entertainer-cover.jpg", artist: "Scott Joplin" },
    { name: "Gymnopedie No.1", link: "./music/gymnopedie-no.1-erik-satie.ogg", cover: "./music/gymnopedie-no-1-cover.jpg", artist: "Erik Satie" }
]

let currentSong = "";
let currentTimeValue = null;
const songAudio = document.querySelector("#song-audio")
document.addEventListener("DOMContentLoaded", () => {
    const cover = document.querySelector("#song-cover")
    const search = document.querySelector('#song-input')
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
                    listItem.style.display = 'block';
                    hasMatches = true;
                } else {
                    listItem.style.display = 'none';
                }
            });

            suggestions.style.display = hasMatches ? 'block' : 'none';

        })
    }

    const progress = document.querySelector('#song-progress')
    const progress2 = document.querySelector('#song-progress2')

    progress.min = 0;
    progress2.min = 0;
    const currentSongTime = document.querySelector('#currentTime');
    const totalSongTime = document.querySelector('#totalTime');
    setInterval(() => {
        if (songAudio) {
            progress.max = songAudio.duration;
            progress.value = songAudio.currentTime;
            progress.setAttribute('value', songAudio.currentTime)
            progress2.max = songAudio.duration;
            progress2.value = songAudio.currentTime;
            progress2.setAttribute('value', songAudio.currentTime)
            secsToMins(currentSongTime, songAudio.currentTime)
            secsToMins(totalSongTime, songAudio.duration)
        }

        if (progress.max === progress.value || currentSongTime.textContent === totalSongTime.textContent) {
            nextSongFunc();
        }
    }, 1000)

    progress.oninput = function () {
        songAudio.currentTime = this.value
        console.log(songAudio.currentTime, this.value)
    }
    progress2.oninput = function () {
        songAudio.currentTime = this.value
        console.log(songAudio.currentTime, this.value)
    }
})

function secsToMins(element, seconds) {
    const mins = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(0);
    const paddedSecs = String(remainingSeconds).padStart(2, '0')
    element.textContent = `${mins}:${paddedSecs}`
    if (element.textContent.includes(NaN)) {
        element.textContent = "--:--"
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
        songAudio.play();
    } else {
        playImg.src = 'images/playButton.png'
        playImg2.src = 'images/playButton.png'
        songAudio.pause();
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


document.addEventListener('keydown', function (e) {
    if (songName.textContent) {
        if (e.key === " ") {
            if (document.activeElement !== search) {
                console.log("pause/play")
                playButton.click();
            }
        }
    }
})


function nextSongFunc() {
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
