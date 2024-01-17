export const BASE_URL = "http://localhost:4000";
// export const BASE_URL = "https://api.my-movies.nomoredomainsicu.ru";


// получить идеи
export const getCards = () => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      // authorization : `Bearer ${token}`,
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// создать идею
export const register = (text) => {
  return fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}