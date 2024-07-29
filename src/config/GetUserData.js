import Cookies from 'js-cookie';
import axios from 'axios';
import config from './config';

async function GetUserData (){

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
              return response.data.user;
            } else {
              console.log("Failed to fetch user information");
            }
          } catch (error) {
            console.error("Error fetching user information:", error);
          }
        }
}

export default GetUserData;