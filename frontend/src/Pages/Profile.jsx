import React from "react";
import "./Profile.css";

export default function Profile({ phone, name, email, birthday }) {
  return (
    <div className="regis-container">
      <header className="profile-container-app-name">MULAH</header>

      <main className="profile-main">
       
        <div className="points-card">
          <h2>Loyalty Points</h2>
          <div className="points-value">1,250 pts</div>
          <p className="points-sub">Keep shopping to earn more rewards!</p>
        </div>

        <div className="profile-card">
          <h1>Your Profile</h1>
          <p>
            <span className="label">Phone:</span> {phone}
          </p>
          <p>
            <span className="label">Name:</span> {name}
          </p>
          <p>
            <span className="label">Email:</span> {email}
          </p>
          <p>
            <span className="label">Birthday:</span> {birthday}
          </p>
        </div>
      </main>

      <footer className="powered-by">
        Powered by{" "}
        <a href="https://mulahrewards.com" target="_blank" rel="noreferrer">
          MulahRewards.com
        </a>
      </footer>
    </div>
  );
}
