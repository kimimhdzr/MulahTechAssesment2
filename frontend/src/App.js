import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import React, { useState } from "react";

function App() {
    const [page, setPage] = useState(1);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  return (
      <>
      {page === 1 && (
        <Login phone={phone} setPhone={setPhone} onNext={() => setPage(2)} />
      )}
      {page === 2 && (
        <Registration
          name={name}
          setName={setName}
          birthday={birthday}
          setBirthday={setBirthday}
          email={email}
          setEmail={setEmail}
          onNext={() => setPage(3)}
        />
      )}
      {page === 3 && (
        <Profile phone={phone} name={name} birthday={birthday} email={email} />
      )}
    </>
  );
}

export default App;
