import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const TimelineContainer = styled.section`
  padding: 2rem 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.heading};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.link};
  }
`;

const TimelineContent = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  /* Timeline line */
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.border};

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  /* Alternate items */
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  /* Circle on timeline */
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.link};
    border-radius: 50%;
    margin-top: 1.5rem;

    @media (max-width: 768px) {
      left: -5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 2rem;
    
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const TimelineText = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.heading};
    margin-bottom: 0.5rem;
  }

  .date {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }
`;

const VideoThumbnail = styled.a`
  flex: 1;
  position: relative;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    
    img {
      transform: scale(1.05);
    }
    .play-overlay {
      opacity: 1;
    }
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const OverlayContent = styled.div`
  text-align: center;
  color: white;

  i {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const timelineData = [
  {
    title: "AI Software Developer - Captury GmbH",
    date: "January 2022 - Present",
    description: "Contributing to dataset preparations, handpose tracking, and developing prototypes using Unreal Engine, Unity, and Oculus Quest.",
    video: {
      url: "https://youtu.be/p_7iE6UsSLM?si=i9vZnVBG1XIG_IQ0",
      thumbnail: "https://img.youtube.com/vi/p_7iE6UsSLM/maxresdefault.jpg",
      description: "My released work of hand tracking."
    }
  },
  {
    title: "Freelance Developer - Captury GmbH",
    date: "July - December 2021",
    description: "Developed handpose tracking support and various computer vision solutions."
  },
  {
    title: "Deep Learning Intern - Captury GmbH",
    date: "October - December 2020",
    description: "Worked on Fast Background subtraction using neural networks."
  },
  {
    title: "B.Tech in Computer Science - IIT Jammu",
    date: "2017 - 2021",
    description: "Graduated with a strong foundation in computer science and machine learning. Participated in various research projects and competitions."
  }
];

const Timeline = () => {
  return (
    <TimelineContainer>
      <Content>
        <TitleContainer>
          <Title>Professional Timeline</Title>
        </TitleContainer>
        <TimelineContent>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineText>
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <p>{item.description}</p>
              </TimelineText>
              {item.video && (
                <VideoThumbnail href={item.video.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.video.thumbnail} alt="Project Video" />
                  <PlayOverlay className="play-overlay">
                    <OverlayContent>
                      <FontAwesomeIcon icon={faPlay} size="3x" />
                      <p>{item.video.description}</p>
                    </OverlayContent>
                  </PlayOverlay>
                </VideoThumbnail>
              )}
            </TimelineItem>
          ))}
        </TimelineContent>
      </Content>
    </TimelineContainer>
  );
};

export default Timeline;
