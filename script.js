// Radio in the DOM

const radio = {
    stations: [
        {
            name: "z100",
            color: "blue",
            songs: [
                {
                    title: "Levitating",
                    artist: "Dua Lipa"
                },
                {
                    title: "Break My Soul",
                    artist: "Beyonce"
                }
            ]
        },

        {
            name: "Hot 97",
            color: "maroon",
            songs: [
                {
                    title: "Ojitos Lindos",
                    artist: "Bad Bunny"
                },
                {
                    title: "Crew Love",
                    artist: "Drake"
                }
            ]
        },

        {
            name: "Power 105.1",
            color: "green",
            songs: [
                {
                    title: "Smokin Out The Window",
                    artist: "Silk Sonic"
                },
                {
                    title: "My Boo",
                    artist: "Usher"
                }
            ]
        }
    ],


    currentStation: 0,


    changeStation: () => {
        let newStation;

        if (radio.currentStation === radio.stations.length - 1) {
            radio.currentStation = 0
            newStation = radio.stations[radio.currentStation]
        } else {
            radio.currentStation += 1
            newStation = radio.stations[radio.currentStation]
        }

        const song = newStation.songs[Math.floor(Math.random() * newStation.songs.length)]

        let stationEl = document.querySelector(".current-station")
        stationEl.textContent = `${newStation.name}`

        let songEl = document.querySelector(".current-song")
        songEl.textContent = `${song.title} by ${song.artist}`

        let radioEl = document.querySelector(".radio")
        radioEl.style.backgroundColor = newStation.color
    }
}

let buttonEl = document.querySelector("button")

buttonEl.addEventListener("click", radio.changeStation)

radio.changeStation()






