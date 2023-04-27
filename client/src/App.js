import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/login";
import Main from "./pages/Main/Main";
const App = () => {

  const [token,setToken] = useState(false);

  useEffect(()=>{
    // console.log(JSON.parse(sessionStorage.getItem("USER_LOGIN")))
  },[token])


  return (
    <div>
      {!JSON.parse(sessionStorage.getItem("USER_LOGIN"))?.user
        ?.access_token ? (
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Login token={token} setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/auth/signin" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Main setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
