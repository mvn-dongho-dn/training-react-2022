import React, { useEffect } from 'react';
import { apiUserGetList } from '../../../api/user/user.api';

export default function Products() {

  useEffect(() => {
    apiUserGetList().then(e => {
      console.log(e);
    });

    console.log(process.env.REACT_APP_TEST);
  }, []);

  return (
    <div>Products</div>
  )
}
