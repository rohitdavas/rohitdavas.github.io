import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { timelineData } from '../constants/timelineData';

const ProjectsContainer = styled.section`
  padding: 2rem 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.heading};
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.cardSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.heading};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.link}15;
  color: ${({ theme }) => theme.link};
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.link}30;
`;

const StatusTag = styled(Tag)`
  background: ${({ theme }) => theme.success}15;
  color: ${({ theme }) => theme.success};
  border-color: ${({ theme }) => theme.success}30;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

const Projects = () => {
  // Extract projects from timelineData
  const projects = timelineData.reduce((acc, timelineItem) => {
    if (timelineItem.subtimeline) {
      const projectsFromTimeline = timelineItem.subtimeline.map(subItem => ({
        title: subItem.title,
        description: subItem.description,
        image: subItem.video?.thumbnail || subItem.image|| null,
        tags: subItem.tags || [],
        status: subItem.status || null,
        demoUrl: subItem.video?.url || null,
        docsUrl: subItem.links?.[0]?.url || null
      }));
      return [...acc, ...projectsFromTimeline];
    }
    return acc;
  }, []);

  return (
    <ProjectsContainer>
      <Content>
        <Title>Featured Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              {project.image && (
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
              )}
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                  {project.status && (
                    <StatusTag>{project.status}</StatusTag>
                  )}
                </Tags>
                <Links>
                  {project.docsUrl && (
                    <Link href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faPlay} />
                    </Link>
                  )}
                </Links>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;
