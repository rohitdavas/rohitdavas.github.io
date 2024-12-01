import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import typingData from '../data/typing-sequences.json';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Container = styled.div`
  font-family: 'Fira Code', monospace;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.border};
  height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  /* Hover effect */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    height: 400px;
    overflow-y: auto;

    /* Scrollbar styling */
    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.border};
      border-radius: 3px;
      &:hover {
        background: ${({ theme }) => theme.text};
        opacity: 0.5;
      }
    }
  }

  /* VSCode-like title bar */
  &::before {
    content: '⚡ terminal';
    display: block;
    padding: 0.5rem 1rem;
    margin: -1rem -1rem 1rem -1rem;
    background: ${({ theme }) => theme.background === '#ffffff' ? '#e4e4e4' : '#1e1e1e'};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px 8px 0 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.background === '#ffffff' ? '#424242' : '#cccccc'};
    font-weight: 500;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 1;
  }
`;

const Line = styled.div`
  position: relative;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
  padding-right: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  /* Light blue for code, yellow-orange for output */
  color: ${({ type }) => type === 'output' ? '#f59e0b' : '#3b82f6'};

  &::after {
    content: '';
    position: absolute;
    display: ${({ isTyping }) => isTyping ? 'block' : 'none'};
    width: 0.5rem;
    height: 1rem;
    background: ${({ theme }) => theme.text};
    margin-left: 0.2rem;
    animation: ${blink} 1s infinite;
    opacity: 0.6;
  }
`;

const TypingAnimation = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef(null);
  const { sequences, settings } = typingData;

  useEffect(() => {
    const startTyping = async () => {
      for (let i = 0; i < sequences.length; i++) {
        const sequence = sequences[i];
        setCurrentLine(i);
        setLines(prev => [...prev, { type: sequence.type, content: '' }]);
        
        // Type each character
        for (let j = 0; j <= sequence.content.length; j++) {
          await new Promise(resolve => {
            timeoutRef.current = setTimeout(() => {
              setLines(prev => {
                const newLines = [...prev];
                newLines[i] = {
                  type: sequence.type,
                  content: sequence.content.substring(0, j)
                };
                return newLines;
              });
              resolve();
            }, settings.typingSpeed);
          });
        }

        // Delay between sequences
        await new Promise(resolve => {
          timeoutRef.current = setTimeout(resolve, sequence.delay);
        });
      }
      setIsTyping(false);
    };

    startTyping();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Container>
      {lines.map((line, index) => (
        <Line
          key={index}
          type={line.type}
          isTyping={isTyping && index === currentLine}
        >
          {line.content}
        </Line>
      ))}
    </Container>
  );
};

export default TypingAnimation;
