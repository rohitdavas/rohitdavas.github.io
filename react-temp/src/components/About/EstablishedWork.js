import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.div`
  margin-top: 1.5rem;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.heading};
`;

const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const WorkItem = styled.li`
  background: ${({ theme }) => theme.card};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.link};
    color: ${({ theme }) => theme.link};
  }
`;

const workItems = [
  'Hand Tracking Product',
  'Instrument Tracking Solution',
  'Full Body Tracking'
];

const EstablishedWork = () => {
  return (
    <WorkContainer>
      <Title>Established Work</Title>
      <WorkList>
        {workItems.map(item => (
          <WorkItem key={item}>{item}</WorkItem>
        ))}
      </WorkList>
    </WorkContainer>
  );
};

export default EstablishedWork;
