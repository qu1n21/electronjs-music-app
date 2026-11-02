
# ElectronJS Music Player App

## Description

A simple desktop music player built using Electron.js. The application plays locally stored MP3 files and provides basic music playback controls.

## Features

- Play and pause music
- Skip forwards and backwards between tracks
- Rewind and fast-forward through a track
- Seek to different points using the playback timeline
- Display track information and cover artwork

## Technologies
- Electron.js
- HTML
- CSS
- JavaScript
- Node.js

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
    ```
    npm install
    ```
4. Start the application:
   ```
   npm start
   ``` 
A window should open with the music player.

## Additional info
The application currently includes a small selection of classical music recordings. Music files are stored locally as MP3s.

To extend the playlist, add your own MP3 files to the music folder and update the song array in the JavaScript file, following the existing format.

## Music and Asset Credits
The included music recordings and artwork are sourced from third-party creators and archives. Their respective sources and licences are credited below.
### Für Elise
- Composer: Ludwig van Beethoven
- Performer: V. Gao
- Licence: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
- Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FurElise.ogg)

### The Entertainer
- Composer: Scott Joplin
- Performer: Adam Cuerden
- Licence: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Entertainer_-_1902_-_By_Scott_Joplin.ogg)

### Moonlight Sonata
- Composer: Ludwig van Beethoven
- Performer: Not specified
- Copyright status: Public domain (Public Domain Mark 1.0)
- Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moonlight_Sonata.ogg)

### Gymnopédie No. 1
- Composer: Erik Satie
- Performer: Not specified
- Licence: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
- Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gymnopedie_No._1..ogg)

## Future Improvements
- Add a slider to adjust volume within the application.
- Add a "library" to see all current songs available.
- Introduce a more reliable way of storing song information, such as a database.
- Explore alternative methods of storing and accessing music files, such as cloud storage or an API.
- Automatically retrieve track information rather than entering it manually.
