import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config';
import axios from 'axios';
import Cookies from 'js-cookie';

function AdminProtected({ Component }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate(); 

  const token = Cookies.get('token'); 

  useEffect(() => {
    const checkAdmin = async () => {
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        const response = await axios.post(
          `${config.BASE_URL}/Admin/user`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setIsAuthorized(true);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking admin details:', error);
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // or a spinner
  }

  return isAuthorized ? <Component /> : null;
}

export default AdminProtected;
