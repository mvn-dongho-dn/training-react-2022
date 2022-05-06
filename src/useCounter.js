import { useState } from 'react'

export default function useCounter() {
  const [count, setCount] = useState(0);

  const inC = () => {
    setCount(count + 1);
  }

  const deC = () => {
    setCount(count - 1);
  }

  return {count, inC, deC};
}
