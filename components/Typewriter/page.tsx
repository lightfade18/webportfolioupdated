"use client";

// imports
import { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  sentences: string[];
}

const Typewriter: FC<TypewriterProps> = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let interval: NodeJS.Timeout | number;

    const startTyping = () => {
      interval = setInterval(() => {
        currentText = sentences[currentSentenceIndex].substring(
          0,
          currentIndex
        );
        setDisplayText(currentText);
        currentIndex++;

        if (currentIndex > sentences[currentSentenceIndex].length) {
          clearInterval(interval as NodeJS.Timeout);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setIsTyping(true);
              currentIndex = sentences[currentSentenceIndex].length;
              interval = setInterval(() => {
                currentText = sentences[currentSentenceIndex].substring(
                  0,
                  currentIndex
                );
                setDisplayText(currentText);
                currentIndex--;

                if (currentIndex < 0) {
                  clearInterval(interval as NodeJS.Timeout);
                  setIsTyping(false);
                  setCurrentSentenceIndex(
                    (prevIndex) => (prevIndex + 1) % sentences.length
                  );
                  startTyping();
                }
              }, 100);
            }, 1000);
          }, 1000);
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(interval as NodeJS.Timeout);
  }, [sentences, currentSentenceIndex]);

  return (
    <motion.div>
      <motion.span>{displayText}</motion.span>
    </motion.div>
  );
};

export default Typewriter;
