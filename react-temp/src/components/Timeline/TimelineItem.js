import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Item = styled.div`
  display: flex;
  margin-bottom: 2rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    ${({ hasVideo }) => hasVideo && `
      .timeline-content {
        text-align: right;
      }
    `}
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    
    &:nth-child(even) {
      flex-direction: column;
      
      .timeline-content {
        text-align: left;
      }
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.primary};
    border: 3px solid ${({ theme }) => theme.link};
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${({ position }) => position === 'left' ? 'right: -40px;' : 'left: -40px;'}
  }

  @media (max-width: 768px) {
    width: 100%;
    
    &::before {
      left: -40px;
    }
  }
`;

const VideoThumbnail = styled.div`
  flex: 1;
  max-width: 300px;
  position: relative;
  margin: ${({ position }) => position === 'left' ? '0 2rem 0 0' : '0 0 0 2rem'};

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem 0 0 0;
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
  border-radius: 8px;

  ${VideoThumbnail}:hover & {
    opacity: 1;
  }
`;

const Description = styled.p`
  color: white;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const TimelineItem = ({ content, videoUrl, thumbnailSrc, position, description }) => {
  return (
    <Item hasVideo={!!videoUrl}>
      <Content position={position} className="timeline-content">
        {content}
      </Content>
      {videoUrl && (
        <VideoThumbnail position={position}>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailSrc} alt="Video thumbnail" />
            <PlayOverlay>
              <div>
                <FontAwesomeIcon icon={faPlay} style={{ color: 'white', fontSize: '2rem' }} />
                {description && <Description>{description}</Description>}
              </div>
            </PlayOverlay>
          </a>
        </VideoThumbnail>
      )}
    </Item>
  );
};

export default TimelineItem;
