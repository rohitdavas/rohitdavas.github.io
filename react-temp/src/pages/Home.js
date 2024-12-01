import React from 'react';
import styled from 'styled-components';
import TypingAnimation from '../components/TypingAnimation';

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

  li {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.backgroundAlt || '#f5f5f5'};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-color: ${({ theme }) => theme.link};
      background: ${({ theme }) => theme.background};
    }
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

const skillsData = {
  'Core AI & ML': ['Deep Learning', 'Computer Vision', 'NLP', 'Research'],
  'Frameworks & Tools': ['PyTorch', 'TensorFlow', 'Python', 'C++'],
  'Development': ['Git', 'Docker', 'Linux', 'AWS']
};

const establishedWork = [
  'Developed real-time hand tracking system at Captury GmbH',
  'Created medical instrument tracking solutions',
  'Implemented full-body tracking algorithms',
  'Published research papers in computer vision'
];

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <HomeGrid>
          <Column>
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
            </ProfileSection>
            <AboutContent>
              <p>I am a passionate AI Engineer with expertise in Deep Learning and Computer Vision. Currently working at Captury GmbH, I specialize in developing cutting-edge AI solutions.</p>
              <p>My journey began at IIT Jammu, where I honed my skills in computer science and developed a strong foundation in machine learning.</p>
            </AboutContent>
          </Column>

          <Column>
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
