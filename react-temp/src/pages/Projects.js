import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
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

const projects = [
  {
    title: "Hand Tracking System",
    description: "Real-time hand tracking system with unprecedented accuracy. Developed at Captury GmbH, this system provides robust tracking in challenging conditions.",
    image: "https://img.youtube.com/vi/p_7iE6UsSLM/maxresdefault.jpg",
    tags: ["Computer Vision", "Deep Learning", "PyTorch", "C++"],
    demoUrl: "https://youtu.be/p_7iE6UsSLM?si=i9vZnVBG1XIG_IQ0",
    githubUrl: null
  },
  {
    title: "Medical Instrument Tracking",
    description: "Precise tracking solution for medical instruments, enabling accurate real-time position tracking in medical environments.",
    image: "https://img.youtube.com/vi/p_7iE6UsSLM/maxresdefault.jpg",
    tags: ["Computer Vision", "Healthcare", "Python", "Deep Learning"],
    demoUrl: null,
    githubUrl: null
  },
  {
    title: "Full Body Tracking",
    description: "Advanced full-body tracking solution using deep learning and computer vision techniques.",
    image: "https://img.youtube.com/vi/p_7iE6UsSLM/maxresdefault.jpg",
    tags: ["Computer Vision", "Deep Learning", "PyTorch", "Real-time"],
    demoUrl: null,
    githubUrl: null
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Content>
        <Title>Featured Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </Tags>
                <Links>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
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
