import React, { useState } from "react";
import "./navbar.css";
import { links } from "./links"; // importamos el array compartido

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");

  return (
    <nav>
      {links.map(({ id, icon, label }) => (
        <a
          key={id}
          href={id}
          aria-label={label}
          onClick={() => setActiveNavbar(id)}
          className={activeNavbar === id ? "active" : ""}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
