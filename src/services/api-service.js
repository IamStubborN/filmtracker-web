import WebTorrent from 'webtorrent'
export default class ApiService {

    count = 0;

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