const API_ROOT = `http://localhost:3000/api/v1`;

const headers = () =>  {return {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: localStorage.getItem('token')
}};

const getPaintings = () => {
  return fetch(`${API_ROOT}/paintings/`, { headers: headers() }).then(res =>
    res.json()
  );
};

const login = data => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  paintings: {
    getPaintings
  }
};
