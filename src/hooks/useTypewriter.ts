import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const useTypewriter = ({
  words,
  speed = 100,
  delay = 0,
  deleteSpeed = 50,
  pauseTime = 2000
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !isStarted) {
      const delayTimer = setTimeout(() => {
        setIsStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else if (delay === 0) {
      setIsStarted(true);
    }
  }, [delay, isStarted]);

  useEffect(() => {
    if (!isStarted) return;

    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime, isStarted]);

  return currentText;
};