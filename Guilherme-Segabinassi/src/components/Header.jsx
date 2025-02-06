import React from "react";
import { motion } from "framer-motion"; // Importe o motion
import "./Header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }} // Inicia invisível e 50px acima
      animate={{ opacity: 1, y: 0 }} // Animação para aparecer e descer
      transition={{ duration: 0.5 }} // Duração da animação
    >
      <h1>G.S</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
