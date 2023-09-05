import { useState } from 'react';

export function setToken(userToken) {
  localStorage.setItem('userToken', JSON.stringify(userToken));
}
export function useToken() {
  function getToken() {
    const tokenString: string | null = localStorage.getItem('userToken');
    const userToken = tokenString !== null ? JSON.parse(tokenString) : null;
    return userToken;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('userToken', JSON.stringify(userToken));
    setToken(userToken);
  };
  return {
    setToken: saveToken,
    token,
  };
}
