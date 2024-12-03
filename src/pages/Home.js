/**
 * Home.js - Main landing page component
 * This component renders the home page with profile information, skills, and work experience
 */
import React, { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import TypingAnimation from '../components/TypingAnimation';
import homeContent from '../data/home-content.json';
import {
  ANIMATION_DURATION,
  PARTICLE_COLORS,
  PARTICLE_CONFIG,
  TRIGGER_ANIMATION_INTERVAL
} from '../constants/animations';
import {
  HomeSection,
  Container,
  HomeGrid,
  Column,
  ProfileSection,
  ProfileInfo,
  ProfileCardContainer,
  ProfileCard,
  ProfileCardInner,
  CardFront,
  CardBack,
  Skills,
  SkillsGroup,
  ParticleContainer,
  Particle,
  SkillItem,
  TagContent,
  SocialLinks,
  SocialLink,
  ResumeLinks,
  ResumeLinkWrapper,
  ResumeLink,
  ResumeTooltip,
  AboutContent,
  EstablishedWork,
  FullScreenImage
} from '../styles/HomeStyles';

/**
 * Creates particle effect configuration
 * @param {number} width - Container width for particle positioning
 * @returns {Object} Particle configuration object
 */
const createParticle = (width) => ({
  left: Math.random() * width,
  top: Math.random() * 20,  // Add some random vertical offset
  size: Math.random() * (PARTICLE_CONFIG.MAX_SIZE - PARTICLE_CONFIG.MIN_SIZE) + PARTICLE_CONFIG.MIN_SIZE,
  color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
});

/**
 * Tag Component - Renders interactive skill tags with animation
 */
const Tag = memo(({ children, isPopping }) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPopping && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setParticles(Array.from({ length: PARTICLE_CONFIG.COUNT }, () => createParticle(width)));
      
      const timer = setTimeout(() => {
        setParticles([]);
      }, ANIMATION_DURATION);
      
      return () => clearTimeout(timer);
    }
  }, [isPopping]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <TagContent>{children}</TagContent>
      {
        particles.map((particle, index) => (
          <ParticleContainer key={index}>
            <Particle style={{left: `${particle.left}px`, top: `${particle.top}px`}} color={particle.color} size={particle.size}/>
          </ParticleContainer>
          )
        )
      } 
    </div>
  );
}
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  isPopping: PropTypes.bool.isRequired
};

/**
 * SkillWithParticles - Wrapper component for skill tags with particle effects
 */
const SkillWithParticles = memo(({ skill, isPopping }) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPopping && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      
      // Create particles distributed across the tag width
      const newParticles = Array.from({ length: PARTICLE_CONFIG.COUNT }, () => ({
        left: Math.random() * width,
        top: -5, // Start slightly above the tag
        size: Math.random() * (PARTICLE_CONFIG.MAX_SIZE - PARTICLE_CONFIG.MIN_SIZE) + PARTICLE_CONFIG.MIN_SIZE,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
      }));
      
      setParticles(newParticles);
      
      const timer = setTimeout(() => {
        setParticles([]);
      }, ANIMATION_DURATION);
      
      return () => clearTimeout(timer);
    }
  }, [isPopping]);

  return (
    <SkillItem ref={containerRef}>
      {skill}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {particles.map((particle, index) => (
          <Particle
            key={index}
            style={{
              position: 'absolute',
              left: `${particle.left}px`,
              top: `${particle.top}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              borderRadius: '50%'
            }}
          />
        ))}
      </div>
    </SkillItem>
  );
});

SkillWithParticles.propTypes = {
  skill: PropTypes.string.isRequired,
  isPopping: PropTypes.bool.isRequired
};

/**
 * Home Component - Main page component
 */
const Home = () => {
  const [poppingSkills, setPoppingSkills] = useState(new Set());
  const [fullScreenImage, setFullScreenImage] = useState(null);
  
  const allSkills = useMemo(() => {
    return Object.values(homeContent.skills || {}).flat();
  }, []);

  // Randomly trigger animations
  useEffect(() => {
    const triggerRandomAnimation = () => {
      const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
      
      setPoppingSkills(prev => {
        const newSet = new Set(prev);
        newSet.add(randomSkill);
        return newSet;
      });

      setTimeout(() => {
        setPoppingSkills(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomSkill);
          return newSet;
        });
      }, ANIMATION_DURATION);
    };

    // Trigger animation every interval 
    const interval = setInterval(triggerRandomAnimation, TRIGGER_ANIMATION_INTERVAL);
    return () => clearInterval(interval);
  }, [allSkills]);

  const handleSkillClick = useCallback((skill) => {
    console.log('Skill clicked:', skill);
    setPoppingSkills(prev => {
      const newSet = new Set(prev);
      newSet.add(skill);
      return newSet;
    });
    
    setTimeout(() => {
      setPoppingSkills(prev => {
        const newSet = new Set(prev);
        newSet.delete(skill);
        return newSet;
      });
    }, ANIMATION_DURATION);
  }, []);

  const handleImageClick = useCallback((imageSrc) => {
    setFullScreenImage(imageSrc);
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
              </ProfileInfo>
              
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
                <ProfileCard>
                  <ProfileCardInner>
                    <CardFront>
                      <img 
                        src={homeContent.profile.images.front} 
                        alt="Profile"
                        onClick={() => handleImageClick(homeContent.profile.images.front)}
                      />
                    </CardFront>
                    <CardBack>
                      <img 
                        src={homeContent.profile.images.back} 
                        alt="Alternate Profile"
                        onClick={() => handleImageClick(homeContent.profile.images.back)}
                      />
                    </CardBack>
                  </ProfileCardInner>
                </ProfileCard>
              </ProfileCardContainer>
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
                      <SkillWithParticles
                        key={skill}
                        skill={skill}
                        isPopping={poppingSkills.has(skill)}
                        onClick={() => handleSkillClick(skill)}
                      />
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

export default memo(Home);
