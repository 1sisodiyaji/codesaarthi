import Cookies from 'js-cookie';
import axios from 'axios';
import config from './config';

const getIdFromToken = async () => {
  const token = Cookies.get('Codesaarthi-token');
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
        const user = response.data.user;
        return user;
      } else {
        console.log("Failed to fetch user information");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
      return null;
    }
  }
  return null;
};

export default getIdFromToken;
