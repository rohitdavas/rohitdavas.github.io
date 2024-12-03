/**
 * Home.js - Main landing page component
 * This component renders the home page with profile information, skills, and work experience
 * Features include:
 * - Animated profile card with front/back views
 * - Typing animation for dynamic text
 * - Responsive grid layout
 * - Interactive skill tags with particle effects
 */

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import TypingAnimation from '../components/TypingAnimation';
import homeContent from '../data/home-content.json';

// Base layout components
const HomeSection = styled.section`
  padding: 2rem 0;
  margin-top: 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HomeGrid = styled.div`
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/**
 * ProfileSection - Contains the user's profile information and card
 * Displays name, title, and animated profile card
 */
const ProfileSection = styled.div`
  text-align: center;
  position: relative;
`;

const ProfileInfo = styled.div`
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

/**
 * ProfileCard components - Creates a 3D flip card effect
 * Card flips on hover to show additional information
 */
const ProfileCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  perspective: 1000px;
  position: relative;
`;

const ProfileCard = styled.div`
  width: 180px;
  height: 180px;
  perspective: 1000px;
  margin-bottom: 2rem;
`;

const ProfileCardInner = styled.div`
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

const CardSide = styled.div`
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

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const popOut = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

const rain = keyframes`
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100px) rotate(360deg);
    opacity: 0;
  }
`;

const Skills = styled.div`
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

const SkillsGroup = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin: 0;
    padding: 0;
  }
`;

const ParticleContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 1000;
`;

const Particle = styled.div`
  position: absolute;
  width: 1px;
  height: 3px;
  background: ${({ color }) => color};
  border-radius: 50%;
  animation: ${rain} 2s linear forwards;
  opacity: 0.8;
  box-shadow: 0 0 5px ${({ color }) => color};
`;

const SkillItemContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SkillItem = styled.li`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.backgroundAlt || '#f5f5f5'};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  animation: ${({ isPopping }) => isPopping ? popOut : 'none'} 2.0s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.link};
    background: ${({ theme }) => theme.background};
  }
`;

const EstablishedWork = styled.div`
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

const AboutContent = styled.div`
  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
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

const SocialLink = styled.a`
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

const ResumeLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 1rem 0;
  justify-content: center;
  position: relative;
`;

const ResumeTooltip = styled.span`
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

const ResumeLinkWrapper = styled.div`
  position: relative;
  
  &:hover ${ResumeTooltip} {
    opacity: 1;
    visibility: visible;
  }
`;

const ResumeLink = styled.a`
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

const TagContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const TagContent = styled.span`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0.15rem 0.4rem;
  border-radius: 12px;
  font-size: 0.85rem;
  margin: 0.125rem;
  display: inline-block;
  transition: all 0.3s ease;
  transform: ${({ isPopping }) => isPopping ? 'scale(1.1)' : 'scale(1)'};

  &:hover {
    background: ${({ theme }) => theme.cardHover};
    transform: translateY(-2px);
  }
`;

/**
 * Tag Component - Renders interactive skill tags
 * @param {Object} props
 * @param {React.ReactNode} props.children - Tag content
 * @param {boolean} props.isPopping - Controls animation state
 */
const Tag = ({ children, isPopping }) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPopping && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top;

      const newParticles = Array.from({ length: 40 }, () => ({
        ...createParticle(rect.width),
        left: centerX,
        top: centerY,
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isPopping]);

  return (
    <TagContainer ref={containerRef}>
      <TagContent isPopping={isPopping}>{children}</TagContent>
      {particles.map(particle => (
        <ParticleContainer
          key={particle.id}
          style={{
            left: `${particle.left + particle.x}px`,
            top: particle.top + 'px',
          }}
        >
          <Particle
            color={particle.color}
            style={{
              transform: `scale(${particle.scale})`,
              animationDuration: `${2 / particle.speed}s`,
            }}
          />
        </ParticleContainer>
      ))}
    </TagContainer>
  );
};

/**
 * Creates particle effects for skill tag animations
 * @param {number} width - Width of the container
 * @returns {Object} Particle configuration
 */
const createParticle = (width) => {
  const colors = ['#FFD700', '#FF69B4', '#00CED1', '#98FB98', '#DDA0DD'];
  return {
    x: (Math.random() * width) - (width / 2), // spread across skill width
    color: colors[Math.floor(Math.random() * colors.length)],
    id: Math.random(),
    scale: 0.5 + Math.random() * 0.5, // scale between 0.5 and 1
    speed: 1 + Math.random(),
  };
};

/**
 * SkillWithParticles - Wrapper component for skill tags with particle effects
 * @param {Object} props
 * @param {string} props.skill - Skill name to display
 * @param {boolean} props.isPopping - Controls particle animation
 */
const SkillWithParticles = ({ skill, isPopping }) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPopping && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top;

      const newParticles = Array.from({ length: 40 }, () => ({
        ...createParticle(rect.width),
        left: centerX,
        top: centerY,
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isPopping]);

  return (
    <SkillItemContainer ref={containerRef}>
      <SkillItem isPopping={isPopping}>{skill}</SkillItem>
      {particles.map(particle => (
        <ParticleContainer
          key={particle.id}
          style={{
            left: `${particle.left + particle.x}px`,
            top: particle.top + 'px',
          }}
        >
          <Particle
            color={particle.color}
            style={{
              transform: `scale(${particle.scale})`,
              animationDuration: `${2 / particle.speed}s`,
            }}
          />
        </ParticleContainer>
      ))}
    </SkillItemContainer>
  );
};

const popupAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FullScreenImage = styled.div`
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

