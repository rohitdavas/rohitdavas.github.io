import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
  SubTimelineScroll,
  SubTimelineItem,
  SubTimelineControls,
  ScrollButton,
  AchievementsList,
  OutlineContainer,
  OutlineTitle,
  OutlineList,
  OutlineItem
} from '../styles/TimelineStyles';

const Timeline = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState({});
  const timelineRefs = useRef([]);
  const scrollContainerRefs = useRef([]);

  useEffect(() => {
    const checkScrollability = () => {
      const newCanScrollRight = {};
      scrollContainerRefs.current.forEach((container, index) => {
        if (container) {
          // Add a small threshold (1px) to account for rounding errors
          const canScroll = Math.ceil(container.scrollLeft) < (container.scrollWidth - container.clientWidth - 1);
          newCanScrollRight[index] = canScroll;
        }
      });
      setCanScrollRight(newCanScrollRight);
    };

    // Initial check with a slight delay to ensure proper layout
    setTimeout(checkScrollability, 100);

    // Add scroll event listeners to each container
    scrollContainerRefs.current.forEach((container, index) => {
      if (container) {
        const handleScroll = () => {
          // Add a small threshold (1px) to account for rounding errors
          const canScroll = Math.ceil(container.scrollLeft) < (container.scrollWidth - container.clientWidth - 1);
          setCanScrollRight(prev => ({...prev, [index]: canScroll}));
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
      }
    });

    // Check on window resize with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkScrollability, 100);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      timelineRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop <= scrollPosition && 
            (index === timelineRefs.current.length - 1 || 
             timelineRefs.current[index + 1].offsetTop > scrollPosition)) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    timelineRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  };

  const handleScroll = (index, direction) => {
    const container = scrollContainerRefs.current[index];
    if (!container) return;
    
    const scrollAmount = 350;
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <TimelineContainer>
      <OutlineContainer>
        <OutlineTitle>Timeline Overview</OutlineTitle>
        <OutlineList>
          {timelineData.map((item, index) => (
            <OutlineItem
              key={index}
              active={activeSection === index}
              onClick={() => scrollToSection(index)}
            >
              {item.title}
              <span className="date">{item.date}</span>
            </OutlineItem>
          ))}
        </OutlineList>
      </OutlineContainer>

      <Content>
        <TitleContainer>
          <Title>My Journey</Title>
        </TitleContainer>
        <TimelineContent>
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              ref={el => timelineRefs.current[index] = el}
            >
              <TimelineText>
                <h3>{item.title}</h3>
                <div className="date">{item.date}</div>
                <p>{item.description}</p>
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
                {item.subtimeline && (
                  <SubTimelineContainer className={canScrollRight[index] ? 'canScrollRight' : ''}>
                    <div className="timeline-dots" />
                    {canScrollRight[index] && (
                      <SubTimelineControls>
                        <ScrollButton 
                          onClick={() => handleScroll(index, 'left')}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </ScrollButton>
                        <ScrollButton 
                          onClick={() => handleScroll(index, 'right')}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </ScrollButton>
                      </SubTimelineControls>
                    )}
                    <SubTimelineScroll 
                      ref={el => scrollContainerRefs.current[index] = el}
                    >
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
                    </SubTimelineScroll>
                  </SubTimelineContainer>
                )}
              </TimelineText>
            </TimelineItem>
          ))}
        </TimelineContent>
      </Content>
    </TimelineContainer>
  );
};

export default Timeline;
