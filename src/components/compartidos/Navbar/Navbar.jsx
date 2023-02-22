import './navBar.scss';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef("");
  const linksActive = useRef("");

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <nav className="navbar-container">
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <a href="/">
            <motion.h2 
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
              opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 },
              }}
              whileHover={{ scale: 1.1 }} className="logo"
            >
              MANCINI ABOGADOS
              <br/>
              <span>Estudio Jurídico Integral</span>
            </motion.h2>
          </a>
        </div>
        <motion.div className="right"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
          opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <div className="links">
            <a className={navbar ? "text-secondary" : "text-white"} href="/">
              Inicio
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/especialidades"
            >
              Especialidades
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/nosotros"
            >
              Nosotros
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/contacto"
            >
              Contacto
            </a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`bi ${navbar ? "text-dark" : "text-white "} ${
              clicked ? "bi-x text-white" : "bi-list"
            }`}
          ></i>
        </motion.div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a href="/">Inicio</a>
            <a href="/especialidades">Especialidades</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


