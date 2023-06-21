const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY = 'live_mf57CBssdwkpCTgrPlzmgbxRI0rP2iUv5nIBiAm1pdJQ9OSHLPuMunDQOaLKIbD7';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



export const fetchBreeds = function (){
    return fetch(`${BASE_URL}breeds?api-key=${API_KEY}`).
    then(response => {
        if(!response.ok){
                  Notify.failure('😿Oops! Something went wrong! Try reloading the page!', {
          timeout: 6000,
          width: '700px',
          borderRadius: '50px',
          clickToClose: true,
          position: 'center-top',
          fontSize: '20px',   
        })  
        }
        return response.json()
    })
}

  

export const fetchCatByBreed = function (breedId){

  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
  .then(response => {
      if(!response.ok){
        Notify.failure('😿Oops! Something went wrong! Try reloading the page!', {
          timeout: 6000,
          width: '700px',
          borderRadius: '50px',
          clickToClose: true,
          position: 'center-top',
          fontSize: '20px',   
        });
      }
      return response.json()
  })
  .catch(err => console.log(err));
    
}



