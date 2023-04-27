import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = ({setToken}) => {

  const navigate = useNavigate();

  const signOut = () => {
    sessionStorage.removeItem("USER_LOGIN");
    if (
      !JSON.parse(sessionStorage.getItem("USER_LOGIN"))?.user?.access_token
    ) {
      setTimeout(() => {
        setToken(false)
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center ">
      <h1 className="text-3xl m-5">Welcome to the App</h1>
      <button className="bg-teal-700 py-2 px-8 rounded texl-xl text-white"onClick={signOut}>Logout</button>
    </div>
  )
}

export default Main