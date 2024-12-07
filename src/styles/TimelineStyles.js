import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px ${({ theme }) => theme.link}40;
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.link}60;
  }
  100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.link}40;
  }
`;

const arrowPulse = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0.3;
  }
  50% {
    transform: translateX(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0.3;
  }
`;

// Shared styles
const fadeOutOnParentHover = css`
  transition: all 0.5s ease;
  .timeline-content:hover & {
    opacity: 1.0;
    transform: scale(0.98);
    
    &:hover {
      opacity: 1;
      filter: none;
      transform: scale(1);
    }
  }
`;

export const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-out;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.heading};
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.link}00 0%,
      ${({ theme }) => theme.link} 50%,
      ${({ theme }) => theme.link}00 100%
    );
  }
`;

export const TimelineContent = styled.div.attrs({ className: 'timeline-content' })`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.border}00 0%,
      ${({ theme }) => theme.border} 15%,
      ${({ theme }) => theme.border} 85%,
      ${({ theme }) => theme.border}00 100%
    );

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`;

export const TimelineText = styled.div`
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow}40;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.link}10 0%,
      ${({ theme }) => theme.background}00 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.shadow}60;

    &::before {
      opacity: 1;
    }
  }

  h3 {
    color: ${({ theme }) => theme.heading};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
  }

  .date {
    color: ${({ theme }) => theme.link};
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.2rem 1rem;
    background: ${({ theme }) => theme.link}20;
    border-radius: 20px;
  }

  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const LocationText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}aa;
  margin-top: 0.25rem;
  font-style: italic;
`;

export const SubTimelineContainer = styled.div.attrs({ className: 'subtimeline-container' })`
  width: 100%;
  margin-top: 1rem;
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  /* Only show arrow when can scroll right */
  &.canScrollRight::after {
    content: '→';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.link};
    font-size: 1.2rem;
    opacity: 0.8;
    animation: ${arrowPulse} 2s infinite ease-in-out;
    pointer-events: none;
    z-index: 10;
    
    @media (max-width: 768px) {
      right: 0.5rem;
      font-size: 1rem;
      background: ${({ theme }) => theme.cardSecondary || theme.card}dd;
      padding: 0.5rem;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const SubTimelineScroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  width: 100%;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 0.25rem;
  }

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubTimelineItem = styled.div`
  flex: 0 0 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  margin-right: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.card} 0%,
      ${({ theme }) => theme.card}95 70%,
      ${({ theme }) => theme.card}90 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px ${({ theme }) => theme.shadow}30;
  }

  h4 {
    color: ${({ theme }) => theme.heading};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .date {
    color: ${({ theme }) => theme.link};
    font-size: 0.8rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
`;

export const VideoThumbnail = styled.a`
  display: block;
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 1.5rem auto 0.5rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 15px ${({ theme }) => theme.shadow}20;
  transition: all 0.3s ease;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.link}10 0%,
      ${({ theme }) => theme.card}00 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.shadow}30;
    
    &::before {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
    
    .play-overlay {
      opacity: 1;
      backdrop-filter: blur(2px);
    }
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto 0;
  }
`;

export const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const OverlayContent = styled.div`
  text-align: center;
  color: white;
  padding: 0.5rem;
  transform: translateY(10px);
  transition: transform 0.3s ease;

  ${VideoThumbnail}:hover & {
    transform: translateY(0);
  }

  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  p {
    font-size: 0.8rem;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const SubTimelineControls = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 1rem;
  top: -2rem;
  z-index: 3;
`;

export const ScrollButton = styled.button`
  background: ${({ theme }) => theme.card};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow}40;

  &:hover {
    background: ${({ theme }) => theme.link};
    color: white;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: ${({ theme }) => theme.card};
      color: ${({ theme }) => theme.text};
      transform: none;
    }
  }
`;

export const AchievementsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.2rem;
  list-style: none;
  transition: all 0.3s ease;

  li {
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    position: relative;
    padding-left: 1.5rem;
    transition: transform 0.2s ease;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.link};
      transition: transform 0.2s ease;
    }
    
    &:hover::before {
      transform: translateX(5px);
    }
  }
`;

export const OutlineContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 20px;
  max-width: 200px;
  background: ${({ theme }) => theme.card}CC;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow}20;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const OutlineTitle = styled.h3`
  color: ${({ theme }) => theme.heading};
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border}40;
`;

export const OutlineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OutlineItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  color: ${({ theme, active }) => active ? theme.link : theme.text};
  background: ${({ active, theme }) => active ? theme.link + '20' : 'transparent'};
  transform-origin: left;
  
  &:hover {
    color: ${({ theme }) => theme.link};
    transform: translateX(5px);
  }

  .date {
    font-size: 0.7rem;
    opacity: 0.7;
    margin-left: 0.5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.link}20;
  color: ${({ theme }) => theme.link} !important;
  border-radius: 15px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 1;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.link}40;
    transform: translateY(-2px);
    text-decoration: none;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const VideoItem = styled(VideoThumbnail)`
  flex: 1;
  min-width: 200px;
  max-width: 300px;
`;

export const TypeTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.5rem;
  background: ${({ theme }) => theme.link}15;
  color: ${({ theme }) => theme.link};
  border-radius: 12px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  border: 1px solid ${({ theme }) => theme.link}30;
`;
