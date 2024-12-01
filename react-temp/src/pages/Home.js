import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import TypingAnimation from '../components/TypingAnimation';
import homeContent from '../data/home-content.json';

const HomeSection = styled.section`
  padding: 2rem 0;
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

const ProfileSection = styled.div`
  text-align: center;
`;

const ProfileInfo = styled.div`
  h1 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
  }
`;

const ProfileCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  margin-bottom: 1.2rem;

  h4 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
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
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  li {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.backgroundAlt || '#f5f5f5'};
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
    text-align: center;
    flex: 1 1 calc(50% - 1rem);
    min-width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      border-color: ${({ theme }) => theme.link};
      background: ${({ theme }) => theme.background};
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
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
`;

const WorkItem = styled.li`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const HobbyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const HobbyTag = styled.span`
  background: ${({ theme }) => theme.backgroundAlt || '#f5f5f5'};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.link};
    background: ${({ theme }) => theme.background};
  }
`;

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

const Home = () => {
  const [poppingSkills, setPoppingSkills] = useState(new Set());

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

  return (
    <HomeSection>
      <Container>
        <HomeGrid>
          <Column>
            <ProfileSection>
              <ProfileInfo>
                <h1>{homeContent.profile.name}</h1>
                <p>{homeContent.profile.title}</p>
                <ProfileCardContainer>
                  <ProfileCard>
                    <ProfileCardInner>
                      <CardFront>
                        <img src={homeContent.profile.images.front} alt={homeContent.profile.name} />
                      </CardFront>
                      <CardBack>
                        <img src={homeContent.profile.images.back} alt="Code Sample" />
                      </CardBack>
                    </ProfileCardInner>
                  </ProfileCard>
                </ProfileCardContainer>
              </ProfileInfo>
            </ProfileSection>
            <AboutContent>
              {homeContent.profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </AboutContent>
            <HobbyTags>
              {homeContent.profile.hobbies.map((hobby, index) => (
                <HobbyTag key={index}>
                  {hobby}
                </HobbyTag>
              ))}
            </HobbyTags>
          </Column>

          <Column>
            <Skills>
              <h3>Skills</h3>
              {Object.entries(homeContent.skills).map(([category, skills]) => (
                <SkillsGroup key={category}>
                  <h4>{category}</h4>
                  <ul>
                    {skills.map(skill => (
                      <SkillWithParticles
                        key={skill}
                        skill={skill}
                        isPopping={poppingSkills.has(skill)}
                      />
                    ))}
                  </ul>
                </SkillsGroup>
              ))}
            </Skills>

            <EstablishedWork>
              <h3>Established Work</h3>
              <ul>
                {homeContent.establishedWork.map((work, index) => (
                  <li key={index}>{work}</li>
                ))}
              </ul>
            </EstablishedWork>
          </Column>

          <Column>
            <TypingAnimation />
          </Column>
        </HomeGrid>
      </Container>
    </HomeSection>
  );
};

export default Home;
