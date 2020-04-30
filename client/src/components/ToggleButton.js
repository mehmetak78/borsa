import React, {Fragment} from 'react';

const ToggleButton = () => {
  return (
      <div className="burger" id={"burger"} onClick={() => {
        console.log("Clicked");
        const nav = document.querySelector(".nav-links");
        nav.classList.toggle(("nav-active"));
        const navLinks = document.querySelectorAll(".nav-links li");
        navLinks.forEach((link,index) => {
          if (link.style.animation) {
            link.style.animation = ""
          }
          else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });
        const burger = document.getElementById("burger");
        burger.classList.toggle("toggle");
      }}>
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
    </div>
  );
};

export default ToggleButton;
