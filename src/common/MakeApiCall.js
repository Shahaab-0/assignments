// import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';
const URL =
  'http://dev.justicepoker.com/api/v1/gameplay/available-game-table-category/?game_table_tag=2';
const makeApiRequest = () => {
  // let headers = {
  //     'Authorization': Authorization,
  //     'Cookie': 'ci_session=358v4pqnoc16q29b1ljodlmrbnkvo3fv',
  //     "X-Access-Token": token,
  // }

  let Axios = axios.create({
    baseURL: URL,
    header: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });

  return Axios;
};

export {makeApiRequest};
