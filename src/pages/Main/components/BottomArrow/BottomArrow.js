import React from 'react';
import { motion } from "framer-motion";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BottomArrow = () => {
    return (
        <div className="bottom-arrow">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.div>
        </div>
    );
};

export default BottomArrow;