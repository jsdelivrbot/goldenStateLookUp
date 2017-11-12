import axios from 'axios';

const ROOT_URL = 'https://demo5689530.mockable.io/public/players';

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

//HTTP request to server
export function fetchPlayers(email) {
  const request = axios.get(ROOT_URL)
    .then((response) => {
      if (response.data[email] === undefined) {
        alert('Sorry Invalid Email .. E-Mail Format: scurry@warriors.com');
      } else {
        return response.data[email];
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    type: FETCH_PLAYERS,
    payload: request,
  };
}
