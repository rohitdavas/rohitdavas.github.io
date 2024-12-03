import styled, { keyframes } from 'styled-components';

// Animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const popOut = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const rain = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(30px) rotate(20deg);
    opacity: 0;
  }
`;

export const popupAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

// Layout Components
export const HomeSection = styled.section`
  padding: 2rem 0;
  margin-top: 2rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Profile Components
export const ProfileSection = styled.div`
  text-align: center;
  position: relative;
`;

export const ProfileInfo = styled.div`
  h1 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: linear-gradient(120deg, ${({ theme }) => theme.link}20 0%, ${({ theme }) => theme.link}20 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
    transition: all 0.3s ease;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
    
    &:hover {
      background-size: 100% 100%;
      color: ${({ theme }) => theme.heading};
    }
  }
`;

// Social Media Components
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: -4rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.link};
  }

  @media (max-width: 767px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;

// Resume Components
export const ResumeTooltip = styled.span`
  position: absolute;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.border};
  pointer-events: none;
  z-index: 10;
`;

export const ResumeLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 1rem 0;
  justify-content: center;
  position: relative;
`;

export const ResumeLinkWrapper = styled.div`
  position: relative;
  
  &:hover ${ResumeTooltip} {
    opacity: 1;
    visibility: visible;
  }
`;

export const ResumeLink = styled.a`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.link};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 0;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.link};
    
    &:before {
      transform: translateX(0);
    }
  }
  
  i {
    font-size: 1rem;
    z-index: 1;
  }
`;

// Card Components
export const ProfileCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  perspective: 1000px;
  position: relative;
`;

export const ProfileCard = styled.div`
  width: 180px;
  height: 180px;
  perspective: 1000px;
  margin-bottom: 2rem;
`;

export const ProfileCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${ProfileCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardFront = styled(CardSide)``;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

// Skills Components
export const Skills = styled.div`
  h3 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.link};
    }
  }
`;

export const SkillsGroup = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const SkillItem = styled.li`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondary};
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  list-style: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  white-space: nowrap;
  position: relative;
  overflow: visible;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    background: ${({ theme }) => theme.cardHover};
  }
`;

export const ParticleContainer = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const Particle = styled.div`
  position: absolute;
  animation: ${rain} 0.6s ease-out forwards;
  pointer-events: none;
`;

export const TagContent = styled.span`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0.15rem 0.4rem;
  border-radius: 12px;
  display: inline-block;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Content Components
export const AboutContent = styled.div`
  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const EstablishedWork = styled.div`
  h3 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.link};
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  li {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.secondary};
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    margin-bottom: 0.75rem;
    text-align: left;
    display: inline-block;
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px ${({ theme }) => theme.shadow};
      border-color: ${({ theme }) => theme.link};
      background: ${({ theme }) => theme.cardHover};
    }
  }
`;

// Full Screen Image Component
export const FullScreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-out;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: ${popupAnimation} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:before {
    content: '×';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
