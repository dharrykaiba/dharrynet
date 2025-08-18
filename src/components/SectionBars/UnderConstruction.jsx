import React from "react";
import "./underConstruction.css";
import constructionImg from "../../assets/undercontruction.png"; // Imagen de construcción (puede ser un icono o ilustración)

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-card">
        <img src={constructionImg} alt="En construcción" className="construction-img" />
        <h2>Página en construcción</h2>
        <p>
          ¡Estamos trabajando en esto! Pronto tendrás acceso a nuestros últimos proyectos.
        </p>
        <div className="construction-effects">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
