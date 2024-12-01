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

const Title = styled.h2`
  color: ${({ theme }) => theme.heading};
  margin-bottom: 2rem;
  text-align: center;
`;

const TimelineContent = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineText = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};

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
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
    .play-overlay {
      opacity: 1;
    }
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
  }
];

const Home = () => {
  return (
    <TimelineContainer>
      <Content>
        <Title>Professional Timeline</Title>
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

export default Home;
