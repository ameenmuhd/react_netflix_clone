import React from 'react'
import { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);
  return (
    <div className={`navbar ${scroll && "nav_black"}`}>
        <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className="nav__logo"
            />
            <img
                alt="User logged"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                className="nav__avatar"
            />
    </div>
  )
}

export default Navbar