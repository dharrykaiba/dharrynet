// 📌 links.jsx → Archivo compartido para navegación y redes sociales
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaGithub, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

import gamingImg from "../../assets/default.png";
import codeImg from "../../assets/default.png";
import securityImg from "../../assets/default.png";

// 🔗 Links de navegación
export const links = [
  { id: "#", label: "Inicio", icon: <AiOutlineHome /> },
  //{ id: "#about", label: "Sobre mí", icon: <AiOutlineUser /> },
  //{ id: "#experience", label: "Experiencia", icon: <BiBook /> },
  //{ id: "#services", label: "Servicios", icon: <RiServiceLine /> },
  //{ id: "#contact", label: "Contacto", icon: <BiMessageSquareDetail /> },
];

// 🌐 Redes sociales
export const socialLinks = [
  {
    id: "github",
    url: "https://github.com/dharrykaiba",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/dharrynet/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    id: "twitter",
    url: "https://x.com/DharryNet",
    icon: <FaTwitter />,
    label: "Twitter (X)",
  },
  /*{
    id: "facebook",
    url: "https://facebook.com",
    icon: <FaFacebookF />,
    label: "Facebook",
  },*/
];

// 🎯 Proyectos destacados
// links.jsx
export const projects = [
  {
    id: "gaming",
    title: "🎮 Canal Gaming",
    link: "https://youtube.com/@dieseldharry",
    img: gamingImg, // ✅ variable importada
    color: "rgba(250, 0, 0, 0.13)", // rojo sutil semi-transparente
    desc: "Contenido gamer con gameplays, reviews y consejos de videojuegos.",
  },
  {
    id: "github",
    title: "💻 GitHub",
    link: "https://github.com/dharrynet",
    img: codeImg,
    color: "rgba(250, 0, 0, 0.13)",
    desc: "Repositorio con proyectos de desarrollo, código abierto y experimentos.",
  },
  {
    id: "security",
    title: "🔒 Seguridad Electrónica",
    link: "https://youtube.com/security",
    img: securityImg,
    color: "rgba(250, 0, 0, 0.13)",
    desc: "Canal sobre sistemas de seguridad, cámaras, alarmas y automatización.",
  },
];
