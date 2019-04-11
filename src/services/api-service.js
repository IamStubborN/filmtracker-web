export default class ApiService {

    baseUrl = "http://filmtracker-api.com:5555";

  // Api v1 functions

    searchByName = (name) => {
        return fetch(`${this.baseUrl}/api/v1/films/filter?name=${name}`,
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

  getApiOverview = () => {
    return fetch(`${this.baseUrl}/api/v1/`,
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
    return fetch(`${this.baseUrl}/api/v1/films/page/${page}`,
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
        return fetch(`${this.baseUrl}/api/v1/films/film/${ID}`,
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
    return fetch(`${this.baseUrl}/users/auth/signin/`,
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
    return fetch(`${this.baseUrl}/users/auth/signup/`,
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