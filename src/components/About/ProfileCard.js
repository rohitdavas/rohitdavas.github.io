import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 1.5rem;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  background-color: ${({ theme }) => theme.card};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileCard = () => {
  return (
    <Card>
      <CardInner>
        <CardFront>
          <Image src="/images/rohit-in-berlin.jpg" alt="Rohit Kumar" />
        </CardFront>
        <CardBack>
          <Image src="/images/coder.png" alt="Code Sample" />
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default ProfileCard;
