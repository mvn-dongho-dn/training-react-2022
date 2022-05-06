import React, { useEffect, useState } from 'react'
import { apiUserGetList } from '../../../api/user/user.api';

export default function Products() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiUserGetList().then(e => {
      setUsers(e.data.data);
    });
    console.log(process.env.REACT_APP_ENV);
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>Products

      <ul>
        {users && users.map(e => <li key={e.id}>{e.email}</li>)}
      </ul>
    </div>
  )
}
