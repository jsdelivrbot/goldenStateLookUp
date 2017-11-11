import axios from 'axios';

const ROOT_URL = "https://demo5689530.mockable.io/public/players";

export const FETCH_PLAYERS = 'FETCH_PLAYERS'

export function fetchPlayers(email) {

    // function grabFrom(obj, email) {
    //     for(let key in obj) {
    //       if(key === email) {
    //         return obj[key]
    //       }
    //     }
    // }



    let request = axios.get(ROOT_URL)
    .then(function (response) {
    //   console.log(grabFrom(response.data, email))
        
    //   console.log(response.data[email])
        return response.data[email]
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log('reqeust', request)

    return {
        type: FETCH_PLAYERS,
        payload: request
    }
}