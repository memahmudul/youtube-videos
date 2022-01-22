import axios from "axios";

const KEY = 'AIzaSyDiBPU1lMCJwP2Z2hhJbl_ASswVJtgofNw';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
   params : {
       part:'snippet',
       maxResults:5,
       key: KEY,
      
   }

  
});

