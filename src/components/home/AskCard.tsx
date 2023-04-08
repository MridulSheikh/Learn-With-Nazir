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
    }
  },
};

function AskCard({ title, body }: props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`p-10  mt-5 bg-white shadow-md overflow-hidden ease-in duration-200 rounded-md`}
    >
      <div className="md:text-2xl font-semibold flex justify-between">
        <p className="md:text-lg">{title}</p>
        <motion.button
          initial={{ rotate: -250 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="transition-all duration-500"
        >
          {!clicked ? (
            <AiOutlinePlus className="font-bold text-primarymain text-xl" />
          ) : (
            <AiOutlineMinus className="font-bold text-primarymain text-xl" />
          )}
        </motion.button>
      </div>
      {/* @ts-ignore */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            variants={paraVariants}
            initial="hidden"
            animate="visible"
            exit={{height : 0}}
            className={`mt-6`}
          >
            {body}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default AskCard;
