import WebTorrent from 'webtorrent'
export default class ApiService {

    // Play torrent

    playTorrent = (magnetLink) => {
        const client = new WebTorrent();

        const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent.js'
        // const torrentId = 'magnet:?xt=urn:btih:8af6650014ec32d9bb5ffe4a0aca2d99f8dbcd94&dn=rutor.info&tr=udp://opentor.org:2710&tr=udp://opentor.org:2710&tr=http://retracker.local/announce'
        console.log(torrentId);
        client.add(torrentId, function (torrent) {
            console.log(torrentId);
            console.log(torrent);
            // Torrents can contain many files. Let's use the .mp4 file
            var file = torrent.files.find(function (file) {
                console.log(file);
                return file.name.endsWith(".mp4")
            });
            file.appendTo('#player') // append the file to the DOM
        });
    };

    // YouTube

    searchTrailer = (name) => {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&maxResults=1&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => data.items[0].id.videoId);
    };

  // Api v1 functions

  getApiOverview = () => {
    return fetch('http://localhost:5555/api/v1/',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include",
          method: 'GET',

        })
        .then(res => res.json())
  };

  getFilmsByPage = (page) => {
    return fetch('http://localhost:5555/api/v1/films/page/' + page,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include",
          method: 'GET',

        })
        .then(res => res.json())
  };

    getFilmByID = (ID) => {
        return fetch('http://localhost:5555/api/v1/films/film/' + ID,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                method: 'GET',

            })
            .then(res => res.json())
    };


  // Auth functions

  signIn = (login, password) => {
    return fetch('http://localhost:5555/users/auth/signin/',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include",
          method: 'POST',
          body: JSON.stringify(
              {
                login: login,
                password: password
              })
        })
        .then(res => res.json())
  };

  signUp = (login, password) => {
    return fetch('http://localhost:5555/users/auth/signup/',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include",
          method: 'POST',
          body: JSON.stringify(
              {
                login: login,
                password: password
              })
        })
        .then(res => res.json())
  };
}