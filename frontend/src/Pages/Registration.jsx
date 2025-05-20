import React from "react";
import "./Registration.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Registration({ name, setName, birthday, setBirthday, email, setEmail, onNext }) {

    const handleContinue = () => {
    if (!name || !birthday || !email) {
      toast.error("Please complete all fields", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored"
      });
      return;
    }

    toast.success("Registration complete!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored"
    });

    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="regis-container">
      <header className="regis-container-app-name">MULAH</header>

      <main className="regis-main">
        <h1>Registration</h1>
        <p>Please fill up your details</p>

        <input
          type="text"
          placeholder="Enter your name"
          className="regis-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter your birthday"
          className="regis-input"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="regis-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="continue-btn"  onClick={handleContinue}>Continue</button>
      </main>

      <footer className="powered-by">
        Powered by <a href="https://mulahrewards.com" target="_blank" rel="noreferrer">MulahRewards.com</a>
      </footer>
      
      <ToastContainer />
    </div>
  );
}
