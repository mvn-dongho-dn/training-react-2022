import React, { useState, useCallback } from 'react'
import Lift from './Lift'

export default function Lifts(props) {
  const [toggle, setToggle] = useState(false);

  // const handleRemove = () => {
  //   console.log('as');
  // };
  const handleRemove = useCallback(() => {
    return () => {
      console.log('as');
    };
  }, []);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>alo</button>
      {toggle.toString()}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Lift onRemove={handleRemove} />
        </tbody>
      </table>
    </>
  )
}
