import React from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ phone, setPhone, onNext }) {
  const handleLogin = () => {
    if (phone.trim() === "") {
      toast.error("Please enter a phone number");
      return;
    }

    toast.success("Login successful!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });

    // Proceed to next page after a short delay
    setTimeout(() => {
      onNext();
    }, 1500);
  };
  return (
    <div className="login-container">
      <header className="app-name">MULAH</header>

      <main className="login-main">
        <h1>Hello,</h1>
        <h1>Welcome!</h1>
        <p>Check your loyalty points & rewards</p>

        <input
          type="tel"
          placeholder="Enter phone number"
          className="phone-input"
          maxLength={15}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]*"
          inputMode="numeric"
        />

        <button className="check-btn" onClick={handleLogin}>
          Check Loyalty Points
        </button>
      </main>

      <footer className="powered-by">
        Powered by{" "}
        <a href="https://mulahrewards.com" target="_blank" rel="noreferrer">
          {" "}
          MulahRewards.com
        </a>
      </footer>

      <ToastContainer />
    </div>
  );
}
