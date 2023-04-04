import axios from "axios";
import { Logger } from "sass";

export default function usersRequest()   {
    const BASE_URL = 'https://randomuser.me/'

    const response =   axios.get(BASE_URL)
  
    // .then(response => response.json() )
    // console.log(response.json())
    // .then(response => console.log(response.json()))

    
    // .then(response => console.log(response.json()))
   
    
}