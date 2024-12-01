import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const SkillsGroup = styled.div`
  margin-bottom: 0.8rem;
`;

const GroupTitle = styled.h4`
  color: ${({ theme }) => theme.link};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SkillItem = styled.li`
  background: ${({ theme }) => theme.card};
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.link};
  }
`;

const skillsData = {
  'Core AI & ML': ['Deep Learning', 'Computer Vision', 'NLP', 'Research'],
  'Frameworks & Tools': ['PyTorch', 'TensorFlow', 'Python', 'C++'],
  '3D & Game Engines': ['Blender', 'Unreal Engine', 'Unity']
};

const Skills = () => {
  return (
    <SkillsContainer>
      {Object.entries(skillsData).map(([category, skills]) => (
        <SkillsGroup key={category}>
          <GroupTitle>{category}</GroupTitle>
          <SkillsList>
            {skills.map(skill => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SkillsGroup>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
