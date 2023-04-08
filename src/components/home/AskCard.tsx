import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface props {
  title: string;
  body: string;
}

const paraVariants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "auto",
    transition: {
      duration: 0.7,
    },
  },
};

const acordionsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    rotate: -45,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AskCard({ title, body }: props) {
  const [clicked, setClicked] = useState(false);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onClick={() => setClicked(!clicked)}
      className={`p-10  mt-5 bg-white shadow-md overflow-hidden ease-in duration-200 rounded-md`}
    >
      <div className="md:text-2xl font-semibold flex justify-between">
        <p className="md:text-lg transition-all duration-200">{title}</p>
        {clicked ? (
          <motion.button
            variants={acordionsVariants}
            initial="hidden"
            animate="visible"
            className="transition-all duration-500"
          >
            <AiOutlineMinus className="font-bold text-primarymain text-3xl" />
          </motion.button>
        ) : (
          <motion.button
            variants={acordionsVariants}
            initial="hidden"
            animate="visible"
            className="transition-all duration-500"
          >
            <AiOutlinePlus className="font-bold text-primarymain text-3xl" />
          </motion.button>
        )}
      </div>
      {/* @ts-ignore */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            variants={paraVariants}
            initial="hidden"
            animate="visible"
            exit={{ height: 0 }}
            className={`mt-6`}
          >
            {body}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default AskCard;
