import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className='vh-100 text-success text-center py-lg-5 p-2  design' style={{backgroundColor:'#1E1E1E'}}> <h1>Loading...</h1></div>;
  }

  if (error) {
    return <div className='vh-100 text-danger text-center py-lg-5 p-2 design' style={{backgroundColor:'#1E1E1E'}}> <h1>Error: {error}</h1></div>;
  }

  return (
    <>
    <Helmet>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="React Based Project , Learn React based project , React projects , Top 10 Projects in React ., React fetyching user from api testing." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Projects/react/userList" />
        <meta name="description" content="It is basically an react based Projects , Where you can fetch data from a url to user ." />
        <title>React Projects | CodeSaarthi</title>
        <meta property="og:title" content=" React Projects| CodeSaarthi" />
        <meta property="og:description" content="t is basically an react based Projects ,  Where you can fetch data from a url to user ." />
        <meta property="og:image" content="https://codesaarthi.com/img/reactUserList.jpg" />
        <meta property="og:type" content="https://codesaarthi.com/Projects/react/userList" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
    
    <div className='container-fluid design py-lg-5 p-2 vh-100 text-light' style={{backgroundColor:'#1E1E1E'}}>
      <h1 className='text-warning'>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default UserList;
