import React, {Fragment} from 'react';

const ToggleButton= () => {
  let opened = false;
  return (
      <div className="nav-btn"  onClick={() => {
        console.log("Clicked");

        const nav_links = document.querySelector(".navbar .nav-links");
        nav_links.classList.toggle(("nav-active"));
        let styles = window.getComputedStyle(nav_links);
        let height = parseFloat(styles['height']) ;

        const mainPage = document.querySelector(".mainPage");

        if (!opened) {
          mainPage.style.transform = "translateY(" + height + "px)";
        }
        else {
          mainPage.style.transform = "translateY(0)";
        }
        opened = !opened;
        // const burger = document.getElementById("burger");
        // burger.classList.toggle("toggle");
      }}>
      <div className="nav-btn-line"></div>
    </div>
  );
};

export default ToggleButton;
