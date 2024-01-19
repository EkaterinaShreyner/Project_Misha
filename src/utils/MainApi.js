export const BASE_URL = "http://localhost:4000";
// export const BASE_URL = "https://api.my-movies.nomoredomainsicu.ru";


// получить идеи
export const getCards = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      // authorization : `Bearer ${token}`,
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// создать идею
export const createNewCard = ({title, chance}) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, chance})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// лайк
export const likeCard = ({likes}) => {
  return fetch(`${BASE_URL}/other-ideas`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({likes})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}

// дислайк
export const dislikeCard = ({dislikes}) => {
  return fetch(`${BASE_URL}/other-ideas`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dislikes})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(res.status));
}