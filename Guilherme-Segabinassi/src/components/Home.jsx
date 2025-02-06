import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="home-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1>Guilherme Segabinassi</h1>
        <p>
          Desenvolvedor Front-End com paixão por criar experiências incríveis.
        </p>
        <button className="cta-button">Contato</button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
