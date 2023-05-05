import axios from 'axios';
import qs from 'qs';

const DOMAIN = 'http://localhost:8088';

export const request = async (method, url, data) => {
    return await axios({
          method,
          url : `${DOMAIN}${url}`,
          data : qs.stringify(data),
          headers: {
            "Content-Type": "application/json"
          },
          xhrFields : {
            withCredentials : true
          }
      })
      .then(res => res.data)
      .catch(error => console.log(error));
};
