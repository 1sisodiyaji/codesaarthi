import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import config from './config';

function AdminProtected({ Component }) { // Destructure the Component prop here
    const navigate = useNavigate();
    const token = Cookies.get('token');

    useEffect(() => {
        if (token === null || !token) {
            navigate('/login');
            return;
        }

        const getAdminDetails = async () => {
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

                if (response.data.status !== 'success') {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error fetching admin details:', error);
                navigate('/login');
            }
        };

        getAdminDetails();
    }, [token, navigate]);

    return <Component />;
}

export default AdminProtected;
