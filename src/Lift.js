import React, {memo} from 'react'

function Lift(props) {
  console.log(1);
  return (
    <tr>
      <td>Titlte 1</td>
      <td><button onClick={props.onRemove}>x</button></td>
    </tr>
  )
}

export default Lift