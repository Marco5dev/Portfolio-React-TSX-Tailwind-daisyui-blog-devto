import React, { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
  speed: number; // Speed in words per minute (WPM)
  pause: number; // Pause duration between sentences in milliseconds
}

const TypingText: React.FC<TypingTextProps> = ({ texts, speed, pause }) => {
  const [displayedText, setDisplayedText] = useState<string>(" ");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const typingSpeed = 60000 / (speed * 5); // Calculate typing speed in milliseconds per character
    const deletingSpeed = typingSpeed / 2; // Deleting speed is faster

    if (isTyping && !isDeleting) {
      if (charIndex < texts[currentTextIndex].length) {
        const typingInterval = setInterval(() => {
          setDisplayedText(
            (prev) => prev + texts[currentTextIndex].charAt(charIndex)
          );
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearInterval(typingInterval);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else if (isDeleting) {
      if (charIndex > 0) {
        const deletingInterval = setInterval(() => {
          setDisplayedText((prev) => {
            const newText =
              prev.substring(0, charIndex - 1) +
              " ";
            return newText;
          });
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);

        return () => clearInterval(deletingInterval);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setDisplayedText(" "); // Reset displayedText to an empty string
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [charIndex, isTyping, isDeleting, texts, currentTextIndex, speed, pause]);

  return <span>{displayedText}</span>;
};

export default TypingText;
