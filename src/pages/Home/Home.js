import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import { ReactComponent as Logo } from "./../../images/LOGO.svg";

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 1000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div className="home">
      <motion.div
        className="logo-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="logo" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
