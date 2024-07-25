import Cookies from 'js-cookie';
import axios from 'axios';
import config from './config';

async function GetIdFromToken (){

        const token =  Cookies.get('token');  
        if (token) {
          try {
            const response = await axios.post(
              `${config.BASE_URL}/api/user`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (response.data.status === "success") { 
              return response.data.user._id;
            } else {
              console.log("Failed to fetch user information");
            }
          } catch (error) {
            console.error("Error fetching user information:", error);
          }
        }
}

export default GetIdFromToken;