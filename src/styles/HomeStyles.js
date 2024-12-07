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

  @media (max-width: 480px) {
    padding: 1rem 0;
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
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
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 480px) {
    padding: 0.5rem 0;
    gap: 1rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 600px;

  h1 {
    color: ${({ theme }) => theme.heading};
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    background: linear-gradient(120deg, ${({ theme }) => theme.link}20 0%, ${({ theme }) => theme.link}20 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
    transition: all 0.3s ease;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.15rem 0.4rem;
    }
    
    &:hover {
      background-size: 100% 100%;
      color: ${({ theme }) => theme.heading};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    gap: 1.25rem;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    max-width: 300px;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.link};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 160px;
  }

  @media (max-width: 480px) {
    max-width: 140px;
  }
`;

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
export const ProfileCard = styled.div`
  width: 180px;
  height: 180px;
  perspective: 1000px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    margin-bottom: 1rem;
  }
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
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  max-height: 300px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  .hover-instructions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0.5rem;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.cardSecondary || theme.card} 70%
    );
    color: ${({ theme }) => theme.link};
    font-size: 0.9rem;
    opacity: 0.8;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: left;

    &.truncate {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.4;
      &.truncate {
        -webkit-line-clamp: 3;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    max-height: 250px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
    max-height: 200px;
  }
`;

export const AboutModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  .modal-content {
    background: ${({ theme }) => theme.cardSecondary || theme.card};
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    border-radius: 12px;
    padding: 2rem;
    position: relative;
    overflow-y: auto;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.3s ease 0.1s forwards;

    @media (max-width: 768px) {
      padding: 1.5rem;
      width: 95%;
    }

    @media (max-width: 480px) {
      padding: 1.25rem;
      border-radius: 8px;
    }
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: left;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
