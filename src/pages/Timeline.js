import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { timelineData } from '../constants/timelineData';
import {
  TimelineContainer,
  Content,
  TitleContainer,
  Title,
  TimelineContent,
  TimelineItem,
  TimelineText,
  VideoThumbnail,
  PlayOverlay,
  OverlayContent,
  SubTimelineContainer,
  SubTimelineItem,
  AchievementsList
} from '../styles/TimelineStyles';

const Timeline = () => {
  return (
    <TimelineContainer>
      <Content>
        <TitleContainer>
          <Title>My Journey</Title>
        </TitleContainer>
        <TimelineContent>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineText>
                <h3>{item.title}</h3>
                <div className="date">{item.date}</div>
                <p>{item.description}</p>
                {item.subtimeline && (
                  <SubTimelineContainer>
                    {item.subtimeline.map((subItem, subIndex) => (
                      <SubTimelineItem key={subIndex}>
                        <h4>{subItem.title}</h4>
                        <div className="date">{subItem.date}</div>
                        <p>{subItem.description}</p>
                        {subItem.achievements && (
                          <AchievementsList>
                            {subItem.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </AchievementsList>
                        )}
                      </SubTimelineItem>
                    ))}
                  </SubTimelineContainer>
                )}
              </TimelineText>
              {item.video && (
                <VideoThumbnail href={item.video.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.video.thumbnail} alt={item.video.description} />
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
