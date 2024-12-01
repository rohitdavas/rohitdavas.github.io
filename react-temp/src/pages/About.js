import React from 'react';
import styled from 'styled-components';
import TypingAnimation from '../components/TypingAnimation';

const AboutSection = styled.section`
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }
`;

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileInfo = styled.div`
  h1 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
  }

  > p {
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const ProfileCardContainer = styled.div`
  width: 100%;
`;

const ProfileCard = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 1.5rem;
  perspective: 1000px;
`;

const ProfileCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
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

const Skills = styled.div`
  margin-top: 2rem;

  h3 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 1rem;
  }
`;

const SkillsGroup = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: ${({ theme }) => theme.link};
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    background: ${({ theme }) => theme.card};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.link};
    }
  }
`;

const EstablishedWork = styled.div`
  margin-top: 2rem;

  h3 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: ${({ theme }) => theme.card};
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateX(5px);
      box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    }
  }
`;

const CodeSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
`;

const skillsData = {
  'Core AI & ML': ['Deep Learning', 'Computer Vision', 'NLP', 'Research'],
  'Frameworks & Tools': ['PyTorch', 'TensorFlow', 'Python', 'C++'],
  '3D & Game Engines': ['Blender', 'Unreal Engine', 'Unity']
};

const establishedWork = [
  'Hand Tracking Product',
  'Instrument Tracking Solution',
  'Full Body Tracking'
];

const About = () => {
  return (
    <AboutSection>
      <Container>
        <AboutGrid>
          <AboutContent>
            <p>I am a passionate AI Engineer with expertise in Deep Learning and Computer Vision. Currently working at Captury GmbH, I specialize in developing cutting-edge AI solutions.</p>
            <p>My journey began at IIT Jammu, where I honed my skills in computer science and developed a strong foundation in machine learning.</p>
          </AboutContent>
          <ProfileSection>
            <ProfileInfo>
              <h1>Rohit Kumar</h1>
              <p>AI Engineer | Deep Learning Engineer | Computer Vision</p>
              <ProfileCardContainer>
                <ProfileCard>
                  <ProfileCardInner>
                    <CardFront>
                      <img src="/images/rohit-in-berlin.jpg" alt="Rohit Kumar" />
                    </CardFront>
                    <CardBack>
                      <img src="/images/coder.png" alt="Code Sample" />
                    </CardBack>
                  </ProfileCardInner>
                </ProfileCard>
              </ProfileCardContainer>
            </ProfileInfo>
            <TypingAnimation />
          </ProfileSection>
          <Skills>
            <h3>Skills</h3>
            {Object.entries(skillsData).map(([category, skills]) => (
              <SkillsGroup key={category}>
                <h4>{category}</h4>
                <ul>
                  {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </SkillsGroup>
            ))}
          </Skills>
          <EstablishedWork>
            <h3>Established Work</h3>
            <ul>
              {establishedWork.map(work => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </EstablishedWork>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
