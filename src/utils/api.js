import axios from "axios";

 
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params : {hl : "en" , gl : "US"},
    headers: {
      'X-RapidAPI-Key': '759d3aa29cmshd930fd3d09616eap11a249jsn9956755acdb8',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url) => {
      const {data} = await axios.get(`${BASE_URL}/${url}`,options)
      return data;
  }
  
 