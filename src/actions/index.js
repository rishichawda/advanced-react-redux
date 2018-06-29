import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from 'actions/types';
import Axios from 'axios';

export function saveComment(comment) { 
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
 }

 export function fetchComments() { 
     const request = Axios.get('https://jsonplaceholder.typicode.com/comments');

     return {
         type: FETCH_COMMENT,
         payload: request
     }
  }

  export function changeAuthenticationState(LoggedIn) { 
      return {
          type: CHANGE_AUTH,
          payload: LoggedIn
      }
   }