/**
 * Home Component - Main page component
 * Manages state for:
 * - Typing animation
 * - Skill tag interactions
 * - Profile card animations
 * @returns {React.ReactElement} Rendered home page
 */
const Home = () => {
  const [poppingSkills, setPoppingSkills] = useState(new Set());
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const allSkills = Object.values(homeContent.skills).flat();
      const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
      setPoppingSkills(new Set([randomSkill]));
      
      setTimeout(() => {
        setPoppingSkills(new Set());
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (e, imageSrc) => {
    e.stopPropagation();
    setFullScreenImage(imageSrc);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <HomeSection>
      <Container>
        <HomeGrid>
          <Column>
            <ProfileSection>
              <ProfileCardContainer>
                <SocialLinks>
                  <SocialLink href={homeContent.profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </SocialLink>
                  <SocialLink href={homeContent.profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </SocialLink>
                  <SocialLink href={homeContent.profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </SocialLink>
                  <SocialLink href={`mailto:${homeContent.profile.socialLinks.email}`}>
                    <i className="fas fa-envelope"></i>
                  </SocialLink>
                </SocialLinks>
                <ProfileCard isFlipped={isFlipped} onClick={handleCardClick}>
                  <CardFront>
                    <img
                      src={homeContent.profile.images.front}
                      alt="Rohit in Berlin"
                      onClick={(e) => handleImageClick(e, homeContent.profile.images.front)}
                    />
                  </CardFront>
                  <CardBack>
                    <img
                      src={homeContent.profile.images.back}
                      alt="Coder"
                      onClick={(e) => handleImageClick(e, homeContent.profile.images.back)}
                    />
                  </CardBack>
                </ProfileCard>
              </ProfileCardContainer>
              <ProfileInfo>
                <p>{homeContent.profile.title}</p>
              </ProfileInfo>

              <ResumeLinks>
                <ResumeLinkWrapper>
                  <ResumeLink 
                    href={homeContent.profile.resumes["1-page"]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-file-pdf"></i>
                  </ResumeLink>
                  <ResumeTooltip>1-Page Resume</ResumeTooltip>
                </ResumeLinkWrapper>
                <ResumeLinkWrapper>
                  <ResumeLink 
                    href={homeContent.profile.resumes["2-page"]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-file-pdf"></i>
                  </ResumeLink>
                  <ResumeTooltip>2-Page Resume</ResumeTooltip>
                </ResumeLinkWrapper>
              </ResumeLinks>
            </ProfileSection>

            <AboutContent>
              {homeContent.profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </AboutContent>
          </Column>

          <Column>
            <Skills>
              <h3>Skills</h3>
              {Object.entries(homeContent.skills).map(([category, skills]) => (
                <SkillsGroup key={category}>
                  <h4>{category}</h4>
                  <ul>
                    {skills.map(skill => (
                      <Tag
                        key={skill}
                        isPopping={poppingSkills.has(skill)}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </ul>
                </SkillsGroup>
              ))}
              <SkillsGroup>
                <h4>Hobbies</h4>
                <ul>
                  {homeContent.profile.hobbies.map((hobby, index) => (
                    <Tag
                      key={hobby}
                      isPopping={poppingSkills.has(hobby)}
                    >
                      {hobby}
                    </Tag>
                  ))}
                </ul>
              </SkillsGroup>
            </Skills>
          </Column>

          <Column>
            <TypingAnimation />
            <EstablishedWork>
              <h3>Established Work</h3>
              <ul>
                {homeContent.establishedWork.map((work, index) => (
                  <li key={index}>{work}</li>
                ))}
              </ul>
            </EstablishedWork>
          </Column>
        </HomeGrid>
      </Container>
      {fullScreenImage && (
        <FullScreenImage onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full screen view" />
        </FullScreenImage>
      )}
    </HomeSection>
  );
};

export default Home;
