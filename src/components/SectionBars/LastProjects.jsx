// LastProjects.jsx
import React from "react";
import "./lastProjects.css";
import { projects } from "./links";
import { Link } from "react-router-dom"; // ⬅️ importamos Link

const LastProjects = () => {
  return (
    <div className="last-projects">
      {projects.map((p) => {
        // ✅ Si es proyecto gaming, usamos Link interno
        const isInternal = p.id === "gaming";

        return (
          <div key={p.id} className="project-wrapper">
            {isInternal ? (
              <Link
                to="/fs25" // ruta interna
                className="project-card"
                style={{
                  backgroundImage: `linear-gradient(${p.color}, ${p.color}), url(${p.img})`,
                }}
              >
                <div className="project-content">
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ) : (
              <a
                href={p.link} // enlaces externos siguen igual
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{
                  backgroundImage: `linear-gradient(${p.color}, ${p.color}), url(${p.img})`,
                }}
              >
                <div className="project-content">
                  <h3>{p.title}</h3>
                </div>
              </a>
            )}
            <p className="project-desc">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LastProjects;
