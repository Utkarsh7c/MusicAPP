// import axios from 'axios'
// export async  function getSongs(artistName){
//     const URL= `  https://itunes.apple.com/search?term=${artistName}&entity=musicVideo`
//         const response =await axios.get(URL);
//         console.log(response.data['results']);
//         return response.data['results'];

// }
import axios from 'axios';

export async function getSongs(termName) {
  const URL = `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;

  try {
    const response = await axios.get(URL);
    return response.data['results'];
  } catch (error) {
    console.error('Error fetching songs:', error);
    return []; // Return an empty array in case of an error
  }
}
