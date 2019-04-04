export default class ApiService {

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