import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import config from './config';
import axios from 'axios';

function AdminProtected(props) {
    const {Component}=props;
    const navigate=useNavigate();
    const [admin, setAdmin] = useState(false);

    const token = sessionStorage.getItem("token");
    useEffect(() => {
      if (token === null) {
      } else {
        const GetAdminDetails = async (req, res) => {
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
            setAdmin(true);
          }
        };
        GetAdminDetails();
      }
    }, [token]);

    if(!admin){
        navigate("/login");
    }
  return (
    <div>
        <Component/>
    </div>
  )
}

export default AdminProtected;