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
  OutlineItem,
  LinksContainer,
  LinkItem,
  VideoContainer,
  VideoItem,
  YouTubeEmbed,
  TypeTag,
  LocationText
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
                {item.location && <LocationText>{item.location}</LocationText>}
                <p>{item.description}</p>
                {item.links && item.links.length > 0 && (
                  <LinksContainer>
                    {item.links.map((link, linkIndex) => (
                      <LinkItem 
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                      >
                        {link.text}
                      </LinkItem>
                    ))}
                  </LinksContainer>
                )}
                {item.subtimeline && (
                  <SubTimelineContainer className={canScrollRight[index] ? 'canScrollRight' : ''}>
                    <div className="timeline-dots" />
                    {canScrollRight[index] && (
                      <SubTimelineControls>
                        <ScrollButton onClick={() => handleScroll(index, 'left')}>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </ScrollButton>
                        <ScrollButton onClick={() => handleScroll(index, 'right')}>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </ScrollButton>
                      </SubTimelineControls>
                    )}
                    <SubTimelineScroll ref={el => scrollContainerRefs.current[index] = el}>
                      {item.subtimeline.map((subItem, subIndex) => (
                        <SubTimelineItem key={subIndex}>
                          <h4>{subItem.title}</h4>
                          {subItem.date && <div className="date">{subItem.date}</div>}
                          <p>{subItem.description}</p>
                          {subItem.type && <TypeTag>{subItem.type}</TypeTag>}
                          {subItem.status && (
                            <div className="status">Status: {subItem.status}</div>
                          )}
                          {subItem.links && subItem.links.length > 0 && (
                            <LinksContainer>
                              {subItem.links.map((link, linkIndex) => (
                                <LinkItem 
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(link.url, '_blank', 'noopener,noreferrer');
                                  }}
                                >
                                  {link.text}
                                </LinkItem>
                              ))}
                            </LinksContainer>
                          )}
                          {subItem.achievements && (
                            <AchievementsList>
                              {subItem.achievements.map((achievement, achIndex) => (
                                <li key={achIndex}>{achievement}</li>
                              ))}
                            </AchievementsList>
                          )}
                          {subItem.video && (
                            <VideoContainer>
                              {Array.isArray(subItem.video) 
                                ? subItem.video.map((vid, vidIndex) => (
                                    vid.url.includes('youtube.com') ? (
                                      <YouTubeEmbed
                                        key={vidIndex}
                                        src={vid.url.replace('watch?v=', 'embed/')}
                                        title={vid.description || 'YouTube Video'}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      />
                                    ) : (
                                      <VideoItem 
                                        key={vidIndex}
                                        href={vid.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                        {vid.thumbnail && (
                                          <img src={vid.thumbnail} alt={vid.description || 'Video thumbnail'} />
                                        )}
                                        <PlayOverlay className="play-overlay">
                                          <OverlayContent>
                                            <FontAwesomeIcon icon={faPlay} size="2x" />
                                            <p>{vid.description || 'Watch Video'}</p>
                                          </OverlayContent>
                                        </PlayOverlay>
                                      </VideoItem>
                                    )
                                  ))
                                : (subItem.video.url.includes('youtube.com') ? (
                                    <YouTubeEmbed
                                      src={subItem.video.url.replace('watch?v=', 'embed/')}
                                      title={subItem.video.description || 'YouTube Video'}
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  ) : (
                                    <VideoItem 
                                      href={subItem.video.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                    >
                                      {subItem.video.thumbnail && (
                                        <img src={subItem.video.thumbnail} alt={subItem.video.description || 'Video thumbnail'} />
                                      )}
                                      <PlayOverlay className="play-overlay">
                                        <OverlayContent>
                                          <FontAwesomeIcon icon={faPlay} size="2x" />
                                          <p>{subItem.video.description || 'Watch Video'}</p>
                                        </OverlayContent>
                                      </PlayOverlay>
                                    </VideoItem>
                                  )
                                )
                              }
                            </VideoContainer>
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
