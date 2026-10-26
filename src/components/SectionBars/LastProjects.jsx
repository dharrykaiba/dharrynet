
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./lastProjects.css";
import { projects } from "./links";

const LastProjects = () => {
  const { lang } = useParams();
  const language = lang === "en" ? "en" : "es";

  return (
    <div className="last-projects">
      {projects.map((project) => {
        const cardStyle = {
          backgroundImage: `linear-gradient(${project.color}, ${project.color}), url(${project.img})`,
        };

        return (
          <div key={project.id} className="project-wrapper">
            {project.id === "gaming" ? (
              <Link
                to={`/${language}/fs25`}
                className="project-card"
                style={cardStyle}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                </div>
              </Link>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={cardStyle}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                </div>
              </a>
            )}

            <p className="project-desc">{project.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LastProjects;
