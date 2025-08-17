// LastProjects.jsx
import React from "react";
import "./lastProjects.css";
import { projects } from "./links"; // ⬅️ importa desde links.jsx

const LastProjects = () => {
  return (
    <div className="last-projects">
      {projects.map((p) => (
        <div key={p.id} className="project-wrapper">
          <a
            href={p.link}
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
          <p className="project-desc">{p.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default LastProjects;
