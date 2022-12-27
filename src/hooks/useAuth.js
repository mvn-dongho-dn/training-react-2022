import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = useState(!!user);
  const navigate = useNavigate();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({email}));
        setUser({email});
        setIsLogged(true);
        navigate('/account');
        res({email});
      }, 1000);
    });
  }

  const logout = () => {
    localStorage.removeItem('user');
    setIsLogged(false);
    navigate('/');
  }

  return {isLogged, login, logout};
}

export default useAuth;
